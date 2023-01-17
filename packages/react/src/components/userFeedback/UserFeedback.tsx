import {Component} from 'react';
import {DisplayClass} from '../../utils/ComponentUtils.js';

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

/**
 * @deprecated Use Mantine instead
 */
export class UserFeedback extends Component<IUserFeedbackProps, any> {
    render() {
        const style = this.getUserFeedbackStyle();
        return <div className={style.classes}>{this.props.feedbackText}</div>;
    }

    private getUserFeedbackStyle(): IUserFeedbackStyle {
        const state = this.props.state in UserFeedbackState ? this.props.state : UserFeedbackState.VALID;
        const displayClassOnShow = this.props.displayOnShow || DisplayClass.BLOCK;

        const renderedDisplayClass = state === UserFeedbackState.VALID ? DisplayClass.HIDDEN : displayClassOnShow;
        const renderedTextColorClass = state === UserFeedbackState.ERROR ? 'text mod-error' : 'text mod-emphasized';
        const renderedExtraClasses = this.props.extraClasses || [];

        return {
            classes: renderedExtraClasses.concat(renderedTextColorClass, renderedDisplayClass).join(' '),
        };
    }
}
