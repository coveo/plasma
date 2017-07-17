import * as React from 'react';
import {ISvgProps, Svg} from '../svg/Svg';
import * as _ from 'underscore';
import * as s from 'underscore.string';
import {FilterBox} from '../filterBox/FilterBox';

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
  onOptionClickCallBack?: () => void;
  onMountCallBack?: () => void;
  onClickCallBack?: () => void;
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
  private textIndex = 0;
  private dropdownButton: HTMLElement;

  static defaultProps: Partial<IDropdownSearchProps> = {
    highlightThreshold: 100,
    highlightAllFilterResult: false,
    noResultText: 'No results',
  };

  private getSelectedOptions(): JSX.Element[] {
    const selectedOptions: JSX.Element[] = [];
    for (const selectedOption of this.props.selectedOptions) {
      selectedOptions.push(
          this.getDropdownPrepend(selectedOption),
          this.getSvg(selectedOption),
          <span key={selectedOption.value}
                className='dropdown-selected-value'
                data-value={selectedOption.value}>
            selectedOption.displayValue || selectedOption.value}
          </span>);
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
      .map((option: IDropdownOption, index, options: IDropdownOption[]) => {
        const optionClasses: string = option.value === this.props.selectedOptions[0].value ? 'state-selected' : '';
        const value = option.displayValue || option.value;
        const valueToShow = !!this.props.highlightAllFilterResult || options.length <= this.props.highlightThreshold
          ? this.getTextFiltered(value)
          : value;
        return <li key={option.value}
                   className={option === this.props.activeOption ? 'active' : ''}>
          <span className={optionClasses}
                onMouseDown={(e: React.MouseEvent<HTMLSpanElement>) => this.handleOnOptionClick(e)} data-value={option.value}>
            {this.getDropdownPrepend(option)}
            {this.getSvg(option)}
            {valueToShow}
          </span>
        </li>;
      })
      .value();

    if (!options.length) {
      return [
        <li key='noResultDropdownSearch'>
          <span>{this.props.noResultText}</span>
        </li>,
      ];
    }

    return options;
  }

  private getSvg(option: IDropdownOption): JSX.Element {
    if (option.svg) {
      return <span key={option.svg.name}
                   className='value-icon'>
        <Svg {...option.svg} />
      </span>;
    }
    return null;
  }

  private getTextFiltered(text: string): (JSX.Element | string)[] | string {
    this.textIndex = 0;
    const originalText = new String(text).toString();
    if (!_.isEmpty(this.props.filterText)) {
      const textFilterElements: (JSX.Element | string)[] = [''];
      let index: number = text.toLowerCase().indexOf(this.props.filterText.toLowerCase());
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
    this.textIndex += 1;
    return <span key={`${text}-${this.textIndex}`}
                 className={className}>
      {subText}
    </span>;
  }

  private getDropdownPrepend(option: IDropdownOption): JSX.Element {
    if (option.prefix) {
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
                        isAutoFocus={true}/>;
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

  isScrolledIntoView(el: Element) {
    const boxTop = this.ulElement.getBoundingClientRect().top;
    const boxBottom = this.ulElement.getBoundingClientRect().bottom;
    const elTop = el.getBoundingClientRect().top;
    const elBottom = el.getBoundingClientRect().bottom;

    return (elTop >= boxTop) && (elBottom <= boxBottom);
  }

  updateScollPostionBasedOnActiveElement() {
    const activeLi: NodeListOf<Element> = this.ulElement.getElementsByClassName('active');
    if (activeLi.length) {
      const el: Element = activeLi[0];
      if (!this.isScrolledIntoView(el)) {
        if (el.getBoundingClientRect().bottom > this.ulElement.getBoundingClientRect().bottom) {
          this.ulElement.scrollTop += el.getBoundingClientRect().bottom - this.ulElement.getBoundingClientRect().bottom;
        } else if (el.getBoundingClientRect().top < this.ulElement.getBoundingClientRect().top) {
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
    if (e.target && this.props.onOptionClick) {
      const option = _.findWhere(this.props.options, {value: e.currentTarget.dataset.value});
      this.props.onOptionClick(option);
    }

    if (this.props.onOptionClickCallBack) {
      this.props.onOptionClickCallBack();
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
    e.preventDefault();
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
    this.updateScollPostionBasedOnActiveElement();

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
    const dropdownClasses: string[] = ['dropdown', 'mod-search'];
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
        <ul className='dropdown-menu'
            ref={(input: any) => { this.ulElement = input; }}
            onMouseEnter={() => this.handleOnMouseEnter()}>
          {this.getDropdownOptions()}
        </ul>
      </div>
    );
  }
}
