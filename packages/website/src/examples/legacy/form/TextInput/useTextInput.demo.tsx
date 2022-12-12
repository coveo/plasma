import {Button, FormProvider, TextInput, useTextInput} from '@coveord/plasma-react';
import {FunctionComponent} from 'react';

const CurrentState: FunctionComponent = () => {
    const {state} = useTextInput('favorite-dish');
    return (
        <div className="my1" style={{whiteSpace: 'pre-wrap'}}>
            state = {JSON.stringify(state, null, 4)}
        </div>
    );
};

const InteractiveButtons: FunctionComponent = () => {
    const {state, dispatch} = useTextInput('favorite-dish');
    return (
        <>
            <Button
                name='Change dish for "sushis"'
                enabled={state.value !== 'sushis'}
                onClick={() => dispatch({type: 'change-value', payload: 'sushis'})}
            />
            <Button name="Show validation" onClick={() => dispatch({type: 'show-validation'})} />
            <Button name="Hide validation" onClick={() => dispatch({type: 'hide-validation'})} />
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
