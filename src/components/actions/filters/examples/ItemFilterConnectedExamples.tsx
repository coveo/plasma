import * as React from 'react';
import { ActionBarConnected } from '../../ActionBarConnected';
import { ReactVaporStore } from '../../../../../docs/ReactVaporStore';
import { filterItems } from '../ItemFilterActions';

const ACTION_BAR_ID = 'item-filter-connected-example';
const ITEM_FILTER_LABEL = 'Item filter';

export class ItemFilterConnectedExamples extends React.Component<any, any> {

  componentDidMount() {
    ReactVaporStore.dispatch(filterItems(ACTION_BAR_ID + ITEM_FILTER_LABEL, 'Item'));
  }

  render() {
    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>Action bar with an item filter and Redux state</label>
          <ActionBarConnected
            id={ACTION_BAR_ID}
            itemFilterLabel={ITEM_FILTER_LABEL}
            onClearItemFilter={() => alert('Item filter was cleared')}
            />
        </div>
      </div>
    );
  };
}
