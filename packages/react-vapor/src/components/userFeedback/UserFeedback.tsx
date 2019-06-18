import * as React from 'react';
import {DisplayClass} from '../../utils/ComponentUtils';

export interface IUserFeedbackProps {
    feedbackText: string;
    state: string;
    extraClasses?: string[];
    displayOnShow?: string;
}

export interface IUserFeedbackStyle {
    classes: string;
}

export const UserFeedbackState = {
    VALID: 'VALID',
    WARNING: 'WARNING',
    ERROR: 'ERROR',
};

export const TextColorClass = {
    default: 'text-dark-grey',
    error: 'text-red',
};

export class UserFeedback extends React.Component<IUserFeedbackProps, any> {
    render() {
        const style = this.getUserFeedbackStyle();
        return <div className={style.classes}>{this.props.feedbackText}</div>;
    }

    private getUserFeedbackStyle(): IUserFeedbackStyle {
        const state = this.props.state in UserFeedbackState ? this.props.state : UserFeedbackState.VALID;
        const displayClassOnShow = this.props.displayOnShow || DisplayClass.BLOCK;

        const renderedDisplayClass = state === UserFeedbackState.VALID ? DisplayClass.HIDDEN : displayClassOnShow;
        const renderedTextColorClass =
            state === UserFeedbackState.ERROR ? TextColorClass.error : TextColorClass.default;
        const renderedExtraClasses = this.props.extraClasses || [];

        return {
            classes: renderedExtraClasses.concat(renderedTextColorClass, renderedDisplayClass).join(' '),
        };
    }
}
