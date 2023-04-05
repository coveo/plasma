import {FacetMetadata} from '@coveord/plasma-components-props-analyzer';
import FacetDemo from '@examples/legacy/form/Facet/Facet.demo?demo';
import FacetWithExcludeDemo from '@examples/legacy/form/Facet/FacetWithExclude.demo?demo';
import FacetWithMoreDemo from '@examples/legacy/form/Facet/FacetWithMore.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const FacetsDemoPage = () => (
    <PageLayout
        id="Facet"
        title="Facet"
        section="Form"
        description="A facet is a set of options used to filter a list of content items."
        sourcePath="/packages/react/src/components/facets/FacetConnected.tsx"
        demo={<FacetDemo center />}
        propsMetadata={FacetMetadata}
        examples={{
            withExclude: <FacetWithExcludeDemo center title="Allow exclusion" />,
            withMore: <FacetWithMoreDemo center title="Show more" />,
        }}
    />
);

export default FacetsDemoPage;
