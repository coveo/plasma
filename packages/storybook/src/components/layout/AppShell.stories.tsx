import {AppShell} from '@coveord/plasma-mantine/components/AppShell';
import {Center, MantineColor} from '@mantine/core';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {ComponentProps, ReactNode} from 'react';

type AppShellArgs = {
    layout: ComponentProps<typeof AppShell>['layout'];
    navBarWidth: number;
    headerHeight: number;
    withBorder: boolean;
    collapsed: boolean;
    showContentOverflow: boolean;
};

const meta: Meta<AppShellArgs> = {
    title: '@components/layout/AppShell',
    id: 'AppShell',
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        headerHeight: 60,
        navBarWidth: 240,
        withBorder: false,
        collapsed: false,
        layout: 'alt',
        showContentOverflow: false,
    },
    argTypes: {
        layout: {
            control: 'select',
            options: ['alt', 'default'],
        },
    },
};
export default meta;
type Story = StoryObj<AppShellArgs>;

const Placeholder = ({children, color}: {children: ReactNode; color: MantineColor}) => (
    <Center
        h="100%"
        bg={color === 'primary' ? 'var(--mantine-primary-color-1)' : `${color}.1`}
        c={color === 'primary' ? 'var(--mantine-primary-color-filled)' : color}
    >
        {children}
    </Center>
);
Placeholder.displayName = 'Placeholder';

export const Demo: Story = {
    render: (props) => (
        <AppShell
            layout={props.layout}
            navbar={{breakpoint: 0, width: props.navBarWidth, collapsed: {desktop: props.collapsed}}}
            header={{height: props.headerHeight}}
            withBorder={props.withBorder}
        >
            <AppShell.Header>
                <Placeholder color="yellow">Header</Placeholder>
            </AppShell.Header>
            <AppShell.Main>{props.showContentOverflow ? <ALotOfContent /> : 'Main'}</AppShell.Main>
            <AppShell.Navbar>
                <Placeholder color="primary">Navbar</Placeholder>
            </AppShell.Navbar>
        </AppShell>
    ),
};

const ALotOfContent = () => (
    <>
        {Array(500)
            .fill(0)
            .map((_, i) => (
                <div key={i}>Long content</div>
            ))}
    </>
);
