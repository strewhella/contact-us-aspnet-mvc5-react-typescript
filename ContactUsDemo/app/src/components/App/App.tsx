import * as React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import { AppState } from "../../state/AppState";
import * as Redux from "redux";
import { connect } from "react-redux";
import { ActionCreators } from "../../state/ActionCreators";
import { ContactForm } from "../ContactForm/ContactForm";
import { MessageFeed } from "../MessageFeed/MessageFeed";

interface AppProps {
    state: AppState;
    dispatch: ActionCreators;
}

class App extends React.Component<AppProps> {
    componentWillMount(): void {
        this.props.dispatch.getMessages();
    }

    render() {
        return (
            <Container className="App">
                <div className="App-contact-form">
                    <ContactForm
                        dispatch={this.props.dispatch}
                        state={this.props.state}
                    />

                    {this.props.state.getMessages.body && (
                        <MessageFeed
                            messages={this.props.state.getMessages.body}
                        />
                    )}
                </div>
            </Container>
        );
    }
}

const mapStateToProps = (state: { app: AppState }) => {
    return {
        state: state.app
    };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch<AppState>) => {
    return {
        dispatch: Redux.bindActionCreators(
            new ActionCreators() as any,
            dispatch
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App as any);
