import * as React from 'react';
import { extend } from 'underscore';

export interface IUserFeedbackProps {
  feedbackText: string;
  state: string;
  constantClasses?: string;
  displayOnShow?: string;
}

export interface IUserFeedbackStyle {
  display: string;
  className: string;
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
      display: 'none',
      className: TextColorClasses.default + (this.props.constantClasses ? ' ' + this.props.constantClasses : '')
    };
  }

  private adjustStyle(state: string): IUserFeedbackStyle {
    switch (state) {
      case UserFeedbackState.VALID:
        return this.getDefaultUserFeedbackStyle();

      case UserFeedbackState.WARNING:
        return extend(this.getDefaultUserFeedbackStyle(), { display: this.props.displayOnShow || 'block' });

      case UserFeedbackState.ERROR:
        let newDisplayAndClassName: IUserFeedbackStyle = {
          display: this.props.displayOnShow || 'block',
          className: TextColorClasses.error + (this.props.constantClasses ? ' ' + this.props.constantClasses : '')
        };

        return extend(this.getDefaultUserFeedbackStyle(), newDisplayAndClassName);

      default:
        return this.getDefaultUserFeedbackStyle();
    }
  }

  render() {
    let style = this.adjustStyle(this.props.state);
    return (
      <div style={{ display: style.display }}
        className={style.className}>
        {this.props.feedbackText}
      </div>
    );
  }
}
