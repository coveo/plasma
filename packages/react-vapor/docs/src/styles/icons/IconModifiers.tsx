import * as React from 'react';

import Svg from '../../demo-building-blocs/Svg';
import VaporComponent from '../../demo-building-blocs/VaporComponent';

const mods = ['', 'mod-16', 'mod-lg', 'mod-2x', 'mod-3x', 'mod-4x', 'mod-5x'];

export const IconModifiers = () => (
    <VaporComponent id="modifiers" title="Icon modifiers" usage="Apply modifications to icons" withSource>
        <div className="sg-icons-mod">
            {mods.map((mod) => (
                <Svg key={mod} name="plus" className={`icon ${mod}`} />
            ))}
        </div>
    </VaporComponent>
);

export default IconModifiers;
