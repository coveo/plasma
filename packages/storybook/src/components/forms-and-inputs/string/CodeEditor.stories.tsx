import {CodeEditor} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {
    BaseInputArgs,
    InputWrapperArgs,
    type BaseInputStoryArgs,
    type InputWrapperStoryArgs,
} from '../InputWrapperArgs.js';
import {withLabelInfoProps} from '../LabelInfoArgs.js';

interface CodeEditorStoryArgs extends InputWrapperStoryArgs, BaseInputStoryArgs {
    language: 'plaintext' | 'json' | 'markdown' | 'python' | 'xml';
    defaultValue: string;
}

const meta = {
    title: '@components/Forms and inputs/string/CodeEditor',
    id: 'CodeEditor',
    parameters: {
        layout: 'centered',
        controls: {
            include: [
                'label',
                'labelInfo',
                'description',
                'error',
                'required',
                'disabled',
                'readOnly',
                'language',
                'defaultValue',
            ],
        },
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
        language: 'plaintext',
        defaultValue: '// Write your code here',
    },
    argTypes: {
        ...InputWrapperArgs.ArgsTypes,
        ...BaseInputArgs.ArgsTypes,
        labelInfo: {
            control: 'text',
            description: 'Sets the Input.LabelInfo tooltip content in this example.',
            table: {type: {summary: 'string'}, defaultValue: {summary: "'Additional information'"}},
        },
        language: {
            control: 'select',
            options: ['plaintext', 'json', 'markdown', 'python', 'xml'],
            description: 'Sets the syntax language used by the editor.',
            table: {
                type: {summary: "'plaintext' | 'json' | 'markdown' | 'python' | 'xml' | (string & unknown)"},
                defaultValue: {summary: "'plaintext'"},
            },
        },
        defaultValue: {
            control: 'text',
            description: 'Sets the initial content when the editor is uncontrolled.',
            table: {type: {summary: 'string'}, defaultValue: {summary: "''"}},
        },
    },
} satisfies Meta<CodeEditorStoryArgs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: (props) => <CodeEditor {...withLabelInfoProps(props)} w={400} monacoLoader="cdn" />,
};
