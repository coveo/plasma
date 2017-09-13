import * as React from 'react';
import * as classNames from 'classnames';
import * as _ from 'underscore';
import {BoxItem, IBoxItemProps} from '../boxItem/BoxItem';

export interface IListBoxOwnProps {
  items?: IBoxItemProps[];
  onOptionClick?: (option: IBoxItemProps) => void;
  noResultItem: IBoxItemProps;
}

export interface IListBoxProps extends IListBoxOwnProps, IListBoxStateProps { }

export class ListBox extends React.Component<IListBoxProps, void> {

  static defaultProps: Partial<IListBoxProps> = {
    noResultItem: {
      value: 'No Items',
    }
  };

  getClasses(): string {
    return classNames('list-box', this.props.classes);
  }

  protected getItems(): JSX.Element[] {
    const items = _.chain(this.props.items)
      .map((item: IBoxItemProps) => <BoxItem{...item}/>)
      .value();

      if (items.length) {
        return items;
      }

      return (<BoxItem {...this.props.noResultItem}/>)
  }

  handleOnOptionClick = (option: IBoxItemProps) => {
    if (this.props.onOptionClick) {
      this.props.onOptionClick(option);
    }
  }

  render() {
    return (
      <ul className={this.getClasses()}>
        <BoxItem

        />
      </ul>
    );
  }
}
