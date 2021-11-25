import * as React from 'react';
import {
    getReactNodeTextContent,
    IFlatSelectOptionProps,
    IItemBoxProps,
    LabeledInput,
    MultiSelectConnected,
    MultiSelectWithFilter,
    MultiSelectWithPredicate,
    MultiSelectWithPredicateAndFilter,
    Section,
    TooltipPlacement,
    UUID,
    ValidationMessage,
    withInitialValuesMultiSelectHOC,
    withNonEmptyMultiSelectHOC,
} from 'react-vapor';
import * as _ from 'underscore';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';
import {DocsMarkdownFiles} from '../../../utils/MarkdownDocs';

// start-print
const defaultItems: IItemBoxProps[] = [
    {displayValue: 'Test', value: '0'},
    {displayValue: 'Test One', value: '1'},
    {displayValue: 'Disabled', value: 'disabled', disabled: true},
    {displayValue: 'Three', value: '3'},
    {displayValue: 'Four', value: '4'},
    {
        displayValue: 'Five',
        value: '5',
        selectedTooltip: {
            title: 'HighFive!',
            placement: TooltipPlacement.Bottom,
        },
    },
    {displayValue: 'Six', value: '6'},
    {displayValue: 'Seven', value: '7', selectedDisplayValue: 'James Bond 007'},
];

const defaultFlatSelectOptions: IFlatSelectOptionProps[] = [
    {id: UUID.generate(), option: {content: 'All'}, selected: true},
    {id: UUID.generate(), option: {content: 'even'}},
    {id: UUID.generate(), option: {content: 'odd'}},
];

const WithNonEmptyMultiSelect = withNonEmptyMultiSelectHOC(MultiSelectConnected);

const WithNonEmptyMultiSelectExample = () => (
    <LabeledInput
        label="A Multi Select with Non Empty Validation"
        message={
            <div>
                <ValidationMessage id="multi-select-non-empty" />
            </div>
        }
    >
        <br />
        <WithNonEmptyMultiSelect id="multi-select-non-empty" items={defaultItems} />
    </LabeledInput>
);

export interface IMultiSelectExamplesState {
    first: IItemBoxProps[];
    drag: IItemBoxProps[];
    second: IItemBoxProps[];
    hoc: IItemBoxProps[];
    markdown?: string;
}

const MultiSelectWithInitialValues = withInitialValuesMultiSelectHOC(MultiSelectConnected);
const MultiSelectWithInitialValuesExample = () => (
    <Section level={3}>
        <LabeledInput
            label="A Multi Select with initial values"
            message={
                <div>
                    <ValidationMessage id="multi-select-initial-values" />
                </div>
            }
        >
            <MultiSelectWithInitialValues
                initialValues={[defaultItems[0].value, 'INVALID ONE']}
                id="multi-select-initial-values"
                items={defaultItems}
            />
        </LabeledInput>
    </Section>
);

export class MultiSelectExamples extends React.Component<null, IMultiSelectExamplesState> {
    static description =
        'A multi-select component allows users to select one or more options from a set of predefined options, or, if relevant, to add custom options.';

    constructor({props, state}: {props: null; state: IMultiSelectExamplesState}) {
        super(props, state);

        const second = _.map(defaultItems, (item) => _.clone(item));
        second[0].selected = true;

        const hoc = _.map(defaultItems, (item) =>
            _.extend({}, item, {append: {content: () => <span className="append ml1">{item.value}</span>}})
        );
        hoc[0].selected = true;
        hoc[1].selected = true;

        this.state = {
            first: _.clone(defaultItems),
            drag: _.clone(defaultItems),
            second,
            hoc,
            markdown: '',
        };
    }

    componentDidMount() {
        // TODO: use hook when component converted
        DocsMarkdownFiles.MultiSelect().then((res) => this.setState({markdown: res.default}));
    }

    render() {
        return (
            <VaporComponent id="multiselect" title="Multi-select" usage="" markdown={this.state.markdown} withSource>
                <div className="mb2">
                    <div className="form-group">
                        <label className="form-control-label">A Simple Multi Select without items</label>
                        <br />
                        <MultiSelectConnected id={UUID.generate()} items={[]} />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">A Simple Multi Select with only one items</label>
                        <br />
                        <MultiSelectConnected id={UUID.generate()} items={[{value: 'Single Item'}]} />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">A Multi Select with filter, disabled</label>
                        <br />
                        <MultiSelectWithFilter id={UUID.generate()} items={[{value: 'Single Item'}]} disabled />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">A Simple Multi Select with Custom Strings</label>
                        <br />
                        <MultiSelectConnected
                            id={UUID.generate()}
                            items={this.state.first}
                            placeholder="Select something"
                            deselectAllTooltipText="Remove all"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">A Sortable Multi Select with Custom Strings</label>
                        <br />
                        <MultiSelectConnected
                            id={UUID.generate()}
                            items={this.state.hoc}
                            placeholder="Select something"
                            deselectAllTooltipText="Remove all"
                            sortable
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">A Multi Select With Filter</label>
                        <br />
                        <MultiSelectWithFilter id={UUID.generate()} items={this.state.hoc} />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">A Multi Select With Filter and Custom Values</label>
                        <br />
                        <MultiSelectWithFilter id={UUID.generate()} items={this.state.hoc} customValues />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">
                            A Multi Select With Filter and without selected values in readonly
                        </label>
                        <br />
                        <MultiSelectWithFilter id={UUID.generate()} items={[]} customValues readOnly />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">
                            A Multi Select With Filter and Custom Values in readonly
                        </label>
                        <br />
                        <MultiSelectWithFilter id={UUID.generate()} items={this.state.hoc} customValues readOnly />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">
                            A Multi Select With Filter, Custom Values and no items
                        </label>
                        <br />
                        <MultiSelectWithFilter id={UUID.generate()} items={[]} customValues />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">
                            A Multi Select With Filter, Custom Values and list of items selectable
                        </label>
                        <br />
                        <MultiSelectWithFilter id={UUID.generate()} items={[{value: 'a'}, {value: 'b'}]} customValues />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">
                            A Multi Select With Filter and list of items selectable
                        </label>
                        <br />
                        <MultiSelectWithFilter id={UUID.generate()} items={[{value: 'a'}, {value: 'b'}]} />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">A Multi Select With Filter and default list</label>
                        <br />
                        <MultiSelectWithFilter
                            id={UUID.generate()}
                            defaultCustomValues={['c', 'd']}
                            items={[{value: 'a'}, {value: 'b'}]}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">
                            A Multi Select With Filter, default list and Custom Values{' '}
                        </label>
                        <br />
                        <MultiSelectWithFilter
                            id={UUID.generate()}
                            defaultCustomValues={['c', 'd']}
                            items={[{value: 'a'}, {value: 'b'}]}
                            customValues
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">
                            A Multi Select With Filter that only match display value
                        </label>
                        <br />
                        <MultiSelectWithFilter
                            id={UUID.generate()}
                            items={this.state.hoc}
                            matchFilter={(filter: string, item: IItemBoxProps) =>
                                getReactNodeTextContent(item.displayValue).indexOf(filter) !== -1
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">A Multi Select With Predicates</label>
                        <br />
                        <MultiSelectWithPredicate
                            id={UUID.generate()}
                            items={this.state.hoc}
                            options={defaultFlatSelectOptions}
                            matchPredicate={(p: string, i: IItemBoxProps) => this.matchPredicate(p, i)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">A Multi Select With 500px width</label>
                        <br />
                        <MultiSelectConnected
                            id={UUID.generate()}
                            items={this.state.hoc}
                            multiSelectStyle={{width: '500px'}}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">A Multi Select with width 100%</label>
                        <br />
                        <MultiSelectConnected
                            id={'test'}
                            items={this.state.hoc}
                            selectClasses="mod-width-100"
                            multiSelectStyle={{width: '100%'}}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">A Multi Select With Filter and Predicates</label>
                        <br />
                        <MultiSelectWithPredicateAndFilter
                            id={UUID.generate()}
                            items={this.state.hoc}
                            options={defaultFlatSelectOptions}
                            matchPredicate={(p: string, i: IItemBoxProps) => this.matchPredicate(p, i)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">
                            A Multi Select With Filter, Predicate and Custom Values
                        </label>
                        <br />
                        <MultiSelectWithPredicateAndFilter
                            id={UUID.generate()}
                            items={this.state.hoc}
                            options={defaultFlatSelectOptions}
                            matchPredicate={(p: string, i: IItemBoxProps) => this.matchPredicate(p, i)}
                            customValues
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">
                            A Multi Select With Filter, default list and Custom Values{' '}
                        </label>
                        <br />
                        <MultiSelectWithFilter
                            id={UUID.generate()}
                            defaultCustomValues={['b'.repeat(100)]}
                            items={[{value: 'a'.repeat(100)}]}
                            customValues
                        />
                    </div>
                    <MultiSelectWithInitialValuesExample />
                    <div className="form-group">
                        <WithNonEmptyMultiSelectExample />
                    </div>
                </div>
            </VaporComponent>
        );
    }

    private matchPredicate(predicate: string, item: IItemBoxProps) {
        const value = parseInt(item.value, 10);
        if (predicate === defaultFlatSelectOptions[0].id) {
            return true;
        } else if (predicate === defaultFlatSelectOptions[1].id) {
            return value % 2 === 0;
        } else if (predicate === defaultFlatSelectOptions[2].id) {
            return value % 2 === 1;
        } else {
            return true;
        }
    }
}
