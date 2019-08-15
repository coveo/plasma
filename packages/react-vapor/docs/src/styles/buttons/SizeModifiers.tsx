import * as React from 'react';

import VaporComponent from '../demo-building-blocs/VaporComponent';

export const SizeModifiers = () => (
    <VaporComponent
        key="size-modifiers"
        id="size-modifiers"
        title="Size modifiers"
        usage="Fancy larger buttons? Use `.mod-large` for a larger button, used in our login form."
        withSource
    >
        <button type="button" className="btn mod-small">
            Small
        </button>
        <button type="button" className="btn">
            Default
        </button>
        <button type="button" className="btn mod-large">
            Large
        </button>
    </VaporComponent>
);

export default SizeModifiers;
