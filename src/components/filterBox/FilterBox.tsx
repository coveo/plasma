import * as React from 'react';
import { Svg } from '../svg/Svg';

export interface IFilterBoxOwnProps extends React.ClassAttributes<FilterBox> {
  id: string;
  containerClasses?: string[];
  filterPlaceholder?: string;
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

export const FILTER_PLACEHOLDER = 'Filter';

export class FilterBox extends React.Component<IFilterBoxProps, any> {
  filterInput: HTMLInputElement;

  private handleChange = () => {
    let clearClass = this.filterInput.value.length ? '' : 'hidden';

    this.filterInput.nextElementSibling.setAttribute('class', clearClass);

    if (this.props.onFilter) {
      this.props.onFilter(this.props.id, this.filterInput.value);
    }
  };

  private clearValue = () => {
    this.filterInput.value = '';
    this.filterInput.focus();
    this.handleChange();
  };

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
    let filterBoxContainerClasses = ['coveo-filter-container'].concat(this.props.containerClasses);

    return (
      <div id={this.props.id} className={filterBoxContainerClasses.join(' ')}>
        <input
          ref={(filterInput: HTMLInputElement) => this.filterInput = filterInput}
          type='text'
          className='filter-box'
          placeholder={filterPlaceholder}
          onChange={() => this.handleChange()}
          value={this.props.filterText}
          />
        <Svg svgName='clear' className='hidden' svgClass='icon mod-lg fill-medium-grey' onClick={() => this.clearValue()} />
        <Svg svgName='filter' className='filter-icon' svgClass='icon fill-medium-grey icon mod-lg' />
      </div>
    );
  }
}
