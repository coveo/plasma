import * as React from 'react';
import {
    Button,
    IRadioSelectProps,
    Label,
    LabeledInput,
    Radio,
    RadioSelectConnected,
    Section,
    setRadioSelect,
} from 'react-vapor';

import {Store} from '../../Store';
import {ExampleComponent} from '../ComponentsInterface';

export interface IRadioSelectExampleProps extends IRadioSelectProps {
    defaultValue?: string;
}

export interface IRadioSelectExampleState {
    value: string;
}

export const RadioButtonExamples: ExampleComponent = () => (
    <Section title="Radio set">
        <RadioSelectExample />
        <RadioSelectDisabledExample />
    </Section>
);

RadioButtonExamples.description = 'Radio Buttons allow for the selection of a single option among a set of options.';

const radioSelectConnectedId = 'radioselectconnected';

// start-print

const RadioSelectExample: React.FunctionComponent = () => (
    <Section level={2} title="Radio select with redux store">
        <LabeledInput label="The Label of the Radio Select">
            <RadioSelectConnected
                id="radioselectconnected"
                disabledTooltip="you see me because of the disabledTooltip prop"
                disabledValuesOnMount={['blue']}
                valueOnMount={'brown'}
                onChangeCallback={() => 'insert a callBack function here'}
            >
                <Radio id="Option1" name="enabledOptions" value="blue">
                    <Label>Blue</Label>
                </Radio>
                <Radio id="Option2" name="enabledOptions" value="green">
                    <Label>Green</Label>
                    <div className="mod-align-with-radio-label text-lynch mt1">
                        The green color has an optional description.
                    </div>
                </Radio>
                <Radio id="Option3" name="enabledOptions" value="brown">
                    <Label>Brown</Label>
                </Radio>
            </RadioSelectConnected>
        </LabeledInput>
        <Section level={3}>
            <Button
                enabled
                name="disable blue option"
                onClick={() => Store.dispatch(setRadioSelect(radioSelectConnectedId, {disabledValues: ['blue']}))}
            />
            <Button
                enabled
                name="enable blue option"
                onClick={() => Store.dispatch(setRadioSelect(radioSelectConnectedId, {disabledValues: []}))}
            />
        </Section>
    </Section>
);

const RadioSelectDisabledExample: React.FunctionComponent = () => (
    <Section level={3}>
        <LabeledInput label="A Radio Select with all options disabled">
            <RadioSelectConnected
                value="a-value"
                disabled
                onMount={() => 'I am Mounted, just for you!'}
                onUnmount={() => 'This is the end, my friend...'}
            >
                <Radio id="Option4" name="disabledOptions" value="yellow">
                    <Label>Yellow</Label>
                </Radio>
                <Radio id="Option5" name="disabledOptions" value="red">
                    <Label>Red</Label>
                </Radio>
            </RadioSelectConnected>
        </LabeledInput>
    </Section>
);
