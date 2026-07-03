import {AppShell} from '@coveord/plasma-mantine/components/AppShell';
import {Center} from '@coveord/plasma-mantine/components/Center';
import {
    Navigation,
    NavigationLink,
    NavigationSection,
    useNavigation,
} from '@coveord/plasma-mantine/components/Navigation';
import {Text} from '@coveord/plasma-mantine/components/Text';
import {IconDatabase, IconHome} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {CSSProperties, FunctionComponent, PropsWithChildren, useEffect} from 'react';
import {useArgs, useGlobals} from 'storybook/preview-api';

const navigationColors: Record<string, CSSProperties> = {
    teal: {
        '--coveo-navigation-gradient-color': '#18d4bb',
        '--coveo-text-main-menu-selected': '#1CEBCF',
        '--coveo-background-main-menu': 'rgba(7, 123, 107, 0.4)',
    } as CSSProperties,
    blue: {
        '--coveo-navigation-gradient-color': '#00ADFF',
        '--coveo-text-main-menu-selected': '#00ADFF',
        '--coveo-background-main-menu': 'rgba(17, 105, 218, 0.4)',
    } as CSSProperties,
    violet: {
        '--coveo-navigation-gradient-color': '#F05245',
        '--coveo-text-main-menu-selected': '#e3daff',
        '--coveo-background-main-menu': 'rgba(85, 0, 170, 0.4)',
    } as CSSProperties,
};

const meta: Meta<typeof Navigation> = {
    title: '@components/layout/Navigation',
    id: 'Navigation',
    component: Navigation,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        defaultCollapsed: {
            control: 'boolean',
            description: 'Whether the navigation starts collapsed.',
        },
    },
    args: {
        defaultCollapsed: false,
    },
};
export default meta;
type Story = StoryObj<DemoArgs>;

const Shell: FunctionComponent<PropsWithChildren<{onCollapsedChange?: (collapsed: boolean) => void}>> = ({
    children,
    onCollapsedChange,
}) => {
    const {collapsed} = useNavigation();

    useEffect(() => {
        onCollapsedChange?.(collapsed);
    }, [collapsed]);

    return (
        <AppShell
            transitionDuration={300}
            navbar={{width: 240, breakpoint: 0, collapsed: {desktop: collapsed}}}
            layout="alt"
            withBorder={false}
        >
            {children}
        </AppShell>
    );
};

const links = ['Home', 'Sources', 'Catalogs', 'Fields'] as const;

interface DemoArgs {
    collapsed: boolean;
    activeLink: string;
}

export const Demo: Story = {
    argTypes: {
        activeLink: {
            control: 'select',
            options: links,
            description: 'Currently active link.',
        },
    },
    args: {
        activeLink: 'Home',
    },
    render: (args) => {
        const [{activeLink, collapsed}, updateArgs] = useArgs<DemoArgs>();
        const [globals] = useGlobals();
        const primaryColor = globals.primaryColor || 'teal';
        const setActive = (link: string) => updateArgs({activeLink: link});

        return (
            <Navigation defaultCollapsed={collapsed} key={String(collapsed)}>
                <Shell onCollapsedChange={(newCollapsed) => updateArgs({collapsed: newCollapsed})}>
                    <Navigation.SideBar header={<Logo />} style={navigationColors[primaryColor]}>
                        <NavigationLink
                            level={1}
                            label="Home"
                            leftSection={<IconHome size={20} />}
                            active={activeLink === 'Home'}
                            onClick={() => setActive('Home')}
                        />
                        <NavigationSection leftSection={<IconDatabase size={20} />} label="Content" defaultOpened>
                            <NavigationLink
                                level={2}
                                label="Sources"
                                active={activeLink === 'Sources'}
                                onClick={() => setActive('Sources')}
                            />
                            <NavigationLink
                                level={2}
                                label="Catalogs"
                                active={activeLink === 'Catalogs'}
                                onClick={() => setActive('Catalogs')}
                            />
                            <NavigationLink
                                level={2}
                                label="Fields"
                                badge="new"
                                active={activeLink === 'Fields'}
                                onClick={() => setActive('Fields')}
                            />
                        </NavigationSection>
                    </Navigation.SideBar>
                    <AppShell.Main>
                        <Center>
                            <Text>{activeLink}</Text>
                        </Center>
                    </AppShell.Main>
                </Shell>
            </Navigation>
        );
    },
};

const Logo = () => (
    <AppShell.Section p="md">
        <svg width="100" height="24" viewBox="0 0 100 24" fill="white">
            <text x="0" y="18" fontSize="16" fontWeight="500">
                My App
            </text>
        </svg>
    </AppShell.Section>
);
