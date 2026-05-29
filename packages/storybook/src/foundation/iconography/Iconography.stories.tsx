import {
    Alert,
    Anchor,
    BlankSlate,
    Button,
    Code,
    type ColumnDef,
    createColumnHelper,
    FilterFn,
    getFilteredRowModel,
    getPaginationRowModel,
    Header,
    Stack,
    Table,
    Text,
    Title,
    useTable,
    useTableContext,
} from '@coveord/plasma-mantine';
import * as PlasmaReactIcons from '@coveord/plasma-react-icons';
import {icons as tablerIcons, iconsList as tablerIconsListModule} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {useMemo} from 'react';
import {FoundationWrapper} from '../FoundationWrapper.js';

const {plasmaIconsList, ...Icons} = PlasmaReactIcons;

const tablerIconsList: string[] = Array.isArray(tablerIconsListModule)
    ? tablerIconsListModule
    : ((tablerIconsListModule as any).default ?? []);

type IconSet = (typeof plasmaIconsList)[number];

const includesFilter: FilterFn<any> = (row, columnId, value: string) =>
    (row.getValue(columnId) as string).toLowerCase().includes(value.toLowerCase());

const useIcon = (variants: string[]) => {
    const table = useTableContext();
    const currentVariant = table.store.state.predicates.variant;
    const size = currentVariant?.replace('px', '') || '24';
    const variant = variants.find((v: string) => v.toLowerCase().indexOf(size + 'px') > 0) ?? variants[0];
    return {size, variant};
};

const PlasmaCodeCell = ({variants}: {variants: string[]}) => {
    const {size, variant} = useIcon(variants);
    return <Code>{`<${variant} height={${size}} />`}</Code>;
};

const PlasmaIconCell = ({variants}: {variants: string[]}) => {
    const {size, variant} = useIcon(variants);
    const Comp = Icons[variant as keyof typeof Icons] as React.ForwardRefExoticComponent<
        Omit<React.SVGProps<SVGSVGElement>, 'ref'> & React.RefAttributes<SVGSVGElement>
    >;
    return Comp ? <Comp height={size} /> : null;
};

const plasmaColumnHelper = createColumnHelper<IconSet>();
const plasmaColumns = [
    plasmaColumnHelper.accessor('iconName', {
        id: 'name',
        header: 'Name',
        enableSorting: false,
    }),
    plasmaColumnHelper.accessor('variants', {
        id: 'import',
        header: 'Code',
        enableGlobalFilter: false,
        enableSorting: false,
        cell: ({getValue}) => <PlasmaCodeCell variants={getValue()} />,
    }),
    plasmaColumnHelper.accessor('variants', {
        id: 'icon',
        header: 'Icon',
        enableGlobalFilter: false,
        enableSorting: false,
        cell: ({getValue}) => <PlasmaIconCell variants={getValue()} />,
    }),
];

const variantSizes = ['16px', '24px', '32px', '48px', '56px', '64px'];

const variantFilter = (icon: IconSet, predicates: Record<string, string>) => {
    const size = predicates['variant'];
    return icon.variants.some((v: string) => v.toLowerCase().includes(size.replace('px', '') + 'px'));
};

const PlasmaIconsTable = () => {
    const table = useTable<IconSet>({
        initialState: {totalEntries: plasmaIconsList.length, pagination: {pageSize: 10}, predicates: {variant: '24px'}},
        enableRowSelection: false,
    });

    const filteredData = useMemo(
        () => plasmaIconsList.filter((icon: IconSet) => variantFilter(icon, table.state.predicates)),
        [table.state.predicates.variant],
    );

    return (
        <Table<IconSet>
            store={table}
            columns={plasmaColumns as Array<ColumnDef<IconSet, unknown>>}
            data={filteredData}
            getRowId={({iconName}) => iconName}
            options={{
                globalFilterFn: includesFilter,
                getFilteredRowModel: getFilteredRowModel(),
                getPaginationRowModel: getPaginationRowModel(),
            }}
        >
            <Table.Header>
                <Table.Filter placeholder="Search icons..." />
                <Table.Predicate id="variant" label="Size" data={variantSizes.map((s) => ({value: s, label: s}))} />
            </Table.Header>
            <Table.NoData>
                <BlankSlate withBorder={false}>
                    <Title order={4}>No icons match "{table.state.globalFilter}"</Title>
                    <Button.Tertiary onClick={table.clearFilters}>Clear filter</Button.Tertiary>
                </BlankSlate>
            </Table.NoData>
            <Table.Footer>
                <Table.PerPage values={[10, 25, 100]} />
                <Table.Pagination />
            </Table.Footer>
        </Table>
    );
};

type TablerIconRow = {
    name: string;
    componentName: string;
};

const tablerIconRows: TablerIconRow[] = tablerIconsList.map((name: string) => {
    const componentName =
        'Icon' +
        name
            .split('-')
            .map((s: string) => s.charAt(0).toUpperCase() + s.slice(1))
            .join('');
    return {name, componentName};
});

const tablerColumnHelper = createColumnHelper<TablerIconRow>();
const tablerColumns = [
    tablerColumnHelper.accessor('name', {
        header: 'Name',
        enableSorting: false,
    }),
    tablerColumnHelper.accessor('componentName', {
        id: 'import',
        header: 'JSX',
        cell: ({getValue}) => <Code>{`<${getValue()} size={24} />`}</Code>,
        enableSorting: false,
    }),
    tablerColumnHelper.display({
        id: 'icon',
        header: 'Icon',
        cell: ({row}) => {
            const Comp = (tablerIcons as Record<string, React.ComponentType<{size?: number}>>)[
                row.original.componentName
            ];
            return Comp ? <Comp size={24} /> : null;
        },
    }),
];

const TablerIconsTable = () => {
    const table = useTable<TablerIconRow>({
        initialState: {totalEntries: tablerIconRows.length, pagination: {pageSize: 10}},
        enableRowSelection: false,
    });
    return (
        <Table<TablerIconRow>
            store={table}
            columns={tablerColumns as Array<ColumnDef<TablerIconRow, unknown>>}
            data={tablerIconRows}
            getRowId={({name}) => name}
            options={{
                globalFilterFn: includesFilter,
                getFilteredRowModel: getFilteredRowModel(),
                getPaginationRowModel: getPaginationRowModel(),
            }}
        >
            <Table.Header>
                <Table.Filter placeholder="Search icons..." />
            </Table.Header>
            <Table.NoData>
                <BlankSlate withBorder={false}>
                    <Title order={4}>No icons match "{table.state.globalFilter}"</Title>
                    <Button.Tertiary onClick={table.clearFilters}>Clear filter</Button.Tertiary>
                </BlankSlate>
            </Table.NoData>
            <Table.Footer>
                <Table.PerPage values={[10, 25, 100]} />
                <Table.Pagination />
            </Table.Footer>
        </Table>
    );
};

const meta: Meta = {
    title: '@foundation/Iconography',
    id: 'iconography',
    tags: ['!dev'],
    parameters: {
        layout: 'padded',
        controls: {disable: true},
    },
};

export default meta;
type Story = StoryObj;

export const Overview: Story = {
    render: () => (
        <FoundationWrapper
            title="Iconography"
            description="Icons are used to visually represent actions, functionalities, and features."
        >
            <Stack>
                <Header variant="secondary">Tabler</Header>
                <Alert.Advice title="Prefer Tabler Icons">
                    <Text>
                        We use the <Code>@tabler/icons-react</Code> library for our icons. Import them from{' '}
                        <Code>@coveord/plasma-react-icons</Code>. Consult the full list on{' '}
                        <Anchor target="_blank" href="https://tabler.io/icons" rel="noreferrer noopener">
                            tabler.io/icons
                        </Anchor>
                        .
                    </Text>
                </Alert.Advice>
            </Stack>

            <TablerIconsTable />

            <Stack>
                <Header variant="secondary">Custom</Header>
                <Alert.Warning title="Deprecated">
                    The icons in this list are deprecated in favor of Tabler Icons. Only use in-house icons if no Tabler
                    icon fits your needs.
                </Alert.Warning>
                <PlasmaIconsTable />
            </Stack>
        </FoundationWrapper>
    ),
};
