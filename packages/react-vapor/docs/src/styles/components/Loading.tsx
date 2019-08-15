import * as React from 'react';

import VaporComponent from '../demo-building-blocs/VaporComponent';

export const Loading = () => (
    <VaporComponent key="loading" id="loading" title="Loading" usage="Use it while fetching data" withSource>
        <div className="spinner">
            <div className="bounce1" />
            <div className="bounce2" />
            <div className="bounce3" />
        </div>

        <div className="spinner mod-vertical-margin">
            <div className="bounce1" />
            <div className="bounce2" />
            <div className="bounce3" />
        </div>

        <div className="loading-prompt">
            <div>Currently loading. Please wait.</div>
            <div className="spinner">
                <div className="bounce1" />
                <div className="bounce2" />
                <div className="bounce3" />
            </div>
        </div>
    </VaporComponent>
);

export default Loading;
