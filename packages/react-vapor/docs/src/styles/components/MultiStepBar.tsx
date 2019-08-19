import * as React from 'react';

import VaporComponent from '../demo-building-blocs/VaporComponent';

export const MultiStepBar = () => (
    <VaporComponent
        key="multi-step-bar"
        id="multi-step-bar"
        title="Multi Step Bar"
        usage="A bar used to display multiple steps status"
        withSource
    >
        <div className="mb2">
            <div>Simple multi step bar with the different states</div>
            <div className="multi-step-bar-container">
                <div className="multi-step-bar-backdrop-container">
                    <div className="multi-step-bar multi-step-bar-done" />
                    <div className="multi-step-bar multi-step-bar-warning" />
                    <div className="multi-step-bar multi-step-bar-error" />
                    <div className="multi-step-bar multi-step-bar-doing" />
                    <div className="multi-step-bar multi-step-bar-to-do" />
                </div>
            </div>
        </div>

        <div className="mb2">
            <div>With mod-multi-step-bar-in-progress-sliding-animation</div>
            <div className="multi-step-bar-container mod-multi-step-bar-in-progress-sliding-animation">
                <div className="multi-step-bar-backdrop-container">
                    <div className="multi-step-bar multi-step-bar-done" />
                    <div className="multi-step-bar multi-step-bar-warning" />
                    <div className="multi-step-bar multi-step-bar-error" />
                    <div className="multi-step-bar multi-step-bar-doing" />
                    <div className="multi-step-bar multi-step-bar-to-do" />
                </div>
            </div>
        </div>

        <div className="mb2">
            <div>With mod-small</div>
            <div className="multi-step-bar-container mod-small">
                <div className="multi-step-bar-backdrop-container">
                    <div className="multi-step-bar multi-step-bar-done" />
                    <div className="multi-step-bar multi-step-bar-warning" />
                    <div className="multi-step-bar multi-step-bar-error" />
                    <div className="multi-step-bar multi-step-bar-doing" />
                    <div className="multi-step-bar multi-step-bar-to-do" />
                </div>
            </div>
        </div>

        <div className="mb2">
            <div>With mod-small and mod-multi-step-bar-flare-animation</div>
            <div className="multi-step-bar-container mod-small mod-multi-step-bar-flare-animation">
                <div className="multi-step-bar-backdrop-container">
                    <div className="multi-step-bar multi-step-bar-done" />
                    <div className="multi-step-bar multi-step-bar-warning" />
                    <div className="multi-step-bar multi-step-bar-error" />
                    <div className="multi-step-bar multi-step-bar-doing" />
                    <div className="multi-step-bar multi-step-bar-to-do" />
                </div>
            </div>
        </div>

        <div className="mb2">
            <div>You can also put content in the steps</div>
            <div className="multi-step-bar-container mod-multi-step-bar-in-progress-shine-animation">
                <div className="multi-step-bar-backdrop-container">
                    <div className="multi-step-bar multi-step-bar-done">
                        <div className="multi-step-bar-text">Step 1</div>
                    </div>
                    <div className="multi-step-bar multi-step-bar-warning">
                        <div className="multi-step-bar-text">Step 2</div>
                    </div>
                    <div className="multi-step-bar multi-step-bar-done">
                        <div className="multi-step-bar-text">Step 3</div>
                    </div>
                    <div className="multi-step-bar multi-step-bar-doing">
                        <div className="multi-step-bar-text">Step 4</div>
                    </div>
                </div>
                <div className="multi-step-bar-content-container">
                    <span className="multi-step-bar">
                        <div className="multi-step-bar-text">Step 1</div>
                    </span>
                    <span className="multi-step-bar">
                        <div className="multi-step-bar-text">Step 2</div>
                    </span>
                    <span className="multi-step-bar">
                        <div className="multi-step-bar-text">Step 3</div>
                    </span>
                    <span className="multi-step-bar">
                        <div className="multi-step-bar-text">Step 4</div>
                    </span>
                </div>
            </div>
        </div>
    </VaporComponent>
);

export default MultiStepBar;
