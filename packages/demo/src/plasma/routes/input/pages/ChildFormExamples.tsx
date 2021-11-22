import * as React from 'react';
import {Checkbox, ChildForm, Input, Label, Radio, RadioSelect, Section, ToggleForm} from 'react-vapor';

import {ExampleComponent} from '../../../../components/ComponentsInterface';
import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

export const ChildFormExamples: ExampleComponent = () => (
    <VaporComponent id="childform" title="Child Form" usage="">
        <Section>
            <SimpleChildFormExample />
            <ChildFormWithRadiosExamples />
        </Section>
    </VaporComponent>
);

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
                    <ChildForm disabled={!firstState} className="mod-light">
                        <Input id="input-A" value="Some value" classes={['input-field', 'form-group']}>
                            <Label>Child form input</Label>
                        </Input>
                    </ChildForm>
                </ToggleForm>
            </Section>
            <Section
                level={3}
                className="p2 child-form-exemple-container"
                title="A Child Form background white with a Checkbox"
            >
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
                    <ChildForm className="mod-light">
                        <Input id="input-C" value="Some value" classes={['input-field', 'form-group']}>
                            <Label>Dependant Option</Label>
                        </Input>
                    </ChildForm>
                </ToggleForm>
            </RadioSelect>
        </Section>
    );
};
