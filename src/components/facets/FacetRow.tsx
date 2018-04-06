import * as React from 'react';
import * as _ from 'underscore';
import {Tooltip} from '../tooltip/Tooltip';
import {IFacet} from './Facet';

export interface IFacetRowProps extends React.ClassAttributes<FacetRow> {
    facetRow: IFacet;
    facet: string;
    onToggleFacet: (facetRow: IFacet) => void;
    isChecked: boolean;
    maxTooltipLabelLength?: number;
}

export class FacetRow extends React.Component<IFacetRowProps, any> {
    static defaultProps: Partial<IFacetRowProps> = {
        maxTooltipLabelLength: 25,
    };

    render() {
        const maxCalculatedNameLength = this.props.facetRow.count
            ? this.props.maxTooltipLabelLength - this.props.facetRow.count.length
            : this.props.maxTooltipLabelLength;
        const label: JSX.Element = this.props.facetRow.formattedName.length > maxCalculatedNameLength
            ? <Tooltip title={this.props.facetRow.tooltipLabel || this.props.facetRow.formattedName} placement='top' className='inline-block'>
                {this.props.facetRow.formattedName}
            </Tooltip>
            : <span>{this.props.facetRow.formattedName}</span>;
        const count: JSX.Element = !_.isUndefined(this.props.facetRow.count)
            ? <span className='facet-value-count'>{this.props.facetRow.count}</span>
            : null;

        return (
            <li className='facet-value facet-selectable'>
                <label className='coveo-checkbox-label facet-value-label'>
                    <input
                        type='checkbox'
                        name={this.props.facetRow.name}
                        className='coveo-checkbox facet-checkbox-input'
                        checked={this.props.isChecked}
                        onChange={() => this.props.onToggleFacet(this.props.facetRow)}
                    />
                    <button type='button'
                        onClick={() => this.props.onToggleFacet(this.props.facetRow)}
                    />
                    <span className='label'>{label}</span>
                    {count}
                </label>
            </li>
        );
    }
}
