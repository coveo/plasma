import * as React from 'react';
import { DropdownSearch, IDropdownSearchProps } from '../DropdownSearch';
import { MultiselectInput } from './MultiSelectInput';

export class MultiSelectDropdownSearch extends DropdownSearch {

  static defaultProps: Partial<IDropdownSearchProps> = {
    ...DropdownSearch.defaultProps,
    createOptionText: 'Create option for ',
  };

  protected getNoOptions(): JSX.Element[] {
    if (this.props.filterText.length > 0 && !this.props.selectedOptions.containsElementWithProperties({ displayValue: this.props.filterText })) {
      return [
        <li key='noResultDropdownSearch' onMouseDown={() => this.props.onCustomOptionClick(this.props.filterText)}>
          <span>{`${this.props.createOptionText}"${this.props.filterText}"`}</span>
        </li>,
      ];
    }
    return super.getNoOptions();
  }

  render() {
    return (
      <div className={this.getClasses()} style={this.getStyles()}>
        <MultiselectInput selectedOptions={this.props.selectedOptions.getQueue()}
          onRemoveClick={this.props.onRemoveSelectedOption}
          onRemoveAll={this.props.onRemoveAllSelectedOptions}
          onFilterTextChange={this.props.onFilterTextChange}
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
          onKeyDownFilterBox={(e: React.KeyboardEvent<HTMLInputElement>) => this.handleOnKeyDownFilterBox(e)}
          filterPlaceholder={this.props.filterPlaceholder}
          filterText={this.props.filterText}
        />
        <ul className='dropdown-menu'
          ref={(input: HTMLUListElement) => { this.ulElement = input; }} >
          {this.getDropdownOptions()}
        </ul>
      </div>
    );
  }
}
