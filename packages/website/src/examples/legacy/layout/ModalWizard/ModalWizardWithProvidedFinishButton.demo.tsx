import {
    Button,
    Form,
    IDispatch,
    InputConnected,
    InputSelectors,
    Label,
    ModalWizard,
    openModal,
    PlasmaState,
    Radio,
    RadioSelectConnected,
    RadioSelectSelectors,
} from '@coveord/plasma-react';
import {useDispatch, useSelector} from 'react-redux';

const Demo = () => {
    const dispatch: IDispatch = useDispatch();
    const selectedOption = useSelector((state: PlasmaState) =>
        RadioSelectSelectors.getValue(state, {id: 'radio-step-1'}),
    );
    const inputTwoValue = useSelector(
        (state: PlasmaState) => InputSelectors.getValue(state, {id: 'input-step-2'}) || '',
    );

    const validateStep = (currentStep: number, numberOfSteps: number) => {
        if (currentStep === 0) {
            return {
                isValid: !!selectedOption,
                message: !selectedOption && 'Select an option to continue.',
            };
        } else if (currentStep === numberOfSteps - 1) {
            if (!inputTwoValue.trim()) {
                return {isValid: false, message: 'The input must have some value to continue.'};
            }
            return {isValid: true};
        }
        return {isValid: true};
    };

    const onFinish = (close) => {
        alert('Congratulations! You completed the wizard');
        close();
    };

    return (
        <>
            <Button
                name="Open wizard"
                enabled
                primary
                onClick={() => dispatch(openModal('wizard-with-provided-render-finish-button'))}
            />
            <ModalWizard
                id="wizard-with-provided-render-finish-button"
                title="Wizard 🧙‍♂️"
                onFinish={onFinish}
                validateStep={validateStep}
                isDirty={!!selectedOption || !!inputTwoValue}
                renderFinishButton={(isValid: boolean, close: () => void) => (
                    <Button primary name="We're at the last step!" enabled={isValid} onClick={() => onFinish(close)} />
                )}
            >
                <Form title="Step 1" mods={['mod-form-top-bottom-padding', 'mod-header-padding']}>
                    <RadioSelectConnected id="radio-step-1">
                        <Radio id="path1" name="wizardPath" value="heal">
                            <Label>Pick the healing potion</Label>
                        </Radio>
                        <Radio id="path2" name="wizardPath" value="strength">
                            <Label>Pick the strenghtening potion</Label>
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
            </ModalWizard>
        </>
    );
};
export default Demo;
