import {QuestionSize24Px} from '@coveord/plasma-react-icons';
import {Anchor, Breadcrumbs, DefaultProps, Divider, Group, Stack, Text, Title, Tooltip} from '@mantine/core';
import {FunctionComponent, ReactNode} from 'react';

interface HeaderProps extends DefaultProps {
    description?: ReactNode;
    actions?: ReactNode;
    borderBottom?: boolean;
    docLink?: string;
    docLinkTooltipLabel?: string;
}

export const Header: FunctionComponent<HeaderProps> = ({
    description,
    actions,
    borderBottom,
    docLink,
    docLinkTooltipLabel,
    children,
    ...others
}) => (
    <>
        <Group position="apart" py="md" px="xl" {...others}>
            <Stack spacing="xs">
                <Title order={4}>
                    <Group spacing={0}>
                        <Breadcrumbs>{children}</Breadcrumbs>
                        {docLink ? (
                            <Tooltip label={docLinkTooltipLabel} position="bottom">
                                <Anchor href={docLink} target="_blank" ml="xs">
                                    <QuestionSize24Px height={24} />
                                </Anchor>
                            </Tooltip>
                        ) : null}
                    </Group>
                </Title>
                <Text>{description}</Text>
            </Stack>
            <Group spacing="xs">{actions}</Group>
        </Group>
        {borderBottom ? <Divider size="xs" /> : null}
    </>
);
