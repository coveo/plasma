import {
    Button,
    Form,
    IDispatch,
    InputConnected,
    ModalWizardWithValidations,
    openModal,
    withDirtyInputHOC,
    withNonEmptyValueInputValidationHOC,
} from '@coveord/plasma-react';
import {useDispatch} from 'react-redux';

const NonEmptyInput = withNonEmptyValueInputValidationHOC(withDirtyInputHOC(InputConnected));

const Demo = () => {
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
                finishButton={<Button primary name="We're at the last step!" />}
            >
                <Form title="Step 1" mods={['mod-form-top-bottom-padding', 'mod-header-padding']}>
                    <NonEmptyInput
                        id="username-input"
                        labelTitle="Username"
                        autoComplete="off"
                        validateOnMount
                        validateOnChange
                        resetDirtyOnUnmount
                        resetErrorOnUnmount
                    />
                </Form>
                <Form title="Step 2" mods={['mod-form-top-bottom-padding', 'mod-header-padding']}>
                    <NonEmptyInput
                        id="pwd-input"
                        labelTitle="Password"
                        autoComplete="off"
                        validateOnMount
                        validateOnChange
                        resetDirtyOnUnmount
                        resetErrorOnUnmount
                    />
                </Form>
            </ModalWizardWithValidations>
        </>
    );
};
export default Demo;
