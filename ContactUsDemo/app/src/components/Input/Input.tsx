import * as React from "react";
import { Form, Input as SemanticInput } from "semantic-ui-react";
import { Control } from "react-redux-form";

interface InputProps {
    placeholder: string;
    model: string;
    children?: any;
}

export const Input = (props: InputProps) => {
    return (
        <Form.Field>
            <label>
                {props.children}
                <Control.text
                    model={props.model}
                    component={SemanticInput}
                    controlProps={{
                        label: { icon: "asterisk" },
                        labelPosition: "right corner",
                        placeholder: props.placeholder,
                        required: true
                    }}
                />
            </label>
        </Form.Field>
    );
};
