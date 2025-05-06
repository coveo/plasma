import {CodeEditor, useForm} from '@coveord/plasma-mantine';

const Demo = () => {
    const form = useForm({
        initialValues: {
            config: '{"key":"value"}',
        },
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
