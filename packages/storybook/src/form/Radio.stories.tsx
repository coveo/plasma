import {Group} from '@coveord/plasma-mantine/components/Group';
import {Radio} from '@coveord/plasma-mantine/components/Radio';
import {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Radio> = {
    title: '@components/form/Radio',
    component: Radio,
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
            description: 'Radio label',
        },
        description: {
            control: 'text',
            description: 'Radio description',
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
type Story = StoryObj<typeof Radio>;

export const RadioItem: Story = {
    render: (props: any) => <Radio {...props} />,
};

export const RadioGroup: Story = {
    argTypes: {
        required: {
            control: 'boolean',
            description: 'Whether the checkbox is required',
        },
    },
    args: {
        required: false,
    },
    render: (props: any) => (
        <Radio.Group {...props}>
            <Group mt="xs">
                <Radio value="1" label="Option 1" readOnly={props.readOnly} />
                <Radio value="2" label="Option 2" readOnly={props.readOnly} />
                <Radio value="3" label="Option 3" readOnly={props.readOnly} />
                <Radio value="4" label="Option 4" readOnly={props.readOnly} />
            </Group>
        </Radio.Group>
    ),
};
