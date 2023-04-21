import {InfoBox, CollapsibleConnected} from '@coveord/plasma-react';

const Demo = () => (
    <InfoBox className="py0">
        <CollapsibleConnected
            headerClasses="py2"
            id="info-box-collapsible"
            headerContent={<h6>Some contextual information</h6>}
            expandedOnMount
        >
            <div className="pb2">
                <p>Some information about the current component.</p>
                <p className="mt2">Or some other piece of information</p>
            </div>
        </CollapsibleConnected>
    </InfoBox>
);
export default Demo;
