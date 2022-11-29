import {FlatSelectConnected} from '@coveord/plasma-react';

export default () => (
    <FlatSelectConnected
        id="flat-select-group"
        options={[
            {
                id: 'item-group-1',
                option: {content: 'Option 1'},
            },
            {
                id: 'item-group-2',
                option: {content: 'Option 2'},
            },
            {
                id: 'item-group-3',
                option: {content: 'Option 3'},
            },
        ]}
        group
    />
);
