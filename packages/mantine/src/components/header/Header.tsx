import {QuestionSize24Px} from '@coveord/plasma-react-icons';
import {Anchor, Breadcrumbs, DefaultProps, Divider, Group, Stack, Text, Title, Tooltip} from '@mantine/core';
import {FunctionComponent, ReactNode} from 'react';

export interface HeaderProps extends DefaultProps {
    /**
     * The description text displayed inside the header underneath the title
     */
    description?: ReactNode;
    /**
     * Action buttons that can be displayed on the right of the header
     */
    actions?: ReactNode;
    /**
     * Whether the header should have a border on the bottom
     */
    borderBottom?: boolean;
    /**
     * A href pointing to documentation related to the current panel.
     * When provided, an info icon is rendered next to the title as link to this documentation
     */
    docLink?: string;
    /**
     * The tooltip text shown when hovering over the doc link icon
     */
    docLinkTooltipLabel?: string;
    /**
     * The title of the header.
     * If more than one children are provided, each of them act as parts of a breadcrumb
     */
    children: ReactNode;
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
                                <Anchor inline href={docLink} target="_blank" ml="xs">
                                    <QuestionSize24Px height={24} />
                                </Anchor>
                            </Tooltip>
                        ) : null}
                    </Group>
                </Title>
                <Text size="sm">{description}</Text>
            </Stack>
            <Group spacing="xs">{actions}</Group>
        </Group>
        {borderBottom ? <Divider size="xs" /> : null}
    </>
);
