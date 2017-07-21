import * as React from 'react';
import * as classNames from 'classnames';
import { DropdownSearch, IDropdownOption, IDropdownSearchProps } from '../DropdownSearch';
import {FixedQueue} from '../../../utils/FixedQueue';
import {MultiselectInput} from './MultiSelectInput';

// export interface IMultiSelectDropDownSearchStateProps extends IDropdownSearchStateProps {
//   selectedOptions?: FixedQueue<IDropdownOption>;
//   onRemoveSelectedOption?: (value: string) => void;
// }
//
// export interface IMultiSelectDropdownSearchProps extends IDropdownSearchProps, IMultiSelectDropDownSearchStateProps { }

export class MultiSelectDropdownSearch extends DropdownSearch {

  static defaultProps: Partial<IDropdownSearchProps> = {
    selectedOptions: new FixedQueue<IDropdownOption>(),
  };

  componentWillMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }

    if (this.props.onMountCallBack) {
      this.props.onMountCallBack();
    }
  }

  componentWillUnmount() {
    if (this.props.onDestroy) {
      this.props.onDestroy();
    }
  }

  render() {
    const dropdownSearchClasses: string = classNames(
      'dropdown',
      'mod-search',
      {
        'open': this.props.isOpened,
        'mod-menu': this.props.modMenu,
      });

    const dropdownSearchStyles = {
      width: this.props.width,
    };

    return (
      <div className={dropdownSearchClasses} style={dropdownSearchStyles}>
        <MultiselectInput selectedOptions={this.props.selectedOptions.getQueue()} onRemoveClick={this.props.onRemoveSelectedOption} />
        <ul className='dropdown-menu'
          ref={(input: HTMLUListElement) => { this.ulElement = input; }}
          onMouseEnter={() => this.handleOnMouseEnter()}>
          {this.getDropdownOptions()}
        </ul>
      </div>
    );
  }
}
