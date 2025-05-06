import {CodeEditor, useForm} from '@coveord/plasma-mantine';

const Demo = () => {
    const form = useForm({
        initialValues: {
            config: '{"key":"value"}',
        },
        validate: {
            config: (jsonValue) => {
                try {
                    const config = JSON.parse(jsonValue);
                    if (!config.key) {
                        return 'The key must have a value';
                    }
                } catch {
                    return 'Invalid JSON';
                }
                return null;
            },
        },
        validateInputOnBlur: true,
    });

    return (
        <CodeEditor
            language="json"
            label="Disabled editor"
            description="This JSON configuration cannot be modified."
            monacoLoader="cdn"
            disabled
            {...form.getInputProps('config')}
        />
    );
};
export default Demo;
