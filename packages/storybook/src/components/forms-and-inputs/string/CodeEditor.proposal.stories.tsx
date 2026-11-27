// Proposal for a DS ticket, shown under CodeEditor in Storybook: line highlight variants, and options to hide the line
// numbers and the toolbar. Styled with Plasma tokens; syntax colors are CodeEditor's current ones (a separate ticket
// covers those). Not an official API: it uses the `editorHandle` escape hatch, raw Monaco decorations, and CSS to hide
// the toolbar.
import {Alert, Badge, Box, Card, CodeEditor, Group, Stack, Text, TextInput, Title} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {type ComponentProps, type ReactNode, useEffect, useMemo, useRef, useState} from 'react';

type EditorHandle = NonNullable<ComponentProps<typeof CodeEditor>['editorHandle']>;
type Editor = NonNullable<EditorHandle['current']>;
type Decorations = ReturnType<Editor['createDecorationsCollection']>;
type Variant = 'primary' | 'warning' | 'critical' | 'neutral';

// Same tokens as Plasma's Alert variants; `primary` follows the app's primary color (teal, blue or violet).
// Note text uses shade 6: the filled shade (5) falls to about 4:1 on its own highlight in a read-only editor, below AA.
const variantTokens: Record<Variant, {background: string; bar: string; text: string}> = {
    primary: {
        background: 'var(--mantine-primary-color-light)',
        bar: 'var(--mantine-primary-color-filled)',
        text: 'var(--mantine-primary-color-6)',
    },
    warning: {
        background: 'var(--mantine-color-yellow-light)',
        bar: 'var(--mantine-color-yellow-filled)',
        text: 'var(--mantine-color-yellow-6)',
    },
    critical: {
        background: 'var(--mantine-color-red-light)',
        bar: 'var(--mantine-color-error)',
        text: 'var(--mantine-color-red-6)',
    },
    neutral: {
        background: 'var(--mantine-color-gray-light)',
        bar: 'var(--mantine-color-gray-filled)',
        text: 'var(--mantine-color-gray-6)',
    },
};

// Monaco renders decorations in its own DOM, so the classes must be global.
const highlightCss =
    Object.entries(variantTokens)
        .map(
            ([variant, {background, bar, text}]) => `
.proto-hl-${variant} { background-color: ${background}; }
.proto-hl-${variant}-margin { background-color: ${background}; box-shadow: inset 3px 0 0 ${bar}; }
.proto-hl-${variant}-note { color: ${text}; font-style: italic; }`,
        )
        .join('\n') +
    // The highlighted line's number takes the text color, so it stands out along with its line.
    '\n.monaco-editor .margin-view-overlays .line-numbers.proto-hl-number { color: var(--mantine-color-text); }' +
    '\n.proto-no-toolbar [data-testid="editor-wrapper"] > :first-child { display: none; }' +
    // Monaco sets a fixed pixel height on itself, which stops CodeEditor's flex boxes from shrinking when the record
    // is resized to its content.
    '\n.proto-record [data-testid="editor-wrapper"], .proto-record [data-testid="editor-wrapper"] > :last-child { min-height: 0; }';

const buildRecord = (key: string) =>
    [
        '{',
        '    "objecttype": "product",',
        '    "ec_product_id": "SKU-10428",',
        `    "ec_description": {"${key}": "Lightweight everyday running shoes"},`,
        '    "ec_brand": "Barca Sports"',
        '}',
    ].join('\n');

// CodeEditor doesn't say when Monaco is ready, so a ref-like object with a setter stands in for onMount.
const useEditorHandle = () => {
    const [editor, setEditor] = useState<Editor | null>(null);
    const editorHandle = useMemo<EditorHandle>(() => {
        let current: Editor | null = null;
        return {
            get current() {
                return current;
            },
            set current(next) {
                current = next;
                setEditor(next);
            },
        };
    }, []);
    return [editorHandle, editor] as const;
};

interface HighlightedRecordProps {
    dictionaryKey: string;
    field: string;
    variant: Variant;
    note: string;
    label?: string;
    description?: string;
    withLineNumbers?: boolean;
    withToolbar?: boolean;
}

const HighlightedRecord = ({
    dictionaryKey,
    field,
    variant,
    note,
    label,
    description,
    withLineNumbers = true,
    withToolbar = true,
}: HighlightedRecordProps) => {
    const record = buildRecord(dictionaryKey);
    const highlightedLine = record.split('\n').findIndex((line) => line.includes(`"${field}"`)) + 1;

    const [editorHandle, editor] = useEditorHandle();
    const decorations = useRef<{editor: Editor; collection: Decorations} | null>(null);

    useEffect(() => {
        if (!editor) {
            return;
        }
        if (decorations.current?.editor !== editor) {
            decorations.current = {editor, collection: editor.createDecorationsCollection()};
        }
        decorations.current.collection.set([
            {
                // The range spans the whole line so the `after` note is drawn at the end of it.
                range: {
                    startLineNumber: highlightedLine,
                    startColumn: 1,
                    endLineNumber: highlightedLine,
                    endColumn: editor.getModel()?.getLineMaxColumn(highlightedLine) ?? 1,
                },
                options: {
                    isWholeLine: true,
                    className: `proto-hl-${variant}`,
                    marginClassName: `proto-hl-${variant}-margin`,
                    lineNumberClassName: 'proto-hl-number',
                    after: {content: `   // ${note}`, inlineClassName: `proto-hl-${variant}-note`},
                },
            },
        ]);
    }, [editor, record, highlightedLine, variant, note]);

    // CodeEditor's `options` prop only accepts `tabSize`, so the gutter is set through the raw editor. With line numbers,
    // it keeps Monaco's defaults, so the spacing matches today's CodeEditor. Without numbers, a 16px gutter plus
    // CodeEditor's 8px (spacing.xs) left padding puts the code 24px (spacing.md) from the edge, as far as from the top.
    useEffect(() => {
        editor?.updateOptions(
            withLineNumbers
                ? {lineNumbers: 'on', folding: true, lineDecorationsWidth: 10, lineNumbersMinChars: 5}
                : {lineNumbers: 'off', folding: false, lineDecorationsWidth: 16, lineNumbersMinChars: 0},
        );
    }, [editor, withLineNumbers]);

    // CodeEditor fills whatever height it's given, which left extra space under the last line. The editor is resized
    // to its content so the space below the code matches the 24px (spacing.md) above it, with or without the toolbar.
    const box = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState((label ? 25 : 0) + (description ? 20 : 0) + (withToolbar ? 235 : 175));
    useEffect(() => {
        if (!editor) {
            return;
        }
        const fit = () => {
            const chrome = (box.current?.offsetHeight ?? 0) - editor.getLayoutInfo().height;
            setHeight(chrome + editor.getContentHeight());
        };
        fit();
        const subscriptions = [editor.onDidLayoutChange(fit), editor.onDidContentSizeChange(fit)];
        return () => subscriptions.forEach((subscription) => subscription.dispose());
    }, [editor]);
    // Monaco doesn't watch its container's size, so it re-measures after each resize.
    useEffect(() => editor?.layout(), [editor, height, withToolbar]);

    // CodeEditor has no prop for the search/copy bar, so the prototype hides it with CSS.
    return (
        <Box ref={box} className={['proto-record', !withToolbar && 'proto-no-toolbar'].filter(Boolean).join(' ')}>
            <CodeEditor
                label={label}
                description={description}
                language="json"
                readOnly
                value={record}
                editorHandle={editorHandle}
                monacoLoader="cdn"
                minHeight={height}
                h={height}
            />
        </Box>
    );
};

interface PrototypeArgs {
    variant: Variant;
    withLineNumbers: boolean;
    withToolbar: boolean;
}

// A form drives the record preview: the highlighted line and its note follow what the user types. Only the form sits in
// a card; the record stays beside it.
const KeyFormDemo = ({variant, withLineNumbers, withToolbar}: PrototypeArgs) => {
    const [language, setLanguage] = useState('ee');
    const [country, setCountry] = useState('eee');
    const key = [language, country].filter(Boolean).join('_');

    return (
        <Group align="flex-start" gap="xl" wrap="nowrap">
            <style>{highlightCss}</style>
            <Card flex="none">
                <Stack w={320} gap="md">
                    <Stack gap="xxs">
                        <Title order={5}>Key</Title>
                        <Text size="sm" c="dimmed">
                            Parts of the dictionary key, joined in order.
                        </Text>
                    </Stack>
                    <TextInput
                        label="Language"
                        value={language}
                        onChange={(event) => setLanguage(event.currentTarget.value)}
                    />
                    <TextInput
                        label="Country"
                        value={country}
                        onChange={(event) => setCountry(event.currentTarget.value)}
                    />
                    <Group gap="xs">
                        <Text size="sm" c="dimmed">
                            Resolves to
                        </Text>
                        <Badge variant="light">{key || '—'}</Badge>
                    </Group>
                </Stack>
            </Card>
            {/* CodeEditor's own label and description, so their size and spacing match the real component. */}
            <Box flex={1} miw={0}>
                <HighlightedRecord
                    label="Sample product record"
                    description="What a product looks like for this catalog. The highlighted field is shaped by its view definition."
                    dictionaryKey={key}
                    field="ec_description"
                    variant={variant}
                    note={`reads the ${key} key`}
                    withLineNumbers={withLineNumbers}
                    withToolbar={withToolbar}
                />
            </Box>
        </Group>
    );
};

const AllVariants = () => (
    <Stack w={1180} gap="lg">
        <style>{highlightCss}</style>
        <HighlightedRecord
            label="Primary: what the form controls (the app's primary color)"
            dictionaryKey="ee_eee"
            field="ec_description"
            variant="primary"
            note="reads the ee_eee key"
        />
        <HighlightedRecord
            label="Warning: may not work as expected"
            dictionaryKey="ee_eee"
            field="ec_description"
            variant="warning"
            note="no indexed product has the ee_eee key"
        />
        <HighlightedRecord
            label="Critical: invalid"
            dictionaryKey="ee eee"
            field="ec_description"
            variant="critical"
            note="keys can't contain spaces"
        />
        <HighlightedRecord
            label="Neutral: related context, low emphasis"
            dictionaryKey="ee_eee"
            field="ec_brand"
            variant="neutral"
            note="same value in every market"
        />
    </Stack>
);

const AllOptions = () => (
    <Stack w={1180} gap="lg">
        <style>{highlightCss}</style>
        <HighlightedRecord
            label="Default: toolbar and line numbers"
            dictionaryKey="ee_eee"
            field="ec_description"
            variant="primary"
            note="reads the ee_eee key"
        />
        <HighlightedRecord
            label="Without line numbers"
            dictionaryKey="ee_eee"
            field="ec_description"
            variant="primary"
            withLineNumbers={false}
            note="reads the ee_eee key"
        />
        <HighlightedRecord
            label="Without toolbar or line numbers"
            dictionaryKey="ee_eee"
            field="ec_description"
            variant="primary"
            withLineNumbers={false}
            withToolbar={false}
            note="reads the ee_eee key"
        />
    </Stack>
);

// Every proposal starts with this note, so nobody mistakes it for CodeEditor's current API.
const ProposalNote = () => (
    <Alert.Information title="Proposal">
        Line highlighting and the options to hide the toolbar and line numbers are only a proposal for the Plasma team
        to consider. This story imitates them with a workaround.
    </Alert.Information>
);

const sampleRecord = buildRecord('ee_eee');

const ExampleSection = ({
    title,
    description,
    proposal,
    children,
}: {
    title: string;
    description: string;
    proposal?: boolean;
    children: ReactNode;
}) => (
    <Stack gap="sm">
        <Stack gap="xxs">
            <Group gap="xs">
                <Title order={4}>{title}</Title>
                {proposal ? <Badge variant="light">Proposal</Badge> : null}
            </Group>
            <Text size="sm" c="dimmed">
                {description}
            </Text>
        </Stack>
        {children}
    </Stack>
);

// Today's CodeEditor next to the proposal. Section titles and descriptions sit above each example.
// 219px fits the six-line sample with the toolbar and CodeEditor's padding.
const Examples = (args: PrototypeArgs) => (
    <Stack w={1180} gap="xl">
        <ExampleSection title="Editable" description="The default. People can type, search and copy.">
            <CodeEditor language="json" defaultValue={sampleRecord} monacoLoader="cdn" minHeight={219} h={219} />
        </ExampleSection>
        <ExampleSection title="Read-only" description="For content people review and copy but can't change.">
            <CodeEditor language="json" readOnly value={sampleRecord} monacoLoader="cdn" minHeight={219} h={219} />
        </ExampleSection>
        <ExampleSection
            title="Driven by a form"
            description="A form updates a read-only preview, and the highlighted line shows what the form controls. Use the controls to try the variants and options."
            proposal
        >
            <ProposalNote />
            <KeyFormDemo {...args} />
        </ExampleSection>
    </Stack>
);

const meta = {
    // Shares CodeEditor's title so the proposal sits in the CodeEditor section; story names flag what's proposed.
    title: '@components/Forms and inputs/string/CodeEditor',
    id: 'CodeEditorProposal',
    component: Examples,
    parameters: {layout: 'padded'},
    args: {
        variant: 'primary',
        withLineNumbers: false,
        withToolbar: false,
    },
    argTypes: {
        variant: {control: 'select', options: ['primary', 'warning', 'critical', 'neutral']},
    },
} satisfies Meta<typeof Examples>;
export default meta;
type Story = StoryObj<typeof meta>;

export const ExamplesPage: Story = {name: 'Examples'};

export const LineHighlight: Story = {
    name: 'Proposal: Line highlight',
    parameters: {controls: {disable: true}},
    render: () => (
        <Stack w={1180} gap="lg">
            <ProposalNote />
            <AllVariants />
        </Stack>
    ),
};

export const ToolbarAndLineNumbers: Story = {
    name: 'Proposal: Toolbar and line numbers',
    parameters: {controls: {disable: true}},
    render: () => (
        <Stack w={1180} gap="lg">
            <ProposalNote />
            <AllOptions />
        </Stack>
    ),
};
