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

interface DemoStoryProps {
    layout: 'Horizontal' | 'Vertical';
    showHeaders: boolean;
    label?: string;
    description?: string;
    draggable?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    allowAdd?: boolean;
    addLabel?: string;
    addDisabledTooltip?: string;
    error?: string;
}

/**
 * Column-based layout pattern.
 *
 * Use the controls to switch between Horizontal and Vertical layouts, toggle headers, and test disabled/readOnly states.
 *
 * **Important:** When using `disabled` or `readOnly` props, you must pass them to your form inputs via the cell context:
 * ```tsx
 * cell: (item, index, context) => (
 *   <TextInput
 *     {...form.getInputProps(`items.${index}.name`)}
 *     disabled={context.disabled}
 *     readOnly={context.readOnly}
 *   />
 * )
 * ```
 */
export const Demo: StoryObj<DemoStoryProps> = {
    args: {
        layout: 'Horizontal',
        showHeaders: true,
    },
    argTypes: {
        layout: {
            control: 'select',
            options: ['Horizontal', 'Vertical'],
            description: 'Layout style for the collection items',
        },
        showHeaders: {
            control: 'boolean',
            description: 'Whether to show column headers',
        },
    },
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

        const layoutComponent =
            props.layout === 'Vertical' ? Collection.Layouts.Vertical : Collection.Layouts.Horizontal;

        return (
            <Collection<ContactItem>
                {...form.getInputProps('contacts')}
                w={props.layout === 'Vertical' ? 400 : 600}
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
                layout={layoutComponent}
                columns={[
                    {
                        header: props.showHeaders ? 'Name' : undefined,
                        cell: (item, index, context) => (
                            <TextInput
                                placeholder={props.showHeaders ? undefined : 'Name'}
                                {...form.getInputProps(`contacts.${index}.name`)}
                                disabled={context.disabled}
                                readOnly={context.readOnly}
                            />
                        ),
                        maxSize: 150,
                    },
                    {
                        header: props.showHeaders ? 'Email' : undefined,
                        cell: (item, index, context) => (
                            <TextInput
                                placeholder={props.showHeaders ? undefined : 'Email'}
                                {...form.getInputProps(`contacts.${index}.email`)}
                                disabled={context.disabled}
                                readOnly={context.readOnly}
                            />
                        ),
                        maxSize: 300,
                    },
                ]}
            />
        );
    },
};

/**
 * Legacy children render prop pattern.
 *
 * This demonstrates the original API for rendering collection items using a children render function.
 * Use this pattern for maximum flexibility when the column-based layout doesn't fit your needs.
 *
 * With the legacy pattern, the `disabled` and `readOnly` props are handled by the Collection component,
 * which hides the drag handle and remove button. You must manually pass these props to your form inputs.
 */
export const Legacy: Story = {
    render: (props) => {
        const form = useForm({
            initialValues: {
                contacts: ['Alice Smith', 'Bob Johnson'],
            },
            enhanceGetInputProps: (payload) => ({
                ...enhanceWithCollectionProps(payload, 'contacts'),
            }),
        });

        return (
            <Collection<string>
                {...form.getInputProps('contacts')}
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
                newItem=""
                error={props.error}
            >
                {(item, index) => (
                    <TextInput
                        placeholder="Name"
                        {...form.getInputProps(`contacts.${index}`)}
                        disabled={props.disabled}
                        readOnly={props.readOnly}
                        style={{flex: 1}}
                    />
                )}
            </Collection>
        );
    },
};
