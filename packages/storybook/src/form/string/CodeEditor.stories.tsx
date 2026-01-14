import {CodeEditor} from '@coveord/plasma-mantine/components/CodeEditor';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {Args} from '../../Args.js';
import {InputWrapperArgs} from '../InputWrapperArgs.js';

const meta: Meta<typeof CodeEditor> = {
    title: '@components/form/string/CodeEditor',
    id: 'CodeEditor',
    component: CodeEditor,
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
};
export default meta;
type Story = StoryObj<typeof CodeEditor>;

export const Demo: Story = {
    render: (props) => <CodeEditor {...props} w={400} monacoLoader="cdn" />,
};
