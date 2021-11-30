import {useState} from 'react';
import * as React from 'react';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

// start-print

export default () => {
    const [width, setWidth] = useState(40);
    const setRandomWidth = () => setWidth(Math.floor(Math.random() * Math.floor(100)));
    return (
        <VaporComponent
            id="progress-bar"
            title="Progress bar"
            usage="Show a progression between 0 and 100%."
            withSource
        >
            <div className="progress-bar-example-container" style={{backgroundColor: '#333357'}}>
                <div className="progress-bar" style={{width: 400}}>
                    <div className="progress">
                        <span className="progress-bar-completed" style={{width: width + '%'}} />
                    </div>
                </div>
            </div>

            <button className="btn mod-primary mt2" onClick={setRandomWidth}>
                Test progression
            </button>
        </VaporComponent>
    );
};
