import * as React from 'react';
import { DropdownSearchConnected } from '../DropdownSearchConnected';
import * as _ from 'underscore';
import { UUID } from '../../../utils/UUID';

export class DropdownSearchExamples extends React.Component<any, any> {

  render() {
    const defaultOptions = {
      defaultOptions: [
        { value: 'test 1', displayValue: 'test 1',  },
        { value: 'test 2', displayValue: 'TEST 22', },
        { value: 'test 3', displayValue: 'test 3', },
        { value: 'value with very very very very very very very very very very long name', displayValue: 'test 212019201', },
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

    const selectedOptions = _.defaults({
      defaultSelectedOption: { value: 'test 3' },
    }, defaultOptions);

    return (
      <div className='mt2'>
        <h1 className='text-blue mb1'>Dropdown List</h1>
        <div className='form-group'>
          <label className='form-control-label'>Default Dropdown</label>
          <div className='form-control'>
            <DropdownSearchConnected {..._.extend({}, defaultOptions, { id: UUID.generate(), isMultiselect: true }) } />
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
            <DropdownSearchConnected {..._.extend({}, selectedOptions, { id: UUID.generate() }) } />
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
