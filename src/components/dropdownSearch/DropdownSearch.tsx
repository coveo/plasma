import * as React from 'react';
import { ISvgProps } from '../svg/Svg';
import * as _ from 'underscore';
import * as s from 'underscore.string';
import { UUID } from '../../utils/UUID';
import { FilterBox } from '../filterBox/FilterBox';

export interface IDropdownOption {
  svg?: ISvgProps;
  value: string;
  displayValue?: string;
  prefix?: string;
}

export interface IDropdownSearchOwnProps extends React.ClassAttributes<DropdownSearch> {
  id?: string;
  modMenu?: boolean;
  defaultOptions?: IDropdownOption[];
  defaultSelectedOption?: IDropdownOption;
  filterPlaceholder?: string;
  maxWidth?: string;
  width?: string;
  hasFilterSuggestionBoxWidthFixed?: boolean;
  isDisabled: boolean;
}

export interface IDropdownSearchStateProps {
  isOpened?: boolean;
  filterText?: string;
  options?: IDropdownOption[];
  selectedOption?: IDropdownOption;
}

export interface IDropdownSearchDispatchProps {
  onRender?: (id?: string) => void;
  onMount?: (id: string) => void;
  onDestroy?: () => void;
  onClick?: () => void;
  onToggleDropdown?: () => void;
  onBlur?: () => void;
  onFilterClick?: (filterText: string) => void;
  onOptionClick?: (option: IDropdownOption) => void;
}

export interface IDropdownSearchState {
  id: string;
  isOpened?: boolean;
  filterText?: string;
  options?: IDropdownOption[];
  selectedOption?: IDropdownOption;
}

export interface IDropdownSearchProps extends IDropdownSearchOwnProps, IDropdownSearchStateProps, IDropdownSearchDispatchProps { }

export class DropdownSearch extends React.Component<IDropdownSearchProps, any> {
  filterInput: HTMLDivElement;

  private getSelectedOption(): JSX.Element {
    return <span key={this.props.selectedOption.value} className='dropdown-selected-value'
      data-value={this.props.selectedOption.value}>{this.props.selectedOption.displayValue ||
        this.props.selectedOption.value}</span>;
  }

  private getDropdownOptions(): JSX.Element[] {
    const options = _.chain(this.props.options)
      .filter(
      (item: IDropdownOption) => !_.isEmpty(this.props.filterText)
        ? s.contains(item.value.toLowerCase(), this.props.filterText.toLowerCase())
        : true,
    )
      .map((option: IDropdownOption) => {
        const optionClasses: string = option.value === this.props.selectedOption.value ? 'state-selected' : '';
        return <li key={UUID.generate()}><span className={optionClasses} onMouseDown={(e: any) => this.handleOnOptionClick(e)}
          key={option.value} data-value={option.value}>{this.getTextFiltered(
            option.displayValue || option.value)}</span></li>;
      })
      .value();

    if (!options.length) {
      return [<li key={UUID.generate()}><span key={UUID.generate()}>No results</span></li>];
    }

    return options;
  }

  private getTextFiltered(text: string): (JSX.Element | string)[] | string {
    let textFilterElements: (JSX.Element | string)[] = [''];
    let index: number = 0;
    let canFilter = true;
    const initialText: string = new String(text).toString();
    while (canFilter) {
      index = text.toLowerCase().indexOf(this.props.filterText.toLowerCase());
      if (index !== -1) {
        if (index > 0) {
          textFilterElements = textFilterElements.concat(
            this.getTextElement(initialText, text.substring(0, index)));
        }
        textFilterElements = textFilterElements.concat(
          this.getTextElement(initialText, text.substring(index, index + this.props.filterText.length), 'bold'));
        text = text.substring(index + this.props.filterText.length);
      } else {
        textFilterElements = textFilterElements.concat(this.getTextElement(initialText, text));
        canFilter = false;
      }
    }

    return textFilterElements;
  }

  private getTextElement(text: string, subText: string, className: string = ''): JSX.Element[] {
    return _.map(subText.split(''),
      ((char: string, index: number) => <span key={`${text} + ${char} + ${index}`} className={className}>{char}</span>));
  }

  private getDropdownPrepend(): JSX.Element {
    const prefix = this.props.selectedOption.prefix;
    return prefix ? <span key={prefix} className='dropdown-prepend'>{prefix}</span> : null;
  }

  private getMainInput(): JSX.Element {
    if (this.props.isOpened) {
      return <FilterBox id={this.props.id}
        onFilter={(id, filterText) => this.handleOnFilter(id, filterText)}
        onBlur={() => this.handleOnBlur()}
        filterPlaceholder={this.props.filterPlaceholder || this.props.selectedOption.displayValue ||
          this.props.selectedOption.value}
        isAutoFocus={true} />;
    } else {
      const style = {
        maxWidth: this.props.maxWidth,
      };
      return <button className='btn dropdown-toggle dropdown-button-search-container mod-search' type='button' data-toggle='dropdown'
        onClick={() => this.handleOnClick()}
        onBlur={() => this.handleOnBlur()}
        style={style}
        disabled={!!this.props.isDisabled}>
        {this.getDropdownPrepend()}
        {this.getSelectedOption()}
        <span className='dropdown-toggle-arrow'></span>
      </button>;
    }
  }

  handleOnFilter(id: string, filterText: string) {
    if (this.props.onFilterClick) {
      this.props.onFilterClick(filterText);
    }
  }

  handleOnClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }

    if (this.props.onToggleDropdown) {
      this.props.onToggleDropdown();
    }
  }

  handleOnOptionClick = (e: any) => {
    if (e.target && this.props.onOptionClick) {
      const option = _.findWhere(this.props.options, { value: e.currentTarget.dataset.value });
      this.props.onOptionClick(option);
    }
  }

  handleOnBlur() {
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  componentWillMount() {
    if (this.props.onRender) {
      this.props.onRender(this.props.id);
    }

    if (this.props.onMount) {
      this.props.onMount(this.props.id);
    }
  }

  componentWillUnmount() {
    if (this.props.onOptionClick) {
      document.removeEventListener('click', this.handleOnOptionClick);
    }

    if (this.props.onDestroy) {
      this.props.onDestroy();
    }
  }

  render() {
    const dropdownClasses: string[] = ['dropdown mod-search'];
    if (this.props.isOpened) {
      dropdownClasses.push('open');
    }
    if (this.props.modMenu) {
      dropdownClasses.push('mod-menu');
    }

    const style = {
      width: this.props.width,
    };

    return (
      <div className={dropdownClasses.join(' ')} style={style}>
        {this.getMainInput()}
        <ul className='dropdown-menu'>
          {this.getDropdownOptions()}
        </ul>
      </div>
    );
  }
}
