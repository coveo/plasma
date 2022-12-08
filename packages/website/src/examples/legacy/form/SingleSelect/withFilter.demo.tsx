import {SingleSelectWithFilter} from '@coveord/plasma-react';

export default () => (
    <SingleSelectWithFilter
        id="single-select-2"
        items={[
            {value: 'one', displayValue: 'Option 1'},
            {value: 'two', displayValue: 'Option 2'},
            {value: 'three', displayValue: 'Option 3'},
            {value: 'four', displayValue: 'Option 4'},
            {value: 'five', displayValue: 'Option 5'},
        ]}
    />
);
