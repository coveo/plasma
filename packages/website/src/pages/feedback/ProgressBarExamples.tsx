import {useState} from 'react';
import * as React from 'react';

import PlasmaComponent from '../../building-blocs/PlasmaComponent';

// start-print

export default () => {
    const [width, setWidth] = useState(40);
    const setRandomWidth = () => setWidth(Math.floor(Math.random() * Math.floor(100)));
    return (
        <PlasmaComponent
            id="ProgressBar"
            title="Progress bar"
            usage="A step progress bar visualizes a user’s progress as they complete a task by representing the number of steps left to complete the task."
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
        </PlasmaComponent>
    );
};
