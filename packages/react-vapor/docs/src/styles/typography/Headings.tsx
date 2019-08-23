import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default function Headings() {
    return (
        <VaporComponent
            id="headings"
            title="Headings"
            usage="All HTML headings, `h1` through `h6`, are available."
            withSource
        >
            <h1>Admin heading 1</h1>
            <h2>Admin heading 2</h2>
            <h3>Admin heading 3</h3>
            <h4>Admin heading 4</h4>
            <h5>Admin heading 5</h5>
            <h6>Admin heading 6</h6>
        </VaporComponent>
    );
}
