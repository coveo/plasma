import * as React from 'react';

import VaporComponent from '../../building-blocs/VaporComponent';

// start-print

export const TransparencyExamples = () => (
    <VaporComponent id="transparency" title="Transparency" usage="Utility to modify the transparency." withSource>
        <div className="flex">
            <div style={{width: 100, height: 50}} className="transparency-1">
                <button className="btn mr1">1</button>1
            </div>
            <div style={{width: 100, height: 50}} className="transparency-2">
                <button className="btn mr1">2</button>2
            </div>
            <div style={{width: 100, height: 50}} className="transparency-3">
                <button className="btn mr1">3</button>3
            </div>
            <div style={{width: 100, height: 50}} className="transparency-4">
                <button className="btn mr1">4</button>4
            </div>
            <div style={{width: 100, height: 50}} className="transparency-5">
                <button className="btn mr1">5</button>5
            </div>
        </div>
    </VaporComponent>
);
