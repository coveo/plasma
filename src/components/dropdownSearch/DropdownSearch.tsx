import * as React from 'react';
import { ISvgProps, Svg } from '../svg/Svg';
import * as _ from 'underscore';
import * as s from 'underscore.string';
import { FilterBox } from '../filterBox/FilterBox';
import { UUID } from '../../utils/UUID';

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
  maxWidth?: number;
  width?: number;
  hasFilterSuggestionBoxWidthFixed?: boolean;
  highlightThreshold?: number;
  highlightAllFilterResult?: boolean;
  isDisabled?: boolean;
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
  private textIndex = 0;

  static defaultProps: Partial<IDropdownSearchProps> = {
    highlightThreshold: 100,
    highlightAllFilterResult: false,
  };

  private getSelectedOption(): JSX.Element {
    return <span key={this.props.selectedOption.value} className='dropdown-selected-value'
      data-value={this.props.selectedOption.value}>{this.props.selectedOption.displayValue ||
        this.props.selectedOption.value}</span>;
  }

  private getDropdownOptions(): JSX.Element[] {
    const options = _.chain(this.props.options)
      .filter(
      (option: IDropdownOption) => {
        const value = option.displayValue || option.value;
        return _.isEmpty(this.props.filterText) || s.contains(value.toLowerCase(), this.props.filterText.toLowerCase());
      },
    )
      .map((option: IDropdownOption, index, options: IDropdownOption[]) => {
        const optionClasses: string = option.value === this.props.selectedOption.value ? 'state-selected' : '';
        const value = option.displayValue || option.value;
        const valueToShow = !!this.props.highlightAllFilterResult || options.length <= this.props.highlightThreshold
          ? this.getTextFiltered(value)
          : value;
        return <li key={option.value}>
          <span className={optionClasses} onMouseDown={(e: any) => this.handleOnOptionClick(e)} data-value={option.value}>
            {this.getDropdownPrepend(option)}
            {this.getSvg(option)}
            {valueToShow}
          </span>
        </li>;
      })
      .value();

    if (!options.length) {
      return [<li key={UUID.generate()}><span>No results</span></li>];
    }

    return options;
  }

  private getSvg(option: IDropdownOption): JSX.Element {
    if (option && option.svg) {
      return <span key={option.svg.name} className='value-icon'>
        <Svg {...option.svg} />
      </span>;
    }
    return null;
  }

  private getTextFiltered(text: string): (JSX.Element | string)[] | string {
    this.textIndex = 0;
    let index: number;
    const originalText = new String(text).toString();
    if (!_.isEmpty(this.props.filterText)) {
      const textFilterElements: (JSX.Element | string)[] = [''];
      index = text.toLowerCase().indexOf(this.props.filterText.toLowerCase());
      while (index !== -1) {
        if (index > 0) {
          textFilterElements.push(text.substring(0, index));
        }
        textFilterElements.push(this.getTextElement(text.substring(index, index + this.props.filterText.length), originalText, 'bold'));
        text = text.substring(index + this.props.filterText.length);
        index = text.toLowerCase().indexOf(this.props.filterText.toLowerCase());
      }
      textFilterElements.push(text);

      this.textIndex = 0;
      return textFilterElements;
    }

    return text;
  }

  private getTextElement(subText: string, text: string, className: string = ''): JSX.Element {
    this.textIndex = this.textIndex + 1;
    return <span key={`${text}-${this.textIndex}`} className={className}>{subText}</span>;
  }

  private getDropdownPrepend(option: IDropdownOption): JSX.Element {
    if (option && option.prefix) {
      return <span key={option.prefix} className='dropdown-prepend'>{option.prefix}</span>;
    }
    return null;
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
      return <button className='btn dropdown-toggle dropdown-button-search-container mod-search' type='button' data-toggle='dropdown'
        onClick={() => this.handleOnClick()}
        style={{
          maxWidth: this.props.maxWidth,
        }}
        disabled={!!this.props.isDisabled}>
        {this.getDropdownPrepend(this.props.selectedOption)}
        {this.getSvg(this.props.selectedOption)}
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
