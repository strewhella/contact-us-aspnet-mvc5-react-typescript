import { ContactUsForm } from "../interfaces/ContactUsForm";

export class ActionCreators {
    postMessage = (form: ContactUsForm) => {
        return {
            type: "postMessage",
            body: form,
            method: "POST",
            url: "/api/contactus"
        };
    };

    getMessages = () => {
        return {
            type: "postMessage",
            method: "GET",
            url: "/api/contactus"
        };
    };

    httpError = (key: string) => {
        return {
            type: "httpError",
            key
        };
    };

    httpSuccess = (key: string, body: any) => {
        return {
            type: "httpSuccess",
            key,
            body
        };
    };
}
