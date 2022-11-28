import {CollapsibleConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import CollapsibleExample from '@examples/legacy/layout/Collapsible/Collapsible.example.tsx';
import CollapsibleDisabledExample from '@examples/legacy/layout/Collapsible/CollapsibleDisabled.example.tsx';
import CollapsibleExpandedExample from '@examples/legacy/layout/Collapsible/CollapsibleExpanded.example.tsx';
import CollapsibleInfoBoxExample from '@examples/legacy/layout/Collapsible/CollapsibleInfoBox.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const CollapsibleExamples = () => (
    <PageLayout
        id="CollapsibleConnected"
        componentSourcePath="/collapsible/CollapsibleConnected.tsx"
        title="Collapsible"
        section="Layout"
        description="A collapsible allows users to hide or display a section of content."
        code={CollapsibleExample}
        propsMetadata={CollapsibleConnectedMetadata}
        examples={{
            infoBoxWrapper: {code: CollapsibleInfoBoxExample, title: 'Info box wrapper'},
            expanded: {code: CollapsibleExpandedExample, title: 'Expanded on mount'},
            disabled: {code: CollapsibleDisabledExample, title: 'Disabled'},
        }}
    />
);

export default CollapsibleExamples;
