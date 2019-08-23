import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';

import Svg from '../../demo-building-blocs/Svg';
import VaporComponent from '../../demo-building-blocs/VaporComponent';

export const IconsList = () => {
    return (
        <VaporComponent id="list" title="Icons list" usage="List of all icons available">
            <ul className="sg-icons-list">
                {Object.keys(VaporSVG.svg)
                    .sort()
                    .map((svgName) => (
                        <IconItem key={svgName} svgName={svgName} />
                    ))}
            </ul>
        </VaporComponent>
    );
};

function IconItem({svgName}: {svgName: string}) {
    return (
        <li>
            <div>
                <Svg name={svgName} />
            </div>
            <label className="icon-name">{svgName}</label>
        </li>
    );
}

export default IconsList;
