import {enhanceWithCollectionProps, TextInput, useForm} from '@coveord/plasma-mantine';
import {Collection} from '@coveord/plasma-mantine/components/Collection';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {BaseInputArgs, InputWrapperArgs} from '../InputWrapperArgs.js';

interface ContactItem {
    name: string;
    email: string;
}

const meta: Meta<typeof Collection> = {
    title: '@components/form/array/Collection',
    id: 'Collection',
    component: Collection,
    parameters: {
        layout: 'centered',
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
        draggable: true,
        allowAdd: true,
        addLabel: 'Add item',
        addDisabledTooltip: 'Adding item is disabled',
    },
    argTypes: {
        ...InputWrapperArgs.ArgsTypes,
        ...BaseInputArgs.ArgsTypes,
    },
};
export default meta;
type Story = StoryObj<typeof Collection>;

/**
 * Column-based pattern with HorizontalLayout (default)
 */
export const Demo: Story = {
    render: (props) => {
        const form = useForm({
            initialValues: {
                contacts: [
                    {name: 'Alice Smith', email: 'alice@example.com'},
                    {name: 'Bob Johnson', email: 'bob@example.com'},
                ],
            },
            enhanceGetInputProps: (payload) => ({
                ...enhanceWithCollectionProps(payload, 'contacts'),
            }),
        });

        return (
            <Collection<ContactItem>
                {...form.getInputProps('contacts')}
                w={600}
                label={props.label}
                description={props.description}
                draggable={props.draggable}
                disabled={props.disabled}
                readOnly={props.readOnly}
                required={props.required}
                allowAdd={props.allowAdd}
                addLabel={props.addLabel}
                addDisabledTooltip={props.addDisabledTooltip}
                error={props.error}
                newItem={{name: '', email: ''}}
                columns={[
                    {
                        header: 'Name',
                        cell: (item, index) => <TextInput {...form.getInputProps(`contacts.${index}.name`)} />,
                    },
                    {
                        header: 'Email',
                        cell: (item, index) => <TextInput {...form.getInputProps(`contacts.${index}.email`)} />,
                    },
                ]}
            />
        );
    },
};

/**
 * Column-based pattern with VerticalLayout
 */
export const WithColumnsVertical: Story = {
    render: (props) => {
        const form = useForm({
            initialValues: {
                contacts: [
                    {name: 'Alice Smith', email: 'alice@example.com'},
                    {name: 'Bob Johnson', email: 'bob@example.com'},
                ],
            },
            enhanceGetInputProps: (payload) => ({
                ...enhanceWithCollectionProps(payload, 'contacts'),
            }),
        });

        return (
            <Collection<ContactItem>
                {...form.getInputProps('contacts')}
                w={400}
                label="Contacts (Vertical Layout)"
                description="Each contact is displayed as a card with labels above fields"
                draggable={props.draggable}
                disabled={props.disabled}
                readOnly={props.readOnly}
                required={props.required}
                newItem={{name: '', email: ''}}
                layout={Collection.Layouts.Vertical}
                columns={[
                    {
                        header: 'Name',
                        cell: (item, index) => <TextInput {...form.getInputProps(`contacts.${index}.name`)} />,
                    },
                    {
                        header: 'Email',
                        cell: (item, index) => <TextInput {...form.getInputProps(`contacts.${index}.email`)} />,
                    },
                ]}
            />
        );
    },
};

/**
 * Column-based pattern with custom column sizing
 */
export const WithCustomSizing: Story = {
    render: (props) => {
        const form = useForm({
            initialValues: {
                contacts: [
                    {name: 'Alice Smith', email: 'alice@example.com'},
                    {name: 'Bob Johnson', email: 'bob@example.com'},
                ],
            },
            enhanceGetInputProps: (payload) => ({
                ...enhanceWithCollectionProps(payload, 'contacts'),
            }),
        });

        return (
            <Collection<ContactItem>
                {...form.getInputProps('contacts')}
                w={700}
                label="Contacts with Custom Sizing"
                description="Email column is wider than name"
                draggable={props.draggable}
                disabled={props.disabled}
                newItem={{name: '', email: ''}}
                columns={[
                    {
                        header: 'Name',
                        cell: (item, index) => <TextInput {...form.getInputProps(`contacts.${index}.name`)} />,
                        maxSize: 150,
                    },
                    {
                        header: 'Email',
                        cell: (item, index) => <TextInput {...form.getInputProps(`contacts.${index}.email`)} />,
                        maxSize: 500,
                    },
                ]}
            />
        );
    },
};

/**
 * Column-based pattern without headers
 */
export const WithoutHeaders: Story = {
    render: (props) => {
        const form = useForm({
            initialValues: {
                contacts: [
                    {name: 'Alice Smith', email: 'alice@example.com'},
                    {name: 'Bob Johnson', email: 'bob@example.com'},
                ],
            },
            enhanceGetInputProps: (payload) => ({
                ...enhanceWithCollectionProps(payload, 'contacts'),
            }),
        });

        return (
            <Collection<ContactItem>
                {...form.getInputProps('contacts')}
                w={600}
                label="Contacts without Headers"
                description="Columns without header labels"
                draggable={props.draggable}
                disabled={props.disabled}
                newItem={{name: '', email: ''}}
                columns={[
                    {
                        cell: (item, index) => (
                            <TextInput placeholder="Name" {...form.getInputProps(`contacts.${index}.name`)} />
                        ),
                    },
                    {
                        cell: (item, index) => (
                            <TextInput placeholder="Email" {...form.getInputProps(`contacts.${index}.email`)} />
                        ),
                    },
                ]}
            />
        );
    },
};
