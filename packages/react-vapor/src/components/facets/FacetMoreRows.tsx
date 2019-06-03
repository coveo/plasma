import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';
import * as s from 'underscore.string';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils';
import {FilterBox} from '../filterBox/FilterBox';
import {FilterBoxConnected} from '../filterBox/FilterBoxConnected';

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

export interface IFacetMoreRowsChildrenProps {
    filterPlaceholder?: string;
}

export interface IFacetMoreRowsProps extends IFacetMoreRowsOwnProps, IFacetMoreRowsDispatchProps,
    IFacetMoreRowsStateProps, IFacetMoreRowsChildrenProps {}

export class FacetMoreRows extends React.Component<IFacetMoreRowsProps, any> {
    private facetSearch: HTMLDivElement;

    componentWillMount() {
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

    componentDidUpdate() {
        if (this.props.isOpened) {
            this.facetSearch.getElementsByTagName('input')[0].focus();
        }
    }

    private handleDocumentClick = (e: MouseEvent) => {
        if (this.props.isOpened) {
            const facetSearch: Element | Text = ReactDOM.findDOMNode(this.facetSearch);

            if (!facetSearch.contains(e.target as Node)) {
                this.props.onDocumentClick();
            }
        }
    }

    render() {
        const moreSearchClasses: string = 'facet-more-search' + (!this.props.isOpened ? ' hidden' : '');
        const rowsFiltered: JSX.Element[] = this.props.filterText && this.props.filterText.length
            ? _.map(this.props.facetRows, (facetRow: JSX.Element) => {
                const facetText = facetRow.props.facetRow.formattedName;
                if (s.contains(facetText.toLowerCase(), this.props.filterText.toLowerCase())) {
                    return facetRow;
                }
            }).filter(Boolean)
            : this.props.facetRows;
        const resultsClass: string = 'facet-search-results' + (!rowsFiltered.length ? ' hidden' : '');
        const filterBoxId: string = 'filter-' + this.props.facet;
        const filterBox: JSX.Element = this.props.withReduxState ?
            <FilterBoxConnected id={filterBoxId} filterPlaceholder={this.props.filterPlaceholder} /> :
            <FilterBox id={filterBoxId} filterPlaceholder={this.props.filterPlaceholder} />;

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
