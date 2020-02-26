import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default function Colors() {
    return (
        <VaporComponent
            id="colors"
            title="Colors"
            usage="Use this suite of color utilities for text colors."
            withSource
        >
            <h3>
                <span className="text-dark-blue">.text-dark-blue</span>

                <span className="text-medium-blue">.text-medium-blue</span>

                <span className="text-light-blue">.text-light-blue</span>

                <span className="text-dark-grey">.text-dark-grey</span>

                <span className="text-darker-grey">.text-darker-grey</span>

                <span className="text-medium-grey">.text-medium-grey</span>

                <span className="text-light-grey bg-dark-grey">.text-light-gray</span>

                <span className="text-white bg-dark-grey">.text-white</span>

                <span className="text-pure-white bg-dark-grey">.text-pure-white</span>

                <span className="text-orange">.text-orange</span>
            </h3>
        </VaporComponent>
    );
}
