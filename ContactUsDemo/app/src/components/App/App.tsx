import * as React from "react";
import "./App.css";
import { Container, Button, Input, Card, Form } from "semantic-ui-react";

class App extends React.Component {
    submit = () => {};

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
                                    <Form.Field>
                                        <label>
                                            Name
                                            <Input
                                                label={{ icon: "asterisk" }}
                                                labelPosition="right corner"
                                                placeholder="eg. John Smith"
                                                required
                                            />
                                        </label>
                                    </Form.Field>
                                    <Form.Field>
                                        <label>
                                            Email
                                            <Input
                                                type="email"
                                                label={{ icon: "asterisk" }}
                                                labelPosition="right corner"
                                                placeholder="eg. john.smith@email.com"
                                                required
                                            />
                                        </label>
                                    </Form.Field>
                                    <Form.Field>
                                        <label>
                                            Message
                                            <Input
                                                placeholder="What are your thoughts?"
                                                label={{ icon: "asterisk" }}
                                                labelPosition="right corner"
                                                required
                                            />
                                        </label>
                                    </Form.Field>
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

export default App;
