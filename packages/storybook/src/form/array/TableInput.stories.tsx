import {
    Button,
    Center,
    createColumnHelper,
    getFilteredRowModel,
    getPaginationRowModel,
    Group,
    Table,
    TableInput,
    type TableInputProps,
    type TableProps,
    useForm,
} from '@coveord/plasma-mantine';
import {faker} from '@faker-js/faker';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {useMemo, useState} from 'react';

type Person = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
};

const columnHelper = createColumnHelper<Person>();

const makeData = (len: number): Person[] =>
    Array(len)
        .fill(0)
        .map(() => ({
            id: faker.string.uuid(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            age: faker.number.int(40),
        }));

const columns = [
    columnHelper.accessor('firstName', {header: 'First name', enableSorting: false}),
    columnHelper.accessor('lastName', {header: 'Last name', enableSorting: false}),
    columnHelper.accessor('age', {header: 'Age', enableSorting: false}),
];

const options: TableProps<Person>['options'] = {
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
};

type StoryArgs = {
    label: string;
    labelInfo: string;
    description: string;
    required: boolean;
    disabled: boolean;
    readOnly: boolean;
    disabledTooltip: string;
    withCanEdit: boolean;
    dataCount: number;
    withPagination: boolean;
};

const meta: Meta<StoryArgs> = {
    title: '@components/form/array/TableInput',
    id: 'TableInput',
};
export default meta;
type Story = StoryObj<StoryArgs>;

export const Demo: Story = {
    args: {
        label: 'Select users',
        labelInfo: '',
        description: 'Pick the users you want to include',
        required: false,
        disabled: false,
        readOnly: false,
        disabledTooltip: 'You do not have permission to edit this field',
        withCanEdit: false,
        dataCount: 20,
        withPagination: false,
    },
    argTypes: {
        dataCount: {
            control: {type: 'range', min: 0, max: 50, step: 5},
        },
    },
    render: ({
        label,
        labelInfo,
        description,
        required,
        disabled,
        readOnly,
        disabledTooltip,
        withCanEdit,
        dataCount,
        withPagination,
    }) => {
        const data = useMemo(() => makeData(dataCount), [dataCount]);
        const [selected, setSelected] = useState<Person[]>([]);

        const tableInputProps: Partial<TableInputProps<Person>> = {
            options: withPagination ? options : {getFilteredRowModel: getFilteredRowModel()},
        };

        return (
            <div>
                <TableInput<Person>
                    data={data}
                    columns={columns}
                    getRowId={({id}) => id}
                    label={label}
                    labelInfo={labelInfo || undefined}
                    description={description}
                    required={required}
                    disabled={disabled}
                    readOnly={readOnly}
                    disabledTooltip={disabledTooltip}
                    value={selected}
                    onChange={setSelected}
                    getRowCanEdit={withCanEdit ? (_datum, index) => index % 2 !== 0 : undefined}
                    {...tableInputProps}
                >
                    <Table.Header>
                        <Table.Filter />
                    </Table.Header>
                    {withPagination ? (
                        <Table.Footer>
                            <Table.PerPage values={[5, 10, 25]} />
                            <Table.Pagination />
                        </Table.Footer>
                    ) : null}
                    <Table.NoData>
                        <Center p="xl">No data available</Center>
                    </Table.NoData>
                </TableInput>
                <pre style={{marginTop: 16, fontSize: 12}}>
                    Selected ({selected.length}):{' '}
                    {JSON.stringify(selected.map(({firstName, lastName}) => `${firstName} ${lastName}`))}
                </pre>
            </div>
        );
    },
};

export const WithForm: Story = {
    args: {
        label: 'Select users',
        labelInfo: '',
        description: 'Pick the users you want to include',
        required: false,
        disabled: false,
        readOnly: false,
        disabledTooltip: 'You do not have permission to edit this field',
        withCanEdit: false,
        dataCount: 20,
        withPagination: false,
    },
    argTypes: {
        dataCount: {
            control: {type: 'range', min: 0, max: 50, step: 5},
        },
    },
    render: ({
        label,
        labelInfo,
        description,
        required,
        disabled,
        readOnly,
        disabledTooltip,
        withCanEdit,
        dataCount,
        withPagination,
    }) => {
        const data = useMemo(() => makeData(dataCount), [dataCount]);

        const form = useForm<{selectedUsers: Person[]}>({
            initialValues: {
                selectedUsers: [],
            },
        });

        return (
            <form
                onSubmit={form.onSubmit((values) => {
                    alert(
                        `Submitted ${values.selectedUsers.length} users: ${values.selectedUsers.map(({firstName, lastName}) => `${firstName} ${lastName}`).join(', ')}`,
                    );
                })}
            >
                <TableInput<Person>
                    label={label}
                    labelInfo={labelInfo || undefined}
                    description={description}
                    required={required}
                    disabled={disabled}
                    readOnly={readOnly}
                    disabledTooltip={disabledTooltip}
                    data={data}
                    columns={columns}
                    getRowId={({id}) => id}
                    options={{getFilteredRowModel: getFilteredRowModel()}}
                    getRowCanEdit={withCanEdit ? (_datum, index) => index % 2 !== 0 : undefined}
                    {...form.getInputProps('selectedUsers')}
                >
                    <Table.Header>
                        <Table.Filter />
                    </Table.Header>
                    {withPagination ? (
                        <Table.Footer>
                            <Table.PerPage values={[5, 10, 25]} />
                            <Table.Pagination />
                        </Table.Footer>
                    ) : null}
                    <Table.NoData>
                        <Center p="xl">No data available</Center>
                    </Table.NoData>
                </TableInput>
                <Group mt="md">
                    <Button.Primary type="submit">Submit</Button.Primary>
                </Group>
                <pre style={{marginTop: 16, fontSize: 12}}>
                    form.values.selectedUsers ({form.values.selectedUsers.length}):{' '}
                    {JSON.stringify(
                        form.values.selectedUsers.map(({firstName, lastName}) => `${firstName} ${lastName}`),
                    )}
                </pre>
            </form>
        );
    },
};
