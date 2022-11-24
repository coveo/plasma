import {CollapsibleConnectedMetadata} from '@coveord/plasma-components-props-analyzer';

import {PageLayout} from '../../../building-blocs/PageLayout';

const code = `
    import {CollapsibleConnected} from '@coveord/plasma-react';

    export default () => (
        <CollapsibleConnected
            id="collapsible-example-1"
            headerContent={<h6 className="p2">Q: Why can't you trust an atom?</h6>}
        >
            <div className="p2">A: Because they make up everything</div>
        </CollapsibleConnected>
    );
`;

const infoBoxWrapper = `
    import {CollapsibleInfoBox} from '@coveord/plasma-react';

    export default () => (
        <CollapsibleInfoBox
            id="collapsible-info-box-example-1"
            title="Lean more about collapsible info boxes."
        >
            By default, this component will render with an info icon
        </CollapsibleInfoBox>
    );
`;

const expanded = `
    import {CollapsibleContainerConnected} from '@coveord/plasma-react';

    export default () => (
        <CollapsibleContainerConnected
            id="collapsible-container-example-1"
            title="Collapsible Container expanded on mount"
            informationUrl="https://www.coveo.com/en"
            informationTooltip={{
                title:
                    "I display information and if you click me you'll be led to a URL that was provided to me.",
            }}
            expandedOnMount
        >
            I am expanded on mount!
        </CollapsibleContainerConnected>
    );
`;

const disabled = `
    import {CollapsibleContainerConnected} from '@coveord/plasma-react';

    export default () => (
        <CollapsibleContainerConnected
            id="collapsible-container-example-3"
            title="Collapsible Container disabled"
            informationUrl="https://www.coveo.com/en"
            informationTooltip={{
                title:
                    "I display information and if you click me you'll be led to a URL that was provided to me.",
            }}
            disabled
        >
            something!
        </CollapsibleContainerConnected>
    );
`;

const CollapsibleExamples = () => (
    <PageLayout
        id="CollapsibleConnected"
        componentSourcePath="/collapsible/CollapsibleConnected.tsx"
        title="Collapsible"
        section="Layout"
        description="A collapsible allows users to hide or display a section of content."
        code={code}
        propsMetadata={CollapsibleConnectedMetadata}
        examples={{
            infoBoxWrapper: {code: infoBoxWrapper, title: 'Info box wrapper'},
            expanded: {code: expanded, title: 'Expanded on mount'},
            disabled: {code: disabled, title: 'Disabled'},
        }}
    />
);

export default CollapsibleExamples;
