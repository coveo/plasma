import {Flex, Group, Stack, StackProps, Text, Tooltip} from '@mantine/core';
import cx from 'clsx';
import {PropsWithChildren} from 'react';
import {InfoToken} from '../info-token/InfoToken.js';
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
}: PropsWithChildren<BrowserPreviewProps>) => (
    <Stack className={cx(BrowserPreviewClasses.root, className)} gap={0} maw={544} mih={0} {...others}>
        <Group
            className={BrowserPreviewClasses.header}
            justify="space-between"
            p="sm"
            bg="var(--mantine-color-default-hover)"
            wrap="nowrap"
        >
            <Group gap="xs" wrap="nowrap">
                <Text c="dimmed" fz="md" lh="18px">
                    Preview
                </Text>
                {!!headerTooltip && (
                    <Tooltip label={headerTooltip} position="right" maw={400}>
                        <InfoToken variant="information" className={BrowserPreviewClasses.infoIcon} />
                    </Tooltip>
                )}
            </Group>
            {title && (
                <Text lineClamp={1} c="dimmed" fz="md" lh="18px">
                    {title}
                </Text>
            )}
        </Group>
        <Flex className={BrowserPreviewClasses.content} p="lg" direction="column">
            {children}
        </Flex>
    </Stack>
);
