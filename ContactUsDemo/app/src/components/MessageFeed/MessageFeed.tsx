import { ContactUsForm } from "../../interfaces/ContactUsForm";
import { Feed } from "semantic-ui-react";
import * as React from "react";

interface MessageFeedProps {
    messages: Array<ContactUsForm>;
}

export const MessageFeed = (props: MessageFeedProps) => {
    return (
        <Feed>
            {props.messages.map(formMessage => (
                <Feed.Event key={formMessage.id}>
                    <Feed.Content>
                        <Feed.Summary
                            user={formMessage.name}
                            content=" made the comment"
                        />
                        <Feed.Extra text>{formMessage.message}</Feed.Extra>
                    </Feed.Content>
                </Feed.Event>
            ))}
        </Feed>
    );
};
