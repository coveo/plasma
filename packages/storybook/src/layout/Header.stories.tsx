import {Button} from '@coveord/plasma-mantine/components/Button';
import {Header, type HeaderProps} from '@coveord/plasma-mantine/components/Header';
import type {Meta, StoryObj} from '@storybook/react-vite';

interface HeaderStoryProps {
    docAnchor: string;
    breadcrumbs: string[];
    withActions: boolean;
}

const meta: Meta<typeof Header> = {
    title: '@components/layout/Header',
    id: 'Header',
    component: Header,
    args: {
        title: 'Title',
        description: 'This is a description',
        borderBottom: true,
        docAnchor: 'Documentation Link',
        breadcrumbs: ['Grand Parent', 'Parent'],
        withActions: true,
        variant: undefined,
    } as HeaderProps & HeaderStoryProps,
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary'],
        },
    },
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Demo: Story = {
    render: (props: HeaderProps & HeaderStoryProps) => (
        <Header description={props.description} borderBottom={props.borderBottom} variant={props.variant}>
            {props.breadcrumbs?.length > 0 && (
                <Header.Breadcrumbs>
                    {props.breadcrumbs.map((breadcrumb) => (
                        <Header.BreadcrumbAnchor key={breadcrumb}>{breadcrumb}</Header.BreadcrumbAnchor>
                    ))}
                </Header.Breadcrumbs>
            )}
            {props.title}
            {props.docAnchor && <Header.DocAnchor label={props.docAnchor} href="https://about:blank" />}
            {props.withActions && (
                <Header.Right>
                    <Button.Primary>Primary</Button.Primary>
                    <Button.Secondary>Secondary</Button.Secondary>
                </Header.Right>
            )}
        </Header>
    ),
};
