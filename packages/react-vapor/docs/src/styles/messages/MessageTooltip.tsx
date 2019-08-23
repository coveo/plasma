import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export const MessageTooltip = () => (
    <VaporComponent id="tooltip" title="Tooltip" usage="Use to display a tooltip on any element." withSource>
        <div style={{height: '150px'}}>
            <div className="tooltip right in">
                <div className="tooltip-arrow" />
                <div className="tooltip-inner">Tooltip to the right</div>
            </div>
            <div className="tooltip top in" style={{left: '33%'}}>
                <div className="tooltip-arrow" />
                <div className="tooltip-inner">Tooltip to the top</div>
            </div>
            <div className="tooltip bottom in" style={{left: '66%'}}>
                <div className="tooltip-arrow" />
                <div className="tooltip-inner">Tooltip to the bottom</div>
            </div>
            <div className="tooltip left in" style={{right: '0'}}>
                <div className="tooltip-arrow" />
                <div className="tooltip-inner">Tooltip to the left</div>
            </div>
            <div className="tooltip bottom in" style={{top: '100px'}}>
                <div className="tooltip-arrow" style={{left: '25%'}} />
                <div className="tooltip-inner">Tooltip with decentered arrow</div>
            </div>
        </div>
    </VaporComponent>
);

export default MessageTooltip;
