import * as React from 'react';
import {StepProgressBar} from '@coveord/plasma-react';

import VaporComponent from '../../building-blocs/VaporComponent';

// start-print
export const StepProgressBarExamples = () => (
    <VaporComponent id="StepProgressBar" title="Step Progress Bar" withSource>
        <div className="mt2">
            <div className="form-group">
                <label className="form-control-label">Step Progress Bar 3 steps (initial step)</label>
                <div className="form-control">
                    <StepProgressBar numberOfSteps={3} currentStep={0} />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">Step Progress Bar 5 steps (at step 3)</label>
                <div className="form-control">
                    <StepProgressBar numberOfSteps={5} currentStep={2} />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">Step Progress Bar 5 steps (completed)</label>
                <div className="form-control">
                    <StepProgressBar numberOfSteps={5} currentStep={5} />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">Step Progress Bar 10 steps (step 2)</label>
                <div className="form-control">
                    <StepProgressBar numberOfSteps={10} currentStep={1} />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">Step Progress Bar 10 steps (step 3)</label>
                <div className="form-control">
                    <StepProgressBar numberOfSteps={10} currentStep={2} />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">Step Progress Bar 10 steps (step 4)</label>
                <div className="form-control">
                    <StepProgressBar numberOfSteps={10} currentStep={3} />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">
                    Step Progress Bar 10 steps (step 4) with extra classes for margin (string)
                </label>
                <div className="form-control">
                    <StepProgressBar numberOfSteps={10} currentStep={3} className="mt2 mb2" />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">
                    Step Progress Bar 10 steps (step 4) with extra classes for margin (array)
                </label>
                <div className="form-control">
                    <StepProgressBar numberOfSteps={10} currentStep={3} className={['mt2', 'mb2']} />
                </div>
            </div>
        </div>
    </VaporComponent>
);
