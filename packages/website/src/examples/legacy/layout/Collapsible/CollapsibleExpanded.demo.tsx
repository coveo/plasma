import {CollapsibleContainerConnected} from '@coveord/plasma-react';

export default () => (
    <CollapsibleContainerConnected
        id="collapsible-container-example-1"
        title="Collapsible Container expanded on mount"
        informationUrl="https://www.coveo.com/en"
        informationTooltip={{
            title: "I display information and if you click me you'll be led to a URL that was provided to me.",
        }}
        expandedOnMount
    >
        I am expanded on mount!
    </CollapsibleContainerConnected>
);
