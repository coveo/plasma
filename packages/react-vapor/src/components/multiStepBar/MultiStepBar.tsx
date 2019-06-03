import * as classNames from 'classnames';
import * as React from 'react';
import {IClassName} from '../../utils/ClassNameUtils';
import {ITooltipProps, Tooltip} from '../tooltip/Tooltip';

export enum MultiStepState {
    ToDo = 'to-do',
    Doing = 'doing',
    Done = 'done',
    Error = 'error',
    Warning = 'warning',
}

export interface IStep {
    state: MultiStepState;
    text?: string;
    tooltip?: ITooltipProps;
}

export interface IMultiStepBarProps {
    steps: IStep[];
    className?: IClassName;
    small?: boolean;
    separator?: boolean;
    inProgressAnimation?: '' | 'slide' | 'shine';
    barAnimation?: '' | 'flare';
}

const getStepContent = (step: IStep): JSX.Element => {
    return step.text
        ? <div className='multi-step-bar-text'>{step.text}</div>
        : null;
};

export const MultiStepBar = (props: IMultiStepBarProps) => {
    const {className, small, inProgressAnimation, barAnimation, separator, steps} = props;
    const containerClasses = classNames(className, {
        'multi-step-bar-container': true,
        'mod-multi-step-bar-in-progress-sliding-animation': inProgressAnimation === 'slide',
        'mod-multi-step-bar-in-progress-shine-animation': inProgressAnimation === 'shine',
        'mod-multi-step-bar-flare-animation': barAnimation === 'flare',
        'mod-multi-step-bar-separated': separator,
        'mod-small': small,
    });
    const stepsContent = steps.map(getStepContent);
    return (
        <div className={containerClasses}>
            <div className='multi-step-bar-backdrop-container'>
                {steps.map((step: IStep, i: number) => {
                    const classes = classNames('multi-step-bar', `multi-step-bar-${step.state}`);
                    return <div key={`multi-step-bar-backdrop-${i}`} className={classes}>{stepsContent[i]}</div>;
                })}
            </div>
            <div className='multi-step-bar-content-container'>
                {steps.map((step: IStep, i: number) => {
                    const key = `multi-step-bar-${i}`;
                    const classes = classNames('multi-step-bar');
                    return step.tooltip && step.tooltip.title
                        ? (
                            <Tooltip {...step.tooltip}
                                key={key}
                                className={classes}>
                                {stepsContent[i]}
                            </Tooltip>
                        )
                        : (
                            <span key={key} className={classes}>
                                {stepsContent[i]}
                            </span>
                        );
                })}</div>
        </div>
    );
};
