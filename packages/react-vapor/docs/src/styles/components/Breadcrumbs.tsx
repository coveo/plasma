import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';

import Svg from '../demo-building-blocs/Svg';
import VaporComponent from '../demo-building-blocs/VaporComponent';

const Breadcrumbs = () => (
    <VaporComponent
        key="breadcrumbs"
        id="breadcrumbs"
        title="Breadcrumbs"
        usage="Use it to provide hierarchical information on the current page"
        withSource
    >
        <nav className="breadcrumb-nav">
            <ul>
                <li className="breadcrumb-title">
                    <a className="link" href="#">
                        Pichu
                    </a>
                    <span className="breadcrumb-arrow">
                        <Svg name={VaporSVG.svg.arrowRightRounded.name} />
                    </span>
                </li>
                <li className="breadcrumb-title">
                    <a className="link" href="#">
                        Pikachu
                    </a>
                    <span className="breadcrumb-arrow">
                        <Svg name={VaporSVG.svg.arrowRightRounded.name} />
                    </span>
                </li>
                <li className="breadcrumb-title">
                    <div className="flex flex-center">
                        <h1 className="inline bold text-medium-blue mr1 truncate">
                            <span>Raichu</span>
                        </h1>
                        <span>
                            <Svg name={VaporSVG.svg.help.name} className="fill-orange icon mod-20" />
                        </span>
                    </div>
                </li>
            </ul>
        </nav>
    </VaporComponent>
);

export default Breadcrumbs;
