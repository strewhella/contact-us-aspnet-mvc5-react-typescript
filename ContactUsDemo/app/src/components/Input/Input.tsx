import * as React from "react";
import { Form, Input as SemanticInput } from "semantic-ui-react";

interface InputProps {
    placeholder: string;
    children?: any;
}

export const Input = (props: InputProps) => {
    return (
        <Form.Field>
            <label>
                {props.children}
                <SemanticInput
                    label={{ icon: "asterisk" }}
                    labelPosition="right corner"
                    placeholder={props.placeholder}
                    required
                />
            </label>
        </Form.Field>
    );
};
