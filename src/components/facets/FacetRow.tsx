import { IFacet } from './Facet';
import * as React from 'react';

export interface IFacetRowProps extends React.ClassAttributes<FacetRow> {
  facetRow: IFacet;
  facet: string;
  onToggleFacet: (facetRow: IFacet) => void;
  isChecked: boolean;
}

export class FacetRow extends React.Component<IFacetRowProps, any> {

  render() {
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
          <span className='label'>{this.props.facetRow.formattedName}</span>
        </label>
      </li>
    );
  }
}
