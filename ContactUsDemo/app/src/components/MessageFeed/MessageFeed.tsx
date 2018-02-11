import { ContactUsForm } from "../../interfaces/ContactUsForm";
import { Feed } from "semantic-ui-react";
import * as React from "react";

interface MessageFeedProps {
    messages: Array<ContactUsForm>;
}

export const MessageFeed = (props: MessageFeedProps) => {
    const summaries = [
        " had some feedback",
        " made the comment",
        " suggested that",
        " wanted to say"
    ];

    const getSummary = () => {
        let index = Math.floor(Math.random() * summaries.length);
        console.log(index);
        return summaries[index];
    };

    return (
        <Feed>
            {props.messages.map(formMessage => (
                <Feed.Event key={formMessage.id}>
                    <Feed.Content>
                        <Feed.Summary
                            user={formMessage.name}
                            content={getSummary()}
                        />
                        <Feed.Extra text>{formMessage.message}</Feed.Extra>
                    </Feed.Content>
                </Feed.Event>
            ))}
        </Feed>
    );
};
