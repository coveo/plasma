import * as React from 'react';
import * as _ from 'underscore';
import {UUID} from '../../../utils/UUID';
import {FilterBoxConnected} from '../../filterBox/FilterBoxConnected';
import {FlatSelectConnected} from '../../flatSelect/FlatSelectConnected';
import {IFlatSelectOptionProps} from '../../flatSelect/FlatSelectOption';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {MultiSelectConnected} from '../MultiSelectConnected';
// import {ReactVaporStore} from '../../../../docs/ReactVaporStore';

const defaultItems: IItemBoxProps[] = [
  {displayValue: 'Test', value: '0'},
  {displayValue: 'Default Selected', value: 'selected', selected: true},
  {displayValue: 'Disabled', value: 'disabled', disabled: true},
  {displayValue: 'Three', value: '3'},
  {displayValue: 'Four', value: '4'},
  {displayValue: 'Five', value: '5'},
  {displayValue: 'Six', value: '6'},
  {displayValue: 'Seven', value: '7'},
];

const defaultFlatSelectOptions: IFlatSelectOptionProps[] = [
  {id: UUID.generate(), option: {content: 'All'}, selected: true},
  {id: UUID.generate(), option: {content: 'even'}},
  {id: UUID.generate(), option: {content: 'odd'}},
];

const flatSelectID = UUID.generate();
const filterID = UUID.generate();

export interface IMultiSelectExamplesState {
  first: IItemBoxProps[];
  second: IItemBoxProps[];
}

export class MultiSelectExamples extends React.Component<{}, IMultiSelectExamplesState> {
  // private flatSelectValue: string;
  // private filterValue: string;
  private secondSelected: string[] = ['selected'];

  constructor() {
    super();
    this.state = {
      first: _.clone(defaultItems),
      second: _.clone(defaultItems),
    };
  }

  componentDidMount() {
    // ReactVaporStore.subscribe(() => this.onStoreChange());
  }

  render() {
    return (
      <div>
        <h1>Multi Select</h1>
        <div className='form-group'>
          <label className='form-control-label'>A Simple Multi Select</label>
          <br/>
          <MultiSelectConnected id={UUID.generate()} items={this.state.first} />
        </div>
        <div className='form-group'>
          <label className='form-control-label'>A Multi Select With Header</label>
          <br/>
          <MultiSelectConnected
            id={UUID.generate()}
            items={this.state.second}
            onRemoveAll={() => {
              this.secondSelected = [];
              // this.updateSecond();
            }}
            onRemoveClick={(option: IItemBoxProps) => {
              this.secondSelected = _.without(this.secondSelected, option.value);
              // this.updateSecond();
            }}
          >
            <div className='flex p2 flex-center bg-white flex-column'>
              <FlatSelectConnected id={flatSelectID} options={defaultFlatSelectOptions} group optionPicker/>
              <br/>
              <FilterBoxConnected id={filterID}/>
            </div>
          </MultiSelectConnected>
        </div>
      </div>
    );
  }

  /* private onStoreChange() {
    const state = ReactVaporStore.getState();

    const flatSelectValue = _.findWhere(state.flatSelect, {id: flatSelectID}).selectedOptionId;
    const filterValue = _.findWhere(state.filters, {id: filterID}).filterText;

    if (flatSelectValue !== this.flatSelectValue || filterValue !== this.filterValue) {
      this.flatSelectValue = flatSelectValue;
      this.filterValue = filterValue;
      this.updateSecond();
    }
  }

  private updateSecond() {
    this.setState({
      second: _.chain(defaultItems)
        .map(item => _.extend({}, item, {selected: _.contains(this.secondSelected, item.value)}))
        .filter(item => {
          const regex = new RegExp(this.filterValue, 'gi');
          return item.selected || regex.test(item.value) || regex.test(item.displayValue);
        })
        .filter(item => {
          if (item.selected) {
            return true;
          }

          const v = parseInt(item.value, 10);
          if (this.flatSelectValue === defaultFlatSelectOptions[0].id) {
            return true;
          } else if (this.flatSelectValue === defaultFlatSelectOptions[1].id) {
            return v % 2 === 0;
          } else if (this.flatSelectValue === defaultFlatSelectOptions[2].id) {
            return v % 2 === 1;
          }
          return true;
        })
        .value(),
    });
  } */
}
