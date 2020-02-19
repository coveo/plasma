import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

const Material = () => (
    <VaporComponent key="material" id="material" title="Material" usage="A container to display content" withSource>
        <div className="material-card mb2">
            <div className="p2">
                <h2 className="mb2">I am a material card and you can fill me with whatever you want.</h2>
                <div>I am just a container after all.</div>
            </div>
        </div>

        <div className="material-card with-hover mb2">
            <div className="p2">
                <h2 className="mb2">I am a material card with an hover effect.</h2>
                <div>Please hover me.</div>
            </div>
        </div>

        <div className="material-card with-hover with-active mb2">
            <div className="p2">
                <h2 className="mb2">I am a material card with hover and click effects.</h2>
                <div>Please hover and click me.</div>
            </div>
        </div>

        <div className="material-card">
            <div className="p2">
                <div className="loading-prompt">
                    <div>This is an example with a loading animation inside the material card.</div>
                    <div className="spinner">
                        <div className="bounce1" />
                        <div className="bounce2" />
                        <div className="bounce3" />
                    </div>
                </div>
            </div>
        </div>
    </VaporComponent>
);
export default Material;
