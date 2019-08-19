import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';

import Svg from '../../demo-building-blocs/Svg';
import VaporComponent from '../../demo-building-blocs/VaporComponent';

export const SyncFeedback = () => (
    <VaporComponent
        key="sync-feedback"
        id="sync-feedback"
        title="Sync Feedback"
        usage="Use it when you want to give feedback to the user"
        withSource
    >
        <div className="sync-feedback">
            <span className="status-dot syncing sync-feedback-icon" />
            <span className="sync-feedback-text">Saving changes...</span>
        </div>

        <div className="sync-feedback mod-success mt2">
            <span className="sync-feedback-icon">
                <Svg name={VaporSVG.svg.check.name} className="icon" />
            </span>
            <span className="sync-feedback-text">Changes saved</span>
        </div>

        <div className="sync-feedback mod-error mt2">
            <span className="sync-feedback-icon">
                <Svg name={VaporSVG.svg.close.name} className="icon" />
            </span>
            <span className="sync-feedback-text">Changes could not be saved.</span>
        </div>
    </VaporComponent>
);

export default SyncFeedback;
