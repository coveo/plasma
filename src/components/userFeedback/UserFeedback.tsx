import * as React from 'react';
import { extend } from 'underscore';
import { DisplayClass } from '../../utils/ComponentUtils';

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

export const TextColorClass = {
  default: 'text-dark-grey',
  error: 'text-red'
};

export class UserFeedback extends React.Component<IUserFeedbackProps, any> {
  render() {
    let style = this.adjustStyle(this.props.state);
    return (
      <div className={`${style.textColorClass} ${style.displayClass} ${style.extraClasses}`}>
        {this.props.feedbackText}
      </div>
    );
  }

  private getUserFeedbackStyleOnStateValid(): IUserFeedbackStyle {
    return {
      displayClass: DisplayClass.HIDDEN,
      textColorClass: TextColorClass.default,
      extraClasses: this.props.extraClasses ? this.props.extraClasses : ''
    };
  }

  private adjustStyle(state: string): IUserFeedbackStyle {
    let displayClassOnShow = this.props.displayOnShow || DisplayClass.BLOCK;

    switch (state) {
      case UserFeedbackState.VALID:
        return this.getUserFeedbackStyleOnStateValid();

      case UserFeedbackState.WARNING:
        return extend(this.getUserFeedbackStyleOnStateValid(), { displayClass: displayClassOnShow });

      case UserFeedbackState.ERROR:
        let newDisplayAndClassName: IUserFeedbackStyle = {
          displayClass: displayClassOnShow,
          textColorClass: TextColorClass.error,
        };

        return extend(this.getUserFeedbackStyleOnStateValid(), newDisplayAndClassName);

      default:
        return this.getUserFeedbackStyleOnStateValid();
    }
  }
}
