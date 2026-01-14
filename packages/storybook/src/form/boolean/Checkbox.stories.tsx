import {Checkbox} from '@coveord/plasma-mantine/components/Checkbox';
import {Group} from '@coveord/plasma-mantine/components/Group';
import {Meta, StoryObj} from '@storybook/react-vite';
import {useArgs} from 'storybook/preview-api';

const meta: Meta<typeof Checkbox> = {
    title: '@components/form/boolean/Checkbox',
    id: 'Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        checked: {
            control: 'boolean',
            description: 'Checked state',
        },
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
        checked: false,
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
    render: (props: any) => {
        const [{checked}, updateArgs] = useArgs();
        const onClick = () => updateArgs({checked: !checked});
        return <Checkbox {...props} onClick={onClick} />;
    },
};

export const CheckboxGroup: Story = {
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
