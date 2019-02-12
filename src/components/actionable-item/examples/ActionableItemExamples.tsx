import * as React from 'react';
import {ActionableItem} from '../ActionableItem';

export const ActionableItemExamples = () => (
    <div className='mt2'>
        <h1 className='text-blue mb1 bold'>ActionableItem List</h1>
        <div className='form-group'>
            <label className='form-control-label'>ActionableItem without an onItemClick method</label>
            <div className='form-control'>
                <ActionableItem
                    id='actionable-item-1'
                    actions={[
                        {value: 'action 1', onOptionClick: () => alert('you triggered the first action')},
                        {value: 'action 2', onOptionClick: () => alert('you triggered the second action')},
                    ]}>
                    click on the dots
                </ActionableItem>
            </div>
        </div>
        <div className='form-group'>
            <label className='form-control-label'>ActionableItem with an onItemClick method</label>
            <div className='form-control'>
                <ActionableItem
                    id='actionable-item-2'
                    onItemClick={(e: any) => alert('you triggered the onItemClick method')}
                    actions={[
                        {value: 'action 1', onOptionClick: () => alert('you triggered the first action')},
                        {value: 'action 2', onOptionClick: () => alert('you triggered the second action')},
                    ]}>
                    click on the dots
                </ActionableItem>
            </div>
        </div>
    </div>

);
