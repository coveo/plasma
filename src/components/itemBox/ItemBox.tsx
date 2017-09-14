import * as React from 'react';
import * as classNames from 'classnames';
import { ITooltipProps, Tooltip } from '../tooltip/Tooltip';
import { Content, IContentProps } from '../content/Content';

export interface IItemBoxProps {
  value: string;
  displayValue?: string;
  selected?: boolean;
  active?: boolean;
  hidden?: boolean;
  disabled?: boolean;
  tooltip?: ITooltipProps;
  classes?: string[];
  prepend?: IContentProps;
  append?: IContentProps;
  onOptionClick?: (option: IItemBoxProps) => void;
}

export class ItemBox extends React.Component<IItemBoxProps, void> {

  static defaultProps: Partial<IItemBoxProps> = {
    tooltip: {
      title: '',
    },
  };

  getClasses(): string {
    return classNames('item-box',
      {
        'selected': this.props.selected,
        'active': this.props.active,
        'disabled': this.props.disabled,
        'hidden': this.props.hidden,
      },
      this.props.classes);
  }

  handleOnOptionClick = () => {
    if (this.props.onOptionClick) {
      this.props.onOptionClick(this.props);
    }
  }

  render() {
    return (
      <Tooltip {...this.props.tooltip}>
        <li
          className={this.getClasses()}
          onMouseDown={(e: React.MouseEvent<HTMLSpanElement>) => this.handleOnOptionClick(e)}
          data-value={this.props.value}>
          {this.props.prepend ? <Content {...this.props.prepend} /> : null}
          {this.props.displayValue || this.props.value}
          {this.props.append ? <Content {...this.props.append} /> : null}
        </li>
      </Tooltip>
    );
  }
}
