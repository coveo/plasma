import * as React from 'react';
import * as _ from 'underscore';
import {Svg} from '../svg/Svg';
import {Tooltip} from '../tooltip/Tooltip';
import {IFacet} from './Facet';

export interface IFacetRowProps extends React.ClassAttributes<FacetRow> {
    facetRow: IFacet;
    facet: string;
    onToggleFacet: (facetRow: IFacet) => void;
    isChecked: boolean;
    maxTooltipLabelLength?: number;
    enabledExclude?: boolean;
}

export class FacetRow extends React.Component<IFacetRowProps, any> {
    static defaultProps: Partial<IFacetRowProps> = {
        maxTooltipLabelLength: 25,
    };

    get isExclude(): boolean {
        return this.props.enabledExclude && this.props.facetRow.isExclude;
    }

    render() {
        const className: string = `facet-value facet-selectable ${this.props.enabledExclude ? 'facet-exclude' : ''}`;
        return (
            <li className={className}>
                {this.getExcludeCheckbox()}
                <label
                    className='coveo-checkbox-label facet-value-label'
                    onClick={(e) => {
                        // prevent event bubbling and trigger onToggleFacet only once no matter where you click on the row
                        e.preventDefault();
                        this.toggleFacet();
                    }}
                >
                    <input
                        type='checkbox'
                        name={this.props.facetRow.name}
                        className='coveo-checkbox facet-checkbox-input'
                        checked={this.props.isChecked && !this.isExclude}
                        onClick={(e) => {e.preventDefault(); e.stopPropagation();}}
                    />
                    <button type='button' className={this.props.isChecked && this.isExclude ? 'exclude-box' : ''}>
                        <Svg svgName='clear' className='icon hide exclude-icon' svgClass='fill-red' />
                    </button>
                    <span className='label'>{this.getLabel()}</span>
                    {this.getCount()}
                </label>
            </li>
        );
    }

    private getLabel(): JSX.Element {
        const className = this.props.isChecked && this.isExclude ? ' text-exclude' : '';
        const maxCalculatedNameLength = this.props.facetRow.count
            ? this.props.maxTooltipLabelLength - this.props.facetRow.count.length
            : this.props.maxTooltipLabelLength;

        if (this.props.facetRow.formattedName.length > maxCalculatedNameLength) {
            return (
                <Tooltip title={this.props.facetRow.tooltipLabel || this.props.facetRow.formattedName} placement='top' className={`inline-block${className}`}>
                    {this.props.facetRow.formattedName}
                </Tooltip>
            );
        } else {
            return <span className={className}>{this.props.facetRow.formattedName}</span>;
        }
    }

    private getCount(): JSX.Element {
        if (!_.isUndefined(this.props.facetRow.count)) {
            return <span className={`facet-value-count ${this.props.isChecked && this.isExclude ? 'text-exclude' : ''}`}>{this.props.facetRow.count}</span>;
        }
    }

    private getExcludeCheckbox(): JSX.Element {
        if (this.props.enabledExclude) {
            return (
                <div className='flex center-align facet-exclude-button' onClick={() => this.toggleFacetToExclude()}>
                    <input type='checkbox' className='coveo-checkbox' checked={this.props.isChecked && this.isExclude} />
                    <span className='center-align exclude-button' >
                        <Svg svgName='clear' className='icon' svgClass='fill-medium-grey' />
                    </span>
                </div>
            );
        }
    }

    private toggleFacetToExclude(): void {
        this.props.onToggleFacet(_.extend({}, this.props.facetRow, {isExclude: true, isChecked: true}));
    }

    private toggleFacet(): void {
        this.props.onToggleFacet(_.extend({}, this.props.facetRow, {isExclude: false}));
    }
}
