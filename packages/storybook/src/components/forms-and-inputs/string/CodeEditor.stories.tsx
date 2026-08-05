import {CodeEditor} from '@coveord/plasma-mantine/components/CodeEditor';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {Args} from '../../Args.js';
import {withLabelInfoProps} from '../LabelInfoArgs.js';
import {InputWrapperArgs, type InputWrapperStoryArgs} from '../InputWrapperArgs.js';

interface CodeEditorStoryArgs extends InputWrapperStoryArgs {
    disabled: boolean;
    language: 'plaintext' | 'json' | 'markdown' | 'python' | 'xml';
    defaultValue: string;
}

const meta = {
    title: '@components/form/string/CodeEditor',
    id: 'CodeEditor',
    parameters: {
        layout: 'centered',
    },
    args: {
        ...InputWrapperArgs.Args,
        disabled: Args.disabled.initialValue,
        language: 'plaintext',
        defaultValue: '// Write your code here',
    },
    argTypes: {
        ...InputWrapperArgs.ArgsTypes,
        disabled: Args.disabled.type,
        language: {
            control: 'select',
            options: ['plaintext', 'json', 'markdown', 'python', 'xml'],
        },
    },
} satisfies Meta<CodeEditorStoryArgs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: (props) => <CodeEditor {...withLabelInfoProps(props)} w={400} monacoLoader="cdn" />,
};
