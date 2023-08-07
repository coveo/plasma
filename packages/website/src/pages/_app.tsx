import '../styles/colors.scss';
import '../styles/github-button.scss';
import '../styles/home.scss';
import '../styles/loading-screen.css';
import '../styles/main.scss';
import '../styles/page-layout.scss';
import '../styles/plasmaSearchBar.scss';
import '../styles/props-table.scss';
import '../styles/spacing.scss';
import '../styles/tile.scss';

import {AppShell, Group, Image, Notifications, Plasmantine} from '@coveord/plasma-mantine';
import {Defaults} from '@coveord/plasma-react';
import {Header as MantineHeader} from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';
import {useEffect} from 'react';
import {Provider} from 'react-redux';

import type {AppProps} from 'next/app';
import githubLogo from '../../resources/github-mark.svg';
import logo from '../../resources/plasma-logo.svg';
import {Navigation} from '../SideNavigation';
import {Store} from '../Store';
import StandaloneSearchBar from '../search/StandaloneSearchBar';
import {EngineProvider} from '../search/engine/EngineProvider';
import LegacyWarningBanner from '../building-blocs/LegacyWarningBanner';

const Header = () => (
    <MantineHeader height={100}>
        <Group
            position="apart"
            px="lg"
            py="xs"
            sx={(theme) => ({
                background: `linear-gradient(217deg, ${theme.colors.purple[6]} 0%, ${theme.colors.navy[7]} 74.62%, ${theme.colors.navy[7]} 100%)`,
                height: '100%',
            })}
            noWrap
        >
            <Link href="/" className="header-logo-link">
                <Image src={logo} className="header-logo" height={80} fit="contain" alt="Plasma Design System" />
            </Link>
            <StandaloneSearchBar />
            <a href="https://github.com/coveo/plasma#readme" aria-label="README" target="_blank">
                <Image src={githubLogo} width={32} height={32} sx={{filter: 'invert(1)'}} />
            </a>
        </Group>
    </MantineHeader>
);

const MyApp = ({Component, pageProps}: AppProps) => {
    useEffect(() => {
        Defaults.APP_ELEMENT = '#App';
        Defaults.MODAL_ROOT = '#Modals';

        if (window.location.host === 'vapor.coveo.com') {
            window.location.href = window.location.href.replace('vapor.coveo.com', 'plasma.coveo.com');
        }
    }, []);

    return (
        <>
            <Head>
                <title>Plasma Design System</title>
                <meta property="og:title" content="Plasma Design System" key="title" />
            </Head>

            <Provider store={Store}>
                <EngineProvider>
                    <Plasmantine>
                        <Notifications position="top-center" />
                        <AppShell navbar={<Navigation />} header={<Header />} padding={0}>
                            <LegacyWarningBanner />
                            <Component {...pageProps} />
                        </AppShell>
                    </Plasmantine>
                </EngineProvider>
            </Provider>
        </>
    );
};

export default MyApp;
