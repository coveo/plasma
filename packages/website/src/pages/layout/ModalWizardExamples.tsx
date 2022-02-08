import {
    Button,
    ConnectedProps,
    Form,
    IDispatch,
    InputConnected,
    InputSelectors,
    PlasmaState,
    Label,
    ModalWizard,
    ModalWizardWithValidations,
    openModal,
    Radio,
    RadioSelectConnected,
    RadioSelectSelectors,
    Section,
    SingleSelectConnected,
    withDirtyInputHOC,
    withDirtySingleSelectHOC,
    withNonEmptySingleSelectHOC,
    withNonEmptyValueInputValidationHOC,
} from '@coveord/plasma-react';
import * as React from 'react';
import {connect} from 'react-redux';

import PlasmaComponent from '../../building-blocs/PlasmaComponent';

// start-print

const containsCoveo = (str: string) => str.trim().toLowerCase().includes('coveo');

const enhanceExample1 = connect(
    (state: PlasmaState) => ({
        selectedPath: RadioSelectSelectors.getValue(state, {id: 'radio-step-1'}),
        inputTwoValue: InputSelectors.getValue(state, {id: 'input-step-2'}) || '',
    }),
    (dispatch: IDispatch) => ({
        open: (id: string) => dispatch(openModal(id)),
    })
);

const StandardModalWizardDisconnected: React.FunctionComponent<ConnectedProps<typeof enhanceExample1>> = ({
    open,
    selectedPath,
    inputTwoValue,
}) => {
    const validateStep = (currentStep: number, numberOfSteps: number) => {
        if (currentStep === 0) {
            return {
                isValid: !!selectedPath,
                message: !selectedPath && 'Select a path to continue.',
            };
        } else if (currentStep === 1) {
            if (!inputTwoValue.trim()) {
                return {isValid: false, message: 'The input must have some value to continue.'};
            } else if (!containsCoveo(inputTwoValue)) {
                return {
                    isValid: true,
                    message: 'The value you entered is fine for now, but might cause problems later.',
                };
            } else {
                return {isValid: true};
            }
        } else if (currentStep === numberOfSteps - 1) {
            return {
                isValid: containsCoveo(inputTwoValue),
                message: !containsCoveo(inputTwoValue) && 'The input at step 2 must contain "coveo" to finish.',
            };
        }
        return {isValid: true};
    };

    return (
        <Section level={2} title="Standard ModalWizard">
            <Button name="Open standard wizard" enabled primary onClick={() => open('standard-wizard')} />
            <ModalWizard
                id="standard-wizard"
                title="Wizard 🧙‍♂️"
                onFinish={(close) => {
                    alert('Congratulations! You completed the wizard');
                    close();
                }}
                validateStep={validateStep}
                isDirty={!!selectedPath || !!inputTwoValue}
                modalFooterChildren={(currentStep, numberOfSteps) =>
                    currentStep < numberOfSteps - 1 ? null : <div className="flex-auto">Last Step!</div>
                }
            >
                <Form title="Step 1" mods={['mod-form-top-bottom-padding', 'mod-header-padding']}>
                    <RadioSelectConnected id="radio-step-1">
                        <Radio id="path1" name="wizardPath" value="redhorn">
                            <Label>Pass over the mountain</Label>
                        </Radio>
                        <Radio id="path2" name="wizardPath" value="moria">
                            <Label>Go under the mountain through Moria</Label>
                        </Radio>
                    </RadioSelectConnected>
                </Form>
                <Form title="Step 2" mods={['mod-form-top-bottom-padding', 'mod-header-padding']}>
                    <InputConnected
                        id="input-step-2"
                        autoComplete="off"
                        validateOnChange
                        validate={(value: string) => !!value.trim()}
                        labelTitle={<Label invalidMessage="Cannot be left empty">Enter something to continue</Label>}
                    />
                </Form>
                {selectedPath === 'redhorn' && (
                    <Form title="Step 3" mods={['mod-form-top-bottom-padding', 'mod-header-padding']}>
                        Its longer, but we'll get there!
                    </Form>
                )}
                <Form
                    title={selectedPath === 'moria' ? 'Step 3' : 'Step 4'}
                    mods={['mod-form-top-bottom-padding', 'mod-header-padding']}
                >
                    Enter "coveo" at step two to finish!
                </Form>
            </ModalWizard>
        </Section>
    );
};

const StandardModalWizard = enhanceExample1(StandardModalWizardDisconnected);

const NonEmptyInput = withNonEmptyValueInputValidationHOC(withDirtyInputHOC(InputConnected));
const NonEmptySelect = withDirtySingleSelectHOC(withNonEmptySingleSelectHOC(SingleSelectConnected));

const enhanceExample2 = connect(null, (dispatch: IDispatch) => ({
    open: (id: string) => dispatch(openModal(id)),
}));

const ModalWizardWithValidationIdsDisconnected: React.FunctionComponent<ConnectedProps<typeof enhanceExample2>> = ({
    open,
}) => (
    <Section level={2} title="ModalWizard with built-in validation ids">
        <Button name="Open wizard with validation ids" enabled primary onClick={() => open('validation-wizard')} />
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
    </Section>
);

const ModalWizardWithValidationIds = enhanceExample2(ModalWizardWithValidationIdsDisconnected);

export const ModalWizardExamples = () => (
    <PlasmaComponent
        id="ModalWizard"
        title="Modal Wizard"
        usage="A modal wizard guides users through a task by presenting a succession of actions to complete."
        withSource
    >
        <Section>
            <StandardModalWizard />
            <ModalWizardWithValidationIds />
        </Section>
    </PlasmaComponent>
);
// stop-print
