import * as React from "react";
import "./App.css";
import { Container, Button, Card, Form } from "semantic-ui-react";
import { Input } from "../Input/Input";
import { AppState } from "../../state/AppState";
import * as Redux from "redux";
import { connect } from "react-redux";
import { ActionCreators } from "../../state/ActionCreators";

interface AppProps {
    state: AppState;
    dispatch: ActionCreators;
}

class App extends React.Component<AppProps> {
    submit = () => {
        this.props.dispatch.postMessage({
            name: "test",
            email: "test",
            message: "test"
        });
    };

    render() {
        return (
            <Container className="App">
                <div className="App-contact-form">
                    <Card>
                        <Card.Content>
                            <Card.Header>Contact Us</Card.Header>
                            <Card.Meta>
                                Tell us what you really think!
                            </Card.Meta>
                            <Card.Description>
                                <Form>
                                    <Input placeholder="eg. John Smith">
                                        Name
                                    </Input>
                                    <Input placeholder="eg. john.smith@email.com">
                                        Email
                                    </Input>
                                    <Input placeholder="What are your thoughts?">
                                        Message
                                    </Input>
                                    <div className="App-submit">
                                        <Button
                                            type="submit"
                                            onClick={this.submit}
                                        >
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </div>
            </Container>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        state: state.app
    };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch<AppState>) => {
    return {
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App as any);
