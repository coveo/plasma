import * as React from 'react';
import {
    Button,
    InputDescription,
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
        <RadioSelectWrappedExample />
    </Section>
);

const paragraphStyle = {
    marginLeft: 36,
    marginTop: 10,
    marginRight: 36,
};

RadioButtonExamples.description = 'Radio Buttons allow for the selection of a single option among a set of options.';

const radioSelectConnectedId = 'radioselectconnected';

// start-print

const radioButtonProps = {
    name: 'rankingResult',
    outerContainerClass: 'modal-radio-button',
    outerElementInContainer: <img src="https://via.placeholder.com/150x100" />,
};

const blueRadioButtonProps = {
    id: 'blue',
    value: 'blue',
    ...radioButtonProps,
};

const redRadioButtonProps = {
    id: 'red',
    value: 'red',
    ...radioButtonProps,
};

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
                    <div className="mod-align-with-radio-label mt1">The green color has an optional description.</div>
                </Radio>
                <Radio id="Option3" name="enabledOptions" value="brown">
                    <Label>Brown</Label>
                </Radio>
            </RadioSelectConnected>
        </LabeledInput>
        <Section level={3}>
            <div className="btn-container">
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
            </div>
        </Section>
    </Section>
);

const RadioSelectDisabledExample: React.FunctionComponent = () => (
    <Section level={3}>
        <LabeledInput label="A Radio Select with all options disabled">
            <RadioSelectConnected id="RadioConnectedDisabled" valueOnMount="yellow" disabled>
                <Radio id="Option4" name="disabledOptions" value="yellow">
                    <Label>Yellow</Label>
                </Radio>
                <Radio id="Option5" name="disabledOptions" value="red">
                    <Label>Red</Label>
                </Radio>
                <Radio id="Option6" name="disabledOptions" value="purple">
                    <Label>purple</Label>
                </Radio>
            </RadioSelectConnected>
        </LabeledInput>
    </Section>
);

const RadioSelectWrappedExample: React.FunctionComponent = () => (
    <Section level={3} title="A radio select with a wrapped radio button.">
        <RadioSelectConnected id="addRankingResult" valueOnMount={'blue'}>
            <Radio {...blueRadioButtonProps}>
                <Label>
                    <span className="bold">{'Blue color'}</span>
                </Label>
                <InputDescription>
                    <div style={{...paragraphStyle}}>{'Blue is the best color.'}</div>
                </InputDescription>
            </Radio>
            <Radio {...redRadioButtonProps}>
                <Label>
                    <span className="bold">{'Red color'}</span>
                </Label>
                <InputDescription>
                    <div style={{...paragraphStyle}}>{'Red is the best color.'}</div>
                </InputDescription>
            </Radio>
        </RadioSelectConnected>
    </Section>
);
