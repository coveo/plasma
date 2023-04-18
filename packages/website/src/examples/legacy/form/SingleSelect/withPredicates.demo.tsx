import {IItemBoxProps, SingleSelectWithPredicate} from '@coveord/plasma-react';

const Demo = () => (
    <SingleSelectWithPredicate
        id="single-select-3"
        items={[
            {value: '1', displayValue: 'Option 1'},
            {value: '2', displayValue: 'Option 2'},
            {value: '3', displayValue: 'Option 3'},
            {value: '4', displayValue: 'Option 4'},
            {value: '5', displayValue: 'Option 5'},
        ]}
        options={[
            {id: 'all', option: {content: 'All'}, selected: true},
            {id: 'even', option: {content: 'Even'}},
            {id: 'odd', option: {content: 'Odd'}},
        ]}
        matchPredicate={(predicate: string, item: IItemBoxProps) => {
            const value = parseInt(item.value, 10);
            switch (predicate) {
                case 'even':
                    return value % 2 === 0;
                case 'odd':
                    return value % 2 === 1;
                default:
                    return true;
            }
        }}
    />
);
export default Demo;
