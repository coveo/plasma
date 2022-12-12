import {FlatSelectConnected} from '@coveord/plasma-react';
import {ZombieSize16Px} from '@coveord/plasma-react-icons';

export default () => (
    <FlatSelectConnected
        id="flat-select-append-prepend-id"
        options={[
            {
                id: 'item-prepend',
                option: {content: 'Option 1'},
                prepend: {content: <ZombieSize16Px />},
            },
            {
                id: 'item-append',
                option: {content: 'Option 2'},
                append: {content: <ZombieSize16Px />},
            },
            {
                id: 'item-append2',
                option: {content: 'Disabled 3'},
                append: {content: <ZombieSize16Px />},
                disabled: true,
            },
        ]}
    />
);
