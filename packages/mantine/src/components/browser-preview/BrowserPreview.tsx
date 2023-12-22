import {InfoSize16Px} from '@coveord/plasma-react-icons';
import {Box, ColorSwatch, Flex, Group, Stack, StackProps, Text, Title, Tooltip, useMantineTheme} from '@mantine/core';
import cx from 'clsx';
import {PropsWithChildren} from 'react';
import BrowserPreviewClasses from './BrowserPreview.module.css';

export interface BrowserPreviewProps extends StackProps {
    /**
     * Text to display in a tooltip in the header.
     *
     */
    headerTooltip?: string;
    /**
     * Custom title to be displayed at the center of the header.
     */
    title?: string;
}

export const BrowserPreview = ({
    children,
    headerTooltip,
    title,
    className,
    ...others
}: PropsWithChildren<BrowserPreviewProps>) => {
    const theme = useMantineTheme();
    return (
        <Stack className={cx(BrowserPreviewClasses.root, className)} gap={0} maw={544} mih={0} {...others}>
            <Box>
                <Group className={BrowserPreviewClasses.header} justify="space-between" px="sm" py="xs" bg="gray.1">
                    <Group gap="xs">
                        <Title c="gray.6" order={4}>
                            Preview
                        </Title>
                        {!!headerTooltip && (
                            <Tooltip label={headerTooltip} position="right" maw={400}>
                                <InfoSize16Px height={16} className={BrowserPreviewClasses.infoIcon} />
                            </Tooltip>
                        )}
                    </Group>
                    <Text lineClamp={1} color="gray.6">
                        {title}
                    </Text>
                    <Group gap="xs">
                        <ColorSwatch color={theme.colors.gray[3]} />
                        <ColorSwatch color={theme.colors.gray[3]} />
                        <ColorSwatch color={theme.colors.gray[3]} />
                    </Group>
                </Group>
            </Box>
            <Flex className={BrowserPreviewClasses.content} p="xl" direction="column">
                {children}
            </Flex>
        </Stack>
    );
};
