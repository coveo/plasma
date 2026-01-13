import {ClassAttributes, Component} from 'react';
import * as _ from 'underscore';
import {contains} from 'underscore.string';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils';
import {FilterBox} from '../filterBox/FilterBox';
import {FilterBoxConnected} from '../filterBox/FilterBoxConnected';

export interface IFacetMoreRowsOwnProps extends ClassAttributes<FacetMoreRows> {
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

export interface IFacetMoreRowsProps
    extends IFacetMoreRowsOwnProps,
        IFacetMoreRowsDispatchProps,
        IFacetMoreRowsStateProps,
        IFacetMoreRowsChildrenProps {}

/**
 * @deprecated use Mantine instead
 */
export class FacetMoreRows extends Component<IFacetMoreRowsProps, any> {
    private facetSearch: HTMLDivElement;

    componentDidMount() {
        if (this.props.onDocumentClick) {
            document.addEventListener('click', this.handleDocumentClick);
        }
    }

    componentWillUnmount() {
        if (this.props.onDocumentClick) {
            document.removeEventListener('click', this.handleDocumentClick);
        }
    }

    componentDidUpdate(prevProps: IFacetMoreRowsProps) {
        if (!prevProps.isOpened && this.props.isOpened) {
            this.props.onOpen?.();
        }

        if (this.props.isOpened) {
            this.facetSearch.getElementsByTagName('input')[0].focus();
        }
    }

    private handleDocumentClick = (e: MouseEvent) => {
        if (this.props.isOpened) {
            const facetSearch: HTMLElement = this.facetSearch;

            if (!facetSearch.contains(e.target as Node)) {
                this.props.onDocumentClick();
            }
        }
    };

    render() {
        const moreSearchClasses: string = 'facet-more-search' + (!this.props.isOpened ? ' hidden' : '');
        const rowsFiltered: JSX.Element[] =
            this.props.filterText && this.props.filterText.length
                ? _.map(this.props.facetRows, (facetRow: JSX.Element) => {
                      const facetText = facetRow.props.facetRow.formattedName;
                      if (contains(facetText.toLowerCase(), this.props.filterText.toLowerCase())) {
                          return facetRow;
                      }
                  }).filter(Boolean)
                : this.props.facetRows;
        const resultsClass: string = 'facet-search-results' + (!rowsFiltered.length ? ' hidden' : '');
        const filterBoxId: string = 'filter-' + this.props.facet;
        const filterBox: JSX.Element = this.props.withReduxState ? (
            <FilterBoxConnected id={filterBoxId} filterPlaceholder={this.props.filterPlaceholder} />
        ) : (
            <FilterBox id={filterBoxId} filterPlaceholder={this.props.filterPlaceholder} />
        );

        return (
            <div className={moreSearchClasses}>
                <div
                    className="facet-search"
                    ref={(facetSearch: HTMLDivElement) => {
                        this.facetSearch = facetSearch;
                    }}
                >
                    {filterBox}
                </div>
                <ul className={resultsClass}>{rowsFiltered}</ul>
            </div>
        );
    }
}
