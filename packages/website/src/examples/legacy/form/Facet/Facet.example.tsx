import {FacetConnected, IFacet} from '@coveord/plasma-react';

export default () => {
    const facet: IFacet = {name: 'facet-1', formattedName: 'Simple Facet'};

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
    ];
    return <FacetConnected facet={facet} facetRows={facetRows} />;
};
