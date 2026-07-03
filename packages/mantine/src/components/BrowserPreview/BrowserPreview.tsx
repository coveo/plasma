import {Flex, Group, Stack, StackProps, Text, Tooltip} from '@mantine/core';
import cx from 'clsx';
import {PropsWithChildren} from 'react';
import {InfoToken} from '../InfoToken/InfoToken.js';
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
            p="sm"
            bg="var(--mantine-color-default-hover)"
            wrap="nowrap"
            gap="xxs"
        >
            <Text lineClamp={1} size="md">
                {title || 'Preview'}
            </Text>
            {!!headerTooltip && (
                <Tooltip label={headerTooltip} position="right">
                    <InfoToken.Question className={BrowserPreviewClasses.infoIcon} />
                </Tooltip>
            )}
        </Group>
        <Flex className={BrowserPreviewClasses.content} p="sm" direction="column" bg="var(--mantine-color-body)">
            {children}
        </Flex>
    </Stack>
);

BrowserPreview.displayName = 'BrowserPreview';
