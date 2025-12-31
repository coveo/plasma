import {CodeEditor} from '@coveord/plasma-mantine/components/CodeEditor';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {InputWrapperArgs, InputWrapperArgTypes} from './InputArgs.js';

const meta: Meta<typeof CodeEditor> = {
    title: '@components/form/CodeEditor',
    component: CodeEditor,
    parameters: {
        layout: 'centered',
    },
    args: {
        ...InputWrapperArgs,
        disabled: false,
        language: 'plaintext',
        defaultValue: '// Write your code here',
    },
    argTypes: {
        ...InputWrapperArgTypes,
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
