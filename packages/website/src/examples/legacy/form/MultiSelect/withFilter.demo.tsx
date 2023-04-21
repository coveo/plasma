import {MultiSelectWithFilter} from '@coveord/plasma-react';

const Demo = () => (
    <MultiSelectWithFilter
        id="mutli-select-2"
        customValues
        items={[
            {value: 'one', displayValue: 'Option 1'},
            {value: 'two', displayValue: 'Option 2'},
            {value: 'three', displayValue: 'Option 3'},
        ]}
    />
);
export default Demo;
