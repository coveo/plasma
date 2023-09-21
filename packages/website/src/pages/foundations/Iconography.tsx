import * as PlasmaReactIcons from '@coveord/plasma-react-icons';
import IconographyDemo from '@examples/foundations/Iconography/Iconography.demo?demo';
import {Fragment, FunctionComponent} from 'react';

import {
    Box,
    Card,
    Center,
    Collapse,
    ColumnDef,
    CopyToClipboard,
    createColumnHelper,
    FilterFn,
    getFilteredRowModel,
    Grid,
    Group,
    renderTableCell,
    Row,
    SimpleGrid,
    Space,
    Table,
    TableLayout,
    TableLayoutProps,
    TableProps,
    Title,
    useDisclosure,
    useTable,
} from '@coveord/plasma-mantine';
import {rankItem} from '@tanstack/match-sorter-utils';
import {PageLayout} from '../../building-blocs/PageLayout';

const {iconsList, ...Icons} = PlasmaReactIcons;

type IconSet = (typeof iconsList)[number];

const IconSetCard = <T,>({getVisibleCells}: Row<T>) => {
    const [opened, {toggle}] = useDisclosure(false);
    const cells = getVisibleCells();
    const nameCell = cells.find(({column}) => column.id === 'name');
    const iconCell = cells.find(({column}) => column.id === 'render');
    const variantsCell = cells.find(({column}) => column.id === 'variants');
    return (
        <div>
            <Card shadow="md" radius="md" px="md" pb={0}>
                <Card.Section>
                    <Group noWrap p="md" position="apart" onClick={toggle} sx={{cursor: 'pointer'}}>
                        <Group>
                            {renderTableCell(iconCell.column.columnDef.cell, iconCell.getContext())}
                            <Title order={5}>
                                {renderTableCell(nameCell.column.columnDef.cell, nameCell.getContext())}
                            </Title>
                        </Group>
                        {opened ? (
                            <Icons.ArrowHeadUpSize16Px height={16} />
                        ) : (
                            <Icons.ArrowHeadDownSize16Px height={16} />
                        )}
                    </Group>
                </Card.Section>
                <Collapse in={opened}>
                    {opened ? (
                        renderTableCell(variantsCell.column.columnDef.cell, variantsCell.getContext())
                    ) : (
                        <Space h={180} />
                    )}
                    <Space h="md" />
                </Collapse>
            </Card>
        </div>
    );
};

const IconsListLayout = <T,>({table}: TableLayoutProps<T>) => {
    const iconSets = table.getRowModel().rows.map((row) => <IconSetCard key={row.id} {...row} />);
    return (
        <tr>
            <td style={{padding: 0}}>
                <SimpleGrid cols={3} p="lg">
                    {iconSets}
                </SimpleGrid>
            </td>
        </tr>
    );
};

const CardLayout: TableLayout = {
    name: 'Cards',
    Body: IconsListLayout,
    Header: () => null,
};

const fuzzyFilter: FilterFn<IconSet> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue('name'), value);
    addMeta(itemRank);
    return itemRank.passed;
};

const options: TableProps<IconSet>['options'] = {
    globalFilterFn: fuzzyFilter,
    getFilteredRowModel: getFilteredRowModel(),
};

const columnHelper = createColumnHelper<IconSet>();

const getIconSizeFromVariantName = (variantName: string) => parseInt(/(\d+)px/i.exec(variantName)?.[0] ?? '16', 10);

const columns: Array<ColumnDef<IconSet>> = [
    columnHelper.accessor('iconName', {
        id: 'name',
        header: 'Name',
        cell: ({getValue}) => getValue().charAt(0).toUpperCase() + getValue().slice(1),
    }),
    columnHelper.accessor('variants', {
        id: 'render',
        header: 'Icon',
        enableGlobalFilter: false,
        cell: ({getValue}) => {
            const Variant32px = getValue().find(
                (variantName) => getIconSizeFromVariantName(variantName) === 32,
            ) as keyof typeof Icons;
            const IconComponent = Icons[Variant32px];
            return <IconComponent height={32} />;
        },
    }),
    columnHelper.accessor('variants', {
        id: 'variants',
        header: 'Variants',
        enableGlobalFilter: false,
        cell: ({getValue}) => (
            <Grid columns={4} align="center">
                {getValue().map((svgName: keyof typeof Icons) => {
                    const IconComponent = Icons[svgName];
                    const size = parseInt(/(\d+)px/i.exec(svgName)?.[0] ?? '16', 10);
                    return IconComponent ? (
                        <Fragment key={svgName}>
                            <Grid.Col span={1}>
                                <Center>
                                    <IconComponent height={size} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={3}>
                                <CopyToClipboard value={`<${svgName} height={${size}} />`} withLabel />
                            </Grid.Col>
                        </Fragment>
                    ) : null;
                })}
            </Grid>
        ),
    }),
];

const EmptyState = () => {
    const {state} = useTable();
    return (
        <Box mih={500}>
            <Center p="lg">
                <Group>
                    <Icons.BrokenSearchSize32Px height={32} />
                    <Title order={5}>No icons match the filter "{state.globalFilter}".</Title>
                </Group>
            </Center>
        </Box>
    );
};

const IconsTable: FunctionComponent = () => (
    <Table
        data={iconsList}
        layouts={[CardLayout]}
        columns={columns}
        getRowId={({iconName}) => iconName}
        options={options}
        noDataChildren={<EmptyState />}
    >
        <Table.Header bg="gray.0">
            <Table.Filter placeholder="Search icon" />
        </Table.Header>
    </Table>
);

export const IconographyExamples = () => (
    <PageLayout
        id="Iconography"
        section="Foundations"
        title="Iconography"
        thumbnail="iconography"
        description="Icons are used to visually represent actions, functionalities, and features."
        demo={<IconographyDemo center />}
        withPropsTable={false}
    >
        <IconsTable />
    </PageLayout>
);

export default IconographyExamples;
