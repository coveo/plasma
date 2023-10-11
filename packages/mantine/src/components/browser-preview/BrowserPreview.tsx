import {InfoSize16Px} from '@coveord/plasma-react-icons';
import {
    Box,
    ColorSwatch,
    DefaultProps,
    Flex,
    Group,
    Selectors,
    Stack,
    Text,
    Title,
    Tooltip,
    useMantineTheme,
} from '@mantine/core';
import {PropsWithChildren} from 'react';
import useStyles from './BrowserPreview.styles';

export interface BrowserPreviewProps extends DefaultProps<Selectors<typeof useStyles>> {
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
    // Style props
    classNames,
    className,
    styles,
    unstyled,
    ...others
}: PropsWithChildren<BrowserPreviewProps>) => {
    const theme = useMantineTheme();
    const {classes, cx} = useStyles(null, {classNames, name: 'BrowserPreview', styles, unstyled});
    return (
        <Stack className={cx(classes.root, className)} spacing={0} maw={544} mih={0} {...others}>
            <Box>
                <Group className={classes.header} position="apart" px="sm" py="xs" bg="gray.1" noWrap>
                    <Group spacing="xs" noWrap>
                        <Title color="gray.6" order={4}>
                            Preview
                        </Title>
                        {!!headerTooltip && (
                            <Tooltip label={headerTooltip} position="right" maw={400}>
                                <InfoSize16Px height={16} className={classes.infoIcon} />
                            </Tooltip>
                        )}
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
            <Flex className={classes.content} p="xl" direction="column">
                {children}
            </Flex>
        </Stack>
    );
};
