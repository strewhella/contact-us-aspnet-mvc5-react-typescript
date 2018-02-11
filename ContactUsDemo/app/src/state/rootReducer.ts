import { AppState } from "./AppState";
import * as Redux from "redux";

export const initialState: AppState = {
    getMessages: {
        error: false,
        loading: false,
        body: []
    },
    postMessage: {
        error: false,
        loading: false,
        body: {}
    }
};

export const rootReducer = (state: AppState, action: Redux.AnyAction) => {
    if (!state) {
        state = initialState;
    }

    state = { ...state };

    switch (action.type) {
        case "postMessage":
            state.postMessage = Object.assign({}, state.postMessage);
            state.postMessage.loading = true;
            state.postMessage.error = false;
            break;
        case "getMessages":
            state.getMessages = Object.assign({}, state.getMessages);
            state.getMessages.loading = true;
            state.postMessage.error = false;
            break;
        case "httpError":
            state[action.key] = Object.assign({}, state[action.key]);
            state[action.key].loading = false;
            state[action.key].error = true;
            break;
        case "httpSuccess":
            state[action.key] = Object.assign({}, state[action.key]);
            state[action.key].loading = false;
            state[action.key].error = false;
            state[action.key].body = action.body;
            break;
    }

    return state;
};
