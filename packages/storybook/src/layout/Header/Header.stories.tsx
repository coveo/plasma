import type {StoryObj, Meta} from '@storybook/react-vite';
import {Header} from '@coveord/plasma-mantine/components/Header';
import {Button, CloseButton} from '@coveord/plasma-mantine';

const meta: Meta<typeof Header> = {
    title: '@components/layout/Header',
    component: Header,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Breadcrumbs: Story = {
    render: () => (
        <Header>
            <Header.Breadcrumbs>
                <Header.BreadcrumbAnchor>Grand Parent</Header.BreadcrumbAnchor>
                <Header.BreadcrumbAnchor>Parent</Header.BreadcrumbAnchor>
                <Header.BreadcrumbText>Current</Header.BreadcrumbText>
            </Header.Breadcrumbs>
        </Header>
    ),
};

export const Right: Story = {
    render: () => (
        <Header>
            <Header.Right wrap="nowrap">
                <Button.Primary>Primary</Button.Primary>
                <Button.Secondary>Secondary</Button.Secondary>
            </Header.Right>
        </Header>
    ),
};

export const HeaderSecondary: Story = {
    render: () => (
        <Header description="The header description" variant="secondary">
            Title
            <Header.DocAnchor href="https://about:blank" label="Tooltip text" />
            <Header.Right>
                <CloseButton />
            </Header.Right>
        </Header>
    ),
};

export const HeaderSingleBreadcrumb: Story = {
    render: () => (
        <Header description="The header description" borderBottom>
            <Header.Breadcrumbs>
                <Header.BreadcrumbAnchor single>Parent</Header.BreadcrumbAnchor>
            </Header.Breadcrumbs>
            Title
        </Header>
    ),
};
