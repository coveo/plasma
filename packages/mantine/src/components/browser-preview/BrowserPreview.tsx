import {InfoSize16Px} from '@coveord/plasma-react-icons';
import {Box, ColorSwatch, Flex, Group, Stack, Text, Title, Tooltip, useMantineTheme} from '@mantine/core';
import {PropsWithChildren} from 'react';

export interface BrowserPreviewProps {
    /**
     * Text that will be displayed in the tooltip on the info icon
     *
     * @default The final look in your search page may differ due to the customization you made in your page.
     *
     */
    headerTooltip?: string;
    /**
     * Title of the browser preview.
     */
    title?: string;
    /**
     * Maximum height of the window.
     *
     */
    maxHeight?: number;
}

export const BrowserPreview = ({
    children,
    headerTooltip = 'The final look in your search page may differ due to the customization you made in your page.',
    title,
    maxHeight,
}: PropsWithChildren<BrowserPreviewProps>) => {
    const theme = useMantineTheme();
    return (
        <Stack
            spacing={0}
            style={{boxShadow: theme.shadows.md, borderRadius: theme.defaultRadius}}
            mah={maxHeight ?? 'none'}
            w={544}
        >
            <Box>
                <Group
                    position="apart"
                    px="sm"
                    py="xs"
                    bg="gray.1"
                    style={{boxShadow: theme.shadows.xs, borderRadius: '8px 8px 0 0'}}
                    noWrap
                >
                    <Group spacing="xs" noWrap>
                        <Title color="gray.6" order={4}>
                            Preview
                        </Title>
                        <Tooltip label={headerTooltip} position="right" maw={400}>
                            <InfoSize16Px height={16} style={{color: theme.colors.gray[5]}} />
                        </Tooltip>
                    </Group>
                    <Text lineClamp={1} color="gray.6">
                        {title}
                    </Text>
                    <Group spacing="xs" noWrap>
                        <ColorSwatch color={theme.colors.gray[3]} />
                        <ColorSwatch color={theme.colors.gray[3]} />
                        <ColorSwatch color={theme.colors.gray[3]} />
                    </Group>
                </Group>
            </Box>
            <Flex py="xl" px="lg" direction="column" style={{overflowY: 'auto', flexGrow: 1}}>
                {children}
            </Flex>
        </Stack>
    );
};
