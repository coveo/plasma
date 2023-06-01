import {Box, Center, Grid, SegmentedControl, Space} from '@mantine/core';
import {TableComponentsOrder} from './Table.styles';
import {useTable} from './TableContext';

export const TableLayoutControl = () => {
    const {form, layouts} = useTable();
    return layouts.length > 1 ? (
        <Grid.Col order={TableComponentsOrder.LayoutControl} span="content">
            <SegmentedControl
                color="action"
                data={layouts.map(({name, icon: Icon}) => ({
                    value: name,
                    label: (
                        <Center>
                            {Icon ? (
                                <>
                                    <Icon height={16} />
                                    <Space w="xs" />
                                </>
                            ) : null}
                            <Box>{name}</Box>
                        </Center>
                    ),
                }))}
                {...form.getInputProps('layout')}
            />
        </Grid.Col>
    ) : null;
};
