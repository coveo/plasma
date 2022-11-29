import {FacetMetadata} from '@coveord/plasma-components-props-analyzer';
import FacetExample from '@examples/legacy/form/Facet/Facet.demo.tsx';
import FacetWithExcludeExample from '@examples/legacy/form/Facet/FacetWithExclude.demo.tsx';
import FacetWithMoreExample from '@examples/legacy/form/Facet/FacetWithMore.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="Facet"
        title="Facet"
        section="Form"
        description="A facet is a set of options used to filter a list of content items."
        componentSourcePath="/facets/FacetConnected.tsx"
        code={FacetExample}
        propsMetadata={FacetMetadata}
        examples={{
            withExclude: {code: FacetWithExcludeExample, title: 'Allow exclusion'},
            withMore: {code: FacetWithMoreExample, title: 'Show more'},
        }}
    />
);
