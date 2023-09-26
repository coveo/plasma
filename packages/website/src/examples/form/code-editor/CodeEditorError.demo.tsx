import {CodeEditor, useForm} from '@coveord/plasma-mantine';

const Demo = () => {
    const form = useForm({
        initialValues: {
            config: '{"emptyKey":}',
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
        validateInputOnChange: true,
    });

    return (
        <CodeEditor
            language="json"
            label="Error"
            description="Indicates when the code is invalid"
            monacoLoader="cdn"
            {...form.getInputProps('config')}
        />
    );
};
export default Demo;
