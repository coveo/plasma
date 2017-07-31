import * as React from 'react';
import { DropdownSearchConnected } from '../DropdownSearchConnected';
import * as _ from 'underscore';
import { UUID } from '../../../utils/UUID';
import { MultiSelectDropdownSearchConnected } from '../MultiSelectDropdownSearch/MultiSelectDropdownSearchConnected';

export class DropdownSearchExamples extends React.Component<any, any> {

  render() {
    const defaultOptions = {
      defaultOptions: [
        { value: '5', displayValue: 'This', },
        { value: '6', displayValue: 'is', },
        { value: '7', displayValue: 'a', },
        { value: '8', displayValue: 'lot', },
        { value: '9', displayValue: 'of', },
        { value: '10', displayValue: 'selectables', },
      ],
    };

    const customOptions = {
      defaultOptions: [
        { value: 'test 1', displayValue: 'test 1', prefix: 'Prefix', svg: { svgName: 'access-private', svgClass: 'icon fill-blue' } },
        { value: 'test 2', prefix: 'Prefix 2', svg: { svgName: 'access-secured', svgClass: 'icon fill-blue' } },
      ],
      defaultSelectedOption: {
        value: 'test 1',
        displayValue: 'test 1',
        prefix: 'Prefix',
        svg: { svgName: 'access-private', svgClass: 'icon fill-blue' },
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
        <h1 className='text-blue mb1'>Dropdown List</h1>

        <div className='form-group'>
          <label className='form-control-label'>Multiselect Dropdown</label>
          <div className='form-control'>
            <MultiSelectDropdownSearchConnected {..._.extend({}, defaultOptions, { id: UUID.generate() }) } filterPlaceholder={'Select options'} />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Default Dropdown</label>
          <div className='form-control'>
            <DropdownSearchConnected {..._.extend({}, defaultOptions, { id: UUID.generate() }) } />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Dropdown with 5 000 options</label>
          <div className='form-control'>
            <DropdownSearchConnected {..._.extend({}, manyOptions, { id: UUID.generate() }) } />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Dropdown with selected option</label>
          <div className='form-control'>
            <DropdownSearchConnected {..._.extend({}, { id: UUID.generate() }) } />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Dropdown with max width 350px</label>
          <div className='form-control'>
            <DropdownSearchConnected {..._.extend({}, defaultOptions, { maxWidth: '350px', id: UUID.generate() }) } />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Dropdown with filter placeholder</label>
          <div className='form-control'>
            <DropdownSearchConnected {..._.extend({}, defaultOptions,
              { filterPlaceholder: 'Filter placeholder test', id: UUID.generate() }) } />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Dropdown with fixed width 500px</label>
          <div className='form-control'>
            <DropdownSearchConnected {..._.extend({}, defaultOptions, { width: '500px', id: UUID.generate() }) } />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Dropdown with highlight on filter search</label>
          <div className='form-control'>
            <DropdownSearchConnected {..._.extend({}, defaultOptions, { highlightAllFilterResult: true, id: UUID.generate() }) } />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Dropdown with custom option</label>
          <div className='form-control'>
            <DropdownSearchConnected {..._.extend({}, customOptions, { id: UUID.generate() }) } />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Dropdown disabled</label>
          <div className='form-control'>
            <DropdownSearchConnected {..._.extend({}, defaultOptions, { isDisabled: true, id: UUID.generate() }) } />
          </div>
        </div>
      </div>
    );
  }
}
