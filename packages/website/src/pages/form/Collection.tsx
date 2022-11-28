import {CollectionMetadata} from '@coveord/plasma-components-props-analyzer';
import mainExample from '@examples/form/collection/Collection.example.tsx';

import {PageLayout} from '../../building-blocs/PageLayout';

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
