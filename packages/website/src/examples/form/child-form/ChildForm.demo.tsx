import {ChildForm, Stack, Switch, TextInput, useForm} from '@coveord/plasma-mantine';
const Demo = () => {
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
            <ChildForm
                in={!!form.values.provideInfo}
                title="Personal information"
                description="Provide the user's personal information"
            >
                <TextInput label="First name" placeholder="John" required {...form.getInputProps('firstName')} />
                <TextInput label="Last name" placeholder="Doe" required {...form.getInputProps('lastName')} />
            </ChildForm>
        </Stack>
    );
};
export default Demo;
