import {FacetMetadata} from '@coveord/plasma-components-props-analyzer';

import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
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
`;

const withExclude = `
import {FacetConnected, IFacet} from '@coveord/plasma-react';

export default () => {
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
`;

const withMore = `
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
`;

export default () => (
    <PageLayout
        id="Facet"
        title="Facet"
        section="Form"
        description="A facet is a set of options used to filter a list of content items."
        componentSourcePath="/facets/FacetConnected.tsx"
        code={code}
        propsMetadata={FacetMetadata}
        examples={{
            withExclude: {code: withExclude, title: 'Allow exclusion'},
            withMore: {code: withMore, title: 'Show more'},
        }}
    />
);
