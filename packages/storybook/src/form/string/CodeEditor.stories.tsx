import {CodeEditor} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {Args} from '../../Args.js';
import {InputWrapperArgs, type InputWrapperStoryArgs} from '../InputWrapperArgs.js';
import {withLabelInfoProps} from '../LabelInfoArgs.js';

interface CodeEditorStoryArgs extends InputWrapperStoryArgs {
    disabled: boolean;
    language: 'plaintext' | 'json' | 'markdown' | 'python' | 'xml';
    defaultValue: string;
}

const meta: Meta<CodeEditorStoryArgs> = {
    title: '@components/form/string/CodeEditor',
    id: 'CodeEditor',
    parameters: {
        layout: 'centered',
    },
    component: CodeEditor,
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
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: (props) => <CodeEditor {...withLabelInfoProps(props)} w={400} monacoLoader="cdn" />,
};
