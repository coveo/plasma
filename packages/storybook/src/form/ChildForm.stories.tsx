import type {StoryObj, Meta} from '@storybook/react-vite';
import {ChildForm} from '@coveord/plasma-mantine/components/ChildForm';
import {TextInput, Stack, Switch, useForm} from '@coveord/plasma-mantine';

const meta: Meta<typeof ChildForm> = {
    title: '@components/form/ChildForm',
    component: ChildForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ChildForm>;

export const Default: Story = {
    render: () => (
        <ChildForm in={true}>
            <TextInput label="First name" required />
            <TextInput label="Last name" required />
        </ChildForm>
    ),
};

export const ChildFormWithForm: Story = {
    render: () => {
        const form = useForm({
            initialValues: {
                provideInfo: false,
                firstName: '',
                lastName: '',
            },
        });
        return (
            <Stack gap="md">
                <Switch {...form.getInputProps('provideInfo')} label="Provide information" />
                <ChildForm in={!!form.values.provideInfo}>
                    <TextInput label="First name" required {...form.getInputProps('firstName')} />
                    <TextInput label="Last name" required {...form.getInputProps('lastName')} />
                </ChildForm>
            </Stack>
        );
    },
};

export const ChildFormWithTitleAndDescription: Story = {
    render: () => (
        <ChildForm in={true} title="Personal information" description="Provide the user's personal information">
            <TextInput label="First name" required />
            <TextInput label="Last name" required />
        </ChildForm>
    ),
};
