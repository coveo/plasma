import * as React from 'react';
import * as _ from 'underscore';
import {Checkbox} from '../checkbox/Checkbox';
import {Label} from '../input/Label';
import {Tooltip} from '../tooltip/Tooltip';
import {IFacet} from './Facet';

export interface IFacetRowProps extends React.ClassAttributes<FacetRow> {
  facetRow: IFacet;
  facet: string;
  onToggleFacet: (facetRow: IFacet) => void;
  isChecked: boolean;
  maxTooltipNameLength?: number;
}

export class FacetRow extends React.Component<IFacetRowProps, any> {
  static defaultProps: Partial<IFacetRowProps> = {
    maxTooltipNameLength: 25,
  };

  render() {
    const maxCalculatedNameLength = this.props.facetRow.count
      ? this.props.maxTooltipNameLength - this.props.facetRow.count.length
      : this.props.maxTooltipNameLength;
    const label: JSX.Element = this.props.facetRow.formattedName.length > maxCalculatedNameLength
      ? <Tooltip title={this.props.facetRow.tooltipName || this.props.facetRow.formattedName} placement='top' className='inline-block'>
        {this.props.facetRow.formattedName}
      </Tooltip>
      : <span>{this.props.facetRow.formattedName}</span>;

    return (
      <li className='facet-value facet-selectable'>
        <Checkbox
          name={this.props.facetRow.name}
          classes={['facet-value-label']}
          checked={this.props.isChecked}
          onClick={() => this.props.onToggleFacet(this.props.facetRow)}>
          <Label classes={['label']}>{label}</Label>
          {!_.isUndefined(this.props.facetRow.count) ? <span className='facet-value-count'>{this.props.facetRow.count}</span> : null}
        </Checkbox>
      </li>
    );
  }
}
