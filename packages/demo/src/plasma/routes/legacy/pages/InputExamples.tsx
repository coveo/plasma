import * as React from 'react';
import {connect, useSelector} from 'react-redux';
import {
    AutocompleteConnected,
    Button,
    IInputOwnProps,
    IItemBoxProps,
    IMultilineSingleBoxProps,
    Input,
    InputConnected,
    InputLabelWithTooltip,
    ISplitInput,
    Label,
    MultilineBox,
    multilineBoxContainer,
    multilineBoxWithDnD,
    multilineBoxWithRemoveButton,
    MultiValuesInput,
    MultiValuesInputSelectors,
    Section,
    setDisabledInput,
    SplitMultilineInput,
    ValidationSelectors,
    withDirtyInputHOC,
} from 'react-vapor';
import {createStructuredSelector} from 'reselect';
import * as _ from 'underscore';

import {IReactVaporExampleState} from '../../../../Reducers';
import {Store} from '../../../../Store';
import {ExampleComponent} from '../../../utils/ExamplesUtils';
import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

// start-print

export const InputExamples: ExampleComponent = () => (
    <VaporComponent id="input" title="Inputs (legacy)" usage="Use TextInput instead" withSource>
        <Section title="Inputs Examples">
            <SimpleInputDisconnected />
            <InputsConnected />
            <InputsWithDirtyManagement />
            <MultilineInputComponents />
            <MultilineBoxExamples />
        </Section>
    </VaporComponent>
);
InputExamples.description =
    'Inputs allow users to enter a single line of letters, numbers, or symbols. They are used to submit short character strings.';

export const MultilineInputComponents: React.FunctionComponent = () => (
    <Section level={2} title="Multiline Input Examples">
        <MultilineInputExample />
        <SplitMultilineInputExamples />
    </Section>
);

interface IMultilineInputWithMultilineBox {
    [1]: string;
    [2]: string;
    [3]?: string;
}

type IMultilineInputWithMultilineBoxData = Array<IMultilineSingleBoxProps<IMultilineInputWithMultilineBox>>;

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
                        labelTitle={
                            <InputLabelWithTooltip
                                label="I am a connected input, and validated in real time."
                                tooltip="This input is connected."
                                invalidMessage="Do not leave me empty"
                            />
                        }
                        innerInputClasses="mb2"
                        validateOnChange
                    />
                </Section>

                <Section level={3} title="A simple input disabled on mount.">
                    <InputConnected
                        id="super-input-2"
                        labelTitle="I am the disabled input label."
                        disabledOnMount
                        innerInputClasses="mb2"
                        defaultValue="I am disabled on mount."
                    />
                </Section>

                <Section level={3} title="A simple input in state of readOnly.">
                    <InputConnected
                        id="super-input-read-only"
                        labelTitle="I am a readOnly input label."
                        innerInputClasses="mb2"
                        defaultValue="I am in readOnly state"
                        isReadOnly
                    />
                </Section>

                <Section level={3} title="A connect input that you can toggle at will.">
                    <Button
                        name={'Toggle input'}
                        enabled
                        onClick={() => {
                            Store.dispatch(
                                setDisabledInput(
                                    'super-input-3',
                                    !_.findWhere(Store.getState().inputs, {id: 'super-input-3'}).disabled
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

const InputsWithDirtyManagement: React.FunctionComponent = () => (
    <Section level={2} title="Inputs with dirty management functionnalities">
        <InputWithDirty id="dirtyinput" />
        <MessageWhenInputIsDirty />
    </Section>
);

const MessageWhenInputIsDirty: React.FC = () => {
    const {isDirty} = useSelector(
        createStructuredSelector({
            isDirty: ValidationSelectors.isDirty(['dirtyinput']),
        })
    );
    return isDirty && <div>I am now dirty!</div>;
};

const InputWithDirty = withDirtyInputHOC(InputConnected);

const MultiValuesInputId = 'multivalue-id';
const mapStateToProps = (state: IReactVaporExampleState) => ({
    values: MultiValuesInputSelectors.getValues(state, MultiValuesInputId),
});

const MultilineInputExampleDisconnected: React.FunctionComponent<ReturnType<typeof mapStateToProps>> = ({values}) => {
    const validate = (value: any) => !!value;
    const disabledInputInnerClasses = 'mod-no-border input-wider-text-box disabled-input';
    const disabledInputClasse = 'my0 ml-1';
    const validateInputProps: Partial<IInputOwnProps> = {
        validate,
        labelProps: {invalidMessage: 'Do not leave me empty'},
        validateOnChange: true,
    };
    const limitInputProps: Partial<IInputOwnProps> = {
        placeholder: 'this is a placeholder',
    };
    return (
        <>
            <Section level={3} title="Multi-value inputs">
                <MultiValuesInput id={MultiValuesInputId} data={['hello', 'world']} />
                <p className="small transparency-2">Values in the state: {JSON.stringify(values, null, 2)}</p>
            </Section>
            <Section level={3} title="Multi-value inputs with a data limit">
                <MultiValuesInput
                    id="multi-data"
                    data={['enabled', 'disabled']}
                    dataLimit={1}
                    inputProps={limitInputProps}
                    reachedLimitPlaceholder={"this is a placeholder when you've reached the limit"}
                    disabledTooltipTitle="this input can't edited"
                    disabledInputInnerClasses={disabledInputInnerClasses}
                    disabledInputClasses={disabledInputClasse}
                />
            </Section>
            <Section level={3} title="Multi-value inputs with a validation">
                <MultiValuesInput
                    id="multi-validate"
                    data={['Erase me to see the error']}
                    inputProps={validateInputProps}
                />
            </Section>
            <Section level={3} title="Multi-value inputs disabled">
                <MultiValuesInput
                    id="multi-disabled"
                    data={['First data!', 'second data']}
                    inputProps={validateInputProps}
                    disabled
                />
            </Section>
        </>
    );
};
const MultilineInputExample = connect(mapStateToProps)(MultilineInputExampleDisconnected);

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

const InitialValues = [
    {
        '1': 'First Multiline Input: first value',
        '2': 'First Multiline Input: second value',
        '3': 'First Multiline Input: third value',
    },
    {
        '1': 'Second Multiline Input: first value',
        '2': 'Second Multiline Input: second value',
        '3': 'Second Multiline Input: third value',
    },
];

const SplitMultilineInputExamples: React.FunctionComponent = () => (
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

const MultilineBoxWithFunctionnalities = _.compose(
    multilineBoxContainer(),
    multilineBoxWithRemoveButton(),
    multilineBoxWithDnD()
)(MultilineBox);

const MultilineBoxWithCustomization = _.compose(
    multilineBoxContainer({
        containerNode: (child: React.ReactNode, data: any[], index: number) => (
            <div key={`${data[index].id}Container`} className={'p2'} style={{backgroundColor: '#e5e8e8'}}>
                {child}
            </div>
        ),
    })
)(MultilineBox);

const MultilineBoxExamples: React.FunctionComponent = () => (
    <Section level={2} title="Examples of Multiline Inputs built with the MultilineBox Component">
        <Section
            className="mb0"
            level={3}
            title="A multiline box of inputs with a default container, default props, a drag and drop and a remove button. It will add a new box on change of the last input"
        >
            <MultilineBoxWithFunctionnalities<IMultilineInputWithMultilineBox>
                id="FirstMultilineBoxExample"
                data={InitialValues}
                className="my2"
                renderBody={(data: IMultilineInputWithMultilineBoxData, parentProps: {addNewBox: () => void}) =>
                    _.map(data, (cData) => (
                        <div key={cData.id}>
                            <InputConnected
                                id={`${cData.id}1`}
                                classes="mt1 inline-block mx1"
                                defaultValue={cData.props['1']}
                                validate={(value: string) => cData.props['1'] === value}
                                validateOnChange
                            />
                            <InputConnected
                                id={`${cData.id}2`}
                                classes="mt1 inline-block mx1"
                                defaultValue={cData.props['2']}
                            />
                            <InputConnected
                                classes="mt2 mx1"
                                id={`${cData.id}3`}
                                defaultValue={cData.props['3']}
                                onChange={(value: string) => {
                                    if (value !== '' && cData.isLast) {
                                        parentProps.addNewBox();
                                    }
                                }}
                            />
                        </div>
                    ))
                }
                defaultProps={{
                    '1': 'default',
                    '2': 'props',
                    '3': 'Will add a new box if you change this.',
                }}
            />
        </Section>
        <Section
            level={3}
            title="A multiline box of inputs with a custom container. Will validate only when the value is the expected one"
        >
            <MultilineBoxWithCustomization<IMultilineInputWithMultilineBox>
                id="secondMultilineBoxExample"
                data={InitialValues}
                renderBody={(data: IMultilineInputWithMultilineBoxData, parentProps: {addNewBox: () => void}) =>
                    _.map(data, (cData: IMultilineSingleBoxProps<IMultilineInputWithMultilineBox>) => (
                        <div key={cData.id}>
                            <InputConnected
                                id={`${cData.id}1`}
                                classes="mt1 mx1"
                                defaultValue={cData.props['1']}
                                onChange={(value: string) => {
                                    if (value === 'next' && cData.isLast) {
                                        parentProps.addNewBox();
                                        return true;
                                    }
                                    return false;
                                }}
                            />
                            <InputConnected id={`${cData.id}2`} classes="mt1 mx1" defaultValue={cData.props['2']} />
                        </div>
                    ))
                }
                defaultProps={{
                    '1': "Will create another box if you type 'next' here.",
                    '2': 'But not here.',
                }}
            />
        </Section>
    </Section>
);

// stop-print
