import * as React from 'react';

import PlasmaComponent from '../../building-blocs/PlasmaComponent';

// start-print
export const Headings = () => (
    <PlasmaComponent
        id="Headings"
        title="Headings"
        usage="A heading is a title at the top of a page or section. Its distinctive font helps visualize the hierarchy of information."
        withSource
    >
        <>
            <h1>Admin heading 1</h1>
            <h2>Admin heading 2</h2>
            <h3>Admin heading 3</h3>
            <h4>Admin heading 4</h4>
            <h5>Admin heading 5</h5>
            <h6>Admin heading 6</h6>
        </>
    </PlasmaComponent>
);
// stop-print
