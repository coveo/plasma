import * as React from 'react';
import { IOption } from '../optionPicker/Option';
import * as classNames from 'classnames';

export interface IFlatSelectOptionProps extends React.ClassAttributes<FlatSelectOption> {
  option: IOption;
  selected: boolean;
  onClick: (value: string) => void;
}

export class FlatSelectOption extends React.Component<IFlatSelectOptionProps, any> {
  private getClasses(): string {
    return classNames('flat-select-option',
      {
        'selectable': !this.props.selected,
      });
  }

  render() {

    return (
      <a className={this.getClasses()} onClick={() => this.props.onClick(this.props.option.value())}>
        {this.props.option.label}
      </a>
    );
  }
}
