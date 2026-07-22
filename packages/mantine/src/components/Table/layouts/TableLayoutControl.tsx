import {Grid, Group, SegmentedControl} from '@mantine/core';
import {TableComponentsOrder} from '../Table.js';
import {useTableContext} from '../TableContext.js';

export const TableLayoutControl = () => {
    const {layouts, store} = useTableContext();
    return layouts.length > 1 ? (
        <Grid.Col order={TableComponentsOrder.LayoutControl} span="content">
            <SegmentedControl
                data={layouts.map(({displayName, Icon}) => ({
                    value: displayName,
                    label: (
                        <Group gap="xs" wrap="nowrap">
                            {Icon ? <Icon size={16} /> : null}
                            {displayName}
                        </Group>
                    ),
                }))}
                value={store.state.layout === null ? layouts[0].displayName : store.state.layout}
                onChange={store.setLayout}
            />
        </Grid.Col>
    ) : null;
};
