import '../styles/colors.scss';
import '../styles/github-button.scss';
import '../styles/home.scss';
import '../styles/iconography.scss';
import '../styles/loading-screen.css';
import '../styles/main.scss';
import '../styles/page-header.scss';
import '../styles/page-layout.scss';
import '../styles/plasmaSearchBar.scss';
import '../styles/props-table.scss';
import '../styles/spacing.scss';
import '../styles/tile.scss';

import {Plasmantine} from '@coveord/plasma-mantine';
import {Defaults} from '@coveord/plasma-react';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {Provider} from 'react-redux';

import type {AppProps} from 'next/app';
import githubLogo from '../../resources/github-mark.svg';
import logo from '../../resources/plasma-logo.svg';
import LegacyWarningBanner from '../building-blocs/LegacyWarningBanner';
import {EngineProvider} from '../search/engine/EngineProvider';
import StandaloneSearchBar from '../search/StandaloneSearchBar';
import {Navigation} from '../SideNavigation';
import {Store} from '../Store';

const Header = () => (
    <div id="header" className="demo-header">
        <Link href="/">
            <a className="header-logo-link">
                <img src={logo} className="header-logo" alt="Plasma Design System" />
            </a>
        </Link>
        <StandaloneSearchBar />
        <div className="right-side">
            <a href="https://github.com/coveo/plasma#readme" aria-label="README" target="_blank">
                <img src={githubLogo} width={32} height={32} className="invert" />
            </a>
        </div>
    </div>
);

const MyApp = ({Component, pageProps}: AppProps) => {
    const {pathname} = useRouter();
    const isLegacy = /^\/legacy*/.test(pathname);

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
                        <Header />
                        <div className="flex flex-auto pb4" style={{height: 'calc(100vh - 90px)'}}>
                            <Navigation />
                            <div className="coveo-form flex-auto relative overflow-auto demo-content">
                                {isLegacy ? <LegacyWarningBanner /> : null}
                                <Component {...pageProps} />
                            </div>
                        </div>
                    </Plasmantine>
                </EngineProvider>
            </Provider>
        </>
    );
};

export default MyApp;
