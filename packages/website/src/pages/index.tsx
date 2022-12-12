import {LinkSvg, Section} from '@coveord/plasma-react';
import {ExternalSize16Px} from '@coveord/plasma-react-icons';
import {NextPage} from 'next';
import Head from 'next/head';
import {FunctionComponent} from 'react';

import {Tile} from '../building-blocs/Tile';

export const Index: NextPage = () => (
    <Section className="home flex-auto overflow-auto demo-content">
        <Head>
            <title>Plasma Design System</title>
            <meta property="og:title" content="Plasma Design System" key="title" />
        </Head>
        <WelcomeToPlasma />
        <FoundationsPages />
        <LayoutPages />
        <FormPages />
    </Section>
);

const WelcomeToPlasma: FunctionComponent = () => (
    <div className="section intro">
        <h5 className="welcome-to">Welcome to</h5>
        <div className="page-title">PLASMA</div>
        <div className="body-l-book plasma-description">
            <div>Coveo’s platform design system & ionized Vapor.</div>
            <div>
                Learn more about our brand, our values and our story by visiting our{' '}
                <LinkSvg icon={ExternalSize16Px} url="https://brand.coveo.com/">
                    brand page
                </LinkSvg>
                .
            </div>
            <div>
                Be part of the progress! Contribute to Plasma on{' '}
                <LinkSvg icon={ExternalSize16Px} url="https://github.com/coveo/plasma#readme">
                    GitHub
                </LinkSvg>
                .
            </div>
        </div>
    </div>
);

const FoundationsPages: FunctionComponent = () => (
    <Section className="section">
        <h2>Foundations</h2>
        <div className="tile-grid">
            <Tile
                title="Iconography"
                description="Icons are used to visually represent actions, functionalities, and features."
                href="foundations/Iconography"
                thumbnail="iconography"
            />
            <Tile
                title="Colors"
                description="The colors that give Plasma its identity"
                href="foundations/Colors"
                thumbnail="colors"
            />
        </div>
    </Section>
);

const LayoutPages: FunctionComponent = () => (
    <Section className="section">
        <h2>Layout</h2>
        <div className="tile-grid">
            <Tile
                title="Header"
                description="A page header informs a user of the section of the product they are currently in. It includes a breadcrumb and optional call to actions."
                href="layout/Header"
                thumbnail="header"
            />
            <Tile
                title="Sticky footer"
                description="A page footer that sticks to the bottom of the screen."
                href="layout/StickyFooter"
            />
            <Tile
                title="Table"
                description="A table displays large quantities of items or data in a list format."
                href="layout/Table"
            />
        </div>
    </Section>
);

const FormPages: FunctionComponent = () => (
    <Section className="section">
        <h2>Form</h2>
        <div className="tile-grid">
            <Tile
                title="Code Editor"
                description="A code editor is a text area that allows users to edit code. A coding syntax is built in."
                href="form/CodeEditor"
                thumbnail="codeEditor"
            />
            <Tile
                title="Collection"
                description="A collection allows users to provide multiple inputs for the same parameter. Each input appears on a different line."
                href="form/Collection"
            />
        </div>
    </Section>
);

export default Index;
