import {
    Box,
    Center,
    Group,
    Input,
    InputWrapperProps,
    Loader,
    Space,
    Stack,
    StackProps,
    px,
    useMantineColorScheme,
    useMantineTheme,
    useProps,
} from '@mantine/core';
import {useUncontrolled} from '@mantine/hooks';
import Editor, {Monaco, loader} from '@monaco-editor/react';
import {editor as monacoEditor, MarkerSeverity} from 'monaco-editor';
import {FunctionComponent, useEffect, useRef, useState} from 'react';

import cx from 'clsx';
import {useParentHeight} from '../../hooks';
import {CopyToClipboard} from '../copyToClipboard';
import CodeEditorClasses from './CodeEditor.module.css';
import {XML} from './languages/xml';
import {Search} from './search';
interface CodeEditorProps
    extends Omit<
            InputWrapperProps,
            'inputContainer' | 'inputWrapperOrder' | 'classNames' | 'styles' | 'vars' | 'onChange'
        >,
        Omit<StackProps, 'onChange'> {
    /**
     * The language syntax of the editor
     *
     * @default 'plaintext'
     */
    language?: 'plaintext' | 'json' | 'markdown' | 'python' | 'xml' | (string & unknown);
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
    /**
     * Options to pass to the monaco editor.
     * Currently only supporting [`tabSize`](https://microsoft.github.io/monaco-editor/typedoc/interfaces/editor.IStandaloneEditorConstructionOptions.html#tabSize).
     *
     */
    options?: Pick<monacoEditor.IStandaloneEditorConstructionOptions, 'tabSize'>;
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
        options: {tabSize} = {tabSize: 2},
        ...others
    } = useProps('CodeEditor', defaultProps, props);
    const [loaded, setLoaded] = useState(false);
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

    const registerThemes = (monaco: Monaco) => {
        monaco.editor.defineTheme('light-disabled', {
            base: 'vs',
            inherit: true,
            rules: [],
            colors: {
                'editor.background': theme.colors.gray[2],
            },
        });
        monaco.editor.defineTheme('vs-dark-disabled', {
            base: 'vs-dark',
            inherit: true,
            rules: [],
            colors: {
                'editor.background': theme.colors.navy[7],
            },
        });
    };

    const handleSearch = () => {
        if (editorRef.current) {
            editorRef.current.focus();
            editorRef.current.trigger('editor', 'actions.find', '');
            onSearch?.();
        }
    };

    const [hasMonacoError, setHasMonacoError] = useState(false);
    const renderErrorOutline = !!error || hasMonacoError;
    const theme = useMantineTheme();
    const {colorScheme} = useMantineColorScheme();

    useEffect(() => {
        if (monacoLoader === 'local') {
            loadLocalMonaco();
        } else {
            setLoaded(true);
        }
    }, []);

    const handleValidate = (markers: monacoEditor.IMarker[]) => {
        setHasMonacoError(markers.some((marker) => marker.severity === MarkerSeverity.Error));
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
        <Group justify="right" gap={0}>
            <Search handleSearch={handleSearch} />
            <CopyToClipboard value={_value} onCopy={() => onCopy?.()} />
        </Group>
    );
    let editorTheme = colorScheme === 'light' ? 'light' : 'vs-dark';
    if (disabled) {
        editorTheme += '-disabled';
    }

    const _editor = loaded ? (
        <Box
            p="md"
            pl="xs"
            className={cx(
                CodeEditorClasses.editor,
                {[CodeEditorClasses.valid]: !renderErrorOutline},
                {[CodeEditorClasses.error]: renderErrorOutline},
                {[CodeEditorClasses.disabled]: disabled},
            )}
            data-testid="editor-wrapper"
        >
            <Editor
                onValidate={handleValidate}
                defaultLanguage={language}
                theme={editorTheme}
                options={{
                    minimap: {enabled: false},
                    wordWrap: 'on',
                    scrollBeyondLastLine: false,
                    formatOnPaste: true,
                    fontSize: px(theme.fontSizes.xs) as number,
                    readOnly: disabled,
                    tabSize,
                }}
                value={_value}
                onChange={handleChange}
                onMount={(editor, monaco) => {
                    editorRef.current = editor;
                    registerLanguages(monaco);
                    registerThemes(monaco);
                    editor.onDidFocusEditorText(() => onFocus?.());
                    editor.onDidBlurEditorText(async () => {
                        if (!hasMonacoError) {
                            await editor.getAction('editor.action.formatDocument').run();
                        }
                    });
                }}
            />
        </Box>
    ) : (
        <Center className={CodeEditorClasses.editor}>
            <Loader />
        </Center>
    );

    return (
        <Stack justify="flex-start" gap={0} h={Math.max(parentHeight, minHeight)} mah={maxHeight} ref={ref} {...others}>
            {_header}
            {_buttons}
            {_editor}
            {_error}
        </Stack>
    );
};
