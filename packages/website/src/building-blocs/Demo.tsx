import {
    ActionIcon,
    Box,
    Center,
    createStyles,
    ScrollArea,
    SimpleGrid,
    Stack,
    Title,
    Tooltip,
    useClipboard,
} from '@coveord/plasma-mantine';
import {CheckSize16Px, CopySize16Px, PlaySize16Px} from '@coveord/plasma-react-icons';
import {Prism} from '@mantine/prism';
import vsDark from 'prism-react-renderer/themes/vsDark';
import vsLight from 'prism-react-renderer/themes/vsLight';
import {ReactNode} from 'react';

import getCodeSandboxLink from './getCodeSandboxLink';

const MAX_HEIGHT = 500;
const MIN_HEIGHT = 100;

interface DemoProps extends DemoComponentProps {
    snippet?: string;
    children?: ReactNode;
}

const useStyles = createStyles((theme, {grow, noPadding}: DemoComponentProps) => ({
    root: {},
    sandbox: {
        border: `1px solid ${theme.colors.gray[3]}`,
        borderRadius: theme.radius.md,
        overflow: 'hidden',
    },
    actions: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 2,
        padding: theme.spacing.xs,
        backgroundColor: '#1E1E1E',
        'button:hover, a:hover': {
            backgroundColor: theme.colors.gray[8],
        },
    },
    preview: {
        backgroundColor: 'white',
        minHeight: 100,
    },
    previewWrapper: {
        padding: noPadding ? 0 : theme.spacing.md,
        height: grow ? MAX_HEIGHT : '100%',
    },
    code: {
        minHeight: 100,
        position: 'relative',
        backgroundColor: '#1E1E1E',
    },
}));

const Demo = ({children, snippet, center = false, grow = false, title, layout, noPadding}: DemoProps) => {
    const {classes} = useStyles({center, grow, noPadding});
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
        <div className={classes.root}>
            {title ? (
                <Title order={5} mb="xs">
                    {title}
                </Title>
            ) : null}
            <SimpleGrid className={classes.sandbox} cols={layout === 'vertical' ? 1 : 2} spacing={0}>
                <Box component={center ? Center : 'div'} className={classes.preview}>
                    <ScrollArea.Autosize mah={MAX_HEIGHT}>
                        <div className={classes.previewWrapper}>{children}</div>
                    </ScrollArea.Autosize>
                </Box>
                <div className={classes.code}>
                    <Prism
                        withLineNumbers
                        language="tsx"
                        colorScheme="dark"
                        getPrismTheme={(_theme, colorScheme) => (colorScheme === 'light' ? vsLight : vsDark)}
                        radius={0}
                        noCopy
                        scrollAreaComponent={ScrollArea.Autosize}
                        styles={{scrollArea: {maxHeight: MAX_HEIGHT, minHeight: MIN_HEIGHT}}}
                    >
                        {snippet}
                    </Prism>
                    <Stack className={classes.actions} spacing="xs">
                        <Tooltip label={clipboard.copied ? 'Copied' : 'Copy'} position="left">
                            <ActionIcon radius="sm" onClick={() => clipboard.copy(snippet)}>
                                {clipboard.copied ? <CheckSize16Px height={16} /> : <CopySize16Px height={16} />}
                            </ActionIcon>
                        </Tooltip>

                        <Tooltip label="Open in CodeSanbox" position="left">
                            <ActionIcon radius="sm" onClick={createSandbox}>
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
