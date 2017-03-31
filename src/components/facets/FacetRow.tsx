import { IFacet } from './Facet';
import { Tooltip } from '../tooltip/Tooltip';
import * as React from 'react';

export interface IFacetRowProps extends React.ClassAttributes<FacetRow> {
  facetRow: IFacet;
  facet: string;
  onToggleFacet: (facetRow: IFacet) => void;
  isChecked: boolean;
}

export const MAX_NAME_LENGTH: number = 25;

export class FacetRow extends React.Component<IFacetRowProps, any> {

  render() {
    const label: JSX.Element = this.props.facetRow.formattedName.length > MAX_NAME_LENGTH
      ? <Tooltip title={this.props.facetRow.formattedName} placement='top'>{this.props.facetRow.formattedName}</Tooltip>
      : <span>{this.props.facetRow.formattedName}</span>;

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
          <button type='button'></button>
          <span className='label'>{label}</span>
        </label>
      </li>
    );
  }
}
