import * as React from 'react';
import * as _ from 'underscore';

import {IDispatch, ReduxConnect} from '../../../utils/ReduxUtils';
import {UUID} from '../../../utils/UUID';
import {IDropdownOption} from '../DropdownSearch';
import {updateOptionsDropdownSearch} from '../DropdownSearchActions';
import {DropdownSearchConnected} from '../DropdownSearchConnected';
import {MultiSelectDropdownSearchConnected} from '../MultiSelectDropdownSearch/MultiSelectDropdownSearchConnected';

interface DropdownSearchExamplesProps {
    onOptionsChanged?: (id: string, options: IDropdownOption[]) => void;
}

const maxPage: number = 500; // Change this for the max number of elements in the infinite scroll example (page * 10 element)

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: IDispatch): DropdownSearchExamplesProps => ({
    onOptionsChanged: (id: string, options: IDropdownOption[]) => dispatch(updateOptionsDropdownSearch(id, options)),
});

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class DropdownSearchExamples extends React.Component<DropdownSearchExamplesProps, {}> {
    private ids: string[] = [];
    private optionsPage: number = 1;
    private options: IDropdownOption[];

    componentWillMount() {
        // Generate ids ONCE for the components below
        for (let i = 0; i < 15; i++) {
            this.ids[i] = UUID.generate();
        }

        this.options = [
            {value: 'Option 1', displayValue: 'Option 1', hidden: false},
            {value: 'Option 2', displayValue: 'Option 2'},
            {value: 'Option 3', displayValue: 'Option 3'},
            {value: 'Option 4', displayValue: 'Option 4'},
            {value: 'Option 5', displayValue: 'Option 5'},
            {value: 'Option 6', displayValue: 'Option 6'},
            {value: 'Option 7', displayValue: 'Option 7'},
            {value: 'Option 8', displayValue: 'Option 8'},
            {value: 'Option 9', displayValue: 'Option 9'},
            {value: 'Option 10', displayValue: 'Option 10'},
        ];
    }

    render() {
        const defaultOptions = {
            defaultOptions: [
                ...this.options,
            ],
        };

        const customOptions = {
            defaultOptions: [
                {value: 'test 1', displayValue: 'test 1', prefix: 'Prefix', svg: {svgName: 'access-private', svgClass: 'icon fill-blue'}},
                {value: 'test 2', prefix: 'Prefix 2', svg: {svgName: 'access-secured', svgClass: 'icon fill-blue'}},
            ],
            defaultSelectedOption: {
                value: 'test 1',
                displayValue: 'test 1',
                prefix: 'Prefix',
                svg: {svgName: 'access-private', svgClass: 'icon fill-blue'},
            },
        };

        const manyOptions = {
            defaultOptions: _.times(5000, (n: number) => {
                return {
                    displayValue: `Test ${n}`,
                    value: `Test ${n}`,
                };
            }),
        };

        return (
            <div className='mt2'>
                <h1 className='text-blue mb1 bold'>Dropdown List</h1>
                <div className='form-group'>
                    <label className='form-control-label'>Multiselect Dropdown</label>
                    <div className='form-control'>
                        <MultiSelectDropdownSearchConnected {...defaultOptions} id={this.ids[0]} deselectAllTooltipText='Unselect all' filterPlaceholder='Select options' />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Default Dropdown</label>
                    <div className='form-control'>
                        <DropdownSearchConnected {...defaultOptions} id={this.ids[1]} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Default Dropdown with appends and disabled options</label>
                    <div className='form-control'>
                        <DropdownSearchConnected
                            id={this.ids[2]}
                            defaultOptions={defaultOptions.defaultOptions.map(
                                (opt, i) => ({...opt, append: i % 2 ? 'APP' : undefined, disabled: i < 2, disabledTooltip: {title: 'i am disabled', placement: 'top'}}),
                            )}
                            maxWidth='300px'
                        />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Default Dropdown with single custom option support</label>
                    <div className='form-control'>
                        <DropdownSearchConnected
                            {...defaultOptions}
                            id={this.ids[3]}
                            supportSingleCustomOption
                            noResultText='Press enter or tab to select the above value, or remove it to display all options.'
                        />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Dropdown with default selected option</label>
                    <div className='form-control'>
                        <DropdownSearchConnected {...defaultOptions} id={this.ids[4]} defaultSelectedOption={{value: 'Option 1'}} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Dropdown with custom default selected option</label>
                    <div className='form-control'>
                        <DropdownSearchConnected {...defaultOptions} id={this.ids[5]} defaultSelectedOption={{value: 'Custom default selected option'}} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Dropdown with 5 000 options</label>
                    <div className='form-control'>
                        <DropdownSearchConnected {...manyOptions} id={this.ids[6]} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Dropdown with max width 350px</label>
                    <div className='form-control'>
                        <DropdownSearchConnected {...defaultOptions} maxWidth='350px' id={this.ids[7]} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Dropdown with filter placeholder</label>
                    <div className='form-control'>
                        <DropdownSearchConnected {...defaultOptions} filterPlaceholder='Filter placeholder test' id={this.ids[8]} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Dropdown with fixed width 500px</label>
                    <div className='form-control'>
                        <DropdownSearchConnected {...defaultOptions} width='500px' id={this.ids[9]} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Dropdown with highlight on filter search</label>
                    <div className='form-control'>
                        <DropdownSearchConnected {...defaultOptions} highlightAllFilterResult id={this.ids[10]} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Dropdown with custom option</label>
                    <div className='form-control'>
                        <DropdownSearchConnected {...customOptions} id={this.ids[11]} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Dropdown disabled</label>
                    <div className='form-control'>
                        <DropdownSearchConnected {...defaultOptions} isDisabled id={this.ids[12]} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Dropdown with an infinite scroll</label>
                    <div className='form-control'>
                        <DropdownSearchConnected
                            {...defaultOptions}
                            defaultOptions={this.options}
                            id={this.ids[13]}
                            infiniteScroll={{
                                next: () => {
                                    this.optionsPage++;
                                    this.getNewOptions();
                                },
                                dataLength: 0, // Needed to satisfy interface but will overwritten (because of the way we pass options)
                                hasMore: true, // Also needed to satisfy the interface, but will be overwritten because the dropdown currently has a hard time changing props
                                endMessage: <div className='option-wrapper'><span className='dropdown-option'>No more items to show</span></div>,
                                loader: <div className='option-wrapper'><span className='dropdown-option'>Loading more items...</span></div>,
                            }}
                            hasMoreItems={() => this.optionsPage < maxPage - 1} // Used to overwrite the hasMore prop for the infinite scroll
                            customFiltering={(filterText: string) => this.filter(filterText)}
                        />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Dropdown with an infinite scroll & filters on all options</label>
                    <div className='form-control'>
                        <DropdownSearchConnected
                            {...manyOptions}
                            autoInfiniteScroll={{
                                optionsPerPage: 10,
                                endMessage: <div className='option-wrapper'><span className='dropdown-option'>No more items to show</span></div>,
                                loader: <div className='option-wrapper'><span className='dropdown-option'>Loading more items...</span></div>,
                            }}
                            id={this.ids[14]}
                        />
                    </div>
                </div>
            </div>
        );
    }

    private getNewOptions() {
        if (this.optionsPage < maxPage) {
            _.times(10, (n: number) => {
                const optionNumber: number = n + this.optionsPage * 10;
                this.options.push({
                    displayValue: `Option ${optionNumber}`,
                    value: `Option ${optionNumber}`,
                });
            });
            this.props.onOptionsChanged(this.ids[13], this.options);
        }
    }

    private filter(filterText: string) {
        this.props.onOptionsChanged(this.ids[13], [
            {
                displayValue: `Custom option return by filtering`,
                value: `Custom option`,
            },
            {
                displayValue: `Custom option ${filterText}`,
                value: `Custom option2`,
            },
        ]);
    }
}
