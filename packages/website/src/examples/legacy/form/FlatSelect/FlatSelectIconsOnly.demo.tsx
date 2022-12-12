import {FlatSelectConnected} from '@coveord/plasma-react';
import {Donut64Size24Px} from '@coveord/plasma-react-icons';

export default () => (
    <FlatSelectConnected
        id="flat-select-id"
        options={[
            {
                id: 'item-id-1',
                option: {content: <Donut64Size24Px />},
            },
            {
                id: 'item-id-2',
                option: {content: <Donut64Size24Px />},
            },
            {
                id: 'item-id-3',
                option: {content: <Donut64Size24Px />},
                disabled: true,
            },
        ]}
    />
);
