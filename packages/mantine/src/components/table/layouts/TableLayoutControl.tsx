import {Box, Center, Grid, SegmentedControl, Space} from '@mantine/core';
import {TableComponentsOrder} from '../Table';
import {useTableContext} from '../TableContext';

export const TableLayoutControl = () => {
    const {layouts, store} = useTableContext();
    return layouts.length > 1 ? (
        <Grid.Col order={TableComponentsOrder.LayoutControl} span="content">
            <SegmentedControl
                data={layouts.map(({displayName, Icon}) => ({
                    value: displayName,
                    label: (
                        <Center>
                            {Icon ? (
                                <>
                                    <Icon height={16} />
                                    <Space w="xs" />
                                </>
                            ) : null}
                            <Box>{displayName}</Box>
                        </Center>
                    ),
                }))}
                value={store.state.layout === null ? layouts[0].displayName : store.state.layout}
                onChange={store.setLayout}
            />
        </Grid.Col>
    ) : null;
};
