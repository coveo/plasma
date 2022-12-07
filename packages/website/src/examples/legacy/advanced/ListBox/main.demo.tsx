import {Badge, BadgeType, ListBox} from '@coveord/plasma-react';

export default () => (
    <div style={{width: 300}}>
        <ListBox
            items={[
                {
                    value: '1',
                    displayValue: 'All',
                },
                {
                    value: 'soDivider',
                    divider: true,
                },
                {
                    value: '2',
                    displayValue: 'Option 2',
                    disabled: true,
                },
                {value: '3', displayValue: 'Option 3'},
                {
                    value: '4',
                    displayValue: 'Option 4',
                    prepend: {content: <Badge label="Tag" isSmall type={BadgeType.New} />},
                },
                {
                    value: '5',
                    displayValue: 'Option 5',
                    append: {content: <Badge label="Tag" isSmall type={BadgeType.New} />},
                },
            ]}
        />
    </div>
);
