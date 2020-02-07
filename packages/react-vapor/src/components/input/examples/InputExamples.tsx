import * as React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import * as _ from 'underscore';
import {AutocompleteConnected, IItemBoxProps} from '../..';
import {ExampleComponent} from '../../../../docs/src/components/ComponentsInterface';
import {ExamplesStore} from '../../../../docs/Store';
import {Button} from '../../button/Button';
import {IMultilineInputValue, MultilineInput} from '../../multilineInput/MultilineInput';
import {ISplitInput, ISplitValue, SplitMultilineInput} from '../../multilineInput/SplitMultilineInput';
import {Section} from '../../section/Section';
import {withDirtyInputHOC} from '../../validation/hoc/WithDirtyInputHOC';
import {ValidationSelectors} from '../../validation/ValidationSelectors';
import {Input} from '../Input';
import {setDisabledInput} from '../InputActions';
import {InputConnected} from '../InputConnected';
import {Label} from '../Label';

export const InputExamples: ExampleComponent = () => (
    <Section title="Inputs Examples">
        <SimpleInputDisconnected />
        <InputsConnected />
        <MultilineInputComponents />
        <InputsWithDirtyManagement />
    </Section>
);
InputExamples.description =
    'Text Inputs allow users to enter a single line of letters, numbers, or symbols. They are used to submit short character strings.';

export const MultilineInputComponents: React.FunctionComponent = () => (
    <Section level={2} title="Multiline Input example">
        <MultilineInputExample />
        <SplitMultilineInputExamples />
    </Section>
);

const autoCompleteItems: IItemBoxProps[] = [
    {displayValue: 'Test', value: '0'},
    {displayValue: 'Test One', value: '1'},
    {displayValue: 'Disabled', value: 'disabled', disabled: true},
    {displayValue: 'Three', value: '3'},
    {displayValue: 'Four', value: '4'},
    {displayValue: 'Five', value: '5'},
    {displayValue: 'Six', value: '6'},
    {displayValue: 'Seven', value: '7'},
];

// start-print

const SimpleInputDisconnected: React.FunctionComponent = () => {
    const [inputValue, setInputValue] = React.useState(null);
    const [inputClasses, setInputClasses] = React.useState([]);

    const onChange = () => {
        const innerInput = inputValue.getInnerValue();
        setInputClasses(innerInput ? ['valid'] : ['invalid']);
    };

    return (
        <Section level={3} title="A simple input with a local state">
            <Input
                id="local-state-input"
                innerInputClasses={inputClasses}
                placeholder="Please, do not leave me empty!"
                ref={(input: Input) => setInputValue(input)}
                onKeyUp={() => onChange()}
            >
                <Label validMessage="Great!" invalidMessage="The input box must not be empty.">
                    An Input Box Label
                </Label>
            </Input>
        </Section>
    );
};

const InputsConnected: React.FunctionComponent = () => {
    const validate = (value: any) => !!value;

    return (
        <Section>
            <Section level={2} title="Inputs connected to store.">
                <Section level={3} title="A simple input connected to the store">
                    <InputConnected
                        id="super-input"
                        validate={validate}
                        labelTitle="I am a connected input, and validated in real time."
                        labelProps={{invalidMessage: 'Do not leave me empty'}}
                        innerInputClasses="mb2"
                        validateOnChange
                    />
                </Section>

                <Section level={3} title="A simple input disabled on mount.">
                    <InputConnected
                        id="super-input-2"
                        labelTitle="I am the disabled input label."
                        disabledOnMount={true}
                        innerInputClasses="mb2"
                        defaultValue="I am disabled on mount."
                    />
                </Section>

                <Section level={3} title="A connect input that you can toggle at will.">
                    <Button
                        name={'Toggle input'}
                        enabled
                        onClick={() => {
                            ExamplesStore.dispatch(
                                setDisabledInput(
                                    'super-input-3',
                                    !_.findWhere(ExamplesStore.getState().inputs, {id: 'super-input-3'}).disabled
                                )
                            );
                        }}
                    />
                    <InputConnected
                        id="super-input-3"
                        validate={validate}
                        labelTitle="I am the input label"
                        labelProps={{invalidMessage: 'Do not leave me empty'}}
                        defaultValue="Awesome connected feature"
                        validateOnChange
                    />
                </Section>
                <Section level={3} title="An input with autoCompletion">
                    <AutocompleteConnected id="autocomplete-input" items={autoCompleteItems}>
                        <Label>An autocomplete</Label>
                    </AutocompleteConnected>
                </Section>
            </Section>
        </Section>
    );
};

const MultilineInputExample: React.FunctionComponent = () => {
    const [inputValues, setInputValues] = React.useState([]);

    return (
        <Section level={3} title="A multiline input with local state">
            <MultilineInput
                id="multiline-input"
                title="A Multiline Input label"
                placeholder="Enter a value"
                values={inputValues}
                onChange={(inputValuesWithNewValue: IMultilineInputValue[]) =>
                    setInputValues(inputValuesWithNewValue.map((value) => value))
                }
            />
        </Section>
    );
};

const SplitMultilineInputExamples: React.FunctionComponent = () => {
    const inputs: ISplitInput[] = [
        {
            id: '1',
            label: 'First input',
            placeholder: 'enter a value',
            validation: (value: string) => !!value,
            validationMessage: 'This cannot be empty',
        },
        {
            id: '2',
            label: 'Second input',
            placeholder: 'enter another value',
        },
    ];

    const InitialValues: ISplitValue[] = [
        {
            '1': 'first value',
            '2': 'other first value',
            '3': 'other other first value',
        },
        {
            '1': 'second value',
            '2': 'other second value',
            '3': 'other other second value',
        },
    ];

    return (
        <>
            <Section level={3} title="A split multiline input with default values">
                <SplitMultilineInput inputs={inputs} defaultValues={InitialValues} />
            </Section>
            <Section level={3} title="A split multiline input with 3 inputs">
                <SplitMultilineInput
                    inputs={[...inputs, {id: '3', label: 'Third input', placeholder: 'enter yet another value'}]}
                    defaultValues={[...InitialValues, {'1': 'One', '2': 'Two', '3': 'three'}]}
                />
            </Section>
        </>
    );
};

const InputsWithDirtyManagement: React.FunctionComponent = () => (
    <Section level={2} title="Inputs with dirty management functionnalities">
        <InputWithDirty id="dirtyinput" />
        <MessageWhenInputIsDirty />
    </Section>
);

const MessageWhenInputIsDirty = connect(
    createStructuredSelector({
        isDirty: ValidationSelectors.isDirty(['dirtyinput']),
    })
)(({isDirty}) => isDirty && <div>I am now dirty!</div>);

const InputWithDirty = withDirtyInputHOC(InputConnected);

// stop-print
