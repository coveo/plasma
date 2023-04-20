import {FacetConnected, IFacet} from '@coveord/plasma-react';

const Demo = () => {
    const facet: IFacet = {name: 'facet-2', formattedName: 'Facet with exclude'};

    const facetRows: IFacet[] = [
        {
            name: 'row1',
            formattedName: 'Row 1',
        },
        {
            name: 'row2',
            formattedName: 'The second row',
        },
    ];
    return <FacetConnected facet={facet} facetRows={facetRows} enableExclusions />;
};
export default Demo;
