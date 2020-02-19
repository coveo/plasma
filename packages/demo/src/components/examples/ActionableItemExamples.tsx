import * as React from 'react';
import {ActionableItem} from 'react-vapor';

export const ActionableItemExamples = () => (
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
            <label className="form-control-label" style={{marginTop: '75vh'}}>
                ActionableItem without an onItemClick method
            </label>
            <div className="form-control">
                <ActionableItem
                    id="actionable-item-3"
                    actions={[
                        {value: 'action 1', onOptionClick: () => alert('you triggered the first action')},
                        {value: 'action 2', onOptionClick: () => alert('you triggered the second action')},
                    ]}
                    style={{marginBottom: '50vh'}}
                >
                    click on the dots
                </ActionableItem>
            </div>
        </div>
    </div>
);
