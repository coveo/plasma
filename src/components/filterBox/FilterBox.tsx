import * as React from 'react';
import { Svg } from '../svg/Svg';

export interface IFilterBoxOwnProps extends React.ClassAttributes<FilterBox> {
  id: string;
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

export class FilterBox extends React.Component<IFilterBoxProps, any> {

  private handleChange(e: React.FormEvent<HTMLInputElement>) {
    if (this.props.onFilter) {
      let filterBox = e.target as HTMLInputElement;
      this.props.onFilter(this.props.id, filterBox.value);
    }
  }

  componentDidMount() {
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
    let filterPlaceholder = this.props.filterPlaceholder || 'Filter';

    return (
      <div id={this.props.id} className='coveo-filter-container'>
        <input
          type='text'
          className='filter-box'
          placeholder={filterPlaceholder}
          onChange={(e) => this.handleChange(e)}
          value={this.props.filterText}
          />
        <span className='hidden'></span>
        <Svg svgName='filter' className='filter-icon' svgClass='icon fill-medium-grey icon mod-lg' />
      </div>
    );
  }
}
