import { HttpResponse } from "../interfaces/HttpResponse";
import { ContactUsForm } from "../interfaces/ContactUsForm";

export interface AppState {
    postMessage: HttpResponse<{}>;
    getMessages: HttpResponse<Array<ContactUsForm>>;
}
