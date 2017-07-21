import * as React from 'react';
import * as classNames from 'classnames';
import { DropdownSearch, IDropdownOption, IDropdownSearchProps, IDropdownSearchStateProps } from '../DropdownSearch';
import * as _ from 'underscore';
import {FixedQueue} from "../../../utils/FixedQueue";

export interface IMultiSelectDropDownSearchStateProps extends IDropdownSearchStateProps {
  selectedOptions?: FixedQueue<IDropdownOption>;
}

export interface IMultiSelectDropdownSearchProps extends IDropdownSearchProps, IMultiSelectDropDownSearchStateProps { }

export class MultiSelectDropdownSearch extends DropdownSearch {

  protected getMainInput(): JSX.Element {
    if (!this.props.selectedOptions && this.props.isOpened) {
      return <div>
        {this.getSelectedOption()}
        <input type='text' />
      </div>;
    }
    return <button className='btn dropdown-toggle dropdown-button-search-container mod-search'
      type='button'
      data-toggle='dropdown'
      onClick={() => this.handleOnClick()}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => this.handleOnKeyDownDropdownButton(e)}
      style={{
        maxWidth: this.props.maxWidth,
      }}
      ref={(input: HTMLButtonElement) => { this.dropdownButton = input; }}
      disabled={!!this.props.isDisabled}>
      {this.getSelectedOption()}
      <span className='dropdown-toggle-arrow'></span>
    </button>;
  }

  protected getSelectedOption() {
    // TODO: Return new component OptionBox
    return _.map(this.props.selectedOptions.getQueue(), (option: IDropdownOption) => {
      return <ul>
        <li>{option.displayValue || option.value}</li>
      </ul>;
    });
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
        {this.getMainInput()}
        <ul className='dropdown-menu'
          ref={(input: HTMLUListElement) => { this.ulElement = input; }}
          onMouseEnter={() => this.handleOnMouseEnter()}>
          {this.getDropdownOptions()}
        </ul>
      </div>
    );
  }
}
