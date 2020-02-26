import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default function SpacedBoxes() {
    return (
        <VaporComponent
            id="spaced-box"
            title="Spaced box"
            usage="Simple spaced boxes container that you can use for alomost everything. Pair it with flex and flex-wrap and you get a nice container."
            withSource
        >
            <div className="spaced-boxes-container flex flex-wrap" style={{maxWidth: 400}}>
                <span className="p2 bg-red text-pure-white spaced-box">A span</span>

                <button type="button" className="btn spaced-box">
                    A button
                </button>

                <span className="p2 bg-light-blue text-pure-white spaced-box">Another span</span>

                <button type="button" className="btn mod-primary spaced-box">
                    Another button
                </button>

                <span className="p2 bg-green text-pure-white spaced-box">More!</span>
            </div>
        </VaporComponent>
    );
}
