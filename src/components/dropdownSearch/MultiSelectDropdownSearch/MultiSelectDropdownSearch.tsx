import * as React from 'react';
import * as classNames from 'classnames';
import { DropdownSearch } from '../DropdownSearch';
import {MultiselectInput} from './MultiSelectInput';

export class MultiSelectDropdownSearch extends DropdownSearch {

  protected getNoOptions(): JSX.Element[] {
    if (this.props.filterText.length > 0 && !this.props.selectedOptions.containsElementWithProperties({displayValue: this.props.filterText})) {
      return [
        <li key='noResultDropdownSearch' onMouseDown={() => this.props.onCustomOptionClick(this.props.filterText)}>
          <span>{`Create option for "${this.props.filterText}"` }</span>
        </li>,
      ];
    } else {
      return [
        <li key='noResultDropdownSearch'>
          <span>{this.props.noResultText}</span>
        </li>,
      ];
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
        <MultiselectInput selectedOptions={this.props.selectedOptions.getQueue()}
                          onRemoveClick={this.props.onRemoveSelectedOption}
                          onRemoveAll={this.props.onRemoveAllSelectedOptions}
                          onFilterClick={this.props.onFilterClick}
                          onBlur={this.props.onBlur}
                          onFocus={this.props.onFocus}
                          onKeyDownFilterBox={(e: React.KeyboardEvent<HTMLInputElement>) => this.handleOnKeyDownFilterBox(e)}
                          filterPlaceholder={this.props.filterPlaceholder}
                          filterText={this.props.filterText}
        />
        <ul className='dropdown-menu'
          ref={(input: HTMLUListElement) => { this.ulElement = input; }}
          onMouseEnter={() => this.handleOnMouseEnter()}>
          {this.getDropdownOptions()}
        </ul>
      </div>
    );
  }
}
