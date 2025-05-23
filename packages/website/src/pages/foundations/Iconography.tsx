import * as PlasmaReactIcons from '@coveord/plasma-react-icons';
import {Accordion, AlertAdvice, AlertWarning, Anchor, Code, InfoToken, Stack, Text} from '@coveord/plasma-mantine';
import IconographyDemo from '@examples/foundations/Iconography/Iconography.demo?demo';
import {Fragment, FunctionComponent} from 'react';

import {
    Box,
    Card,
    Center,
    Collapse,
    ColumnDef,
    CopyToClipboard,
    FilterFn,
    Grid,
    Group,
    Row,
    SimpleGrid,
    Space,
    Table,
    TableLayout,
    TableProps,
    Title,
    createColumnHelper,
    getFilteredRowModel,
    renderTableCell,
    useDisclosure,
    useTable,
    useTableContext,
} from '@coveord/plasma-mantine';
import {rankItem} from '@tanstack/match-sorter-utils';
import {withTranslation, WithTranslation} from 'react-i18next';
import {PageLayout} from '../../building-blocs/PageLayout';

const {plasmaIconsList, ...Icons} = PlasmaReactIcons;

type IconSet = (typeof plasmaIconsList)[number];

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
                    <Group wrap="nowrap" p="md" justify="space-between" onClick={toggle} style={{cursor: 'pointer'}}>
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

const IconsListLayout = () => {
    const {table} = useTableContext<IconSet>();
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

const CardLayout: TableLayout = ({children}) => <>{children}</>;
CardLayout.displayName = 'Cards';
CardLayout.Body = IconsListLayout;
CardLayout.Header = () => null;

const fuzzyFilter: FilterFn<IconSet> = (row, columnId, value: string, addMeta) => {
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
            const IconComponent = Icons[Variant32px] as React.ForwardRefExoticComponent<
                Omit<React.SVGProps<SVGSVGElement>, 'ref'> & React.RefAttributes<SVGSVGElement>
            >;
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
                    const IconComponent = Icons[svgName] as React.ForwardRefExoticComponent<
                        Omit<React.SVGProps<SVGSVGElement>, 'ref'> & React.RefAttributes<SVGSVGElement>
                    >;
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

const EmptyState: FunctionComponent<{filter: string} & WithTranslation> = ({t, filter}) => (
    <Box mih={500}>
        <Center p="lg">
            <Group>
                <Icons.BrokenSearchSize32Px height={32} />
                <Title order={5}>
                    {t('iconography_empty-state_start')}"{filter}".
                </Title>
            </Group>
        </Center>
    </Box>
);

const PlasmaIconsTable: FunctionComponent<WithTranslation> = ({t, i18n, tReady}) => {
    const table = useTable<IconSet>();
    return (
        <Table
            store={table}
            data={plasmaIconsList}
            layouts={[CardLayout]}
            columns={columns}
            getRowId={({iconName}) => iconName}
            options={options}
        >
            <Table.Header bg="gray.0">
                <Table.Filter placeholder="Search icon" />
            </Table.Header>
            <Table.NoData>
                <EmptyState t={t} i18n={i18n} tReady={tReady} filter={table.state.globalFilter} />
            </Table.NoData>
        </Table>
    );
};

export const InternalIconographyExamples: FunctionComponent<WithTranslation> = ({t, i18n, tReady}) => (
    <PageLayout
        id="Iconography"
        section="Foundations"
        title="Iconography"
        thumbnail="iconography"
        description="Icons are used to visually represent actions, functionalities, and features."
        demo={<IconographyDemo center />}
        withPropsTable={false}
    >
        <AlertAdvice title="Prefer Tabler Icons">
            <Text>
                {t('iconography_description-start')}
                <Code>{t('iconography_description-code')}</Code> {t('iconography-description-middle')}{' '}
                <Anchor target="_blank" href="https://tabler.io/icons" rel="noreferrer noopener">
                    {t('iconography_description-icons-website')}
                </Anchor>
            </Text>
        </AlertAdvice>
        <Accordion variant="contained">
            <Accordion.Item value="plasma-icons">
                <Accordion.Control icon={<InfoToken variant="information" />}>
                    {t('iconography-description-icons-in-house')}
                </Accordion.Control>
                <Accordion.Panel>
                    <Stack>
                        <AlertWarning title="Deprecated">{t('iconography-deprecated_warning')}</AlertWarning>
                        <PlasmaIconsTable t={t} i18n={i18n} tReady={tReady} />
                    </Stack>
                </Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    </PageLayout>
);

const IconographyExamples = withTranslation()(InternalIconographyExamples);
export default IconographyExamples;
