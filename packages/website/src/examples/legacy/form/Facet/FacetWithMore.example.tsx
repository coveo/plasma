import {FacetConnected, IFacet} from '@coveord/plasma-react';

export default () => {
    const facet: IFacet = {name: 'facet-3', formattedName: 'Facet with more'};

    const facetRows: IFacet[] = [
        {
            name: 'row1',
            formattedName: 'The first row',
        },
        {
            name: 'row2',
            formattedName: 'The second row',
        },
        {
            name: 'row3',
            formattedName: 'The third row',
        },
        {
            name: 'row4',
            formattedName: 'The fourth row',
        },
    ];
    return <FacetConnected facet={facet} facetRows={facetRows} maxRowsToShow={2} />;
};
