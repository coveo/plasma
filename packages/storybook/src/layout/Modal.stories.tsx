import {Button, createColumnHelper, Table, Tabs, useTable} from '@coveord/plasma-mantine';
import {Modal} from '@coveord/plasma-mantine/components/Modal';
import {faker} from '@faker-js/faker';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {useMemo, type ComponentProps} from 'react';
import {useArgs} from 'storybook/preview-api';

type ModalStoryArgs = ComponentProps<typeof Modal> & {
    helpLabel?: string;
    helpHref?: string;
};

const meta = {
    title: '@components/layout/Modal',
    id: 'Modal',
    args: {
        opened: true,
        centered: false,
        size: 'sm',
        title: 'Title',
        helpLabel: 'Tooltip',
        helpHref: 'https://about:blank',
        description: 'Description',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
    },
} satisfies Meta<ModalStoryArgs>;
export default meta;
type Story = StoryObj<ModalStoryArgs>;

export const Demo: Story = {
    render: (args) => {
        const [{opened}, updateArgs] = useArgs<ModalStoryArgs>();
        const close = () => updateArgs({opened: false});
        return (
            <Modal
                centered={args.centered}
                size={args.size}
                opened={opened}
                title={args.title}
                description={args.description}
                help={args.helpLabel || args.helpHref ? {href: args.helpHref, label: args.helpLabel} : undefined}
                onClose={close}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dui sed sapien finibus malesuada id
                sit amet risus. Praesent finibus sapien vel dolor bibendum, eget euismod metus dignissim. Phasellus
                lacinia sem nunc, vel dapibus odio suscipit id. Aenean lobortis sollicitudin suscipit. Cras vitae ipsum
                sit amet nibh efficitur imperdiet. Praesent scelerisque erat est. Cras dictum sodales tellus sed pretium
                <Modal.Footer>
                    <Button.Tertiary onClick={close}>Cancel</Button.Tertiary>
                    <Button.Primary onClick={close}>Save</Button.Primary>
                </Modal.Footer>
            </Modal>
        );
    },
};

export const ModalWithTabs: Story = {
    render: (args) => {
        const [{opened}, updateArgs] = useArgs<ModalStoryArgs>();
        const close = () => updateArgs({opened: false});
        return (
            <Modal
                size={args.size}
                centered={args.centered}
                opened={opened}
                title={args.title}
                description={args.description}
                help={args.helpLabel || args.helpHref ? {href: args.helpHref, label: args.helpLabel} : undefined}
                onClose={close}
            >
                <Tabs defaultValue="tab-1" mih={500}>
                    <Tabs.List>
                        <Tabs.Tab value="tab-1">Tab 1</Tabs.Tab>
                        <Tabs.Tab value="tab-2">Tab 2</Tabs.Tab>
                        <Tabs.Tab value="tab-3">Tab 3</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="tab-1">Tab 1 content</Tabs.Panel>
                    <Tabs.Panel value="tab-2">Tab 2 content</Tabs.Panel>
                    <Tabs.Panel value="tab-3">Tab 3 content</Tabs.Panel>
                </Tabs>
                <Modal.Footer>
                    <Button.Tertiary onClick={close}>Cancel</Button.Tertiary>
                    <Button.Primary onClick={close}>Save</Button.Primary>
                </Modal.Footer>
            </Modal>
        );
    },
};

type Person = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
};

const columnHelper = createColumnHelper<Person>();
const columns = [
    columnHelper.accessor('firstName', {
        header: 'First name',
    }),
    columnHelper.accessor('lastName', {
        header: 'Last name',
    }),
    columnHelper.accessor('age', {
        header: 'Age',
    }),
];
const makeData = (len: number): Person[] =>
    Array(len)
        .fill(0)
        .map(() => ({
            id: faker.string.uuid(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            age: faker.number.int(40),
        }));

export const ModalWithTable: Story = {
    render: (args) => {
        const [{opened}, updateArgs] = useArgs<ModalStoryArgs>();
        const close = () => updateArgs({opened: false});
        const data = useMemo(() => makeData(20), []);

        const table = useTable<Person>({
            initialState: {
                totalEntries: data.length,
            },
        });
        return (
            <Modal
                size={args.size}
                centered={args.centered}
                opened={opened}
                title={args.title}
                description={args.description}
                help={args.helpLabel || args.helpHref ? {href: args.helpHref, label: args.helpLabel} : undefined}
                onClose={close}
            >
                <Table<Person> store={table} columns={columns} getRowId={({id}) => id.toString()} data={data} />
                <Modal.Footer>
                    <Button.Tertiary onClick={close}>Cancel</Button.Tertiary>
                    <Button.Primary onClick={close}>Save</Button.Primary>
                </Modal.Footer>
            </Modal>
        );
    },
};
