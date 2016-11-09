import { IFacet } from './Facet';
import { Svg } from '../svg/Svg';
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
        <label className='facet-value-label'>
          <div className='facet-value-label-wrapper'>
            <input
              type='checkbox'
              name={this.props.facetRow.name}
              className='facet-checkbox-input'
              checked={this.props.isChecked}
              onChange={() => this.props.onToggleFacet(this.props.facetRow)}
              />
            <div className='facet-value-checkbox'>
              <Svg svgName='check' svgClass='icon fill-medium-grey' />
            </div>
            <span className='facet-value-count'></span>
            <div className='facet-value-caption'>{this.props.facetRow.formattedName}</div>
          </div>
        </label>
      </li>
    );
  }
}
