import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

const InputSlider = () => (
    <VaporComponent
        id="input-slider"
        title="Input slider"
        usage={
            <>
                Styled input slider for cross-browser compatibility. IE10+, FF, Chrome, Safari.
                <br />
                Initialize the component's colors whenever it is rendered by using <code>$(selector).slider()</code>.
                <br />
                See <a href="https://github.com/coveo/slider">Coveo Slider</a> for more infos.
            </>
        }
        withSource
    >
        <input type="range" className="coveo-slider-input" min="1" max="100" defaultValue="50" />
    </VaporComponent>
);

export default InputSlider;
