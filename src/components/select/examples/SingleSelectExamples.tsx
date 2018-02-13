import * as React from 'react';
import * as _ from 'underscore';
import {UUID} from '../../../utils/UUID';
import {FilterBoxConnected} from '../../filterBox/FilterBoxConnected';
import {FlatSelectConnected} from '../../flatSelect/FlatSelectConnected';
import {IFlatSelectOptionProps} from '../../flatSelect/FlatSelectOption';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {SingleSelectConnected} from '../SingleSelectConnected';
// import {ReactVaporStore} from '../../../../docs/ReactVaporStore';

const defaultItems: IItemBoxProps[] = [
  { displayValue: 'Test', value: '0' },
  { displayValue: 'Test One', value: '1'},
  { displayValue: 'Disabled', value: 'disabled', disabled: true },
  { displayValue: 'Three', value: '3' },
  { displayValue: 'Four', value: '4' },
  { displayValue: 'Five', value: '5' },
  { displayValue: 'Six', value: '6' },
  { displayValue: 'Seven', value: '7' },
];

const defaultFlatSelectOptions: IFlatSelectOptionProps[] = [
  {id: UUID.generate(), option: {content: 'All'}, selected: true },
  {id: UUID.generate(), option: {content: 'even'} },
  {id: UUID.generate(), option: {content: 'odd'} },
];

const flatSelectID = UUID.generate();
const filterID = UUID.generate();

export interface ISingleSelectExamplesState {
  first: IItemBoxProps[];
  second: IItemBoxProps[];
}

export class SingleSelectExamples extends React.Component<{}, ISingleSelectExamplesState> {
  constructor() {
    super();

    const second = _.map(defaultItems, (item) => _.clone(item));
    second[0].selected = true;

    this.state = {
      first: _.clone(defaultItems),
      second,
    };
  }

  componentDidMount() {
    // ReactVaporStore.subscribe(() => this.onStoreChange());
  }

  render() {
    return (
      <div>
        <h1>Select</h1>
        <div className='form-group'>
          <label className='form-control-label'>A Simple Single Select</label>
          <br/>
          <SingleSelectConnected id={UUID.generate()} items={this.state.first}/>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>A Single Select With Header</label>
          <br/>
          <SingleSelectConnected id={UUID.generate()} items={this.state.second}>
            <div className='flex p2 flex-center bg-white flex-column'>
              <FlatSelectConnected id={flatSelectID} options={defaultFlatSelectOptions} group optionPicker />
              <br/>
              <FilterBoxConnected id={filterID} />
            </div>
          </SingleSelectConnected>
        </div>
      </div>
    );
  }

  /* private onStoreChange() {
    const state = ReactVaporStore.getState();

    const flatSelectValue = _.findWhere(state.flatSelect, {id: flatSelectID}).selectedOptionId;
    const filterValue = _.findWhere(state.filters, {id: filterID}).filterText;
    this.setState({
      second: _.chain(defaultItems)
        .filter(item => {
          const regex = new RegExp(filterValue, 'gi');
          return item.selected || regex.test(item.value) || regex.test(item.displayValue);
        })
        .filter(item => {
          if (item.selected) {
            return true;
          }

          const v = parseInt(item.value, 10);
          if (flatSelectValue === defaultFlatSelectOptions[0].id) {
            return true;
          } else if (flatSelectValue === defaultFlatSelectOptions[1].id) {
            return  v % 2 === 0;
          } else if (flatSelectValue === defaultFlatSelectOptions[2].id) {
            return v % 2 === 1;
          } else {
            return true;
          }
        })
        .value(),
    });
  } */
}
