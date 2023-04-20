import {CollapsibleContainerConnected} from '@coveord/plasma-react';

const Demo = () => (
    <CollapsibleContainerConnected
        id="collapsible-container-example-3"
        title="Collapsible Container disabled"
        informationUrl="https://www.coveo.com/en"
        informationTooltip={{
            title: "I display information and if you click me you'll be led to a URL that was provided to me.",
        }}
        disabled
    >
        something!
    </CollapsibleContainerConnected>
);
export default Demo;
