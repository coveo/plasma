import {InfoSize16Px} from '@coveord/plasma-react-icons';
import {Box, ColorSwatch, Group, Stack, Text, Title, Tooltip, useMantineTheme} from '@mantine/core';
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
}

export const BrowserPreview = ({
    children,
    headerTooltip = 'The final look in your search page may differ due to the customization you made in your page.',
    title,
}: PropsWithChildren<BrowserPreviewProps>) => {
    const theme = useMantineTheme();
    return (
        <Stack spacing={0} h={762} maw={544} style={{boxShadow: theme.shadows.md, borderRadius: '8px'}}>
            <Box>
                <Group
                    position="apart"
                    px={16}
                    py={8}
                    bg="gray.1"
                    style={{boxShadow: theme.shadows.xs, borderRadius: '8px 8px 0 0'}}
                    noWrap
                >
                    <Group spacing="xs" noWrap>
                        <Title color="gray.6" order={4}>
                            Preview
                        </Title>
                        <Tooltip label={headerTooltip} position="right" maw={400} multiline>
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
            <Box py="xl" px="lg" style={{overflowY: 'auto', display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                {children}
            </Box>
        </Stack>
    );
};
