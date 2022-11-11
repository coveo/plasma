import '../styles/github-button.scss';
import '../styles/home.scss';
import '../styles/iconography.scss';
import '../styles/loading-screen.css';
import '../styles/main.scss';
import '../styles/page-header.scss';
import '../styles/page-layout.scss';
import '../styles/plasmaSearchBar.scss';
import '../styles/props-table.scss';
import '../styles/sandbox.scss';
import '../styles/spacing.scss';
import '../styles/tile.scss';
import '../styles/colors.scss';

import * as PlasmaReact from '@coveord/plasma-react';
import * as PlasmaReactIcons from '@coveord/plasma-react-icons';
import * as LoremIpsum from 'lorem-ipsum';
import moment from 'moment';
import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import * as jsxRuntime from 'react/jsx-runtime';
import * as Redux from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import type {AppProps} from 'next/app';

import githubLogo from '../../resources/github-mark.svg';
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
                <img src={githubLogo} width={32} height={32} className="invert" />
            </a>
        </div>
    </div>
);

const MyApp = ({Component, pageProps}: AppProps) => {
    React.useEffect(() => {
        PlasmaReact.Defaults.APP_ELEMENT = '#App';
        PlasmaReact.Defaults.MODAL_ROOT = '#Modals';

        window.ReactDOM = ReactDOM;
        (window as any).jsxRuntime = jsxRuntime;
        (window as any).React = React;
        (window as any).ReactRedux = ReactRedux;
        (window as any).PlasmaReact = PlasmaReact;
        (window as any).PlasmaReactIcons = PlasmaReactIcons;
        (window as any).moment = moment;
        (window as any).LoremIpsum = LoremIpsum;
        (window as any).Redux = Redux;
        (window as any).PromiseMiddleware = promise;
        (window as any).ThunkMiddleware = thunk;
        (window as any).loaded = true;

        if (window.location.host === 'vapor.coveo.com') {
            window.location.href = window.location.href.replace('vapor.coveo.com', 'plasma.coveo.com');
        }
    }, []);

    return (
        <ReactRedux.Provider store={Store}>
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
        </ReactRedux.Provider>
    );
};

export default MyApp;
