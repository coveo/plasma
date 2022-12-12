import {ActionableItem} from '@coveord/plasma-react';

export default () => (
    <ActionableItem
        id="🆔"
        onItemClick={() => alert('you triggered the main button')}
        actions={[
            {value: 'action 1', onOptionClick: () => alert('you triggered the first action')},
            {value: 'action 2', onOptionClick: () => alert('you triggered the second action')},
        ]}
    >
        click on the dots
    </ActionableItem>
);
