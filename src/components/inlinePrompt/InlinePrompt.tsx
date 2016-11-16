import {Svg} from '../svg/Svg';
import * as React from 'react';

export interface IUserChoice {
  type?: string;
  title?: string;
  description?: string;
  hasCancel?: boolean;
  cancel?: string;
  choices?: {[key: string]: string};
  icon?: string;
  voidButtons?: string[];
}

export interface IInlinePromptOptions {
  onClick: () => void;
  userChoice: IUserChoice;
  isOpened?: boolean;
  className?: string;
}

export interface IInlinePromptOwnProps extends React.ClassAttributes<InlinePrompt> {
  id: string;
  options: IInlinePromptOptions;
}

export interface IInlinePromptViewDispatchProps {
  onCancel?: () => void;
}

export interface IInlinePromptProps extends IInlinePromptOwnProps, IInlinePromptViewDispatchProps {}

export class InlinePrompt extends React.Component<IInlinePromptProps, any> {

  render() {
    let className = `prompt-${this.props.options.className ? this.props.options.className : 'info' }`;
    className += this.props.options.isOpened ? ' opened' : '';
    let icon = this.props.options.userChoice.icon ?
      <Svg svgName={this.props.options.userChoice.icon} className='prompt-icon' svgClass='icon mod-2x fill-medium-blue' />
      : null;
    let choices = _.map(this.props.options.userChoice.choices, (choice) => {
      return (
        <button
          type='button'
          className='btn action mod-danger prompt-action enabled'
          onClick={() => {this.props.options.onClick();}}>
          {choice}
        </button>
      );
    });

    return (
      <span className={className}>
        <span className='label-confirmation'>
          {icon}
          <span className='description'>{this.props.options.userChoice.description}</span>
        </span>
        {choices}
        <button type='button' className='btn cancel prompt-action enabled' onClick={() => {this.props.onCancel();}}>
          {this.props.options.userChoice.cancel}
        </button>
      </span>
    );
  }
}
