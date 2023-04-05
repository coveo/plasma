import {CollapsibleConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import CollapsibleDemo from '@examples/legacy/layout/Collapsible/Collapsible.demo?demo';
import CollapsibleDisabledDemo from '@examples/legacy/layout/Collapsible/CollapsibleDisabled.demo?demo';
import CollapsibleExpandedDemo from '@examples/legacy/layout/Collapsible/CollapsibleExpanded.demo?demo';
import CollapsibleInfoBoxDemo from '@examples/legacy/layout/Collapsible/CollapsibleInfoBox.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const CollapsibleDemos = () => (
    <PageLayout
        id="CollapsibleConnected"
        sourcePath="/packages/react/src/components/collapsible/CollapsibleConnected.tsx"
        title="Collapsible"
        section="Layout"
        description="A collapsible allows users to hide or display a section of content."
        demo={<CollapsibleDemo />}
        propsMetadata={CollapsibleConnectedMetadata}
        examples={{
            infoBoxWrapper: <CollapsibleInfoBoxDemo title="Info box wrapper" />,
            expanded: <CollapsibleExpandedDemo title="Expanded on mount" />,
            disabled: <CollapsibleDisabledDemo title="Disabled" />,
        }}
    />
);

export default CollapsibleDemos;
