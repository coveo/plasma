import {QuestionSize16Px} from '@coveord/plasma-react-icons';
import {Anchor, Breadcrumbs, DefaultProps, Divider, Flex, Group, Stack, Text, Title, Tooltip} from '@mantine/core';
import {Children, FunctionComponent, ReactElement, ReactNode} from 'react';

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

interface HeaderType {
    (props: HeaderProps): ReactElement;
    Breadcrumbs: typeof HeaderBreadcrumbs;
}

export const Header: HeaderType = ({
    description,
    actions,
    borderBottom,
    docLink,
    docLinkTooltipLabel,
    children,
    ...others
}) => {
    const convertedChildren = Children.toArray(children) as ReactElement[];
    const breadcrumbs = convertedChildren.find((child) => child.type === HeaderBreadcrumbs);
    const childrenWithoutBreadcrumbs = convertedChildren.filter((child) => child.type !== HeaderBreadcrumbs);
    return (
        <>
            <Group position="apart" p="xl" pb="lg" {...others}>
                <Stack spacing={0}>
                    {breadcrumbs}
                    <Flex align="center">
                        <Title order={1} color="gray.5">
                            {childrenWithoutBreadcrumbs}
                        </Title>
                        {docLink ? (
                            <Tooltip label={docLinkTooltipLabel} disabled={!docLinkTooltipLabel} position="right">
                                <Anchor inline href={docLink} target="_blank" ml="xs">
                                    <QuestionSize16Px height={16} />
                                </Anchor>
                            </Tooltip>
                        ) : null}
                    </Flex>
                    <Text size="md" color="gray.6">
                        {description}
                    </Text>
                </Stack>
                <Group spacing="sm">{actions}</Group>
            </Group>
            {borderBottom ? <Divider size="xs" /> : null}
        </>
    );
};

const HeaderBreadcrumbs: FunctionComponent<{children: ReactNode}> = ({children}) => (
    <Breadcrumbs
        styles={(theme) => ({
            breadcrumb: {fontSize: theme.fontSizes.sm},
            separator: {color: theme.colors.gray[5]},
        })}
    >
        {children}
    </Breadcrumbs>
);

Header.Breadcrumbs = HeaderBreadcrumbs;
