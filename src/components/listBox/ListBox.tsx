import * as React from 'react';
import * as classNames from 'classnames';
import * as _ from 'underscore';
import { ISvgProps, Svg } from '../svg/Svg';

export interface IItemOption {
  id?: string;
  svg?: ISvgProps;
  value: string;
  displayValue?: string;
  prefix?: string;
  selected?: boolean;
  hidden?: boolean;
  title?: string;
}

export interface IListBoxOwnProps {
  id: string;
  noResultText?: string;
  classes?: string[];
  itemClasses?: string[];
  defaultItems?: IItemOption[];
  hideSelectedItem?: boolean;
  showTitleOnItem?: boolean;
  onOptionClickCallBack?: (option: IItemOption) => void;
}

export interface IListBoxStateProps {
  items?: IItemOption[];
}

export interface IListBoxDispatchProps {
  onOptionClick?: (option: IItemOption) => void;
}

export interface IListBoxProps extends IListBoxOwnProps, IListBoxStateProps, IListBoxDispatchProps { }

export class ListBox extends React.Component<IListBoxProps, void> {

  static defaultProps: Partial<IListBoxProps> = {
    noResultText: 'No items',
    showTitleOnItem: true,
    hideSelectedItem: false,
  };

  getClasses(): string {
    return classNames('list-box', this.props.classes);
  }

  protected getItems(): JSX.Element[] {
    const items = _.chain(this.props.items)
      .map((item: IItemOption) => {
        const liClasses = classNames(
          'list-box-item',
          {
            'active': item.selected,
          });

        const value = item.displayValue || item.value;
        const title = this.props.showTitleOnItem ? item.title || value : '';

        return (
          <li key={item.id || item.value}
            className={liClasses}
            title={title}>
            <span onMouseDown={(e: React.MouseEvent<HTMLSpanElement>) => this.handleOnOptionClick(e)}
              data-value={item.value}>
              {this.getDropdownPrepend(item)}
              {this.getSvg(item)}
              {value}
            </span>
          </li>
        );
      })
      .value();

    return items.length ? items : this.getNoItems();
  }

  protected getDropdownPrepend(item: IItemOption): JSX.Element {
    if (item && item.prefix) {
      return <span key={`${item.id || item.value}_${item.prefix}`}
        className='dropdown-prepend'>
        {item.prefix}
      </span>;
    }
    return null;
  }

  protected getSvg(item: IItemOption): JSX.Element {
    if (item && item.svg) {
      return (
        <span key={`${item.id || item.value}_${item.svg.name}`}
          className='value-icon'>
          <Svg {...item.svg} />
        </span>
      );
    }
    return null;
  }

  protected getNoItems(): JSX.Element[] {
    return [
      <li key='noResultDropdownSearch'>
        <span className='no-search-results'>{this.props.noResultText}</span>
      </li>,
    ];
  }

  handleOnOptionClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (e.target) {
      const items = _.findWhere(this.props.items, { value: e.currentTarget.dataset.value });

      if (this.props.onOptionClick) {
        this.props.onOptionClick(items);
      }

      if (this.props.onOptionClickCallBack) {
        this.props.onOptionClickCallBack(items);
      }
    }
  }

  render() {
    return (
      <ul className={this.getClasses()}>
        {this.getItems()}
      </ul>
    );
  }
}
