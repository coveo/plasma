import {CrossSize16Px} from '@coveord/plasma-react-icons';
import {ClassAttributes, Component} from 'react';
import * as _ from 'underscore';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils.js';
import {Tooltip} from '../tooltip/Tooltip.js';
import {FacetMoreRows} from './FacetMoreRows.js';
import {FacetMoreRowsConnected} from './FacetMoreRowsConnected.js';
import {FacetMoreToggle} from './FacetMoreToggle.js';
import {FacetMoreToggleConnected} from './FacetMoreToggleConnected.js';
import {FacetRow} from './FacetRow.js';

export interface IFacet {
    name: string;
    formattedName: string;
    tooltipLabel?: string;
    count?: string;
    exclude?: boolean;
}

export interface IFacetOwnProps extends ClassAttributes<Facet> {
    /**
     * The attributes of this facet, see IFacet
     */
    facet: IFacet;
    /**
     * A list of IFacet representing all the possible values of this facet
     */
    facetRows: IFacet[];
    /**
     * Callback function that runs when selecting or unselecting a facet row
     *
     * @param facet the name of this facet
     * @param facetRow the name of the facet row being toggled
     */
    toggleFacet?: (facet: string, facetRow: IFacet) => void;
    /**
     * Callback function that runs when clicking on the unselect all rows button
     *
     * @param facet the name of this facet
     */
    clearFacet?: (facet: string) => void;
    /**
     * Tooltip on the button to unselect all rows of this facet
     */
    clearFacetLabel?: string;
    /**
     * Maximum number for facet rows to show
     *
     * @default 5
     */
    maxRowsToShow?: number;
    /**
     * Display the label in a tooltip if the length is greater than this number
     */
    maxTooltipLabelLength?: number;
    /**
     * Function to format the tooltip on the exclusion button
     *
     * @param facetsRowName the name of the facet that is being hovered
     */
    excludeTooltipMessage?(facetsRowName: string): string;
}

export interface IFacetStateProps extends IReduxStatePossibleProps {
    /**
     * Wheter the facet More dropdown is opened or not
     */
    isOpened?: boolean;
    /**
     * A list of selected facets, see IFacet
     */
    selectedFacetRows?: IFacet[];
}

export interface IFacetDispatchProps {
    /**
     * Callback function that runs when the component mounts
     *
     * @param facet the name of this facet
     */
    onRender?: (facet: string) => void;
    /**
     * Callback function that runs when this component unmounts
     *
     * @param facet the name of this facet
     */
    onDestroy?: (facet: string) => void;
    /**
     * Callback function that runs when toggling a facet value
     *
     * @param facet the name of the facet
     * @param facetRow the facet value being toggled
     */
    onToggleFacet?: (facet: string, facetRow: IFacet) => void;
    /**
     * Callback function that runs when clicking on the unselect all button
     *
     * @param facet the name of this facet
     */
    onClearFacet?: (facet: string) => void;
}

export interface IFacetChildrenProps {
    /**
     * The label to display on the More values button
     */
    moreLabel?: string;
    /**
     * The placerholder to display in the More values filter input
     */
    filterPlaceholder?: string;
    /**
     * Wheter to display the exclusion or not
     */
    enableExclusions?: boolean;
}

export interface IFacetProps extends IFacetOwnProps, IFacetStateProps, IFacetDispatchProps, IFacetChildrenProps {}

export const CLEAR_FACET_LABEL: string = 'Clear';

/**
 * @deprecated use Mantine instead
 */
export class Facet extends Component<IFacetProps, any> {
    static defaultProps: Partial<IFacetProps> = {
        clearFacetLabel: CLEAR_FACET_LABEL,
        selectedFacetRows: [],
        maxRowsToShow: 5,
    };

    private buildFacet = (facetRow: IFacet) => {
        this.props.toggleFacet?.(this.props.facet.name, facetRow);
        if (this.props.onToggleFacet) {
            this.props.onToggleFacet(this.props.facet.name, facetRow);
        }
    };

    private clearFacet = () => {
        this.props.clearFacet?.(this.props.facet.name);
        if (this.props.onClearFacet) {
            this.props.onClearFacet(this.props.facet.name);
        }
    };

    private sortFacetRows(facetRows: IFacet[]) {
        return _.sortBy(facetRows, (facetRow: IFacet) => facetRow.formattedName.toLowerCase());
    }

    componentDidMount() {
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
                            <CrossSize16Px height={16} />
                        </Tooltip>
                    </div>
                    <div className="facet-header-title">{this.props.facet.formattedName}</div>
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
