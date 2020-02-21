import * as React from 'react';
import {IMultiStepBarProps, IStep, MultiStepBar, MultiStepState} from 'react-vapor';

export class MultiStepBarExamples extends React.Component<any, any> {
    render() {
        const stepsWithoutText: IStep[] = [
            {
                state: MultiStepState.Done,
                tooltip: {
                    title: 'This step is done!',
                    placement: 'bottom',
                    footer: 'Here is some information about it!',
                },
            },
            {
                state: MultiStepState.Warning,
                tooltip: {
                    title: 'This one finished with a warning',
                    placement: 'bottom',
                    footer: 'Better check your logs!',
                },
            },
            {
                state: MultiStepState.Error,
                tooltip: {
                    title: 'An error occurred here',
                    placement: 'bottom',
                    footer: 'Somehow the execution continued',
                },
            },
            {
                state: MultiStepState.Doing,
                tooltip: {
                    title: 'This step is currently in progress',
                    placement: 'bottom',
                    footer: 'Display some progress information here',
                },
            },
            {
                state: MultiStepState.ToDo,
                tooltip: {
                    title: 'This step is not yet done',
                    placement: 'bottom',
                    footer: 'Currently waiting for the previous step',
                },
            },
        ];
        const stepsWithText = stepsWithoutText.map((step, i) => ({...step, text: `Step ${i}`}));
        const multiStepBarProps: IMultiStepBarProps = {
            steps: stepsWithText,
        };
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Multi Step Bar</label>
                    <MultiStepBar {...multiStepBarProps} />
                </div>
                <div className="form-group">
                    <label className="form-control-label">Multi Step Bar with in-progress shine animation</label>
                    <MultiStepBar {...multiStepBarProps} inProgressAnimation={'shine'} />
                </div>
                <div className="form-group">
                    <label className="form-control-label">Small Multi Step Bar with flare animation</label>
                    <MultiStepBar {...multiStepBarProps} steps={stepsWithoutText} small={true} barAnimation={'flare'} />
                </div>
                <div className="form-group">
                    <label className="form-control-label">Small Multi Step Bar with in progress slide animation</label>
                    <MultiStepBar
                        {...multiStepBarProps}
                        steps={stepsWithoutText}
                        small={true}
                        inProgressAnimation={'slide'}
                    />
                </div>
                <div className="form-group">
                    <label className="form-control-label">Multi Step Bar with separator</label>
                    <MultiStepBar {...multiStepBarProps} separator={true} />
                </div>
            </div>
        );
    }
}
