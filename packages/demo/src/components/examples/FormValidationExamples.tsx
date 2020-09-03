import * as React from 'react';
import {connect} from 'react-redux';
import {
    FormValidation,
    InputConnected,
    InputLabelWithTooltip,
    FormValidationSelectors,
    Button,
    Section,
    StickyFooter,
    IReactVaporState,
} from 'react-vapor';

const validate = (value: any) => !!value;

const mapStateToProps = (state: IReactVaporState) => ({
    isValid: FormValidationSelectors.isValid(state, 'FormValidation1'),
    isAllInitialValue: FormValidationSelectors.isAllInitialValue(state, 'FormValidation1'),
});

const StickyFooterExampleDisconnected: React.FunctionComponent<ReturnType<typeof mapStateToProps>> = ({
    isValid,
    isAllInitialValue,
}) => (
    <Section title="A sticky footer example">
        <StickyFooter className="sticky-footer-mod-header" isOpened>
            {isAllInitialValue && <Button primary name="Nothing has changed!" />}
            {isValid && <Button primary name="All Valid, you can save" />}
        </StickyFooter>
    </Section>
);

const StickyFooterExample = connect(mapStateToProps)(StickyFooterExampleDisconnected);

export const FormValidationExamples = () => (
    <Section level={3} title="A simple input connected to the store">
        <FormValidation id="FormValidation1">
            <InputConnected
                id="test1"
                defaultValue=""
                validate={validate}
                labelTitle={
                    <InputLabelWithTooltip
                        label="I am a connected input, and validated in real time."
                        tooltip="This input is connected."
                        invalidMessage="Do not leave me empty"
                    />
                }
                validateOnChange
            />
        </FormValidation>
        <FormValidation id="FormValidation1">
            <InputConnected
                id="test2"
                defaultValue="biscuit"
                validate={validate}
                labelTitle={
                    <InputLabelWithTooltip
                        label="I am a connected input, and validated in real time."
                        tooltip="This input is connected."
                        invalidMessage="Do not leave me empty"
                    />
                }
                validateOnChange
            />
        </FormValidation>
        <StickyFooterExample />
    </Section>
);
