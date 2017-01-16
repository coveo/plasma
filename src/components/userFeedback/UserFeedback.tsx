import * as React from 'react';
import { extend } from 'underscore';

export interface IUserFeedbackProps {
  feedbackText: string;
  state: string;
  extraClasses?: string;
  displayOnShow?: string;
}

export interface IUserFeedbackStyle {
  displayClass: string;
  textColorClass: string;
  extraClasses?: string;
}

export const UserFeedbackState = {
  VALID: 'VALID',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
};

export const TextColorClasses = {
  default: 'text-dark-grey',
  error: 'text-red'
};

export class UserFeedback extends React.Component<IUserFeedbackProps, any> {

  private getDefaultUserFeedbackStyle(): IUserFeedbackStyle {
    return {
      displayClass: 'hidden',
      textColorClass: TextColorClasses.default,
      extraClasses: this.props.extraClasses ? ' ' + this.props.extraClasses : ''
    };
  }

  private adjustStyle(state: string): IUserFeedbackStyle {
    switch (state) {
      case UserFeedbackState.VALID:
        return this.getDefaultUserFeedbackStyle();

      case UserFeedbackState.WARNING:
        return extend(this.getDefaultUserFeedbackStyle(), { displayClass: this.props.displayOnShow || 'block' });

      case UserFeedbackState.ERROR:
        let newDisplayAndClassName: IUserFeedbackStyle = {
          displayClass: this.props.displayOnShow || 'block',
          textColorClass: TextColorClasses.error,
        };

        return extend(this.getDefaultUserFeedbackStyle(), newDisplayAndClassName);

      default:
        return this.getDefaultUserFeedbackStyle();
    }
  }

  render() {
    let style = this.adjustStyle(this.props.state);
    return (
      <div
        className={`${style.textColorClass} ${style.displayClass}${style.extraClasses}`}>
        {this.props.feedbackText}
      </div>
    );
  }
}
