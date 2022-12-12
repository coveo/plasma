import {CollectionMetadata} from '@coveord/plasma-components-props-analyzer';
import CollectionDemo from '@examples/form/collection/Collection.demo.tsx';

import {PageLayout} from '../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        section="Form"
        title="Collection"
        sourcePath="/packages/mantine/src/components/collection/Collection.tsx"
        description="A Collection allows users to provide an array of items of the same type."
        id="Collection"
        demo={<CollectionDemo />}
        propsMetadata={CollectionMetadata}
    />
);
