const generateHash = (args, separator = "||") => {
    const stringifiedArgs = args.map((arg) =>
        arg === "object" ? JSON.stringify(arg) : arg
    );

    return stringifiedArgs.join(separator);
};

export default generateHash;
