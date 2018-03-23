import * as React from 'react';
import {Facet, IFacet} from '../Facet';

export class FacetExamples extends React.Component<any, any> {

    render() {
        const facet: IFacet = {name: 'facetTitle', formattedName: 'Facet Title'};
        const facetRows: IFacet[] = [
            {
                name: 'row1',
                formattedName: 'Row 1',
            }, {
                name: 'row2',
                formattedName: 'Row 2 with a count',
                count: '516',
            }, {
                name: 'row3',
                formattedName: 'Row 3 with very long facet name that will get cut',
            },
        ];
        const selectedFacetRows: IFacet[] = [{
            name: 'row2',
            formattedName: 'Row 2',
        }];
        const moreFacetRows = facetRows.concat(
            {
                name: 'row4',
                formattedName: 'Row 4',
            },
            {
                name: 'row5',
                formattedName: 'Row 5',
            },
            {
                name: 'row6',
                formattedName: 'Row 6',
            },
            {
                name: 'row7',
                formattedName: 'Row 7',
            },
        );
        const onToggleFacet: (facet: string, facetRow: IFacet) => void = () => {return;};
        const clearFacet: (facet: string) => void = () => {return;};
        return (
            <div className='mt2' style={{width: 300}}>
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
    }
}
