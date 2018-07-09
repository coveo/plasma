import * as React from 'react';
import {IReduxAction, ReduxConnect} from '../../../utils/ReduxUtils';
import {IFacet} from '../Facet';
import {changeFacet, IFacetActionPayload} from '../FacetActions';
import {FacetConnected} from '../FacetConnected';

export interface ILastUpdateConnectedExamplesProps {
    selectedFacets?: IFacet[];
    onClearFacet?: (facet: string) => void;
    onRender?: () => void;
}

const facet: IFacet = {name: 'facetTitle1', formattedName: 'Facet Title'};
const facet2: IFacet = {name: 'facetTitle2', formattedName: 'Facet Title'};
const facet3: IFacet = {name: 'facetTitle3', formattedName: 'Facet Title'};
const facet4: IFacet = {name: 'facetTitle4', formattedName: 'Facet Title'};
const facet5: IFacet = {name: 'facetTitle5', formattedName: 'Facet Title'};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IFacetActionPayload>) => void): ILastUpdateConnectedExamplesProps => {
    return {
        onRender: () => {
            dispatch(changeFacet(facet2.name, {
                name: 'row2',
                formattedName: 'Row 2',
            }));
            dispatch(changeFacet(facet4.name, {
                name: 'row2',
                formattedName: 'Row 2',
            }));
            dispatch(changeFacet(facet4.name, {
                name: 'row3',
                formattedName: 'Row 3',
                isExclude: true,
            }));
        },
    };
};

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class FacetConnectedExamples extends React.Component<ILastUpdateConnectedExamplesProps, any> {

    componentDidMount() {
        this.props.onRender();
    }

    render() {
        const facetRows: IFacet[] = [
            {
                name: 'row1',
                formattedName: 'Row 1',
            }, {
                name: 'row2',
                formattedName: 'Row 2',
            }, {
                name: 'row3',
                formattedName: 'Row 3 with a very long name and also a count',
                count: '23412',
            },
        ];
        const moreFacetRows = facetRows.concat(
            {
                name: 'row4',
                formattedName: 'Row 4, count of 0',
                count: '0',
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
                formattedName: 'Row 7 with a very long name and also a count',
                count: '7903231',
            },
        );
        const toggleFacet: (facet: string, facetRow: IFacet) => void = () => {return;};
        const clearFacet: (facet: string) => void = () => {return;};
        return (
            <div className='mt2' style={{width: 400}}>
                <div className='form-group'>
                    <label className='form-control-label'>Facet with Redux state</label>
                    <FacetConnected facet={facet} facetRows={facetRows} clearFacet={clearFacet} toggleFacet={toggleFacet} />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Facet with Redux state and a selected row</label>
                    <FacetConnected facet={facet2} facetRows={facetRows} clearFacet={clearFacet} toggleFacet={toggleFacet} />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Facet with many rows</label>
                    <FacetConnected facet={facet3} facetRows={moreFacetRows} clearFacet={clearFacet} toggleFacet={toggleFacet} />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Facet with exclude enabled</label>
                    <FacetConnected facet={facet4} facetRows={facetRows} enabledExclude clearFacet={clearFacet} toggleFacet={toggleFacet} />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Facet with exclude enabled and many rows</label>
                    <FacetConnected facet={facet5} facetRows={moreFacetRows} enabledExclude clearFacet={clearFacet} toggleFacet={toggleFacet} />
                </div>
            </div>
        );
    }
}
