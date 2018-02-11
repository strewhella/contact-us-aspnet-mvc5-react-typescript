import * as Redux from "redux";
import { AppState } from "./AppState";
import { ActionCreators } from "./ActionCreators";

let actions = new ActionCreators();

export const httpMiddleware = (store: Redux.Store<AppState>) => (
    next: Function
) => (action: Redux.AnyAction) => {
    if (action.method && action.url) {
        fetch("http://localhost:49701" + action.url, {
            method: action.method,
            body: JSON.stringify(action.body),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
            .then((res: Response) => {
                if (!res.ok) throw new Error();

                let body = null;
                try {
                    body = res.json();
                } catch (err) {}

                return body;
            })
            .then((body: any) => {
                store.dispatch(actions.httpSuccess(action.type, body));
            })
            .catch(() => {
                store.dispatch(actions.httpError(action.type));
            });
    }

    next(action);
};
