import { Svg } from '../svg/Svg';
import * as React from 'react';
import * as _ from 'underscore';

export interface IUserChoice {
  description?: string;
  cancel?: string;
  choices?: { [key: string]: string };
  icon?: string;
}

export interface IInlinePromptOptions {
  onClick: () => void;
  userChoice: IUserChoice;
  isOpened?: boolean;
  className?: string;
}

export interface IInlinePromptOwnProps extends React.ClassAttributes<InlinePrompt> {
  id?: string;
  options: IInlinePromptOptions;
}

export interface IInlinePromptViewDispatchProps {
  onCancel?: () => void;
}

export interface IInlinePromptProps extends IInlinePromptOwnProps, IInlinePromptViewDispatchProps { }

export class InlinePrompt extends React.Component<IInlinePromptProps, any> {

  private onCancelClick = () => {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  };

  render() {
    let className = `prompt-${this.props.options.className ? this.props.options.className : 'info'}`;
    className += this.props.options.isOpened ? ' opened' : '';

    let icon = this.props.options.userChoice.icon ?
      <Svg svgName={this.props.options.userChoice.icon} className='prompt-icon' svgClass='icon mod-2x fill-medium-blue' />
      : null;

    let choiceNb = 0;
    let choices = _.map(this.props.options.userChoice.choices, (choice) => {
      choiceNb++;
      return (
        <button
          type='button'
          className='btn action mod-danger prompt-action enabled'
          onClick={() => { this.props.options.onClick(); } }
          key={'choice-' + choiceNb}>
          {choice}
        </button>
      );
    });

    let description = this.props.options.userChoice.description ?
      <span className='description'>{this.props.options.userChoice.description}</span> :
      null;

    let cancel = this.props.options.userChoice.cancel ?
      <button type='button' className='btn cancel prompt-action enabled' onClick={() => { this.onCancelClick(); } }>
        {this.props.options.userChoice.cancel}
      </button> :
      null;

    return (
      <span className={className}>
        <span className='label-confirmation'>
          {icon}
          {description}
        </span>
        {choices}
        {cancel}
      </span>
    );
  }
}
