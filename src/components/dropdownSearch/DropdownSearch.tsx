import * as React from 'react';
import { ISvgProps, Svg } from '../svg/Svg';
import * as _ from 'underscore';
import * as s from 'underscore.string';
import * as classNames from 'classnames';
import { FilterBox } from '../filterBox/FilterBox';
import { keyCode } from '../../utils/InputUtils';

export interface IDropdownOption {
  svg?: ISvgProps;
  value: string;
  displayValue?: string;
  prefix?: string;
}

export interface IDropdownSearchStateProps {
  isOpened?: boolean;
  filterText?: string;
  options?: IDropdownOption[];
  selectedOptions?: IDropdownOption[];
  activeOption?: IDropdownOption;
  setFocusOnDropdownButton?: boolean;
}

export interface IDropdownSearchOwnProps extends React.ClassAttributes<DropdownSearch> {
  id: string;
  modMenu?: boolean;
  defaultOptions?: IDropdownOption[];
  defaultSelectedOption?: IDropdownOption;
  filterPlaceholder?: string;
  maxWidth?: number;
  width?: number;
  hasFilterSuggestionBoxWidthFixed?: boolean;
  highlightThreshold?: number;
  highlightAllFilterResult?: boolean;
  noResultText?: string;
  isDisabled?: boolean;
  onOptionClickCallBack?: (option: IDropdownOption) => void;
  onMountCallBack?: () => void;
  onClickCallBack?: () => void;
  isMultiselect?: boolean;
}

export interface IDropdownSearchDispatchProps {
  onMount?: () => void;
  onDestroy?: () => void;
  onToggleDropdown?: () => void;
  onBlur?: () => void;
  onFilterClick?: (filterText: string) => void;
  onOptionClick?: (option: IDropdownOption) => void;
  onKeyDownFilterBox?: (keyCode: number) => void;
  onKeyDownDropdownButton?: (keyCode: number) => void;
  onMouseEnterDropdown?: () => void;
}

export interface IDropdownSearchProps extends IDropdownSearchOwnProps, IDropdownSearchStateProps, IDropdownSearchDispatchProps { }

export class DropdownSearch extends React.Component<IDropdownSearchProps, void> {
  filterInput: HTMLDivElement;
  ulElement: HTMLElement;
  private dropdownButton: HTMLElement;

  static defaultProps: Partial<IDropdownSearchProps> = {
    isOpened: false,
    isMultiselect: false,
    highlightThreshold: 100,
    highlightAllFilterResult: false,
    noResultText: 'No results',
  };

  private getSelectedOptions(): JSX.Element[] {
    const selectedOptions: JSX.Element[] = [];
    if (this.props.isMultiselect) {
      for (const selectedOption of this.props.selectedOptions) {
        if (selectedOption) {
          selectedOptions.push(
            this.getDropdownPrepend(selectedOption),
            this.getSvg(selectedOption),
            <span key={selectedOption.value}
                  className='dropdown-selected-value'
                  data-value={selectedOption.value}>
                {selectedOption.displayValue || selectedOption.value}
              </span>);
        }
      }
    } else {
        const lastSelectedOption = this.props.selectedOptions[this.props.selectedOptions.length - 1];
        this.props.selectedOptions.length = 1;
        if (lastSelectedOption) {
          selectedOptions.push(
            this.getDropdownPrepend(lastSelectedOption),
            this.getSvg(lastSelectedOption),
            <span key={lastSelectedOption.value}
                  className='dropdown-selected-value'
                  data-value={lastSelectedOption.value}>
                {lastSelectedOption.displayValue || lastSelectedOption.value}
              </span>);
      }
    }

    return selectedOptions;
  }

  private getDropdownOptions(): JSX.Element[] {
    const options = _.chain(this.props.options)
      .filter(
      (option: IDropdownOption) => {
        const value = option.displayValue || option.value;
        return _.isEmpty(this.props.filterText) || s.contains(value.toLowerCase(), this.props.filterText.toLowerCase());
      },
    )
      .map((option: IDropdownOption, index: number, options: IDropdownOption[]) => {
        const optionClasses = classNames({
          'state-selected': this.props.selectedOptions[0] && option.value === this.props.selectedOptions[0].value,
        });
        const liClasses = classNames({
          'active': JSON.stringify(option) === JSON.stringify(this.props.activeOption),
        });

        const value = option.displayValue || option.value;
        const valueToShow = !!this.props.highlightAllFilterResult || options.length <= this.props.highlightThreshold
          ? this.getTextFiltered(value)
          : value;

        return <li key={option.value}
          className={liClasses}>
          <span className={optionClasses}
            onMouseDown={(e: React.MouseEvent<HTMLSpanElement>) => this.handleOnOptionClick(e)} data-value={option.value}>
            {this.getDropdownPrepend(option)}
            {this.getSvg(option)}
            {valueToShow}
          </span>
        </li>;
      })
      .value();

    return options.length ? options : this.getNoOptions();
  }

  private getNoOptions(): JSX.Element[] {
    return [
      <li key='noResultDropdownSearch'>
        <span>{this.props.noResultText}</span>
      </li>,
    ];
  }

  private getSvg(option: IDropdownOption): JSX.Element {
    if (option && option.svg) {
      return <span key={option.svg.name}
        className='value-icon'>
        <Svg {...option.svg} />
      </span>;
    }
    return null;
  }

  private getTextFiltered(text: string): (JSX.Element | string)[] | string {
    const originalText = new String(text).toString();
    if (!_.isEmpty(this.props.filterText)) {
      let highlightIndexKey: number = 0;
      const textFilterElements: (JSX.Element | string)[] = [''];
      let index: number = text.toLowerCase().indexOf(this.props.filterText.toLowerCase());
      while (index !== -1) {
        if (index > 0) {
          textFilterElements.push(text.substring(0, index));
        }
        textFilterElements.push(
          this.getTextElement(text.substring(index, index + this.props.filterText.length), originalText, highlightIndexKey, 'bold'));
        text = text.substring(index + this.props.filterText.length);
        index = text.toLowerCase().indexOf(this.props.filterText.toLowerCase());
        highlightIndexKey += 1;
      }
      textFilterElements.push(text);

      return textFilterElements;
    }

    return text;
  }

  private getTextElement(subText: string, text: string, highlightIndexKey: number, className: string = ''): JSX.Element {
    return <span key={`${text}-${highlightIndexKey}`}
      className={className}>
      {subText}
    </span>;
  }

  private getDropdownPrepend(option: IDropdownOption): JSX.Element {
    if (option && option.prefix) {
      return <span key={option.prefix}
        className='dropdown-prepend'>
        {option.prefix}
      </span>;
    }
    return null;
  }

  private getMainInput(): JSX.Element {
    if (this.props.isOpened) {
      return <FilterBox id={this.props.id}
        onFilter={(id, filterText) => this.handleOnFilter(id, filterText)}
        onBlur={() => this.handleOnBlur()}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => this.handleOnKeyDownFilterBox(e)}
        filterPlaceholder={this.props.filterPlaceholder}
        isAutoFocus={true} />;
    }
    return <button className='btn dropdown-toggle dropdown-button-search-container mod-search'
      type='button'
      data-toggle='dropdown'
      onClick={() => this.handleOnClick()}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => this.handleOnKeyDownDropdownButton(e)}
      style={{
        maxWidth: this.props.maxWidth,
      }}
      ref={(input: any) => { this.dropdownButton = input; }}
      disabled={!!this.props.isDisabled}>
      {this.getSelectedOptions()}
      <span className='dropdown-toggle-arrow'></span>
    </button>;
  }

  private isScrolledIntoView(el: Element) {
    const boxTop = this.ulElement.getBoundingClientRect().top;
    const boxBottom = this.ulElement.getBoundingClientRect().bottom;
    const elTop = el.getBoundingClientRect().top;
    const elBottom = el.getBoundingClientRect().bottom;

    return (elTop >= boxTop) && (elBottom <= boxBottom);
  }

  private updateScrollPositionBasedOnActiveElement() {
    const activeLi: NodeListOf<Element> = this.ulElement.getElementsByClassName('active');
    if (activeLi.length) {
      const el: Element = activeLi[0];
      if (!this.isScrolledIntoView(el)) {
        if (el.getBoundingClientRect().bottom > this.ulElement.getBoundingClientRect().bottom) {
          this.ulElement.scrollTop += el.getBoundingClientRect().bottom - this.ulElement.getBoundingClientRect().bottom;
        }
        if (el.getBoundingClientRect().top < this.ulElement.getBoundingClientRect().top) {
          this.ulElement.scrollTop -= this.ulElement.getBoundingClientRect().top - el.getBoundingClientRect().top;
        }
      }
    }
  }

  handleOnFilter(id: string, filterText: string) {
    if (this.props.onFilterClick) {
      this.props.onFilterClick(filterText);
    }
  }

  handleOnClick() {
    if (this.props.onClickCallBack) {
      this.props.onClickCallBack();
    }

    if (this.props.onToggleDropdown) {
      this.props.onToggleDropdown();
    }
  }

  handleOnOptionClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (e.target) {
      const option = _.findWhere(this.props.options, { value: e.currentTarget.dataset.value });

      if (this.props.onOptionClick) {
        this.props.onOptionClick(option);
      }

      if (this.props.onOptionClickCallBack) {
        this.props.onOptionClickCallBack(option);
      }
    }
  }

  handleOnBlur() {
    if (this.props.onBlur && !this.props.setFocusOnDropdownButton) {
      this.props.onBlur();
    }
  }

  handleOnKeyDownFilterBox(e: React.KeyboardEvent<HTMLInputElement>) {
    if (this.props.onKeyDownFilterBox) {
      this.props.onKeyDownFilterBox(e.keyCode);
    }

    if (e.keyCode === keyCode.enter || e.keyCode === keyCode.tab ||
      (e.keyCode == keyCode.upArrow && this.props.activeOption === this.props.options[0])) {
      // prevent onClick because an enter key on an input trigger an click event. OnClick re open the dropdown.
      // prevent the tab event to select the option and change the focus on next element.
      // We only want to close the dropdown and get focus on him.
      // prevent the double focus on input dropdown when key up when the active option
      // is the first option of the list filter by the filterText

      e.preventDefault();

      if (this.props.onOptionClickCallBack && this.props.activeOption) {
        this.props.onOptionClickCallBack(this.props.activeOption);
      }
    }
  }

  handleOnKeyDownDropdownButton(e: React.KeyboardEvent<HTMLInputElement>) {
    if (this.props.onKeyDownDropdownButton) {
      this.props.onKeyDownDropdownButton(e.keyCode);
    }
  }

  handleOnMouseEnter() {
    if (this.props.onMouseEnterDropdown) {
      this.props.onMouseEnterDropdown();
    }
  }

  componentDidUpdate() {
    this.updateScrollPositionBasedOnActiveElement();

    if (this.dropdownButton && this.props.setFocusOnDropdownButton) {
      this.dropdownButton.focus();
    }
  }

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
