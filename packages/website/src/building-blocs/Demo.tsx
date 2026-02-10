import {
    ActionIcon,
    Anchor,
    Box,
    Center,
    Code,
    CopyToClipboard,
    Flex,
    ScrollArea,
    SimpleGrid,
    Stack,
    Text,
    Title,
    Tooltip,
} from '@coveord/plasma-mantine';
import {IconPlayerPlay, LinksSize16Px} from '@coveord/plasma-react-icons';
import {CodeHighlight, CodeHighlightTabs} from '@mantine/code-highlight';
import {ReactNode} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import DemoClasses from './Demo.module.css';
import getCodeSandboxLink from './getCodeSandboxLink.js';

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
                <Box<'div' | typeof Center> component={center ? Center : 'div'} className={DemoClasses.preview}>
                    <ErrorBoundary
                        fallbackRender={({error}) => (
                            <Code block w="100%">
                                <Text c="critical" fw="var(--coveo-fw-bold)" mb="xs">
                                    An error occurred while rendering the demo:
                                </Text>
                                {error instanceof Error ? error.message : String(error)}
                            </Code>
                        )}
                    >
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
                    </ErrorBoundary>
                </Box>
                <div className={DemoClasses.code}>
                    {additionalFiles && additionalFiles.length > 0 ? (
                        <CodeHighlightTabs
                            code={[
                                {code: snippet, language: 'tsx', fileName: 'Demo.tsx', icon: null},
                                ...additionalFiles,
                            ]}
                            withCopyButton={false}
                            styles={{pre: {maxHeight: maxHeight ?? MAX_HEIGHT, minHeight: MIN_HEIGHT}}}
                        />
                    ) : (
                        <CodeHighlight
                            language="tsx"
                            code={snippet}
                            withCopyButton={false}
                            styles={{pre: {maxHeight: maxHeight ?? MAX_HEIGHT, minHeight: MIN_HEIGHT}}}
                        />
                    )}
                    <Stack className={DemoClasses.actions} gap="xs">
                        <CopyToClipboard color="gray" value={snippet} />
                        <Tooltip label="Open in CodeSanbox" position="left">
                            <ActionIcon.Quaternary color="gray" onClick={createSandbox}>
                                <IconPlayerPlay size={16} />
                            </ActionIcon.Quaternary>
                        </Tooltip>
                    </Stack>
                </div>
            </SimpleGrid>
        </div>
    );
};

export default Demo;
