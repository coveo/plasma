import * as React from 'react';
import {Button, FormProvider, InputValidator, Section, TextInput, useTextInput} from '@coveord/plasma-react';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

const nonEmptyValidation: InputValidator = (value: string) => {
    const isEmpty = !value;
    const isWhiteSpace = !isEmpty && !value.trim();
    if (isWhiteSpace) {
        return {status: 'warning', message: 'A white space is not empty, but is not ideal.'};
    } else if (isEmpty) {
        return {status: 'invalid', message: 'Cannot be empty.'};
    } else {
        return {status: 'valid'};
    }
};

// start-print
export const TextInputExamples: React.FunctionComponent = () => (
    <VaporComponent id="TextInput" title="Text Input" withSource>
        <FormProvider>
            <Section>
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
                <Section level={2} title="Disabled">
                    <TextInput type="email" label="Email" disabled />
                    <TextInput type="email" label="Email" defaultValue="123@abc.com" disabled />
                </Section>
                <Section level={2} title="useTextInput hook usage demo">
                    <div className="flex space-around">
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
                        <TextInput
                            id="favorite-animal"
                            type="text"
                            label="Favorite Animal"
                            defaultValue="Tiger"
                            required
                            validate={nonEmptyValidation}
                            showValidationOnBlur
                        />
                    </div>
                    <HookUsageDemo />
                </Section>
            </Section>
        </FormProvider>
    </VaporComponent>
);

const HookUsageDemo: React.FunctionComponent = () => {
    const favoriteDishInput = useTextInput('favorite-dish');
    const favoriteAnimalInput = useTextInput('favorite-animal');

    return (
        <>
            <div className="flex space-around">
                <p style={{whiteSpace: 'pre-wrap'}}>state = {JSON.stringify(favoriteDishInput.state, null, 4)}</p>
                <p style={{whiteSpace: 'pre-wrap'}}>state = {JSON.stringify(favoriteAnimalInput.state, null, 4)}</p>
            </div>
            <p>
                The hook gives you full access to the state of the input that has the specified id. As you can see, they
                are both independent, one doesn't influence the state of the other. The hook also exposes dispatch,
                which allows to interract with TextInput however we need.
            </p>
            <Button
                name='Change dish for "sushis"'
                enabled={favoriteDishInput.state.value !== 'sushis'}
                onClick={() => favoriteDishInput.dispatch({type: 'change-value', payload: 'sushis'})}
            />
            <Button
                name="Show validation"
                onClick={() => {
                    favoriteDishInput.dispatch({type: 'show-validation'});
                    favoriteAnimalInput.dispatch({type: 'show-validation'});
                }}
            />
            <Button
                name="Hide validation"
                onClick={() => {
                    favoriteDishInput.dispatch({type: 'hide-validation'});
                    favoriteAnimalInput.dispatch({type: 'hide-validation'});
                }}
            />
        </>
    );
};
