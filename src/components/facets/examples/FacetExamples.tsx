import * as React from 'react';
import { Facet, IFacet } from '../Facet';

export class FacetExamples extends React.Component<any, any> {

  render() {
    let facet: IFacet = { name: 'facetTitle', formattedName: 'Facet Title' };
    let facetRows: IFacet[] = [
      {
        name: 'row1',
        formattedName: 'Row 1'
      }, {
        name: 'row2',
        formattedName: 'Row 2'
      }, {
        name: 'row3',
        formattedName: 'Row 3'
      }
    ];
    let selectedFacetRows: IFacet[] = [{
      name: 'row2',
      formattedName: 'Row 2'
    }];
    let moreFacetRows = facetRows.concat(
      {
        name: 'row4',
        formattedName: 'Row 4'
      },
      {
        name: 'row5',
        formattedName: 'Row 5'
      },
      {
        name: 'row6',
        formattedName: 'Row 6'
      },
      {
        name: 'row7',
        formattedName: 'Row 7'
      }
    );
    let onToggleFacet: (facet: string, facetRow: string) => void = () => { return; };
    let clearFacet: (facet: string) => void = () => { return; };
    return (
      <div className='mt2' style={{ width: 400 }}>
        <div className='form-group'>
          <label className='form-control-label'>Facet</label>
          <Facet facet={facet} facetRows={facetRows} clearFacet={clearFacet} toggleFacet={onToggleFacet} />
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Facet with a selected row</label>
          <Facet facet={facet} facetRows={facetRows} selectedFacetRows={selectedFacetRows} clearFacet={clearFacet} toggleFacet={onToggleFacet} />
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Facet with many rows</label>
          <Facet facet={facet} facetRows={moreFacetRows} clearFacet={clearFacet} toggleFacet={onToggleFacet} />
        </div>
      </div>
    );
  };
}
