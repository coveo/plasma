import {CodeEditor, useForm} from '@coveord/plasma-mantine';

const Demo = () => {
    const form = useForm({
        initialValues: {
            code: 'def my_extension():\n\t\tprint("Not implemented yet.")\n\nmy_extension()',
        },
    });

    return (
        <CodeEditor
            language="python"
            label="Extension"
            description="Define an extension using Python and a custom tab size."
            monacoLoader="cdn"
            options={{tabSize: 4}}
            {...form.getInputProps('code')}
        />
    );
};
export default Demo;
