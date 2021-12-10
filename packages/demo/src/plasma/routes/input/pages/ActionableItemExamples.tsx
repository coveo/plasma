import * as React from 'react';
import {ActionableItem} from 'react-vapor';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

// start-print
export const ActionableItemExamples = () => (
    <VaporComponent id="ActionableItem" title="Actionable Item" withSource>
        <div className="mt2">
            <div className="form-group">
                <label className="form-control-label">ActionableItem without an onItemClick method</label>
                <div className="form-control">
                    <ActionableItem
                        id="actionable-item-1"
                        actions={[
                            {value: 'action 1', onOptionClick: () => alert('you triggered the first action')},
                            {value: 'action 2', onOptionClick: () => alert('you triggered the second action')},
                        ]}
                    >
                        click on the dots
                    </ActionableItem>
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">ActionableItem with an onItemClick method</label>
                <div className="form-control">
                    <ActionableItem
                        id="actionable-item-2"
                        onItemClick={(e: any) => alert('you triggered the onItemClick method')}
                        actions={[
                            {value: 'action 1', onOptionClick: () => alert('you triggered the first action')},
                            {value: 'action 2', onOptionClick: () => alert('you triggered the second action')},
                        ]}
                    >
                        click on the dots
                    </ActionableItem>
                </div>
            </div>

            <div className="form-group">
                <label className="form-control-label">ActionableItem without an onItemClick method</label>
                <div className="form-control">
                    <ActionableItem
                        id="actionable-item-3"
                        actions={[
                            {value: 'action 1', onOptionClick: () => alert('you triggered the first action')},
                            {value: 'action 2', onOptionClick: () => alert('you triggered the second action')},
                        ]}
                    >
                        click on the dots
                    </ActionableItem>
                </div>
            </div>
        </div>
    </VaporComponent>
);
// stop-print
