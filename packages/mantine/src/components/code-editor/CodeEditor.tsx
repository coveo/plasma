import {
    Box,
    Center,
    createStyles,
    DefaultProps,
    Group,
    Input,
    InputWrapperBaseProps,
    Loader,
    px,
    Selectors,
    Space,
    Stack,
    useComponentDefaultProps,
} from '@mantine/core';
import {useUncontrolled} from '@mantine/hooks';
import {editor as monacoEditor} from 'monaco-editor';
import Editor, {loader, Monaco} from '@monaco-editor/react';
import {FunctionComponent, useEffect, useRef, useState} from 'react';

import {useParentHeight} from '../../hooks';
import {XML} from './languages/xml';
import {CopyToClipboard} from '../copyToClipboard';
import {Search} from './search';

const useStyles = createStyles((theme, {error}: {error?: boolean}) => ({
    root: {},
    editor: {
        border: `1px solid ${theme.colors.gray[2]}`,
        borderRadius: theme.defaultRadius,
        backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.black,
        height: '100%',
        outlineColor: error ? theme.colors.red[6] : null,
        outlineStyle: error ? 'solid' : 'none',
        outlineWidth: 'thin',
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
    language?: 'plaintext' | 'json' | 'markdown' | 'python' | 'xml';
    /** Default value for uncontrolled input */
    defaultValue?: string;
    /** Value for controlled input */
    value?: string;
    /** onChange value for controlled input */
    onChange?(value: string): void;
    /** Called whenever the search icon is clicked  */
    onSearch?(): void;
    /** Called whenever the copy icon is clicked */
    onCopy?(): void;
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
    /**
     * Defines how the monaco editor files will be loaded.
     * Note that using `'local'` requires [some additional configuration](https://github.com/suren-atoyan/monaco-react#use-monaco-editor-as-an-npm-package).
     *
     * @default 'local'
     */
    monacoLoader?: 'cdn' | 'local';
}

const defaultProps: Partial<CodeEditorProps> = {
    language: 'plaintext',
    monacoLoader: 'local',
    defaultValue: '',
    minHeight: 300,
};

export const CodeEditor: FunctionComponent<CodeEditorProps> = (props) => {
    const {
        language,
        defaultValue,
        onChange,
        onCopy,
        onSearch,
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
        monacoLoader,
        ...others
    } = useComponentDefaultProps('CodeEditor', defaultProps, props);
    const [loaded, setLoaded] = useState(false);
    const [containsError, setContainsError] = useState(false);
    const {classes, theme} = useStyles({error: containsError});
    const [_value, handleChange] = useUncontrolled<string>({
        value,
        defaultValue,
        onChange,
        finalValue: '',
    });
    const [parentHeight, ref] = useParentHeight();
    const editorRef = useRef(null);
    const loadLocalMonaco = async () => {
        const monacoInstance = await import('monaco-editor');
        loader.config({monaco: monacoInstance});
        setLoaded(true);
    };

    const registerLanguages = (monaco: Monaco) => {
        if (monaco && language === 'xml') {
            XML.register(monaco);
        }
    };

    const handleSearch = () => {
        if (editorRef.current) {
            editorRef.current.focus();
            editorRef.current.trigger('editor', 'actions.find', '');
            onSearch?.();
        }
    };

    useEffect(() => {
        if (monacoLoader === 'local') {
            loadLocalMonaco();
        } else {
            setLoaded(true);
        }
    }, []);

    const handleValidate = (markers: monacoEditor.IMarker[]) => {
        setContainsError(
            markers.some((marker) => marker.severity === loader.__getMonacoInstance().MarkerSeverity.Error),
        );
    };

    const _label = label ? (
        <Input.Label required={required} {...labelProps}>
            {label}
        </Input.Label>
    ) : null;

    const _description = description ? (
        <Input.Description {...descriptionProps}>{description}</Input.Description>
    ) : null;

    const _error = error ? (
        <Input.Error mt="xs" {...errorProps}>
            {error}
        </Input.Error>
    ) : (
        <Space h="xs" />
    );

    const _header =
        _label || _description ? (
            <Box>
                {_label}
                {_description}
            </Box>
        ) : null;

    const _buttons = (
        <Group position="right" spacing={0}>
            <Search handleSearch={handleSearch} />
            <CopyToClipboard value={_value} onCopy={() => onCopy?.()} />
        </Group>
    );

    const _editor = loaded ? (
        <Box p="md" pl="xs" className={classes.editor}>
            <Editor
                onValidate={handleValidate}
                defaultLanguage={language}
                theme={theme.colorScheme === 'light' ? 'light' : 'vs-dark'}
                options={{
                    minimap: {enabled: false},
                    wordWrap: 'on',
                    scrollBeyondLastLine: false,
                    formatOnPaste: true,
                    fontSize: px(theme.fontSizes.xs),
                    readOnly: disabled,
                    tabSize: 2,
                }}
                value={_value}
                onChange={handleChange}
                onMount={(editor, monaco) => {
                    editorRef.current = editor;
                    registerLanguages(monaco);
                    editor.onDidFocusEditorText(() => onFocus?.());
                    editor.onDidBlurEditorText(async () => {
                        await editor.getAction('editor.action.formatDocument').run();
                    });
                }}
            />
        </Box>
    ) : (
        <Center className={classes.editor}>
            <Loader />
        </Center>
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
            {_buttons}
            {_editor}
            {_error}
        </Stack>
    );
};
