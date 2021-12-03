import '@demo-styling/home.scss';

import React from 'react';
import {Section} from 'react-vapor';

export const Home: React.FunctionComponent = () => (
    <Section className="home flex-auto overflow-auto demo-content">
        <Section className=" section intro">
            <h5 className="welcome-to">Welcome to</h5>
            <div className="page-title">PLASMA</div>
            <div className="body-l-book plasma-description">
                {
                    'Coveo’s platform design system & ionized Vapor.\n Learn more about our brand, our values and our story by visiting our brand page'
                }
            </div>
        </Section>
        <Section className="section">
            <h2>Fondations</h2>
            <div className="body-l-book plasma-description">Colors, typekit, styles and effects.</div>
            <div className="flex" style={{display: 'inline-block', padding: '24px 24px 0px 0px'}}>
                <div className="card p2" style={{width: '264px', height: '221px'}}>
                    Imagine this is a super well coded TileComponent with an awesome style
                </div>
            </div>
            <div className="flex" style={{display: 'inline-block', padding: '24px 24px 0px 0px'}}>
                <div className="card p2" style={{width: '264px', height: '221px'}}>
                    Imagine this is a super well coded TileComponent with an awesome style
                </div>
            </div>
            <div className="flex" style={{display: 'inline-block', padding: '24px 24px 0px 0px'}}>
                <div className="card p2" style={{width: '264px', height: '221px'}}>
                    Imagine this is a super well coded TileComponent with an awesome style
                </div>
            </div>
            <div className="flex" style={{display: 'inline-block', padding: '24px 24px 0px 0px'}}>
                <div className="card p2" style={{width: '264px', height: '221px'}}>
                    Imagine this is a super well coded TileComponent with an awesome style
                </div>
            </div>
            <div className="flex" style={{display: 'inline-block', padding: '24px 24px 0px 0px'}}>
                <div className="card p2" style={{width: '264px', height: '221px'}}>
                    Imagine this is a super well coded TileComponent with an awesome style
                </div>
            </div>
            <div className="flex" style={{display: 'inline-block', padding: '24px 24px 0px 0px'}}>
                <div className="card p2" style={{width: '264px', height: '221px'}}>
                    Imagine this is a super well coded TileComponent with an awesome style
                </div>
            </div>
        </Section>
        <Section className="section">
            <h2>Layout</h2>
            <div className="body-l-book plasma-description">Colors, typekit, styles and effects.</div>
        </Section>
        <Section className="section">
            <h2>Input</h2>
            <div className="body-l-book plasma-description">Colors, typekit, styles and effects.</div>
        </Section>
        <Section className="section">
            <h2>Navigation</h2>
            <div className="body-l-book plasma-description">Colors, typekit, styles and effects.</div>
        </Section>
        <Section className="section">
            <h2>Feedback & Information</h2>
            <div className="body-l-book plasma-description">Colors, typekit, styles and effects.</div>
        </Section>
        <Section className="section">
            <h2>Disply & Utilities</h2>
            <div className="body-l-book plasma-description">Colors, typekit, styles and effects.</div>
        </Section>
    </Section>
);
