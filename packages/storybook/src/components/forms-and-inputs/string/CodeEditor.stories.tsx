import {CodeEditor} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {Args} from '../../../Args.js';
import {withLabelContextualHelpProps} from '../ContextualHelpArgs.js';
import {
    BaseInputArgs,
    InputWrapperArgs,
    type BaseInputStoryArgs,
    type InputWrapperStoryArgs,
} from '../InputWrapperArgs.js';

interface CodeEditorStoryArgs extends InputWrapperStoryArgs, BaseInputStoryArgs {
    language: 'plaintext' | 'json' | 'markdown' | 'python' | 'xml';
    defaultValue: string;
    upload: boolean;
}

const meta = {
    title: 'Components/Inputs/CodeEditor',
    id: 'CodeEditor',
    parameters: {
        layout: 'centered',
        controls: {
            include: [
                'label',
                'contextualHelp',
                'description',
                'error',
                'required',
                'disabled',
                'readOnly',
                'language',
                'defaultValue',
                'upload',
            ],
        },
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
        language: 'plaintext',
        defaultValue: '// Write your code here',
        upload: false,
    },
    argTypes: {
        ...InputWrapperArgs.ArgsTypes,
        ...BaseInputArgs.ArgsTypes,
        contextualHelp: Args.contextualHelp.type,
        language: {
            control: 'select',
            options: ['plaintext', 'json', 'markdown', 'python', 'xml'],
            description: 'Sets the syntax language used by the editor.',
            table: {
                type: {
                    summary: "'plaintext' | 'json' | 'markdown' | 'python' | 'xml' | (string & unknown)",
                },
                defaultValue: {summary: "'plaintext'"},
            },
        },
        defaultValue: {
            control: 'text',
            description: 'Sets the initial content when the editor is uncontrolled.',
            table: {type: {summary: 'string'}, defaultValue: {summary: "''"}},
        },
        upload: {
            control: 'boolean',
            description:
                'Renders an upload button that replaces the editor content with an uploaded file. Accepted file types default to the selected language.',
            table: {
                type: {
                    summary:
                        "{accept?: string; label?: string; onUpload?(file: File, content: string): void; onError?(file: File, reason: 'not-text' | 'unreadable'): void}",
                },
                defaultValue: {summary: 'undefined'},
            },
        },
    },
} satisfies Meta<CodeEditorStoryArgs>;
export default meta;
type Story = StoryObj<CodeEditorStoryArgs>;

export const Demo: Story = {
    name: 'CodeEditor',
    render: ({upload, ...props}) => (
        <CodeEditor
            {...withLabelContextualHelpProps(props)}
            upload={upload ? {} : undefined}
            w={400}
            monacoLoader="cdn"
        />
    ),
};
