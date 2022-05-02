import React from "react";
import ReactDOM from "react-dom/client";
import App from "./cocktails_tutorial/App";

import { AppProvider } from "./cocktails_tutorial/Helper/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>
);
