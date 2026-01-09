import {enhanceWithCollectionProps, TextInput, useForm} from '@coveord/plasma-mantine';
import {Collection} from '@coveord/plasma-mantine/components/Collection';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {FunctionComponent, ReactNode, useCallback, useMemo, useRef} from 'react';
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

const PlaceholderCollectionItem: FunctionComponent<{children: ReactNode}> = ({children}) => (
    <div
        style={{
            height: 36,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--mantine-radius-default)',
            backgroundColor: 'var(--mantine-color-blue-2)',
        }}
    >
        {children}
    </div>
);
PlaceholderCollectionItem.displayName = 'PlaceholderCollectionItem';

const useCounter = () => {
    const count = useRef(0);
    const getNext = useCallback(() => {
        count.current += 1;
        return count.current.toString();
    }, []);
    return getNext;
};

/**
 * Legacy pattern using children render prop
 */
export const Demo: Story = {
    render: (props) => {
        const getNext = useCounter();
        const items = useMemo(() => [getNext(), getNext(), getNext()], []);
        const form = useForm({
            initialValues: {items},
            enhanceGetInputProps: (payload) => ({
                ...enhanceWithCollectionProps(payload, 'items'),
            }),
        });
        return (
            <Collection<string>
                {...form.getInputProps('items')}
                w={400}
                required={props.required}
                draggable={props.draggable}
                addLabel={props.addLabel}
                description={props.description}
                addDisabledTooltip={props.addDisabledTooltip}
                disabled={props.disabled}
                readOnly={props.readOnly}
                label={props.label}
                allowAdd={props.allowAdd}
                newItem={getNext}
                error={props.error}
            >
                {(item) => <PlaceholderCollectionItem>Collection item {item}</PlaceholderCollectionItem>}
            </Collection>
        );
    },
};

/**
 * Column-based pattern with HorizontalLayout (default)
 */
export const WithColumnsHorizontal: Story = {
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
                label="Contacts"
                description="Manage your contact list with column headers"
                draggable={props.draggable}
                disabled={props.disabled}
                readOnly={props.readOnly}
                required={props.required}
                newItem={{name: '', email: ''}}
                columns={[
                    {
                        header: 'Name',
                        cell: (item, index) => <TextInput {...form.getInputProps(`contacts.${index}.name`)} />,
                        size: '50%',
                    },
                    {
                        header: 'Email',
                        cell: (item, index) => <TextInput {...form.getInputProps(`contacts.${index}.email`)} />,
                        size: '50%',
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
                description="Name column is wider than email"
                draggable={props.draggable}
                disabled={props.disabled}
                newItem={{name: '', email: ''}}
                columns={[
                    {
                        header: 'Name',
                        cell: (item, index) => <TextInput {...form.getInputProps(`contacts.${index}.name`)} />,
                        size: 400,
                        minSize: 200,
                    },
                    {
                        header: 'Email',
                        cell: (item, index) => <TextInput {...form.getInputProps(`contacts.${index}.email`)} />,
                        size: 250,
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
                            <TextInput
                                placeholder="Name"
                                {...form.getInputProps(`contacts.${index}.name`)}
                            />
                        ),
                        size: '50%',
                    },
                    {
                        cell: (item, index) => (
                            <TextInput
                                placeholder="Email"
                                {...form.getInputProps(`contacts.${index}.email`)}
                            />
                        ),
                        size: '50%',
                    },
                ]}
            />
        );
    },
};
