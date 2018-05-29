import * as React from 'react';
import * as _ from 'underscore';
import {UUID} from '../../../utils/UUID';
import {DropdownSearchConnected} from '../DropdownSearchConnected';
import {MultiSelectDropdownSearchConnected} from '../MultiSelectDropdownSearch/MultiSelectDropdownSearchConnected';

export class DropdownSearchExamples extends React.Component<any, any> {

    render() {
        const defaultOptions = {
            defaultOptions: [
                {value: 'Option 1', displayValue: 'Option 1', hidden: false},
                {value: 'Option 2', displayValue: 'Option 2'},
                {value: 'Option 3', displayValue: 'Option 3'},
                {value: 'Option 4', displayValue: 'Option 4'},
                {value: 'Option 5', displayValue: 'Option 5'},
                {value: 'Option 6', displayValue: 'Option 6'},
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
                        <MultiSelectDropdownSearchConnected {..._.extend({}, defaultOptions, {id: UUID.generate(), deselectAllTooltipText: 'Unselect all'})} filterPlaceholder={'Select options'} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Default Dropdown</label>
                    <div className='form-control'>
                        <DropdownSearchConnected {..._.extend({}, defaultOptions, {id: UUID.generate()})} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Default Dropdown with appends and disabled options</label>
                    <div className='form-control'>
                        <DropdownSearchConnected
                            id={UUID.generate()}
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
                        <DropdownSearchConnected {..._.extend({}, defaultOptions, {id: UUID.generate(), supportSingleCustomOption: true, noResultText: 'Press enter or tab to select the above value, or remove it to display all options.'})} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Dropdown with default selected option</label>
                    <div className='form-control'>
                        <DropdownSearchConnected {..._.extend({}, defaultOptions, {id: UUID.generate(), defaultSelectedOption: {value: 'Option 1'}})} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Dropdown with custom default selected option</label>
                    <div className='form-control'>
                        <DropdownSearchConnected {..._.extend({}, defaultOptions, {id: UUID.generate(), defaultSelectedOption: {value: 'Custom default selected option'}})} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Dropdown with 5 000 options</label>
                    <div className='form-control'>
                        <DropdownSearchConnected {..._.extend({}, manyOptions, {id: UUID.generate()})} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Dropdown with max width 350px</label>
                    <div className='form-control'>
                        <DropdownSearchConnected {..._.extend({}, defaultOptions, {maxWidth: '350px', id: UUID.generate()})} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Dropdown with filter placeholder</label>
                    <div className='form-control'>
                        <DropdownSearchConnected {..._.extend({}, defaultOptions,
                            {filterPlaceholder: 'Filter placeholder test', id: UUID.generate()})} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Dropdown with fixed width 500px</label>
                    <div className='form-control'>
                        <DropdownSearchConnected {..._.extend({}, defaultOptions, {width: '500px', id: UUID.generate()})} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Dropdown with highlight on filter search</label>
                    <div className='form-control'>
                        <DropdownSearchConnected {..._.extend({}, defaultOptions, {highlightAllFilterResult: true, id: UUID.generate()})} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Dropdown with custom option</label>
                    <div className='form-control'>
                        <DropdownSearchConnected {..._.extend({}, customOptions, {id: UUID.generate()})} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Dropdown disabled</label>
                    <div className='form-control'>
                        <DropdownSearchConnected {..._.extend({}, defaultOptions, {isDisabled: true, id: UUID.generate()})} />
                    </div>
                </div>
            </div>
        );
    }
}
