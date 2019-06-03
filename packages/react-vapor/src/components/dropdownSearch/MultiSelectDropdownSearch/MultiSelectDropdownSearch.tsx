import * as React from 'react';
import * as _ from 'underscore';
import {DropdownSearch, IDropdownOption, IDropdownSearchProps} from '../DropdownSearch';
import {MultiselectInput} from './MultiSelectInput';

export interface IMultiSelectDropdownSearchProps extends IDropdownSearchProps {
    displayedOptions: IDropdownOption[];
    selectedOptions: IDropdownOption[];
}

export class MultiSelectDropdownSearch extends DropdownSearch {
    static defaultProps: IMultiSelectDropdownSearchProps = {
        ...DropdownSearch.defaultProps,
        createOptionText: 'Create option for ',
        isOpened: false,
        options: [],
        displayedOptions: [],
        selectedOptions: [],
        filterText: '',
    };

    protected getNoOptions(): JSX.Element[] {
        if (this.props.filterText.length > 0 && !_.findWhere(this.getSelectedOptions(), ({value: this.props.filterText}))) {
            return [
                <li key='noResultDropdownSearch' onMouseDown={() => this.props.onCustomOptionClick(this.props.filterText)}>
                    <span className='no-search-results'>{`${this.props.createOptionText}"${this.props.filterText}"`}</span>
                </li>,
            ];
        }
        return super.getNoOptions();
    }

    render() {
        return (
            <div className={this.getClasses()} style={this.getStyles()}>
                <MultiselectInput
                    selectedOptions={this.getSelectedOptions()}
                    onRemoveClick={this.props.onRemoveSelectedOption}
                    onRemoveAll={this.props.onRemoveAllSelectedOptions}
                    onFilterTextChange={this.props.onFilterTextChange}
                    onBlur={() => this.props.onBlur(this.props.options)}
                    onFocus={this.props.onFocus}
                    onKeyDownFilterBox={(e: React.KeyboardEvent<HTMLInputElement>) => this.handleOnKeyDownFilterBox(e)}
                    filterPlaceholder={this.props.filterPlaceholder}
                    filterText={this.props.filterText}
                    deselectAllTooltipText={this.props.deselectAllTooltipText}
                />
                <ul className='dropdown-menu' ref={(input: HTMLUListElement) => {this.ulElement = input;}}>
                    {this.getDropdownOptions()}
                </ul>
            </div>
        );
    }
}
