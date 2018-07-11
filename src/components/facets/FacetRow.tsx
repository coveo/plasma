import * as classNames from 'classnames';
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
    enableExclusions?: boolean;
}

export class FacetRow extends React.Component<IFacetRowProps, any> {
    static defaultProps: Partial<IFacetRowProps> = {
        maxTooltipLabelLength: 25,
    };

    get isExclude(): boolean {
        return !!this.props.enableExclusions && !!this.props.facetRow.exclude;
    }

    render() {
        const className: string = classNames(
            'facet-value',
            'facet-selectable',
            {'facet-exclude': this.props.enableExclusions},
        );
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
                        onClick={this.stopEvent}
                        onChange={_.noop}
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

        return (this.props.facetRow.formattedName.length > maxCalculatedNameLength)
            ? <Tooltip
                title={this.props.facetRow.tooltipLabel || this.props.facetRow.formattedName}
                placement='top'
                className={`inline-block full-content-x${className}`}
            >
                {this.props.facetRow.formattedName}
            </Tooltip>
            : <span className={className}>
                {this.props.facetRow.formattedName}
            </span>;
    }

    private getCount(): JSX.Element {
        if (!_.isUndefined(this.props.facetRow.count)) {
            return <span className={classNames('facet-value-count', {'text-exclude': this.props.isChecked && this.isExclude})}>{this.props.facetRow.count}</span>;
        }
    }

    private getExcludeCheckbox(): JSX.Element {
        if (!!this.props.enableExclusions) {
            return (
                <div className='flex center-align facet-exclude-button' onClick={() => this.toggleFacetToExclude()}>
                    <input
                        type='checkbox'
                        className='coveo-checkbox'
                        checked={this.props.isChecked && this.isExclude}
                        onClick={this.stopEvent}
                        onChange={_.noop}
                    />
                    <span className='center-align exclude-button' >
                        <Svg svgName='clear' className='icon' svgClass='fill-medium-grey' />
                    </span>
                </div>
            );
        }
    }

    private stopEvent(event: React.MouseEvent<HTMLInputElement>): void {
        event.preventDefault();
        event.stopPropagation();
    }

    private toggleFacetToExclude(): void {
        this.props.onToggleFacet({...this.props.facetRow, exclude: true});
    }

    private toggleFacet(): void {
        this.props.onToggleFacet({...this.props.facetRow, exclude: false});
    }
}
