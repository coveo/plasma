import {
    ActionIcon,
    Anchor,
    Box,
    Center,
    CopyToClipboard,
    Flex,
    ScrollArea,
    SimpleGrid,
    Stack,
    Title,
    Tooltip,
} from '@coveord/plasma-mantine';
import {IconPlayerPlay, LinksSize16Px} from '@coveord/plasma-react-icons';
import {CodeHighlight, CodeHighlightTabs} from '@mantine/code-highlight';
import '@mantine/code-highlight/styles.css';
import {Component, ReactNode} from 'react';
import CodeHighlightClassesThemeClasses from '../styles/CodeHighlight.theme.module.css';
import DemoClasses from './Demo.module.css';
import getCodeSandboxLink from './getCodeSandboxLink';

const MAX_HEIGHT = 500;
const MIN_HEIGHT = 100;

interface DemoProps extends DemoComponentProps {
    id: string;
    snippet: string;
    children?: ReactNode;
}

const Demo = ({
    id,
    children,
    snippet,
    center = false,
    grow = false,
    title,
    layout,
    noPadding,
    maxHeight,
    additionalFiles,
}: DemoProps) => {
    const createSandbox = async () => {
        try {
            const res = await fetch(getCodeSandboxLink(snippet));
            const {sandbox_id} = await res.json();
            window.open(`https://codesandbox.io/p/sandbox/${sandbox_id}?file=%2Fsrc%2FDemo.tsx`, '_blank');
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <div>
            {title ? (
                <Anchor href={`#${id}`} className={DemoClasses.anchor}>
                    <Title order={5} mb="xs" id={id} className={DemoClasses.title}>
                        {title}
                    </Title>
                    <LinksSize16Px className={DemoClasses.anchorIcon} height={16} />
                </Anchor>
            ) : null}
            <SimpleGrid className={DemoClasses.sandbox} cols={layout === 'vertical' ? 1 : 2} spacing={0}>
                <ErrorBoundary>
                    <Box<'div' | typeof Center> component={center ? Center : 'div'} className={DemoClasses.preview}>
                        {maxHeight ? (
                            <Flex direction={'column'} mah={maxHeight} flex={1}>
                                <Box className={DemoClasses.flexPreviewWrapper} p={noPadding ? 0 : 'md'}>
                                    {children}
                                </Box>
                            </Flex>
                        ) : (
                            <ScrollArea.Autosize mah={MAX_HEIGHT}>
                                <Box p={noPadding ? 0 : 'md'} h={grow ? MAX_HEIGHT : '100%'}>
                                    {children}
                                </Box>
                            </ScrollArea.Autosize>
                        )}
                    </Box>
                </ErrorBoundary>
                <div className={DemoClasses.code}>
                    {additionalFiles && additionalFiles.length > 0 ? (
                        <CodeHighlightTabs
                            code={[
                                {code: snippet, language: 'tsx', fileName: 'Demo.tsx', icon: null},
                                ...additionalFiles,
                            ]}
                            withCopyButton={false}
                            classNames={{
                                root: CodeHighlightClassesThemeClasses.theme,
                                file: CodeHighlightClassesThemeClasses.file,
                            }}
                            styles={{pre: {maxHeight: maxHeight ?? MAX_HEIGHT, minHeight: MIN_HEIGHT}}}
                        />
                    ) : (
                        <CodeHighlight
                            language="tsx"
                            code={snippet}
                            withCopyButton={false}
                            highlightOnClient
                            classNames={{root: CodeHighlightClassesThemeClasses.theme}}
                            styles={{pre: {maxHeight: maxHeight ?? MAX_HEIGHT, minHeight: MIN_HEIGHT}}}
                        />
                    )}
                    <Stack className={DemoClasses.actions} gap="xs">
                        <CopyToClipboard color="gray" value={snippet} />
                        <Tooltip label="Open in CodeSanbox" position="left">
                            <ActionIcon.Quaternary color="gray" onClick={createSandbox}>
                                <IconPlayerPlay size={20} />
                            </ActionIcon.Quaternary>
                        </Tooltip>
                    </Stack>
                </div>
            </SimpleGrid>
        </div>
    );
};

class ErrorBoundary extends Component<{children: ReactNode}, {hasError: boolean}> {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return {hasError: true};
    }

    componentDidCatch(error, info) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        console.error(error, info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return null;
        }

        return this.props.children;
    }
}

export default Demo;
