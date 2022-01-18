import * as React from 'react';
import {connect} from 'react-redux';
import {changeFacet, FacetConnected, IFacet, IFacetActionPayload, IReduxAction, Section} from '@coveord/plasma-react';

import VaporComponent from '../../building-blocs/VaporComponent';

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
    {
        name: 'row5',
        formattedName: 'This row is super loooooooooooooooooooonoooooooooooooooooooong',
        count: '123456',
    },
];

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IFacetActionPayload>) => void
): ILastUpdateConnectedExamplesProps => ({
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
});

// start-print
const FacetConnectedExamplesDisconnected: React.FunctionComponent<ILastUpdateConnectedExamplesProps> = ({onRender}) => {
    React.useEffect(() => {
        onRender();
    }, []);

    return (
        <VaporComponent id="Facet" title="Facet" withSource>
            <Section level={2} title="Facets connected to store">
                <div style={{width: 400}}>
                    <label className="form-control-label">Facet with the second row selectd</label>
                    <FacetConnected
                        facet={facet}
                        facetRows={facetRows}
                        clearFacet={(): void => null}
                        toggleFacet={(): void => null}
                    />
                </div>
                <div style={{width: 400}}>
                    <label className="form-control-label">
                        Facet with exclusions, the first row selected and the second row already excluded
                    </label>
                    <FacetConnected
                        facet={facet2}
                        facetRows={facetRows}
                        clearFacet={(): void => null}
                        enableExclusions
                        toggleFacet={(): void => null}
                    />
                </div>
            </Section>
        </VaporComponent>
    );
};
export const FacetConnectedExamples = connect(null, mapDispatchToProps)(FacetConnectedExamplesDisconnected);
