import {FlatSelectConnected} from '@coveord/plasma-react';

const Demo = () => (
    <FlatSelectConnected
        id="flat-select-id"
        options={[
            {
                id: 'item-id-1',
                option: {content: 'Option 1'},
            },
            {
                id: 'item-id-2',
                option: {content: 'Option 2'},
            },
            {
                id: 'item-id-3',
                option: {content: 'Option 3'},
                tooltip: {
                    title: 'Option 3 tooltip',
                    container: 'body',
                    placement: 'bottom',
                },
            },
            {
                id: 'item-id-4',
                option: {content: 'Option 4'},
                disabled: true,
            },
        ]}
    />
);
export default Demo;
