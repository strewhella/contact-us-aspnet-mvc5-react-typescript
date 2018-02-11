import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import "whatwg-fetch";
import * as Redux from "redux";
import { createForms } from "react-redux-form";
import { Provider } from "react-redux";
import { rootReducer } from "./state/rootReducer";
import { httpMiddleware } from "./state/httpMiddleware";

const store = Redux.createStore(
    {
        app: rootReducer,
        ...createForms({
            contactUs: {
                name: "",
                email: "",
                message: ""
            }
        })
    },
    Redux.applyMiddleware(httpMiddleware as any)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root") as HTMLElement
);
