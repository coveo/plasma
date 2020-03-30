import classNames from 'classnames';
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
    excludeTooltipMessage?(facetsRowName: string): string;
}

export class FacetRow extends React.Component<IFacetRowProps, any> {
    static defaultProps: Partial<IFacetRowProps> = {
        maxTooltipLabelLength: 25,
    };

    get isExclude(): boolean {
        return !!this.props.enableExclusions && !!this.props.facetRow.exclude;
    }

    render() {
        const className: string = classNames('facet-value', 'facet-selectable', {
            'facet-exclude': this.props.enableExclusions,
        });
        return (
            <li className={className}>
                {this.getExcludeCheckbox()}
                <label
                    className="coveo-checkbox-label facet-value-label"
                    onClick={(e) => {
                        // prevent event bubbling and trigger onToggleFacet only once no matter where you click on the row
                        e.preventDefault();
                        this.toggleFacet();
                    }}
                >
                    <input
                        type="checkbox"
                        name={this.props.facetRow.name}
                        className="coveo-checkbox facet-checkbox-input"
                        checked={this.props.isChecked && !this.isExclude}
                        onClick={this.stopEvent}
                        onChange={_.noop}
                    />
                    <button type="button" className={this.props.isChecked && this.isExclude ? 'exclude-box' : ''}>
                        <Svg svgName="clear" className="icon hide exclude-icon" svgClass="fill-red" />
                    </button>
                    {this.getLabel()}
                    {this.getCount()}
                </label>
            </li>
        );
    }

    private getLabel(): JSX.Element {
        const maxCalculatedNameLength = this.props.facetRow.count
            ? this.props.maxTooltipLabelLength - this.props.facetRow.count.length
            : this.props.maxTooltipLabelLength;

        const className = classNames({'text-exclude': this.props.isChecked && this.isExclude});
        const label: JSX.Element = <span className={className}>{this.props.facetRow.formattedName}</span>;

        return this.props.facetRow.formattedName.length > maxCalculatedNameLength ? (
            <Tooltip
                title={this.props.facetRow.tooltipLabel || this.props.facetRow.formattedName}
                placement="top"
                className="label"
            >
                {label}
            </Tooltip>
        ) : (
            <span className="label">{label}</span>
        );
    }

    private getCount(): JSX.Element {
        if (!_.isUndefined(this.props.facetRow.count)) {
            return (
                <span
                    className={classNames('facet-value-count', {
                        'text-exclude': this.props.isChecked && this.isExclude,
                    })}
                >
                    {this.props.facetRow.count}
                </span>
            );
        }
    }

    private getExcludeCheckbox(): JSX.Element {
        if (!!this.props.enableExclusions) {
            return (
                <div className="flex center-align facet-exclude-button" onClick={() => this.toggleFacetToExclude()}>
                    <input
                        type="checkbox"
                        className="coveo-checkbox"
                        checked={this.props.isChecked && this.isExclude}
                        onClick={this.stopEvent}
                        onChange={_.noop}
                    />
                    {this.getExcludeButton()}
                </div>
            );
        }
    }

    private getExcludeButton(): JSX.Element {
        return this.props.excludeTooltipMessage ? (
            <Tooltip
                className="exclude-button"
                title={this.props.excludeTooltipMessage(this.props.facetRow.formattedName)}
            >
                <Svg svgName="exclude" className="icon" svgClass="fill-medium-grey" />
            </Tooltip>
        ) : (
            <Svg svgName="exclude" className="exclude-button icon" svgClass="fill-medium-grey" />
        );
    }

    private stopEvent(event: React.MouseEvent<HTMLInputElement>): void {
        event.preventDefault();
        event.stopPropagation();
    }

    private toggleFacetToExclude(): void {
        this.props.onToggleFacet({...this.props.facetRow, exclude: !this.isExclude});
    }

    private toggleFacet(): void {
        this.props.onToggleFacet({...this.props.facetRow, exclude: false});
    }
}
