import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default function Utilities() {
    return (
        <VaporComponent
            id="utilities"
            title="Utilities"
            usage="Change typographic weights, styles, and alignment with these utility classes."
            withSource
        >
            <h3>
                <div className="bold">Text in bold</div>

                <div className="semibold">Text in semibold</div>

                <div className="regular">Text in regular</div>

                <div className="italic">Text in italic</div>

                <div className="underline">Text with underline</div>

                <div className="caps">Text in caps</div>

                <div className="left-align">Text with left-align</div>

                <div className="center">Text in center</div>

                <div className="right-align">Text with right-align</div>

                <div className="justify">Text in justify</div>

                <div className="nowrap">Text with nowrap</div>

                <div className="break-word" style={{width: 145}}>
                    Text with break-word
                </div>

                <div className="truncate" style={{width: 145}}>
                    Text with truncate is cut
                </div>

                <div className="smaller">Text that has 80% of its parent size</div>
            </h3>
        </VaporComponent>
    );
}
