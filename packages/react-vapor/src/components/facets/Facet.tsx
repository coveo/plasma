import * as React from 'react';
import * as _ from 'underscore';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils';
import {Svg} from '../svg/Svg';
import {Tooltip} from '../tooltip/Tooltip';
import {FacetMoreRows} from './FacetMoreRows';
import {FacetMoreRowsConnected} from './FacetMoreRowsConnected';
import {FacetMoreToggle} from './FacetMoreToggle';
import {FacetMoreToggleConnected} from './FacetMoreToggleConnected';
import {FacetRow} from './FacetRow';

export interface IFacet {
    name: string;
    formattedName: string;
    tooltipLabel?: string;
    count?: string;
    exclude?: boolean;
}

export interface IFacetOwnProps extends React.ClassAttributes<Facet> {
    facet: IFacet;
    facetRows: IFacet[];
    toggleFacet: (facet: string, facetRow: IFacet) => void;
    clearFacet: (facet: string) => void;
    clearFacetLabel?: string;
    maxRowsToShow?: number;
    maxTooltipLabelLength?: number;
    excludeTooltipMessage?(facetsRowName: string): string;
}

export interface IFacetStateProps extends IReduxStatePossibleProps {
    isOpened?: boolean;
    selectedFacetRows?: IFacet[];
}

export interface IFacetDispatchProps {
    onRender?: (facet: string) => void;
    onDestroy?: (facet: string) => void;
    onToggleFacet?: (facet: string, facetRow: IFacet) => void;
    onClearFacet?: (facet: string) => void;
}

export interface IFacetChildrenProps {
    moreLabel?: string;
    filterPlaceholder?: string;
    enableExclusions?: boolean;
}

export interface IFacetProps extends IFacetOwnProps, IFacetStateProps, IFacetDispatchProps, IFacetChildrenProps {}

export const CLEAR_FACET_LABEL: string = 'Clear';

export class Facet extends React.Component<IFacetProps, any> {
    static defaultProps: Partial<IFacetProps> = {
        clearFacetLabel: CLEAR_FACET_LABEL,
        selectedFacetRows: [],
        maxRowsToShow: 5,
    };

    private buildFacet = (facetRow: IFacet) => {
        this.props.toggleFacet(this.props.facet.name, facetRow);
        if (this.props.onToggleFacet) {
            this.props.onToggleFacet(this.props.facet.name, facetRow);
        }
    };

    private clearFacet = () => {
        this.props.clearFacet(this.props.facet.name);
        if (this.props.onClearFacet) {
            this.props.onClearFacet(this.props.facet.name);
        }
    };

    private sortFacetRows(facetRows: IFacet[]) {
        return _.sortBy(facetRows, (facetRow: IFacet) => facetRow.formattedName.toLowerCase());
    }

    componentWillMount() {
        if (this.props.onRender) {
            this.props.onRender(this.props.facet.name);
        }
    }

    componentWillUnmount() {
        if (this.props.onDestroy) {
            this.props.onDestroy(this.props.facet.name);
        }
    }

    render() {
        if (!this.props.facetRows.length && !this.props.selectedFacetRows.length) {
            return null;
        }
        const removeSelectedClass: string =
            'facet-header-eraser' + (this.props.selectedFacetRows.length ? '' : ' hidden');
        const selected: IFacet[] = this.sortFacetRows(this.props.selectedFacetRows);
        const unselected: IFacet[] = this.sortFacetRows(this.props.facetRows);
        const allRows: IFacet[] = _.union(selected, unselected);
        const facetRows: IFacet[] = _.uniq(allRows, false, (item) => item.name);
        const rows: JSX.Element[] = _.map(facetRows, (facetRow: IFacet) => {
            const isSelected: boolean = _.contains(_.pluck(selected, 'name'), facetRow.name);
            return (
                <FacetRow
                    key={facetRow.name}
                    facet={this.props.facet.name}
                    facetRow={facetRow}
                    onToggleFacet={this.buildFacet}
                    isChecked={isSelected}
                    enableExclusions={this.props.enableExclusions}
                    maxTooltipLabelLength={this.props.maxTooltipLabelLength}
                    excludeTooltipMessage={this.props.excludeTooltipMessage}
                />
            );
        });
        let rowsToShow: number = Math.max(this.props.selectedFacetRows.length, this.props.maxRowsToShow);
        // If there is only 1 extra row, show it instead of the moreRowsToggle
        if (rows.length === rowsToShow + 1) {
            rowsToShow += 1;
        }
        const moreRowsToggle: JSX.Element =
            rows.length > rowsToShow ? (
                this.props.withReduxState ? (
                    <FacetMoreToggleConnected facet={this.props.facet.name} moreLabel={this.props.moreLabel} />
                ) : (
                    <FacetMoreToggle facet={this.props.facet.name} moreLabel={this.props.moreLabel} />
                )
            ) : null;
        const facetClasses: string = this.props.facet.name + ' facet' + (this.props.isOpened ? ' facet-opened' : '');

        return (
            <div className={facetClasses}>
                <div className="facet-header">
                    <div className={removeSelectedClass} onClick={() => this.clearFacet()}>
                        <Tooltip
                            className="remove-selected-tooltip"
                            title={`${this.props.clearFacetLabel} ${this.props.facet.formattedName}`}
                        >
                            <Svg svgName="clear" className="icon fill-medium-grey" />
                        </Tooltip>
                    </div>
                    <div className="facet-header-title bold text-medium-blue">{this.props.facet.formattedName}</div>
                </div>
                <ul className="facet-values">
                    {rows.slice(0, rowsToShow)}
                    {moreRowsToggle}
                </ul>
                {this.getMoreRows(!!moreRowsToggle, rows.slice(rowsToShow))}
            </div>
        );
    }

    private getMoreRows(needMoreRows: boolean, rows: JSX.Element[]): JSX.Element {
        if (needMoreRows) {
            return this.props.withReduxState ? (
                <FacetMoreRowsConnected
                    facet={this.props.facet.name}
                    facetRows={rows}
                    filterPlaceholder={this.props.filterPlaceholder}
                />
            ) : (
                <FacetMoreRows
                    facet={this.props.facet.name}
                    facetRows={rows}
                    filterPlaceholder={this.props.filterPlaceholder}
                />
            );
        }
    }
}
