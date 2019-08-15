import * as React from 'react';

import VaporComponent from '../demo-building-blocs/VaporComponent';

const Card = () => (
    <VaporComponent key="card" id="card" title="Card" usage="Utils to apply style on card or container" withSource>
        <div className="mb2 card-content-box-shadow" style={{width: 200, height: 120}}>
            <div className="p2">
                <h2>I am a card with a box shadow</h2>
            </div>
        </div>

        <div className="mb2 card-hover-box-shadow" style={{width: 200, height: 120}}>
            <div className="p2">
                <h2>I am a card with a box shadow on hover</h2>
            </div>
        </div>
    </VaporComponent>
);

export default Card;
