import {FlatSelectConnected} from '@coveord/plasma-react';

export default () => (
    <FlatSelectConnected
        id="flat-select-option-picker"
        options={[
            {
                id: 'item-option-picker-1',
                option: {content: 'Option 1'},
            },
            {
                id: 'item-option-picker-2',
                option: {content: 'Option 2'},
            },
            {
                id: 'item-option-picker-3',
                option: {content: 'Option 3'},
            },
        ]}
        optionPicker
    />
);
