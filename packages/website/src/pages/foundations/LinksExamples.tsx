import * as React from 'react';

import VaporComponent from '../../building-blocs/VaporComponent';

export const Links = () => (
    <VaporComponent
        id="Links"
        title="Links"
        usage="A link is a navigational element that guides users to external resources or other sections of the product."
        withSource
    >
        <p>
            <a className="link" href="https://www.coveo.com/en">
                Navigating link
            </a>
        </p>
        <p>
            <a
                href="https://www.coveo.com/en"
                className="link disabled"
                onClick={(e) => {
                    e.nativeEvent.preventDefault();
                    return false;
                }}
            >
                Disabled navigating link
            </a>
        </p>
        <p>
            <button className="link" onClick={() => alert('click')}>
                Action triggering link
            </button>
        </p>
        <p>
            <button className="link disabled" disabled onClick={() => alert('click')}>
                Disabled action triggering link
            </button>
        </p>
    </VaporComponent>
);
