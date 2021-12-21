import * as React from 'react';

import VaporComponent from '../../../../../demo-building-blocs/VaporComponent';

export const Utilities = () => (
    <VaporComponent
        id="TextUtilities"
        title="Utilities"
        usage="Change typographic weights, styles, and alignment with these utility classes."
        withSource
    >
        <p className="bold">Text in bold</p>

        <p className="bolder">Text in bolder</p>

        <p className="regular">Text in regular</p>

        <p className="italic">Text in italic</p>

        <p className="underline">Text with underline</p>

        <p className="caps">Text in caps</p>

        <p className="left-align">Text with left-align</p>

        <p className="center">Text in center</p>

        <p className="right-align">Text with right-align</p>

        <p className="justify">Text in justify</p>

        <p className="nowrap">Text with nowrap</p>

        <p className="break-word" style={{width: 145}}>
            Text with break-word
        </p>

        <p className="truncate" style={{width: 145}}>
            Text with truncate is cut
        </p>

        <p className="smaller">Text that has 80% of its parent size</p>

        <p className="code">Text that is code</p>
    </VaporComponent>
);
