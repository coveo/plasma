import { FilterBoxConnected } from '../filterBox/FilterBoxConnected';
import { IReduxStatePossibleProps } from '../../utils/ReduxUtils';
import { FilterBox } from '../filterBox/FilterBox';
import * as _ from 'underscore';
import * as s from 'underscore.string';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface IFacetMoreRowsOwnProps extends React.ClassAttributes<FacetMoreRows> {
  facet: string;
  facetRows: JSX.Element[];
}

export interface IFacetMoreRowsStateProps extends IReduxStatePossibleProps {
  isOpened?: boolean;
  filterText?: string;
}

export interface IFacetMoreRowsDispatchProps {
  onOpen?: () => void;
  onDocumentClick?: () => void;
}

export interface IFacetMoreRowsProps extends IFacetMoreRowsOwnProps, IFacetMoreRowsDispatchProps, IFacetMoreRowsStateProps { }

export class FacetMoreRows extends React.Component<IFacetMoreRowsProps, any> {
  private facetSearch: HTMLDivElement;

  componentDidMount() {
    if (this.props.onDocumentClick) {
      document.addEventListener('click', this.handleDocumentClick);
    }
  }

  componentWillReceiveProps(nextProps: IFacetMoreRowsProps) {
    if (this.props.onOpen && !this.props.isOpened && nextProps.isOpened) {
      this.props.onOpen();
    }
  }

  componentWillUnmount() {
    if (this.props.onDocumentClick) {
      document.removeEventListener('click', this.handleDocumentClick);
    }
  }

  private handleDocumentClick = (e: MouseEvent) => {
    let facetSearch = ReactDOM.findDOMNode<HTMLDivElement>(this.facetSearch);

    if (!facetSearch.contains(e.target as Node)) {
      this.props.onDocumentClick();
    }
  };

  render() {
    let moreSearchClasses = 'facet-more-search' + (!this.props.isOpened ? ' hidden' : '');
    let rowsFiltered = this.props.filterText && this.props.filterText.length ? _.map(this.props.facetRows, (facetRow: JSX.Element) => {
      let facetText = facetRow.props.facetRow.formattedName;
      if (s.contains(facetText.toLowerCase(), this.props.filterText.toLowerCase())) {
        return facetRow;
      }
    }).filter(Boolean) : this.props.facetRows;
    let resultsClass = 'facet-search-results' + (!rowsFiltered.length ? ' hidden' : '');
    let filterBoxId = 'filter-' + this.props.facet;
    let filterBox = this.props.withReduxState ? <FilterBoxConnected id={filterBoxId} /> : <FilterBox id={filterBoxId} />;

    return (
      <div className={moreSearchClasses}>
        <div className='facet-search' ref={(facetSearch: HTMLDivElement) => this.facetSearch = facetSearch}>
          {filterBox}
        </div>
        <ul className={resultsClass}>
          {rowsFiltered}
        </ul>
      </div>
    );
  }
}
