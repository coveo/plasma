import * as React from 'react';

import VaporComponent from '../demo-building-blocs/VaporComponent';

export default function StepProgressBar() {
    return (
        <VaporComponent
            id="step-progress-bar"
            title="Step progress bar"
            usage="Show a progression between steps."
            withSource
        >
            <div className="step-progress-bar-container" style={{width: '100%'}}>
                <div className="step-progress-bar step-progress-bar-done" />
                <div className="step-progress-bar step-progress-bar-done" />
                <div className="step-progress-bar step-progress-bar-done" />
                <div className="step-progress-bar step-progress-bar-doing" />
                <div className="step-progress-bar step-progress-bar-to-do" />
                <div className="step-progress-bar step-progress-bar-to-do" />
                <div className="step-progress-bar step-progress-bar-to-do" />
                <div className="step-progress-bar step-progress-bar-to-do" />
                <div className="step-progress-bar step-progress-bar-to-do" />
                <div className="step-progress-bar step-progress-bar-to-do" />
            </div>
        </VaporComponent>
    );
}
