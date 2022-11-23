import {ModalWizardMetadata} from '@coveord/plasma-components-props-analyzer';

import {PageLayout} from '../../../building-blocs/PageLayout';

const code = `
    import {useSelector, useDispatch} from 'react-redux';
    import {
        Button,
        Form,
        IDispatch,
        InputConnected,
        InputSelectors,
        PlasmaState,
        Label,
        ModalWizard,
        openModal,
        Radio,
        RadioSelectConnected,
        RadioSelectSelectors,
    } from '@coveord/plasma-react';

    const containsCoveo = (str: string) => str.trim().toLowerCase().includes('coveo');

    export default () => {
        const selectedPath = useSelector((state: PlasmaState) => RadioSelectSelectors.getValue(state, {id: 'radio-step-1'}));
        const inputTwoValue = useSelector((state: PlasmaState) => InputSelectors.getValue(state, {id: 'input-step-2'}) || '');
        const dispatch: IDispatch = useDispatch();

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
            <>
                <Button name="Open wizard" enabled primary onClick={() => dispatch(openModal('standard-wizard'))} />
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
            </>
        );
    };
`;

const withValidationIds = `
    import {useSelector, useDispatch} from 'react-redux';
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
    }
`;

export const ModalWizardExamples = () => (
    <PageLayout
        id="ModalWizard"
        title="Modal Wizard"
        section="Layout"
        description="A modal wizard guides users through a task by presenting a succession of actions to complete."
        componentSourcePath="/modalWizard/ModalWizard.tsx"
        code={code}
        propsMetadata={ModalWizardMetadata}
        examples={{withValidationIds: {code: withValidationIds, title: 'Using validation ids'}}}
    />
);

export default ModalWizardExamples;
