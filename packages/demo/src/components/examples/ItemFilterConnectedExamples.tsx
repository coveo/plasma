import * as React from 'react';
import {ActionBarConnected, filterItems} from 'react-vapor';

import {Store} from '../../Store';

const ACTION_BAR_ID = 'item-filter-connected-example';
const ITEM_FILTER_LABEL = 'Item filter';

export class ItemFilterConnectedExamples extends React.Component<any, any> {
    componentDidMount() {
        Store.dispatch(filterItems(ACTION_BAR_ID, 'Item'));
        Store.dispatch(filterItems(ACTION_BAR_ID + '1', 'Very looooooooooooong item'));
        Store.dispatch(filterItems(ACTION_BAR_ID + '2', 'Very looooooooooooong item'));
    }

    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Action bar with an item filter and Redux state</label>
                    <ActionBarConnected
                        id={ACTION_BAR_ID}
                        itemFilterLabel={ITEM_FILTER_LABEL}
                        onClearItemFilter={() => alert('Item filter was cleared')}
                    />
                </div>
                <div className="form-group">
                    <label className="form-control-label">
                        Action bar with an item filter cropped on the right and with Redux state
                    </label>
                    <ActionBarConnected
                        id={`${ACTION_BAR_ID}1`}
                        itemFilterLabel={ITEM_FILTER_LABEL}
                        itemFilterCropLength={10}
                        onClearItemFilter={() => alert('Item filter was cleared')}
                    />
                </div>
                <div className="form-group">
                    <label className="form-control-label">
                        Action bar with an item filter cropped on the left and with Redux state
                    </label>
                    <ActionBarConnected
                        id={`${ACTION_BAR_ID}2`}
                        itemFilterLabel={ITEM_FILTER_LABEL}
                        itemFilterCropLength={-10}
                        onClearItemFilter={() => alert('Item filter was cleared')}
                    />
                </div>
                <div className="form-group">
                    <label className="form-control-label">
                        Action bar with an item filter cropped on the left with Redux state and tooltip options
                    </label>
                    <ActionBarConnected
                        id={`${ACTION_BAR_ID}3`}
                        itemFilterLabel={ITEM_FILTER_LABEL}
                        itemTooltipProps={{title: 'tooltip', placement: 'top'}}
                        itemFilterCropLength={-10}
                        onClearItemFilter={() => alert('Item filter was cleared')}
                    />
                </div>
            </div>
        );
    }
}
