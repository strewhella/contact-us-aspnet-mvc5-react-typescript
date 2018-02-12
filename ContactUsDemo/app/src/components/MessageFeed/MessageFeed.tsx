import { ContactUsForm } from "../../interfaces/ContactUsForm";
import { Feed } from "semantic-ui-react";
import * as React from "react";
import { SideAnimation } from "../App/App.anim";
import { Animate } from "react-move";

interface MessageFeedProps {
    messages: Array<ContactUsForm>;
    style: any;
}

export const MessageFeed = (props: MessageFeedProps) => {
    return (
        <Feed style={props.style}>
            {props.messages.map(formMessage => (
                <Animate {...SideAnimation} key={formMessage.id}>
                    {data => (
                        <Feed.Event
                            style={{
                                transform: `translateX(${data.x}px)`,
                                opacity: data.opacity as number
                            }}
                        >
                            <Feed.Content>
                                <Feed.Summary
                                    user={formMessage.name}
                                    content=" made the comment"
                                />
                                <Feed.Extra text>
                                    {formMessage.message}
                                </Feed.Extra>
                            </Feed.Content>
                        </Feed.Event>
                    )}
                </Animate>
            ))}
        </Feed>
    );
};
