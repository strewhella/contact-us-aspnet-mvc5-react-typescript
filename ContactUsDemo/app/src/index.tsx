import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import * as Redux from "redux";
import { combineForms } from "react-redux-form";
import { Provider } from "react-redux";

const store = Redux.createStore(
    combineForms({
        contactUs: {
            name: "",
            email: "",
            message: ""
        }
    })
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root") as HTMLElement
);
