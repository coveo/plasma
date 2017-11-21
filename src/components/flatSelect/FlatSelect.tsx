import * as React from 'react';
import { IOption } from '../OptionPicker/Option';
import { FlatSelectOption } from './FlatSelectOption';
import * as _ from 'underscore';
import * as classname from 'classnames';

export interface IFlatSelectOwnProps {
  id?: string;
  className?: string;
  options: IOption[];
}

export interface IFlatSelectStateProps {
  selectedOptions?: string[];
}

export interface IFlatSelectDispatchProps {
  onRender?: () => void;
  onDestroy?: () => void;
  onClick?: (value: string) => void;
}

export interface IFlatSelectProps extends IFlatSelectOwnProps, IFlatSelectStateProps, IFlatSelectDispatchProps, React.ClassAttributes<FlatSelect> { }

export class FlatSelect extends React.Component<IFlatSelectProps, any> {
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

  render(): JSX.Element {
    const options: JSX.Element[] = _.map(this.props.options, (option: IOption, index: number) => {
      return (
        <FlatSelectOption
          key={`${option.value()}-${index}`}
          option={option}
          onClick={(value: string) => this.handleClick(value)}
          selected={_.some(this.props.selectedOptions, selectedOption => selectedOption === option.value())}
        />
      );
    });

    const className = classname('flat-select', this.props.className);
    return (
      <div className={className}>
        {options}
      </div>
    );
  }
}
