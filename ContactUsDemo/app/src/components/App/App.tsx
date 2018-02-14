import * as React from "react";
import "./App.css";
import { Container, Header } from "semantic-ui-react";
import { AppState } from "../../state/AppState";
import * as Redux from "redux";
import { connect } from "react-redux";
import { ActionCreators } from "../../state/ActionCreators";
import { ContactForm } from "../ContactForm/ContactForm";
import { MessageFeed } from "../MessageFeed/MessageFeed";
import { Animate } from "react-move";
import { SideAnimation } from "./App.anim";
import { AnalogClock } from "../AnalogClock/AnalogClock";

interface AppProps {
    state: AppState;
    dispatch: ActionCreators;
}

class App extends React.Component<AppProps> {
    private interval: NodeJS.Timer;

    componentWillMount(): void {
        this.props.dispatch.getMessages();

        this.interval = setInterval(() => {
            this.props.dispatch.getMessages();
        }, 2000000);
    }

    componentWillUnmount(): void {
        clearInterval(this.interval);
    }

    render() {
        return (
            <Container className="App">
                <div className="App-contact-form">
                    <ContactForm
                        dispatch={this.props.dispatch}
                        state={this.props.state}
                    />
                    <AnalogClock />
                    {((!this.props.state.getMessages.body ||
                        this.props.state.getMessages.body.length === 0) && (
                        <Animate {...SideAnimation}>
                            {data => (
                                <Header
                                    as="h2"
                                    style={{
                                        transform: `translateX(${data.x}px`,
                                        opacity: data.opacity as number
                                    }}
                                >
                                    There hasn't been any feedback yet
                                </Header>
                            )}
                        </Animate>
                    )) ||
                        (this.props.state.getMessages.body && (
                            <Animate {...SideAnimation}>
                                {data => (
                                    <MessageFeed
                                        style={{
                                            transform: `translateX(${data.x}px`,
                                            opacity: data.opacity as number
                                        }}
                                        messages={
                                            this.props.state.getMessages.body
                                        }
                                    />
                                )}
                            </Animate>
                        ))}
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
