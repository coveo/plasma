import {
    ActionIcon,
    Box,
    Center,
    createStyles,
    Group,
    ScrollArea,
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

const useStyles = createStyles((theme, {center, grow}: DemoComponentProps) => ({
    root: {},
    sandbox: {
        border: `1px solid ${theme.colors.gray[3]}`,
        borderRadius: theme.radius.md,
        overflow: 'hidden',
    },
    actions: {
        position: 'absolute',
        top: theme.spacing.xs,
        right: theme.spacing.xs,
        zIndex: 2,
        'button:hover, a:hover': {
            backgroundColor: theme.colors.gray[8],
        },
    },
    preview: {
        backgroundColor: 'white',
        minHeight: 100,
    },
    previewWrapper: {
        padding: center ? undefined : theme.spacing.md,
        height: grow ? MAX_HEIGHT : '100%',
    },
    code: {
        minHeight: 100,
        position: 'relative',
        backgroundColor: '#1E1E1E',
    },
}));

const Demo = ({children, snippet, center = false, grow = false, title}: DemoProps) => {
    const {classes} = useStyles({center, grow});
    const clipboard = useClipboard();
    const sandboxLink = getCodeSandboxLink(snippet);
    return (
        <div className={classes.root}>
            {title ? (
                <Title order={6} mb="xs">
                    {title}
                </Title>
            ) : null}
            <Group grow className={classes.sandbox} align="stretch" spacing={0}>
                <Box component={center ? Center : 'div'} className={classes.preview}>
                    <ScrollArea.Autosize maxHeight={MAX_HEIGHT}>
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
                            <ActionIcon<'a'> radius="sm" href={sandboxLink} target="_blank" component="a">
                                <PlaySize16Px height={16} />
                            </ActionIcon>
                        </Tooltip>
                    </Stack>
                </div>
            </Group>
        </div>
    );
};

export default Demo;
