import * as React from 'react';
import {connect} from 'react-redux';
import {
    Button,
    ConnectedProps,
    Form,
    IDispatch,
    InputConnected,
    InputSelectors,
    Label,
    ModalWizard,
    openModal,
    Radio,
    RadioSelectConnected,
    RadioSelectSelectors,
} from 'react-vapor';

import {IReactVaporExampleState} from '../../Reducers';

// start-print

const containsCoveo = (str: string) => str.trim().toLowerCase().includes('coveo');

const enhance = connect(
    (state: IReactVaporExampleState) => ({
        selectedPath: RadioSelectSelectors.getValue(state, {id: 'radio-step-1'}),
        inputTwoValue: InputSelectors.getValue(state, {id: 'input-step-2'}) || '',
    }),
    (dispatch: IDispatch) => ({
        open: (id: string) => dispatch(openModal(id)),
    })
);

const ModalWizardExamplesDisconnected: React.FunctionComponent<ConnectedProps<typeof enhance>> = ({
    open,
    selectedPath,
    inputTwoValue,
}) => {
    const validateStep = (currentStep: number, isLastStep: boolean) => {
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
        } else if (isLastStep) {
            return {
                isValid: containsCoveo(inputTwoValue),
                message: !containsCoveo(inputTwoValue) && 'The input at step 2 must contain "coveo" to finish.',
            };
        }
        return {isValid: true};
    };

    return (
        <>
            <Button name="Open wizard" enabled primary onClick={() => open('my-wizard')} />
            <ModalWizard
                id="my-wizard"
                title="Wizard 🧙‍♂️"
                onFinish={() => alert('Congratulations! You completed the wizard')}
                validateStep={validateStep}
                isDirty={!!selectedPath || !!inputTwoValue}
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

export const ModalWizardExamples = enhance(ModalWizardExamplesDisconnected);
