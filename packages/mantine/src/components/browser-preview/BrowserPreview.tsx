import {InfoSize16Px} from '@coveord/plasma-react-icons';
import {Box, Group, Image, Stack, Text, Title, Tooltip} from '@mantine/core';
import {PropsWithChildren} from 'react';

export interface BrowserPreviewProps {
    /**
     * Text that will be displayed in the tooltip on the info icon
     *
     * @default The final look in your search page may differ due to the customization you made in your page.
     *
     */
    headerDescription?: string;
    /**
     * Title of the browser preview.
     */
    title?: string;
}

export const BrowserPreview = ({
    children,
    headerDescription = 'The final look in your search page may differ due to the customization you made in your page.',
    title,
}: PropsWithChildren<BrowserPreviewProps>) => (
    <Stack mih={512} sx={{border: '1px solid', borderRadius: '8px', boxShadow: '0px 1px 0px 0px rgba(4, 8, 31, 0.08)'}}>
        <Box>
            <Group px={16} py={8} sx={(theme) => ({backgroundColor: theme.colors.gray[1]})}>
                <Title order={4}>Preview</Title>
                <Tooltip label={headerDescription} position="right">
                    <InfoSize16Px height={16} />
                </Tooltip>
                <Text truncate>{title}</Text>
                <Box>
                    <Image />
                </Box>
            </Group>
        </Box>
        <Box>{children}</Box>
    </Stack>
);
