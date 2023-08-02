import {QuestionSize16Px} from '@coveord/plasma-react-icons';
import {Anchor, Breadcrumbs, DefaultProps, Divider, Group, Stack, Text, Title, Tooltip} from '@mantine/core';
import {Children, FunctionComponent, ReactElement, ReactNode} from 'react';

export interface HeaderProps extends DefaultProps {
    /**
     * The description text displayed inside the header underneath the title
     */
    description?: ReactNode;
    /**
     * Whether the header should have a border on the bottom
     */
    borderBottom?: boolean;
    /**
     * Use the modal variant when displaying the header inside a modal
     *
     * @default 'page'
     */
    variant?: 'page' | 'modal';
    /**
     * The title of the header.
     */
    children: ReactNode;
}

interface HeaderType {
    (props: HeaderProps): ReactElement;
    Breadcrumbs: typeof HeaderBreadcrumbs;
    Actions: typeof HeaderActions;
    DocAnchor: typeof HeaderDocAnchor;
}

export const Header: HeaderType = ({description, borderBottom, children, variant = 'page', ...others}) => {
    const convertedChildren = Children.toArray(children) as ReactElement[];
    const breadcrumbs = convertedChildren.find((child) => child.type === HeaderBreadcrumbs);
    const actions = convertedChildren.find((child) => child.type === HeaderActions);
    const docAnchor = convertedChildren.find((child) => child.type === HeaderDocAnchor);
    const otherChildren = convertedChildren.filter(
        (child) => child.type !== HeaderBreadcrumbs && child.type !== HeaderActions && child.type !== HeaderDocAnchor,
    );
    return (
        <>
            <Group
                position="apart"
                p={variant === 'page' ? 'xl' : undefined}
                pb={variant === 'page' ? 'lg' : undefined}
                {...others}
            >
                <Stack spacing={0}>
                    {breadcrumbs}
                    <Title
                        order={variant === 'page' ? 1 : 3}
                        color={variant === 'page' ? 'gray.5' : undefined}
                        sx={{wordBreak: 'break-word'}}
                    >
                        {otherChildren}
                        {docAnchor}
                    </Title>
                    <Text size={variant === 'page' ? 'md' : 'sm'} color="gray.6">
                        {description}
                    </Text>
                </Stack>
                {actions}
            </Group>
            {borderBottom ? <Divider size="xs" /> : null}
        </>
    );
};

const HeaderBreadcrumbs: FunctionComponent<{children: ReactNode}> = ({children}) => (
    <Breadcrumbs
        styles={(theme) => ({
            breadcrumb: {fontSize: theme.fontSizes.sm, fontWeight: 300},
            separator: {color: theme.colors.gray[5]},
        })}
    >
        {children}
    </Breadcrumbs>
);

const HeaderActions: FunctionComponent<{children: ReactNode}> = ({children}) => <Group spacing="sm">{children}</Group>;

export interface HeaderDocAnchorProps {
    /**
     * A href pointing to documentation related to the current panel.
     * When provided, an info icon is rendered next to the title as link to this documentation
     */
    href: string;
    /**
     * The tooltip text shown when hovering over the doc link icon
     */
    label?: string;
}

const HeaderDocAnchor: FunctionComponent<HeaderDocAnchorProps> = ({href: docLink, label: docLinkTooltipLabel}) => (
    <Tooltip label={docLinkTooltipLabel} disabled={!docLinkTooltipLabel} position="right">
        <Anchor inline href={docLink} target="_blank" ml="xs" style={{verticalAlign: 'middle'}}>
            <QuestionSize16Px height={16} />
        </Anchor>
    </Tooltip>
);

Header.Breadcrumbs = HeaderBreadcrumbs;
Header.Actions = HeaderActions;
Header.DocAnchor = HeaderDocAnchor;
