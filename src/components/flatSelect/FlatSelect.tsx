import * as React from 'react';
import * as classNames from 'classnames';
import * as _ from 'underscore';
import { FlatSelectOption, IFlatSelectOptionProps } from './FlatSelectOption';

export interface IFlatSelectOwnProps {
  id: string;
  options: IFlatSelectOptionProps[];
  classes?: string[];
  group?: boolean;
  optionPicker?: boolean;
  onClick?: (option: IFlatSelectOptionProps) => void;
}

export interface IFlatSelectStateProps {
  selectedOption?: IFlatSelectOptionProps;
}

export interface IFlatSelectDispatchProps {
  onMount?: () => void;
  onDestroy?: () => void;
  onOptionClick?: (option: IFlatSelectOptionProps) => void;
}

export interface IFlatSelectProps extends IFlatSelectOwnProps, IFlatSelectStateProps, IFlatSelectDispatchProps { }

export class FlatSelect extends React.Component<IFlatSelectProps, void> {

  componentWillMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }
  }

  componentWillUnmount() {
    if (this.props.onDestroy) {
      this.props.onDestroy();
    }
  }

  private handleOnOptionClick(option: IFlatSelectOptionProps) {
    if (this.props.onOptionClick) {
      this.props.onOptionClick(option);
    }

    if (this.props.onClick) {
      this.props.onClick(option);
    }
  }

  private getOptions(): JSX.Element[] {
    return _.map(this.props.options, (flatSelectOption: IFlatSelectOptionProps, index: number) => {
      flatSelectOption.selected = this.props.selectedOption && this.props.selectedOption.option === flatSelectOption.option;
      flatSelectOption.onClick = (option: IFlatSelectOptionProps) => this.handleOnOptionClick(option);

      return <FlatSelectOption key={index} {...flatSelectOption} />;
    });
  }

  render() {
    const classes: string = classNames('flat-select', {
      'mod-btn-group': this.props.group,
      'mod-option-picker': this.props.optionPicker,
    }, this.props.classes);

    return (
      <div className={classes}>
        {this.getOptions()}
      </div>
    );
  }
}
