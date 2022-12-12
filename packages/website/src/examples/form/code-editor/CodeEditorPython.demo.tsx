import {CodeEditor, useForm} from '@coveord/plasma-mantine';

export default () => {
    const form = useForm({
        initialValues: {
            code: 'def my_extension():\n\tprint("Not implemented yet.")\n\nmy_extension()',
        },
    });

    return (
        <CodeEditor
            language="python"
            label="Extension"
            description="Define an extension using Python"
            monacoLoader="cdn"
            {...form.getInputProps('code')}
        />
    );
};
