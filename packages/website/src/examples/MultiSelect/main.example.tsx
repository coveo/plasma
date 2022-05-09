import {MultiSelectConnected} from '@coveord/plasma-react';

export default () => (
    <MultiSelectConnected
        id="mutli-select-1"
        items={[
            {value: 'one', displayValue: 'Option 1'},
            {value: 'two', displayValue: 'Option 2'},
            {value: 'three', displayValue: 'Option 3'},
        ]}
    />
);
