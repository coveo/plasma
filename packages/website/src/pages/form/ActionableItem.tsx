import {ActionableItem} from '@coveord/plasma-react';
import * as React from 'react';

import PlasmaComponent from '../../building-blocs/PlasmaComponent';

// start-print
export const ActionableItemExamples = () => (
    <PlasmaComponent
        id="ActionableItem"
        title="Actionable Item"
        usage="An actionable item is a dropdown menu listing actions associated with an element."
        withSource
    >
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
    </PlasmaComponent>
);
// stop-print
export default ActionableItemExamples;
