import * as React from 'react';

import Svg from '../demo-building-blocs/Svg';
import VaporComponent from '../demo-building-blocs/VaporComponent';

const fills = [
    'fill-light-grey',
    'fill-medium-grey',
    'fill-dark-grey',
    'fill-blue',
    'fill-light-blue',
    'fill-medium-blue',
    'fill-dark-blue',
    'fill-darker-blue',
    'fill-green',
    'fill-orange',
    'fill-red',
    'fill-yellow',
    'fill-white bg-light-blue',
    'fill-pure-white bg-light-blue',
];

export const IconFillers = () => {
    return (
        <VaporComponent id="fillers" title="Icon fillers" usage="Give custom colors to icons" withSource>
            <div className="sg-icons-fill">
                {fills.map((fill) => (
                    <Svg key={fill} name="plus" className={`icon mod-2x ${fill}`} />
                ))}
            </div>
        </VaporComponent>
    );
};

export default IconFillers;
