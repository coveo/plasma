import * as React from 'react';
import {Link} from 'react-router-dom';

import VaporComponent from '../demo-building-blocs/VaporComponent';

const Colors = () => (
    <VaporComponent
        id="palette"
        title="Palette"
        usage="A compact and interactive way of displaying content"
        stylesheet="scss/common/palette.scss"
    >
        <div className="spaced-boxes-container flex flex-wrap">
            <Link to="/components/Color" className="h3">
                See colors usage and guidelines
            </Link>
        </div>
    </VaporComponent>
);

export default Colors;
