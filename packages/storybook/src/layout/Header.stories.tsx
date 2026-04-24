import {Button} from '@coveord/plasma-mantine/components/Button';
import {Header, type HeaderProps} from '@coveord/plasma-mantine/components/Header';
import type {Meta, StoryObj} from '@storybook/react-vite';

interface HeaderStoryProps {
    docAnchor: string;
    breadcrumbs: string[];
    withActions: boolean;
}

const meta: Meta<HeaderProps & HeaderStoryProps> = {
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
type Story = StoryObj<HeaderProps & HeaderStoryProps>;

export const Demo: Story = {
    render: (args) => (
        <Header description={args.description} borderBottom={args.borderBottom} variant={args.variant}>
            {args.breadcrumbs?.length > 0 && (
                <Header.Breadcrumbs>
                    {args.breadcrumbs.map((breadcrumb) => (
                        <Header.BreadcrumbAnchor key={breadcrumb}>{breadcrumb}</Header.BreadcrumbAnchor>
                    ))}
                </Header.Breadcrumbs>
            )}
            {args.title}
            {args.docAnchor && <Header.DocAnchor label={args.docAnchor} href="https://about:blank" />}
            {args.withActions && (
                <Header.Right>
                    <Button.Primary>Primary</Button.Primary>
                    <Button.Secondary>Secondary</Button.Secondary>
                </Header.Right>
            )}
        </Header>
    ),
};
