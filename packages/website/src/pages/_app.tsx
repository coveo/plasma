import '../styles/main.scss';
import '../styles/page-layout.scss';
import '../styles/github-button.scss';
import '../styles/home.scss';
import '../styles/plasmaSearchBar.scss';
import '../styles/tile.scss';
import '../styles/sandbox.scss';
import '../styles/props-doc.scss';
import '../styles/loading-screen.css';
import '../styles/page-header.scss';
import '../styles/iconography.scss';
import '../styles/spacing.scss';
import {Svg} from '@coveord/plasma-react';

import * as PlasmaReact from '@coveord/plasma-react';
import * as PlasmaReactIcons from '@coveord/plasma-react-icons';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import * as Redux from 'redux';
import * as ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import * as LoremIpsum from 'lorem-ipsum';
import {Provider} from 'react-redux';
import moment from 'moment';

import logo from '../../resources/plasma-logo.svg';
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
                <Svg svgName="githubMark" svgClass="icon mod-32 mod-white" />
            </a>
        </div>
    </div>
);

const MyApp = ({Component, pageProps}: AppProps) => {
    React.useEffect(() => {
        PlasmaReact.Defaults.APP_ELEMENT = '#App';
        PlasmaReact.Defaults.MODAL_ROOT = '#Modals';
        PlasmaReact.Defaults.DROP_ROOT = '#Drops';

        window.React = React;
        window.ReactDOM = ReactDOM;
        (window as any).ReactRedux = ReactRedux;
        (window as any).PlasmaReact = PlasmaReact;
        (window as any).PlasmaReactIcons = PlasmaReactIcons;
        (window as any).moment = moment;
        (window as any).LoremIpsum = LoremIpsum;
        (window as any).Redux = Redux;

        if (window.location.host === 'vapor.coveo.com') {
            window.location.href = window.location.href.replace('vapor.coveo.com', 'plasma.coveo.com');
        }
    }, []);

    return (
        <Provider store={Store}>
            <EngineProvider>
                <Head>
                    <title>Plasma Design System</title>
                    <meta property="og:title" content="Plasma Design System" key="title" />
                </Head>
                <Header />
                <div className="flex flex-auto pb4" style={{height: 'calc(100vh - 90px)'}}>
                    <Navigation />
                    <div className="coveo-form flex-auto relative overflow-auto demo-content">
                        <Component {...pageProps} />
                    </div>
                </div>
            </EngineProvider>
        </Provider>
    );
};

export default MyApp;
