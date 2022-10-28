import {CheckSize16Px, CopySize16Px} from '@coveord/plasma-react-icons';
import {
    ActionIcon,
    Box,
    CopyButton,
    createStyles,
    DefaultProps,
    Group,
    Input,
    InputWrapperBaseProps,
    Selectors,
    Stack,
    Tooltip,
    useComponentDefaultProps,
} from '@mantine/core';
import {useUncontrolled} from '@mantine/hooks';
import Editor, {loader} from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import {FunctionComponent} from 'react';

import {useParentHeight} from '../../hooks';

loader.config({monaco});

const useStyles = createStyles((theme) => ({
    root: {},
    editor: {
        border: `1px solid ${theme.colors.gray[2]}`,
        borderRadius: theme.defaultRadius,
        backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.black,
        height: '100%',
    },
}));

interface CodeEditorProps
    extends Omit<InputWrapperBaseProps, 'inputContainer' | 'inputWrapperOrder'>,
        DefaultProps<Selectors<typeof useStyles>> {
    /**
     * The language syntax of the editor
     *
     * @default 'plaintext'
     */
    language?: 'plaintext' | 'json' | 'markdown' | 'python';
    /** Default value for uncontrolled input */
    defaultValue?: string;
    /** Value for controlled input */
    value?: string;
    /** onChange value for controlled input */
    onChange?(value: string): void;
    /** Called whenever the code editor gets the focus */
    onFocus?(): void;
    /**
     * The minimal height of the CodeEditor (label and description included)
     *
     * By default the CodeEditor is adjusted to fill its parent height.
     * In the case where the parent height is too short, it will use this value as minimum.
     *
     * @default 300
     */
    minHeight?: number;
    /**
     * The maximal height of the CodeEditor (label and description included)
     *
     * By default the CodeEditor is adjusted to fill its parent height.
     * In the case where the parent height would be too high for your liking, you can use this prop to set a maximum.
     */
    maxHeight?: number;
    disabled?: boolean;
}

const defaultProps: Partial<CodeEditorProps> = {
    language: 'plaintext',
    defaultValue: '',
    minHeight: 300,
};

export const CodeEditor: FunctionComponent<CodeEditorProps> = (props) => {
    const {
        language,
        defaultValue,
        onChange,
        onFocus,
        value,
        label,
        required,
        labelProps,
        error,
        errorProps,
        description,
        descriptionProps,
        minHeight,
        maxHeight,
        disabled,
        ...others
    } = useComponentDefaultProps('CodeEditor', defaultProps, props);
    const {classes, theme} = useStyles();
    const [_value, handleChange] = useUncontrolled<string>({
        value,
        defaultValue,
        onChange,
        finalValue: '',
    });
    const [parentHeight, ref] = useParentHeight();

    const _label = label ? (
        <Input.Label required={required} {...labelProps}>
            {label}
        </Input.Label>
    ) : null;

    const _description = description ? (
        <Input.Description mt="xs" {...descriptionProps}>
            {description}
        </Input.Description>
    ) : null;

    const _error = error ? (
        <Input.Error mt="xs" {...errorProps}>
            {error}
        </Input.Error>
    ) : null;

    const _header =
        _label || _description ? (
            <Box>
                {_label}
                {_description}
            </Box>
        ) : null;

    const _copyButton = (
        <Group position="right">
            <CopyButton value={_value} timeout={2000}>
                {({copied, copy}) => (
                    <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                        <ActionIcon color={copied ? 'lime' : 'gray'} onClick={copy}>
                            {copied ? <CheckSize16Px height={16} /> : <CopySize16Px height={16} />}
                        </ActionIcon>
                    </Tooltip>
                )}
            </CopyButton>
        </Group>
    );

    const _editor = (
        <Box p="md" pl="xs" className={classes.editor}>
            <Editor
                defaultLanguage={language}
                theme={theme.colorScheme === 'light' ? 'light' : 'vs-dark'}
                options={{
                    minimap: {enabled: false},
                    wordWrap: 'on',
                    wrappingStrategy: 'advanced',
                    scrollBeyondLastLine: false,
                    formatOnPaste: true,
                    fontSize: theme.fontSizes.xs,
                    readOnly: disabled,
                    tabSize: 2,
                }}
                value={_value}
                onChange={handleChange}
                onMount={(editor) => {
                    editor.onDidFocusEditorText(onFocus);
                    editor.onDidBlurEditorText(async () => {
                        await editor.getAction('editor.action.formatDocument').run();
                    });
                }}
            />
        </Box>
    );

    return (
        <Stack
            justify="flex-start"
            className={classes.root}
            spacing={0}
            sx={{height: Math.max(parentHeight, minHeight), maxHeight}}
            ref={ref}
            {...others}
        >
            {_header}
            {_copyButton}
            {_editor}
            {_error}
        </Stack>
    );
};
