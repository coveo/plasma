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

const Demo = () => {
    const selectedPath = useSelector((state: PlasmaState) =>
        RadioSelectSelectors.getValue(state, {id: 'radio-step-1'}),
    );
    const inputTwoValue = useSelector(
        (state: PlasmaState) => InputSelectors.getValue(state, {id: 'input-step-2'}) || '',
    );
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
export default Demo;
