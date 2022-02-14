import * as React from 'react';

import {ExampleLayout} from '../../building-blocs/ExampleLayout';

const code = `
    import * as React from 'react';
    import {FormProvider, InputValidator, TextInput} from "@coveord/plasma-react";

    const nonEmptyValidation: InputValidator = (value: string) => {
        const isEmpty = !value;
        const isWhiteSpace = !isEmpty && !value.trim();
        
        if (isWhiteSpace) {
            return {status: 'warning', message: 'A white space is not empty, but is not ideal.'};
        } 

        if (isEmpty) {
            return {status: 'invalid', message: 'Cannot be empty.'};
        } 
        
        return {status: 'valid'};
    };

    export default () => (
        <FormProvider>
            <TextInput
                required
                showValidationOnBlur
                validate={nonEmptyValidation}
                type="text"
                label="Label"
                title="Title"
                description="Description"
                helpText="Help text"
                tooltip="Tooltip"
            />
        </FormProvider>
    );
`;

const hookUsage = `
    import * as React from 'react';
    import {Button, FormProvider, TextInput, useTextInput} from "@coveord/plasma-react";

    const CurrentState: React.FunctionComponent = () => {
        const {state} = useTextInput('favorite-dish');
        return (
            <div className="my1" style={{whiteSpace: 'pre-wrap'}}>
                state = {JSON.stringify(state, null, 4)}
            </div>
        );
    };

    const InteractiveButtons: React.FunctionComponent = () => {
        const {state, dispatch} = useTextInput('favorite-dish');
        return (
            <>
                <Button
                    name='Change dish for "sushis"'
                    enabled={state.value !== 'sushis'}
                    onClick={() => dispatch({type: 'change-value', payload: 'sushis'})}
                />
                <Button
                    name="Show validation"
                    onClick={() => dispatch({type: 'show-validation'})}
                />
                <Button
                    name="Hide validation"
                    onClick={() => dispatch({type: 'hide-validation'})}
                />
            </>
        );
    };

    export default () => (
        <FormProvider>
            <TextInput
                id="favorite-dish"
                type="text"
                label="Favorite Dish"
                defaultValue="pizza"
                validate={(value) =>
                    /pizza/i.test(value)
                        ? {status: 'valid'}
                        : {status: 'warning', message: "Pizza is best but that's okay."}
                }
                showValidationOnBlur
            />
            <CurrentState />
            <InteractiveButtons />
        </FormProvider>
    );
`;

// start-print
export const TextInputExamples: React.FunctionComponent = () => (
    <ExampleLayout
        id="TextInput"
        title="Text Input"
        section="Form"
        thumbnail="textInput"
        description="A text input allows users to enter and edit short texts, such as names, emails, and passwords."
        componentSourcePath="/textInput/TextInput.tsx"
        code={code}
        examples={{hookUsage: {code: hookUsage, title: 'useTextInput hook usage'}}}
    />
);
