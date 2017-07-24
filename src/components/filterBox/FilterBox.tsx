import * as React from 'react';
import { Svg } from '../svg/Svg';
import * as classNames from 'classnames';

export interface IFilterBoxOwnProps extends React.ClassAttributes<FilterBox> {
  id: string;
  containerClasses?: string[];
  filterPlaceholder?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  isAutoFocus?: boolean;
}

export interface IFilterBoxStateProps {
  filterText?: string;
}

export interface IFilterBoxDispatchProps {
  onRender?: (id: string) => void;
  onDestroy?: (id: string) => void;
  onFilter?: (id: string, filterText: string) => void;
}

export interface IFilterBoxProps extends IFilterBoxOwnProps, IFilterBoxStateProps, IFilterBoxDispatchProps { }

export const FILTER_PLACEHOLDER: string = 'Filter';

export class FilterBox extends React.Component<IFilterBoxProps, any> {
  filterInput: HTMLInputElement;

  static defaultProps: Partial<IFilterBoxProps> = {
    isAutoFocus: false,
  };

  private handleChange = () => {
    this.filterInput.nextElementSibling.setAttribute('class', this.filterInput.value.length ? '' : 'hidden');

    if (this.props.onFilter) {
      this.props.onFilter(this.props.id, this.filterInput.value);
    }
  }

  private handleOnBlur() {
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  private handleOnFocus() {
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  private handleOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(e);
    }
  }

  private clearValue = () => {
    this.filterInput.value = '';
    this.filterInput.focus();
    this.handleChange();
  }

  componentWillMount() {
    if (this.props.onRender) {
      this.props.onRender(this.props.id);
    }
  }

  componentWillUnmount() {
    if (this.props.onDestroy) {
      this.props.onDestroy(this.props.id);
    }
  }

  render() {
    let filterPlaceholder = this.props.filterPlaceholder || FILTER_PLACEHOLDER;
    let filterBoxContainerClasses = classNames('filter-container', this.props.containerClasses);

    return (
      <div id={this.props.id} className={filterBoxContainerClasses}>
        {this.props.children}
        <input
          ref={(filterInput: HTMLInputElement) => this.filterInput = filterInput}
          type='text'
          className='filter-box'
          placeholder={filterPlaceholder}
          onChange={() => this.handleChange()}
          onBlur={() => this.handleOnBlur()}
          onFocus={() => this.handleOnFocus()}
          onKeyDown={(e) => this.handleOnKeyDown(e)}
          value={this.props.filterText}
          autoFocus={this.props.isAutoFocus}
        />
        <Svg svgName='clear' className='hidden' svgClass='icon mod-lg fill-medium-grey' onClick={() => this.clearValue()} />
        <Svg svgName='filter' className='filter-icon' svgClass='icon fill-medium-grey mod-lg' />
      </div>
    );
  }
}
