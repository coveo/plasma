import {Checkbox} from '@coveord/plasma-mantine/components/Checkbox';
import {Group} from '@coveord/plasma-mantine/components/Group';
import {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Checkbox> = {
    title: '@components/form/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        disabled: {
            control: 'boolean',
            description: 'Disabled state',
        },
        label: {
            control: 'text',
            description: 'Checkbox label',
        },
        description: {
            control: 'text',
            description: 'Checkbox description',
        },
        error: {
            control: 'text',
            description: 'Error message',
        },
        readOnly: {
            control: 'boolean',
            description: 'Read only state',
        },
    },
    args: {
        disabled: false,
        readOnly: false,
        label: 'Label',
        description: 'Description',
        error: '',
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const CheckboxItem: Story = {
    render: (props: any) => <Checkbox {...props} />,
};

export const CheckboxGroup: Story = {
    render: (props: any) => (
        <Checkbox.Group {...props}>
            <Group mt="xs">
                <Checkbox value="1" label="Option 1" readOnly={props.readOnly} />
                <Checkbox value="2" label="Option 2" readOnly={props.readOnly} />
                <Checkbox value="3" label="Option 3" readOnly={props.readOnly} />
                <Checkbox value="4" label="Option 4" readOnly={props.readOnly} />
            </Group>
        </Checkbox.Group>
    ),
};
