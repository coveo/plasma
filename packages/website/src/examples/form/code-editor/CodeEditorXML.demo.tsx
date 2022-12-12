import {CodeEditor, useForm} from '@coveord/plasma-mantine';

export default () => {
    const form = useForm({
        initialValues: {
            markup: '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><circle cx="8" cy="8" r="6.5" stroke="currentColor"/><path d="M5 8H11M8 5L8 11" stroke="currentColor" stroke-linecap="round"/></svg>',
        },
    });

    return (
        <CodeEditor
            language="xml"
            label="Some XML structure"
            description="XML markup of the add icon svg"
            monacoLoader="cdn"
            {...form.getInputProps('markup')}
        />
    );
};
