import '@demo-styling/home.scss';

import React from 'react';

const MAIN_DESCRIPTION: string =
    'Coveo’s platform design system & ionized Vapor.\n Learn more about our brand, our values and our story by visiting our brand page';

const MAIN_TITLE: string = 'PLASMA';
const WELCOME: string = 'Welcome to';

const Home: React.FC = () => (
    <div className="intro-section">
        <h5 className="welcome-to">{WELCOME}</h5>
        <div className="page-title">{MAIN_TITLE}</div>
        <div className="body-l-book plasma-description">{MAIN_DESCRIPTION}</div>
    </div>
);

export default Home;
