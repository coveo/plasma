import {
    ActionIcon,
    Box,
    Center,
    Flex,
    ScrollArea,
    SimpleGrid,
    Stack,
    Title,
    Tooltip,
    useClipboard,
} from '@coveord/plasma-mantine';
import {CheckSize16Px, CopySize16Px, PlaySize16Px} from '@coveord/plasma-react-icons';
import {CodeHighlight} from '@mantine/code-highlight';
import '@mantine/code-highlight/styles.css';
import {ReactNode} from 'react';
import CodeHighlightClassesThemeClasses from '../styles/CodeHighlight.theme.module.css';
import DemoClasses from './Demo.module.css';
import getCodeSandboxLink from './getCodeSandboxLink';

const MAX_HEIGHT = 500;
// const MIN_HEIGHT = 100;

interface DemoProps extends DemoComponentProps {
    snippet: string;
    children?: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Demo = ({children, snippet, center = false, grow = false, title, layout, noPadding, maxHeight}: DemoProps) => {
    const clipboard = useClipboard();
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
        <div className={DemoClasses.root}>
            {title ? (
                <Title order={5} mb="xs">
                    {title}
                </Title>
            ) : null}
            <SimpleGrid className={DemoClasses.sandbox} cols={layout === 'vertical' ? 1 : 2} spacing={0}>
                <Box<'div' | typeof Center> component={center ? Center : 'div'} className={DemoClasses.preview}>
                    {maxHeight ? (
                        <Flex direction={'column'} mah={maxHeight} style={{flex: 1}}>
                            <div
                                className={DemoClasses.flexPreviewWrapper}
                                style={{padding: noPadding ? 0 : 'var(--mantine-spacing-md)'}}
                            >
                                {children}
                            </div>
                        </Flex>
                    ) : (
                        <ScrollArea.Autosize mah={MAX_HEIGHT}>
                            <div
                                style={{
                                    padding: noPadding ? 0 : 'var(--mantine-spacing-md)',
                                    height: grow ? MAX_HEIGHT : '100%',
                                }}
                            >
                                {children}
                            </div>
                        </ScrollArea.Autosize>
                    )}
                </Box>
                <div className={DemoClasses.code}>
                    <CodeHighlight
                        language="tsx"
                        code={snippet}
                        withCopyButton={false}
                        highlightOnClient
                        classNames={{root: CodeHighlightClassesThemeClasses.theme}}
                        styles={{pre: {maxHeight: maxHeight ?? MAX_HEIGHT, minHeight: MIN_HEIGHT}}}
                    />
                    <Stack className={DemoClasses.actions} gap="xs">
                        <Tooltip label={clipboard.copied ? 'Copied' : 'Copy'} position="left">
                            <ActionIcon
                                variant="subtle"
                                radius="sm"
                                c={'var(--mantine-color-gray-6)'}
                                onClick={() => clipboard.copy(snippet)}
                            >
                                {clipboard.copied ? <CheckSize16Px height={16} /> : <CopySize16Px height={16} />}
                            </ActionIcon>
                        </Tooltip>

                        <Tooltip label="Open in CodeSanbox" position="left">
                            <ActionIcon
                                variant="subtle"
                                radius="sm"
                                c={'var(--mantine-color-gray-6)'}
                                onClick={createSandbox}
                            >
                                <PlaySize16Px height={16} />
                            </ActionIcon>
                        </Tooltip>
                    </Stack>
                </div>
            </SimpleGrid>
        </div>
    );
};
export default Demo;
