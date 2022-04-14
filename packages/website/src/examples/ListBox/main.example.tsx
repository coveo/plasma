import {Badge, BadgeType, ListBox} from '@coveord/plasma-react';
import * as React from 'react';

export default () => (
    <ListBox
        items={[
            {
                value: '1',
                displayValue: 'Option 1',
            },
            {
                value: '2',
                displayValue: 'Option 2',
                disabled: true,
            },
            {value: '3', displayValue: 'Option 3'},
            {
                value: '4',
                displayValue: <span className="ml1">Option 4</span>,
                prepend: {content: <Badge label="Tag" isSmall type={BadgeType.New} />},
            },
            {
                value: '5',
                displayValue: <span className="mr1">Option 5</span>,
                append: {content: <Badge label="Tag" isSmall type={BadgeType.New} />},
            },
        ]}
    />
);
