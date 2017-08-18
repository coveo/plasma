import * as React from 'react';
import { UUID } from '../../utils/UUID';
import { ISvgProps, Svg } from '../svg/Svg';
import * as _ from 'underscore';
import * as classNames from 'classnames';
import { FilterBox } from '../filterBox/FilterBox';
import { keyCode } from '../../utils/InputUtils';
import * as s from 'underscore.string';

export interface IDropdownOption {
  svg?: ISvgProps;
  value: string;
  displayValue?: string;
  prefix?: string;
  selected?: boolean;
  custom?: boolean;
  hidden?: boolean;
  default?: boolean;
}

export interface IDropdownSearchStateProps {
  isOpened?: boolean;
  filterText?: string;
  options?: IDropdownOption[];
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
  createOptionText?: string;
  deselectAllTooltipText?: string;
  isDisabled?: boolean;
  onOptionClickCallBack?: (option: IDropdownOption) => void;
  onMountCallBack?: () => void;
  onClickCallBack?: () => void;
  supportSingleCustomOption?: boolean;
}

export interface IDropdownSearchDispatchProps {
  onMount?: () => void;
  onDestroy?: () => void;
  onToggleDropdown?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onFilterTextChange?: (filterText: string) => void;
  onOptionClick?: (option: IDropdownOption) => void;
  onCustomOptionClick?: (displayValue: string) => void;
  onKeyDownFilterBox?: (keyCode: number) => void;
  onKeyDownDropdownButton?: (keyCode: number) => void;
  onMouseEnterDropdown?: () => void;
  onRemoveSelectedOption?: (value: string) => void;
  onRemoveAllSelectedOptions?: () => void;
}

export interface IDropdownSearchProps extends IDropdownSearchOwnProps, IDropdownSearchStateProps, IDropdownSearchDispatchProps { }

export class DropdownSearch extends React.Component<IDropdownSearchProps, void> {
  filterInput: HTMLDivElement;
  ulElement: HTMLElement;
  protected dropdownButton: HTMLElement;

  static defaultProps: Partial<IDropdownSearchProps> = {
    isOpened: false,
    highlightThreshold: 100,
    highlightAllFilterResult: false,
    noResultText: 'No results',
  };

  protected getSelectedOption(): IDropdownOption {
    return _.findWhere(this.props.options, { selected: true });
  }

  protected getSelectedOptions(): IDropdownOption[] {
    return _.where(this.props.options, { selected: true });
  }

  protected getDisplayedOptions(): IDropdownOption[] {
    return _.reject(this.props.options, (option) => {
      return (!this.props.supportSingleCustomOption && option.custom) || option.hidden;
    });
  }

  private getSelectedOptionElement(): JSX.Element[] {
    if (this.props.options.length) {
      return _.map(this.getSelectedOptions(), (selectedOption: IDropdownOption) => {
        const displayValue = selectedOption.displayValue || selectedOption.value;
        return (
          <span key={UUID.generate()}
            className='dropdown-selected-value'
            data-value={selectedOption.value}
            title={displayValue}>
            {displayValue}
          </span>
        );
      });
    }

    return null;
  }

  protected getDropdownOptions(): JSX.Element[] {
    const options = _.chain(this.getDisplayedOptions())
      .filter((option: IDropdownOption) => {
        const value = option.displayValue || option.value;
        return _.isEmpty(this.props.filterText)
          || s.contains(value.toLowerCase(), this.props.filterText.toLowerCase());
      })
      .map((option: IDropdownOption, index: number, options: IDropdownOption[]) => {
        const optionClasses = classNames({
          'state-selected': option.selected,
        });
        const liClasses = classNames({
          'active': JSON.stringify(option) === JSON.stringify(this.props.activeOption),
        });

        const value = option.displayValue || option.value;
        const valueToShow = !!this.props.highlightAllFilterResult || options.length <= this.props.highlightThreshold
          ? this.getTextFiltered(value)
          : value;

        return (
          <li key={UUID.generate()}
            className={liClasses}
            title={value}>
            <span className={optionClasses}
              onMouseDown={(e: React.MouseEvent<HTMLSpanElement>) => this.handleOnOptionClick(e)}
              data-value={option.value}>
              {this.getDropdownPrepend(option)}
              {this.getSvg(option)}
              {valueToShow}
            </span>
          </li>
        );
      })
      .value();

    return options.length ? options : this.getNoOptions();
  }

  protected getNoOptions(): JSX.Element[] {
    return [
      <li key='noResultDropdownSearch'>
        <span className='no-search-results'>{this.props.noResultText}</span>
      </li>,
    ];
  }

  protected getSvg(option: IDropdownOption): JSX.Element {
    if (option && option.svg) {
      return (
        <span key={option.svg.name}
          className='value-icon'>
          <Svg {...option.svg} />
        </span>
      );
    }
    return null;
  }

  protected getTextFiltered(text: string): (JSX.Element | string)[] | string {
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
          this.getTextElement(text.substring(index, index + this.props.filterText.length), originalText, highlightIndexKey,
            'bold'));
        text = text.substring(index + this.props.filterText.length);
        index = text.toLowerCase().indexOf(this.props.filterText.toLowerCase());
        highlightIndexKey += 1;
      }
      textFilterElements.push(text);

      return textFilterElements;
    }

    return text;
  }

  protected getTextElement(subText: string, text: string, highlightIndexKey: number, className: string = ''): JSX.Element {
    return (
      <span key={`${text}-${highlightIndexKey}`}
        className={className}>
        {subText}
      </span>
    );
  }

  protected getDropdownPrepend(option: IDropdownOption): JSX.Element {
    if (option && option.prefix) {
      return <span key={option.prefix}
        className='dropdown-prepend'>
        {option.prefix}
      </span>;
    }
    return null;
  }

  protected getMainInput(): JSX.Element {
    const selectedOption: IDropdownOption = _.findWhere(this.props.options, { selected: true });
    const filterPlaceHolder: string = selectedOption && (selectedOption.displayValue || selectedOption.value)
      || this.props.filterPlaceholder;

    if (this.props.isOpened) {
      return <FilterBox
        id={this.props.id}
        onFilter={(id, filterText) => this.handleOnFilterTextChange(filterText)}
        onBlur={() => this.handleOnBlur()}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => this.handleOnKeyDownFilterBox(e)}
        filterPlaceholder={filterPlaceHolder}
        isAutoFocus={true}
        filterText={this.props.filterText || ''}
      />;
    }
    return <button
      className='btn dropdown-toggle dropdown-button-search-container mod-search'
      type='button'
      data-toggle='dropdown'
      onClick={() => this.handleOnClick()}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => this.handleOnKeyDownDropdownButton(e)}
      style={{
        maxWidth: this.props.maxWidth,
      }}
      ref={(input: HTMLButtonElement) => { this.dropdownButton = input; }}
      disabled={!!this.props.isDisabled}>
      {this.getDropdownPrepend(this.getSelectedOption())}
      {this.getSvg(this.getSelectedOption())}
      {this.getSelectedOptionElement()}
      <span className='dropdown-toggle-arrow'></span>
    </button>;
  }

  protected isScrolledIntoView(el: Element) {
    const boxTop = this.ulElement.getBoundingClientRect().top;
    const boxBottom = this.ulElement.getBoundingClientRect().bottom;
    const elTop = el.getBoundingClientRect().top;
    const elBottom = el.getBoundingClientRect().bottom;

    return (elTop >= boxTop) && (elBottom <= boxBottom);
  }

  private updateScrollPositionBasedOnActiveElement() {
    const activeLi: NodeListOf<Element> = this.ulElement ? this.ulElement.getElementsByClassName('active') : undefined;
    if (activeLi && activeLi.length) {
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

  handleOnFilterTextChange(filterText: string) {
    if (this.props.onFilterTextChange) {
      this.props.onFilterTextChange(filterText);
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

  getClasses() {
    return classNames(
      'dropdown',
      'mod-search',
      {
        'open': this.props.isOpened,
        'mod-menu': this.props.modMenu,
      });
  }

  getStyles() {
    return {
      width: this.props.width,
    };
  }

  render() {
    const options: JSX.Element = this.props.isOpened
      ? (
        <ul className='dropdown-menu'
          ref={(input: HTMLUListElement) => { this.ulElement = input; }}
          onMouseEnter={() => this.handleOnMouseEnter()}>
          {this.getDropdownOptions()}
        </ul>
      )
      : null;

    return (
      <div className={this.getClasses()} style={this.getStyles()}>
        {this.getMainInput()}
        {options}
      </div>
    );
  }
}
