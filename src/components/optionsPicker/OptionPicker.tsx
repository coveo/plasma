import { IOption, Option } from './Option';
import * as React from 'react';
import * as _ from 'underscore';

export interface IOptionPickerOwnProps extends React.ClassAttributes<OptionPicker> {
  id?: string;
  options: IOption[];
}

export interface IOptionPickerStateProps {
  activeValue?: string;
}

export interface IOptionPickerDispatchProps {
  onRender?: () => void;
  onDestroy?: () => void;
  onClick?: (value: string) => void;
}

export interface IOptionPickerProps extends IOptionPickerOwnProps, IOptionPickerStateProps, IOptionPickerDispatchProps { }

export class OptionPicker extends React.Component<IOptionPickerProps, any> {

  private handleClick(value: string) {
    if (this.props.onClick) {
      this.props.onClick(value);
    }
  }

  componentWillMount() {
    if (this.props.onRender) {
      this.props.onRender();
    }
  }

  componentWillUnmount() {
    if (this.props.onDestroy) {
      this.props.onDestroy();
    }
  }

  render() {
    let options: JSX.Element[] = _.map(this.props.options, (option: IOption) => {
      return <Option
        key={option.value()}
        option={option}
        onClick={(value) => this.handleClick(value)}
        isActive={option.value() === this.props.activeValue}
        />;
    });

    return (
      <ul className='option-picker flex flex-wrap mt2 mb2'>
        {options}
      </ul>
    );
  }
}
