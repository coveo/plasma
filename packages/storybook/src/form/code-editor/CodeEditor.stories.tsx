import type {StoryObj, Meta} from '@storybook/react-vite';
import {CodeEditor} from '@coveord/plasma-mantine/components/CodeEditor';
import {useForm} from '@coveord/plasma-mantine';

const meta: Meta<typeof CodeEditor> = {
    title: '@components/form/CodeEditor',
    component: CodeEditor,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CodeEditor>;

export const Default: Story = {
    render: () => {
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
                label="Configuration"
                description="This JSON configuration is very important"
                monacoLoader="cdn"
                {...form.getInputProps('config')}
            />
        );
    },
};

export const CodeEditorDisabled: Story = {
    render: () => {
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
    },
};

export const CodeEditorError: Story = {
    render: () => {
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
    },
};

export const CodeEditorGraphQL: Story = {
    render: () => {
        const initialQuery = `query TestGraphQl {
  user(where: { email: { _eq: "user@example.com" } }) {
    email
    name
    company {
      name
    }
  }
}`;
        const form = useForm({
            initialValues: {
                config: initialQuery,
            },
        });
        return (
            <CodeEditor
                language="graphql"
                label="Query"
                description="Write a GraphQL query, subscription, or mutation"
                monacoLoader="cdn"
                {...form.getInputProps('config')}
            />
        );
    },
};

export const CodeEditorPython: Story = {
    render: () => {
        const form = useForm({
            initialValues: {
                code: 'def my_extension():\n    print("Not implemented yet.")\n\nmy_extension()',
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
    },
};

export const CodeEditorXML: Story = {
    render: () => {
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
    },
};
