import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export const HeaderSite = () => (
    <VaporComponent
        id="site"
        title="Site"
        usage="Use as your web application header. Note that the 9px gap at the bottom of the header is normal and should be hidden by the application container."
        withSource
    >
        <div className="header flex">
            <div className="header-section mod-padded flex flex-center">[LOGO]</div>
            <div className="flex-auto" />
            <div className="header-section mod-padded flex flex-center">Section 1, mod-padded</div>
            <div className="header-section">Section 2</div>
        </div>
    </VaporComponent>
);

export default HeaderSite;
