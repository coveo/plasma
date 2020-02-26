import * as React from 'react';
import {Checkbox, ChildForm, Input, Label, Radio, RadioSelect, Section, ToggleForm} from 'react-vapor';

import {ExampleComponent} from '../ComponentsInterface';

export const ChildFormExamples: ExampleComponent = () => {
    return (
        <Section>
            <SimpleChildFormExample />
            <ChildFormWithRadiosExamples />
        </Section>
    );
};

ChildFormExamples.description =
    'Child Forms are used to make more controls accessible when a parent option is selected in a form.';

const childFormRadioValue = 'child-form-radio-value';
const otherRadioValue = 'other-radio-value';

const SimpleChildFormExample: React.FunctionComponent = () => {
    const [firstState, setFirstState] = React.useState(false);
    const [secondState, setSecondState] = React.useState(false);

    return (
        <Section title="childForm Examples">
            <Section level={3} title="A Child Form with a Checkbox">
                <ToggleForm onClick={() => setFirstState(!firstState)} checked={firstState}>
                    <Checkbox>
                        <Label classes={['label']}>Edit properties</Label>
                    </Checkbox>
                    <ChildForm disabled={!firstState}>
                        <Input id="input-A" value="Some value" classes={['input-field', 'form-group']}>
                            <Label>Child form input</Label>
                        </Input>
                    </ChildForm>
                </ToggleForm>
            </Section>
            <Section level={3} className="bg-medium-grey p2" title="A Child Form background white with a Checkbox">
                <ToggleForm onClick={() => setSecondState(!secondState)} checked={secondState}>
                    <Checkbox>
                        <Label classes={['label']}>Edit properties</Label>
                    </Checkbox>
                    <ChildForm disabled={!secondState} className="mod-pure-white">
                        <Input id="input-B" value="Some value" classes={['input-field', 'form-group']}>
                            <Label>Child form input</Label>
                        </Input>
                    </ChildForm>
                </ToggleForm>
            </Section>
        </Section>
    );
};

const ChildFormWithRadiosExamples: React.FunctionComponent = () => {
    const [value, setValue] = React.useState(null);

    return (
        <Section level={3} title="A child form with radio buttons">
            <RadioSelect value={value} onChange={(inputValue) => setValue(inputValue)}>
                <Radio id={otherRadioValue} value={otherRadioValue} classes={['mb1']}>
                    <Label>Option 1</Label>
                </Radio>
                <ToggleForm value={childFormRadioValue}>
                    <Radio id={childFormRadioValue}>
                        <Label>Option 2</Label>
                    </Radio>
                    <ChildForm>
                        <Input id="input-C" value="Some value" classes={['input-field', 'form-group']}>
                            <Label>Dependant Option</Label>
                        </Input>
                    </ChildForm>
                </ToggleForm>
            </RadioSelect>
        </Section>
    );
};
