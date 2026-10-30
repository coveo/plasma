import {CodeEditor, Group} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {
    BaseInputArgs,
    InputWrapperArgs,
    type BaseInputStoryArgs,
    type InputWrapperStoryArgs,
} from '../InputWrapperArgs.js';
import {Args} from '../../../Args.js';
import {withLabelContextualHelpProps} from '../ContextualHelpArgs.js';

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
                'contextualHelp',
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
        contextualHelp: Args.contextualHelp.type,
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
    render: (props) => <CodeEditor {...withLabelContextualHelpProps(props)} w={400} monacoLoader="cdn" />,
};

const jsonSample = `{
    "objecttype": "product",
    "ec_product_id": "SKU-10428",
    "ec_price": 89.99,
    "ec_in_stock": true,
    "ec_promo": null,
    "ec_category": ["Footwear", "Running"],
    "ec_description": {"en": "Lightweight everyday running shoes"}
}`;

export const SyntaxHighlighting: Story = {
    parameters: {controls: {disable: true}},
    render: () => (
        <Group align="flex-start">
            <CodeEditor label="Editable" language="json" defaultValue={jsonSample} w={400} monacoLoader="cdn" />
            <CodeEditor
                label="Read-only"
                language="json"
                defaultValue={jsonSample}
                readOnly
                w={400}
                monacoLoader="cdn"
            />
        </Group>
    ),
};
