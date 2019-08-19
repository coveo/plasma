import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default function SubNavigation() {
    return (
        <VaporComponent id="sub-navigation" title="Sub Navigation" usage="A sub-navigation component." withSource>
            <div className="flex flex-row flex-stretch" style={{height: 200}}>
                <nav className="sub-navigation">
                    <ul className="sub-navigation-items">
                        <li className="sub-navigation-item mod-selected">
                            <a href="#sub-navigation" className="sub-navigation-item-link">
                                Avatar
                            </a>
                        </li>
                        <li className="sub-navigation-item">
                            <a href="#sub-navigation" className="sub-navigation-item-link">
                                Titanic
                            </a>
                        </li>
                        <li className="sub-navigation-item">
                            <a href="#sub-navigation" className="sub-navigation-item-link">
                                Star Wars: The Force Awakens
                            </a>
                        </li>
                        <li className="sub-navigation-item">
                            <a href="#sub-navigation" className="sub-navigation-item-link">
                                Jurassic World
                            </a>
                        </li>
                        <li className="sub-navigation-item">
                            <a href="#sub-navigation" className="sub-navigation-item-link">
                                The Avengers
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="flex flex-row flex-stretch mt2" style={{height: 120}}>
                <nav className="sub-navigation">
                    <ul className="sub-navigation-items">
                        <li className="sub-navigation-item mod-selected">
                            <a href="#sub-navigation" className="sub-navigation-item-link">
                                Avatar
                            </a>
                        </li>
                        <li className="sub-navigation-item">
                            <a href="#sub-navigation" className="sub-navigation-item-link">
                                Titanic
                            </a>
                        </li>
                        <li className="sub-navigation-item">
                            <a href="#sub-navigation" className="sub-navigation-item-link">
                                Star Wars: The Force Awakens
                            </a>
                        </li>
                        <li className="sub-navigation-item">
                            <a href="#sub-navigation" className="sub-navigation-item-link">
                                Jurassic World
                            </a>
                        </li>
                        <li className="sub-navigation-item">
                            <a href="#sub-navigation" className="sub-navigation-item-link">
                                The Avengers
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </VaporComponent>
    );
}
