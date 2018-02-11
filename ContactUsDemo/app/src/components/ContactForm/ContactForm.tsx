import { Card, Button } from "semantic-ui-react";
import { Input } from "../Input/Input";
import { ActionCreators } from "../../state/ActionCreators";
import * as React from "react";
import { AppState } from "../../state/AppState";
import { Form } from "react-redux-form";
import { ContactUsForm } from "../../interfaces/ContactUsForm";

interface ContactFormProps {
    state: AppState;
    dispatch: ActionCreators;
}

export const ContactForm = (props: ContactFormProps) => {
    const submit = (form: ContactUsForm) => {
        props.dispatch.postMessage(form);
        props.dispatch.reset();
    };

    return (
        <Card>
            <Card.Content>
                <Card.Header>Contact Us</Card.Header>
                <Card.Meta>Tell us what you really think!</Card.Meta>
                <Card.Description>
                    <Form
                        onSubmit={submit}
                        model="contactUs"
                        className="ui form"
                    >
                        <Input
                            placeholder="eg. John Smith"
                            model="contactUs.name"
                        >
                            Name
                        </Input>

                        <Input
                            placeholder="eg. john.smith@email.com"
                            model="contactUs.email"
                        >
                            Email
                        </Input>

                        <Input
                            placeholder="What are your thoughts?"
                            model="contactUs.message"
                        >
                            Message
                        </Input>

                        <div className="App-submit">
                            <Button
                                type="submit"
                                loading={props.state.postMessage.loading}
                                disabled={props.state.postMessage.loading}
                            >
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Card.Description>
            </Card.Content>
        </Card>
    );
};
