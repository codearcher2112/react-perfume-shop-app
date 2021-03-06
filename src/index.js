import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import Context from "./context/Context";

ReactDOM.render(
    <React.StrictMode>
        <Context>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Context>
    </React.StrictMode>,
    document.getElementById("root")
);
