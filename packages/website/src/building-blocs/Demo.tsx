import {ActionIcon, createStyles, ScrollArea, SimpleGrid, Stack, Tooltip, useClipboard} from '@coveord/plasma-mantine';
import {CheckSize16Px, CopySize16Px, PlaySize16Px} from '@coveord/plasma-react-icons';
import {Prism} from '@mantine/prism';
import vsDark from 'prism-react-renderer/themes/vsDark';
import vsLight from 'prism-react-renderer/themes/vsLight';
import {ReactNode} from 'react';

import getCodeSandboxLink from './getCodeSandboxLink';

export interface StaticDemoProps {
    snippet?: string;
    children?: ReactNode;
}

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
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
}));

const height = 500;

const Demo = ({children, snippet}: StaticDemoProps) => {
    const {classes} = useStyles();
    const clipboard = useClipboard();
    const sandboxLink = getCodeSandboxLink(snippet);
    return (
        <SimpleGrid cols={2} className={classes.root}>
            <ScrollArea style={{height}}>{children}</ScrollArea>
            <Prism
                withLineNumbers
                language="tsx"
                colorScheme="dark"
                getPrismTheme={(_theme, colorScheme) => (colorScheme === 'light' ? vsLight : vsDark)}
                styles={{scrollArea: {height}}}
                radius="md"
                noCopy
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
        </SimpleGrid>
    );
};

export default Demo;
