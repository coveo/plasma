import * as React from 'react';
import {connect} from 'react-redux';
import {changeFacet, FacetConnected, IFacet, IFacetActionPayload, IReduxAction, Section} from 'react-vapor';

export interface ILastUpdateConnectedExamplesProps {
    onRender?: () => void;
}

const facet: IFacet = {name: 'facetTitle1', formattedName: 'The first facet'};
const facet2: IFacet = {name: 'facetTitle2', formattedName: 'The second facet'};

const facetRows: IFacet[] = [
    {
        name: 'row1',
        formattedName: 'Row 1',
    },
    {
        name: 'row2',
        formattedName: 'The second row',
    },
    {
        name: 'row3',
        formattedName: 'Third row with a count property',
        count: '23412',
    },
    {
        name: 'row4',
        formattedName: 'Row 4, count of 0',
        count: '0',
    },
];

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IFacetActionPayload>) => void
): ILastUpdateConnectedExamplesProps => {
    return {
        onRender: () => {
            dispatch(
                changeFacet(facet.name, {
                    name: 'row2',
                    formattedName: 'Irrelevent',
                })
            );
            dispatch(
                changeFacet(facet2.name, {
                    name: 'row1',
                    formattedName: 'it does not matter',
                })
            );
            dispatch(
                changeFacet(facet2.name, {
                    name: 'row2',
                    formattedName: 'why is this mandatory ?',
                    exclude: true,
                })
            );
        },
    };
};

const FacetConnectedExamplesDisconnected: React.FunctionComponent<ILastUpdateConnectedExamplesProps> = ({onRender}) => {
    React.useEffect(() => {
        onRender();
    }, [onRender]);

    return (
        <Section level={2} title="Facets connected to store">
            <div style={{width: 400}}>
                <label className="form-control-label">Facet with the second row selectd</label>
                <FacetConnected
                    facet={facet}
                    facetRows={facetRows}
                    clearFacet={() => {
                        return;
                    }}
                    toggleFacet={() => {
                        return;
                    }}
                />
            </div>
            <div style={{width: 400}}>
                <label className="form-control-label">
                    Facet with exclusions, the first row selected and the second row already excluded
                </label>
                <FacetConnected
                    facet={facet2}
                    facetRows={facetRows}
                    clearFacet={() => {
                        return;
                    }}
                    enableExclusions
                    toggleFacet={() => {
                        return;
                    }}
                />
            </div>
        </Section>
    );
};
export const FacetConnectedExamples = connect(null, mapDispatchToProps)(FacetConnectedExamplesDisconnected);
