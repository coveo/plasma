import '@demo-styling/home.scss';

import React from 'react';
import {Section} from 'react-vapor';

const MAIN_DESCRIPTION: string =
    'Coveo’s platform design system & ionized Vapor.\n Learn more about our brand, our values and our story by visiting our brand page';

const MAIN_TITLE: string = 'PLASMA';
const WELCOME: string = 'Welcome to';

const Home: React.FC = () => (
    <Section className="home flex-auto overflow-auto demo-content">
        <Section className=" section intro">
            <h5 className="welcome-to">{WELCOME}</h5>
            <div className="page-title">{MAIN_TITLE}</div>
            <div className="body-l-book plasma-description">{MAIN_DESCRIPTION}</div>
        </Section>
        <Section
            className="section"
            title={'Fondations'}
            description={'Colors, typekit, styles and effects.'}
        ></Section>
        <Section className="section" title={'Layout'} description={'Colors, typekit, styles and effects.'}></Section>
        <Section className="section" title={'Input'} description={'Colors, typekit, styles and effects.'}></Section>
        <Section
            className="section"
            title={'Navigation'}
            description={'Colors, typekit, styles and effects.'}
        ></Section>
        <Section
            className="section"
            title={'Feedback & Information'}
            description={'Colors, typekit, styles and effects.'}
        ></Section>
        <Section
            className="section"
            title={'Disply & Utilities'}
            description={'Colors, typekit, styles and effects.'}
        ></Section>
    </Section>
);

export default Home;
