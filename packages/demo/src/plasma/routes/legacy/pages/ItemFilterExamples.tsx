import * as React from 'react';
import {ActionBar} from 'react-vapor';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

// start-print

export class ItemFilterExamples extends React.Component<any, any> {
    render() {
        return (
            <VaporComponent id="ItemFilter" title="Item Filter" withSource>
                <div className="mt2">
                    <div className="form-group">
                        <label className="form-control-label">Action bar with an item filter</label>
                        <ActionBar itemFilterLabel="Item filter" itemFilter="Item" />
                    </div>
                </div>
            </VaporComponent>
        );
    }
}
