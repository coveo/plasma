import * as React from 'react';
import {ActionableItem} from '../ActionableItem';

export const ActionableItemExamples = () => (
    <ActionableItem actions={[
        {value: 'action 1', onOptionClick: () => alert('you triggered the first action')},
        {value: 'action 2', onOptionClick: () => alert('you triggered the second action')},
    ]}>
        click on the dots
    </ActionableItem>
);
