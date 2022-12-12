import {FlatSelectConnected} from '@coveord/plasma-react';

export default () => (
    <FlatSelectConnected
        id="flat-select-disabled"
        options={[
            {
                id: 'item-disabled-1',
                option: {content: 'Option 1'},
            },
            {
                id: 'item-disabled-2',
                option: {content: 'Option 2'},
            },
            {
                id: 'item-disabled-3',
                option: {content: 'Option 3'},
            },
        ]}
        disabled
    />
);
