import * as React from 'react';
import * as classNames from 'classnames';
import * as _ from 'underscore';
import { BoxItem, IBoxItemProps } from '../boxItem/BoxItem';

export interface IListBoxProps {
  items: IBoxItemProps[];
  onOptionClick?: (option: IBoxItemProps) => void;
  noResultItem?: IBoxItemProps;
  classes?: string[];
}

export class ListBox extends React.Component<IListBoxProps, void> {

  static defaultProps: Partial<IListBoxProps> = {
    noResultItem: {
      value: 'No Items',
    },
  };

  getClasses(): string {
    return classNames('list-box', this.props.classes);
  }

  protected getItems(): JSX.Element[] | JSX.Element {
    const items = _.chain(this.props.items)
      .map((item: IBoxItemProps) => <BoxItem {..._.extend(item, { onOptionClick: this.props.onOptionClick }) } />)
      .value();

    return items.length ? items : <BoxItem {..._.extend(this.props.noResultItem, { classes: ['multi-line'] }) } />;
  }

  handleOnOptionClick = (option: IBoxItemProps) => {
    if (this.props.onOptionClick) {
      this.props.onOptionClick(option);
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
