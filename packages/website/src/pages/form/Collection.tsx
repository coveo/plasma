import {CollectionMetadata} from '@coveord/plasma-components-props-analyzer';
import CollectionDemo from '@examples/form/collection/Collection.demo?demo';
import CollectionWithReactHookFormDemo from '@examples/form/collection/CollectionWithReactHookForm.demo?demo';
import DisabledCollectionDemo from '@examples/form/collection/DisabledCollection.demo?demo';
import ReadOnlyCollectionDemo from '@examples/form/collection/ReadOnlyCollection.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout.js';

const Page = () => (
    <PageLayout
        section="Form"
        title="Collection"
        sourcePath="/packages/mantine/src/components/collection/Collection.tsx"
        description="A Collection allows users to provide an array of items of the same type."
        id="Collection"
        demo={<CollectionDemo />}
        propsMetadata={CollectionMetadata}
        examples={{
            reactHookForm: <CollectionWithReactHookFormDemo title="Collection with ReactHookForm" />,
            readOnly: <ReadOnlyCollectionDemo title="Read only Collection" />,
            disabled: <DisabledCollectionDemo title="Disabled Collection" />,
        }}
    />
);

export default Page;
