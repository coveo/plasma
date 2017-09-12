import * as React from 'react';
import * as classNames from 'classnames';
import { ISvgProps, Svg } from '../svg/Svg';
import { ITooltipProps, Tooltip } from '../tooltip/Tooltip';
import * as _ from 'underscore';

export interface IBoxItemProps {
  svg?: ISvgProps;
  value: string;
  displayValue?: string;
  prefix?: string;
  selected?: boolean;
  active?: boolean;
  hidden?: boolean;
  disabled?: boolean;
  tooltip?: ITooltipProps;
  classes?: string[];
  onOptionClick?: (option: IBoxItemProps) => void;
}

export class BoxItem extends React.Component<IBoxItemProps, void> {

  static defaultProps: Partial<IBoxItemProps> = {
    tooltip: {
      title: '',
    },
  };

  getClasses(): string {
    return classNames('box-item',
      {
        'selected': this.props.selected,
        'active': this.props.active,
        'disabled': this.props.disabled,
        'hidden': this.props.hidden,
      },
      this.props.classes);
  }

  protected getDropdownPrepend(prefix: string): JSX.Element {
    if (prefix) {
      return <span className='text-medium-grey mr1'>{prefix}</span>;
    }
    return null;
  }

  protected getSvg(svg: ISvgProps): JSX.Element {
    if (svg) {
      return (<Svg {..._.defaults(svg, { className: 'inline-flex mr1', svgClass: 'icon' }) } />);
    }
    return null;
  }

  handleOnOptionClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (e.target) {
      if (this.props.onOptionClick) {
        this.props.onOptionClick(this.props);
      }
    }
  }

  render() {
    return (
      <Tooltip {...this.props.tooltip}>
        <li
          className={this.getClasses()}
          onMouseDown={(e: React.MouseEvent<HTMLSpanElement>) => this.handleOnOptionClick(e)}
          data-value={this.props.value}>
          {this.getDropdownPrepend(this.props.prefix)}
          {this.getSvg(this.props.svg)}
          {this.props.displayValue || this.props.value}
        </li>
      </Tooltip>
    );
  }
}
