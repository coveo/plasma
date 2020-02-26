import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default function LineHeight() {
    return (
        <VaporComponent
            id="line-height"
            title="Line-height"
            usage="Change line-height for headings and paragraph."
            withSource
        >
            <div className="h1" style={{width: 700}}>
                H1 gggggg Lorem ipsum dolor sit amet, consectetur adipiscing ÉÉÉÉÉ elit. Pellentesque sit amet tincidunt
                ligula.
            </div>
            <br />
            <div className="h2" style={{width: 550}}>
                H2 gggggg Lorem ipsum dolor sit amet, consectetur adipiscing ÉÉÉÉÉ elit. Pellentesque sit amet tincidunt
                ligula.
            </div>
            <br />
            <div className="h3" style={{width: 425}}>
                H3 gggggg Lorem ipsum dolor sit amet, consectetur adipiscing ÉÉÉÉÉ elit. Pellentesque sit amet tincidunt
                ligula.
            </div>
            <br />
            <div className="h4" style={{width: 375}}>
                H4 gggggg Lorem ipsum dolor sit amet, consectetur adipiscing ÉÉÉÉÉ elit. Pellentesque sit amet tincidunt
                ligula.
            </div>
            <br />
            <div className="h5" style={{width: 375}}>
                H5 gggggg Lorem ipsum dolor sit amet, consectetur adipiscing ÉÉÉÉÉ elit. Pellentesque sit amet tincidunt
                ligula.
            </div>
            <br />
            <div className="h6" style={{width: 375}}>
                H6 gggggg Lorem ipsum dolor sit amet, consectetur adipiscing ÉÉÉÉÉ elit. Pellentesque sit amet tincidunt
                ligula.
            </div>
            <br />
            <div className="p" style={{width: 375}}>
                P gggggg Lorem ipsum dolor sit amet, consectetur adipiscing ÉÉÉÉÉ elit. Pellentesque sit amet tincidunt
                ligula.
            </div>
        </VaporComponent>
    );
}
