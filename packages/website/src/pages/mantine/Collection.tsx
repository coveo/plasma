import {CollectionMetadata} from '@coveord/plasma-components-props-analyzer';

import {PageLayout} from '../../building-blocs/PageLayout';
import mainExample from '../../examples/collection/Collection.example.tsx';

export default () => (
    <PageLayout
        section="Mantine"
        title="Collection"
        sourcePath="/packages/mantine/src/components/collection/Collection.tsx"
        description="A Collection allows users to provide multiple inputs for the same parameter. Each input appears on a different line."
        id="Collection"
        code={mainExample}
        propsMetadata={CollectionMetadata}
    />
);
