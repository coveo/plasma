import {
    Button,
    Form,
    IDispatch,
    InputConnected,
    ModalWizardWithValidations,
    openModal,
    SingleSelectConnected,
    withDirtyInputHOC,
    withDirtySingleSelectHOC,
    withNonEmptySingleSelectHOC,
    withNonEmptyValueInputValidationHOC,
} from '@coveord/plasma-react';
import {useDispatch} from 'react-redux';

const NonEmptyInput = withNonEmptyValueInputValidationHOC(withDirtyInputHOC(InputConnected));
const NonEmptySelect = withDirtySingleSelectHOC(withNonEmptySingleSelectHOC(SingleSelectConnected));

export default () => {
    const dispatch: IDispatch = useDispatch();

    return (
        <>
            <Button name="Open wizard" enabled primary onClick={() => dispatch(openModal('validation-wizard'))} />
            <ModalWizardWithValidations
                id="validation-wizard"
                title="Wizard 🧙‍♂️"
                onFinish={(close) => {
                    alert('Congratulations! You completed the wizard');
                    close();
                }}
                validationIdsByStep={[['name-input'], ['favorite-animal-select']]}
            >
                <Form title="Step 1" mods={['mod-form-top-bottom-padding', 'mod-header-padding']}>
                    <NonEmptyInput
                        id="name-input"
                        labelTitle="Name"
                        autoComplete="off"
                        validateOnMount
                        validateOnChange
                        resetDirtyOnUnmount
                        resetErrorOnUnmount
                    />
                </Form>
                <Form title="Step 2" mods={['mod-form-top-bottom-padding', 'mod-header-padding']}>
                    <NonEmptySelect
                        id="favorite-animal-select"
                        items={[
                            {value: 'tiger', displayValue: 'Tiger 🐅'},
                            {value: 'dog', displayValue: 'Dog 🐕', disabled: true},
                            {value: 'squid', displayValue: 'Squid 🦑'},
                        ]}
                    />
                </Form>
            </ModalWizardWithValidations>
        </>
    );
};
