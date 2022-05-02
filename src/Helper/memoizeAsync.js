import axios from "axios";

const memoizeAsync = () => {
    const cache = {};
    const queue = {};

    // so this is a closure cannot access cache
    return (config, callback) => {
        const { url, key, duration } = config;

        if (cache.hasOwnProperty(key)) {
            console.log("this key was in cache :", key);
            callback({ data: cache[key].data, loading: false, error: false });
            return;
        }

        //here we set the query up so then we do not make multiple requests
        if (!queue.hasOwnProperty(key)) {
            queue[key] = [callback];
        } else {
            // if it does exist push the call back
            queue[key].push(callback);
            return;
        }

        axios({
            method: "GET",
            url: url,
        })
            .then((res) => {
                cache[key] = { data: res.data, duration };
                for (let cb of queue[key]) {
                    cb({ data: cache[key].data, loading: false, error: false });
                }

                // clean up for duration
                setTimeout(() => {
                    console.log("clearing out: ", key);
                    delete cache[key];
                    delete queue[key];
                }, duration);

                //clean up
                delete queue[key];
                return;
            })
            .catch(() => {
                callback({ data: [], loading: false, error: true });
                return;
            });
    };
};

export default memoizeAsync();
