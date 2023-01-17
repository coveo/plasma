import {CrossSize16Px, UnavailableSize16Px} from '@coveord/plasma-react-icons';
import classNames from 'classnames';
import {ClassAttributes, Component, MouseEvent} from 'react';
import * as _ from 'underscore';

import {Tooltip} from '../tooltip/Tooltip.js';
import {IFacet} from './Facet.js';

export interface IFacetRowProps extends ClassAttributes<FacetRow> {
    facetRow: IFacet;
    facet: string;
    onToggleFacet: (facetRow: IFacet) => void;
    isChecked: boolean;
    maxTooltipLabelLength?: number;
    enableExclusions?: boolean;
    excludeTooltipMessage?(facetsRowName: string): string;
}

/**
 * @deprecated use Mantine instead
 */
export class FacetRow extends Component<IFacetRowProps, any> {
    static defaultProps: Partial<IFacetRowProps> = {
        maxTooltipLabelLength: 25,
    };

    get isExcluded(): boolean {
        return !!this.props.enableExclusions && !!this.props.facetRow.exclude;
    }

    render() {
        const className: string = classNames('facet-value', 'facet-selectable', {
            'facet-exclude': this.props.enableExclusions,
        });
        return (
            <li className={className}>
                {this.getExcludeAction()}
                <label
                    className="checkbox checkbox-label facet-value-label"
                    onClick={(e) => {
                        // prevent event bubbling and trigger onToggleFacet only once no matter where you click on the row
                        e.preventDefault();
                        this.toggleFacet();
                    }}
                >
                    <input
                        type="checkbox"
                        name={this.props.facetRow.name}
                        className="facet-checkbox-input"
                        checked={this.props.isChecked && !this.isExcluded}
                        onClick={this.stopEvent}
                        onChange={_.noop}
                    />
                    <button type="button" className={this.props.isChecked && this.isExcluded ? 'exclude-box' : ''}>
                        <CrossSize16Px className="hide exclude-icon" />
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

        const className = classNames({'text-exclude': this.props.isChecked && this.isExcluded});
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
                        'text-exclude': this.props.isChecked && this.isExcluded,
                    })}
                >
                    {this.props.facetRow.count}
                </span>
            );
        }
    }

    private getExcludeAction() {
        return this.props.enableExclusions ? (
            <div className="flex center-align facet-exclude-button" onClick={() => this.toggleFacetToExclude()}>
                {this.props.isChecked && this.isExcluded ? null : this.getExcludeButton()}
            </div>
        ) : null;
    }

    private getExcludeButton() {
        return (
            <Tooltip
                className="exclude-button"
                title={this.props.excludeTooltipMessage?.(this.props.facetRow.formattedName) ?? ''}
            >
                <UnavailableSize16Px height={16} />
            </Tooltip>
        );
    }

    private stopEvent(event: MouseEvent<HTMLInputElement>): void {
        event.preventDefault();
        event.stopPropagation();
    }

    private toggleFacetToExclude(): void {
        this.props.onToggleFacet({...this.props.facetRow, exclude: !this.isExcluded});
    }

    private toggleFacet(): void {
        this.props.onToggleFacet({...this.props.facetRow, exclude: false});
    }
}
