import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default () => (
    <VaporComponent
        id="headings"
        title="Headings"
        usage="All HTML headings, `h1` through `h6`, are available."
        withSource
    >
        <div className="hero-medium">Hero Medium</div>
        <div className="hero-light">Hero Light</div>
        <h1>Heading 1 Medium</h1>
        <h1 className="heading-1-light">Heading 1 Light</h1>
        <h2>Heading 2 Medium</h2>
        <h2 className="heading-2-book">Heading 2 Book</h2>
        <h3>Heading 3 Medium</h3>
        <h3 className="heading-3-book">Heading 3 Book</h3>
        <h4>Heading 4 Medium</h4>
        <h4 className="heading-4-book">Heading 4 Book</h4>
        <h5>Heading 5 Medium</h5>
        <h6>Heading 6 Medium</h6>
    </VaporComponent>
);
