import {FlatSelectConnected} from '@coveord/plasma-react';
import {ZombieSize16Px} from '@coveord/plasma-react-icons';
import * as React from 'react';

export default () => (
    <FlatSelectConnected
        id="flat-select-append-prepend-id"
        options={[
            {
                id: 'item-prepend',
                option: {content: 'Option 1'},
                prepend: {content: () => <ZombieSize16Px className="mr1" />},
            },
            {
                id: 'item-append',
                option: {content: 'Option 2'},
                append: {content: () => <ZombieSize16Px className="ml1" />},
            },
        ]}
    />
);
