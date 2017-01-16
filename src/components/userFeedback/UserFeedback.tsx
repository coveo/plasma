/// <reference path="../../../types/react-tether/index.d.ts" /> Required to make dts-generator bundle react-tether definition file.

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

export const userFeedbackState = {
  VALID: 'VALID',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
};

export class UserFeedback extends React.Component<IUserFeedbackProps, any> {

  private getDefaultUserFeedbackStyle(): IUserFeedbackStyle {
    return {
      display: 'none',
      className: this.props.constantClasses ? this.props.constantClasses + ' text-dark-grey' : 'text-dark-grey'
    };
  }

  private adjustStyle(state: string): IUserFeedbackStyle {
    switch (state) {
      case userFeedbackState.VALID:
        return this.getDefaultUserFeedbackStyle();

      case userFeedbackState.WARNING:
        return extend(this.getDefaultUserFeedbackStyle(), { display: this.props.displayOnShow || 'block' });

      case userFeedbackState.ERROR:
        let newDisplayAndClassName: IUserFeedbackStyle = {
          display: this.props.displayOnShow || 'block',
          className: this.props.constantClasses ? this.props.constantClasses + ' text-red' : 'text-red'
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
