import {
    Checkbox,
    CodeEditor,
    ColorInput,
    FileInput,
    Group,
    MultiSelect,
    NumberInput,
    PasswordInput,
    Radio,
    Select,
    Stack,
    Switch,
    Textarea,
    TextInput,
    Title,
    useForm,
} from '@coveord/plasma-mantine';

const Demo = () => {
    const form = useForm({
        initialValues: {
            input: '',
            textarea: '',
            numeric: 0,
            password: '',
            color: '',
            checkbox: false,
            radio: '1',
            switch: false,
            file: '',
            select: '',
            multiSelect: [],
            codeEditor: '{"key": "value"}',

            label: 'Label',
            description: 'Description',
            withAsterisk: true,
            disabled: false,
            readOnly: false,
        },
    });
    return (
        <Group align="flex-start">
            <Stack gap="lg" flex={1}>
                <Stack gap="xs">
                    <Title order={4}>TextInput</Title>
                    <TextInput
                        {...form.getInputProps('input')}
                        label={form.values.label}
                        description={form.values.description}
                        withAsterisk={form.values.withAsterisk}
                        readOnly={form.values.readOnly}
                        disabled={form.values.disabled}
                    />
                </Stack>
                <Stack gap="xs">
                    <Title order={4}>Textarea</Title>
                    <Textarea
                        {...form.getInputProps('textarea')}
                        label={form.values.label}
                        description={form.values.description}
                        withAsterisk={form.values.withAsterisk}
                        readOnly={form.values.readOnly}
                        disabled={form.values.disabled}
                    />
                </Stack>
                <Stack gap="xs">
                    <Title order={4}>NumberInput</Title>
                    <NumberInput
                        {...form.getInputProps('numeric')}
                        label={form.values.label}
                        description={form.values.description}
                        withAsterisk={form.values.withAsterisk}
                        readOnly={form.values.readOnly}
                        disabled={form.values.disabled}
                    />
                </Stack>
                <Stack gap="xs">
                    <Title order={4}>PasswordInput</Title>
                    <PasswordInput
                        {...form.getInputProps('password')}
                        label={form.values.label}
                        description={form.values.description}
                        withAsterisk={form.values.withAsterisk}
                        readOnly={form.values.readOnly}
                        disabled={form.values.disabled}
                    />
                </Stack>
                <Stack gap="xs">
                    <Title order={4}>ColorInput</Title>
                    <ColorInput
                        {...form.getInputProps('color')}
                        label={form.values.label}
                        description={form.values.description}
                        withAsterisk={form.values.withAsterisk}
                        readOnly={form.values.readOnly}
                        disabled={form.values.disabled}
                    />
                </Stack>
                <Stack gap="xs">
                    <Title order={4}>FileInput</Title>
                    <FileInput
                        {...form.getInputProps('file')}
                        label={form.values.label}
                        description={form.values.description}
                        withAsterisk={form.values.withAsterisk}
                        readOnly={form.values.readOnly}
                        disabled={form.values.disabled}
                    />
                </Stack>
                <Stack gap="xs">
                    <Title order={4}>Select</Title>
                    <Select
                        {...form.getInputProps('select')}
                        label={form.values.label}
                        description={form.values.description}
                        withAsterisk={form.values.withAsterisk}
                        readOnly={form.values.readOnly}
                        disabled={form.values.disabled}
                        data={['React', 'Angular', 'Vue', 'Svelte']}
                    />
                </Stack>
                <Stack gap="xs">
                    <Title order={4}>MultiSelect</Title>
                    <MultiSelect
                        {...form.getInputProps('multiSelect')}
                        label={form.values.label}
                        description={form.values.description}
                        withAsterisk={form.values.withAsterisk}
                        readOnly={form.values.readOnly}
                        disabled={form.values.disabled}
                        data={['React', 'Angular', 'Vue', 'Svelte']}
                    />
                </Stack>
                <Stack gap="xs">
                    <Title order={4}>Checkbox</Title>
                    <Checkbox
                        {...form.getInputProps('checkbox', {type: 'checkbox'})}
                        label={form.values.label}
                        description={form.values.description}
                        readOnly={form.values.readOnly}
                        disabled={form.values.disabled}
                    />
                </Stack>
                <Stack gap="xs">
                    <Title order={4}>Switch</Title>
                    <Switch
                        {...form.getInputProps('switch', {type: 'checkbox'})}
                        label={form.values.label}
                        description={form.values.description}
                        readOnly={form.values.readOnly}
                        disabled={form.values.disabled}
                    />
                </Stack>
                <Stack gap="xs">
                    <Title order={4}>Radio</Title>
                    <Radio.Group
                        label={form.values.label}
                        description={form.values.description}
                        {...form.getInputProps('radio')}
                    >
                        <Group gap="xl">
                            <Radio
                                label="First"
                                value="1"
                                readOnly={form.values.readOnly}
                                disabled={form.values.disabled}
                            />
                            <Radio
                                label="Second"
                                value="2"
                                readOnly={form.values.readOnly}
                                disabled={form.values.disabled}
                            />
                        </Group>
                    </Radio.Group>
                </Stack>
                <Stack gap="xs">
                    <Title order={4}>CodeEditor</Title>
                    <CodeEditor
                        label={form.values.label}
                        description={form.values.description}
                        disabled={form.values.disabled || form.values.readOnly}
                        language="json"
                        monacoLoader="cdn"
                        {...form.getInputProps('codeEditor')}
                    />
                </Stack>
            </Stack>
            <Stack gap="sm" pos="sticky" top={32}>
                <Title order={4}>Controls</Title>
                <TextInput {...form.getInputProps('label')} label="label" />
                <Textarea {...form.getInputProps('description')} label="Description" />
                <Checkbox {...form.getInputProps('disabled', {type: 'checkbox'})} label="Disabled" />
                <Checkbox {...form.getInputProps('readOnly', {type: 'checkbox'})} label="Readonly" />
                <Checkbox {...form.getInputProps('withAsterisk', {type: 'checkbox'})} label="withAsterisk" />
            </Stack>
        </Group>
    );
};
export default Demo;
