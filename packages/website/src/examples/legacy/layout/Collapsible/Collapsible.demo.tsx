import {CollapsibleConnected} from '@coveord/plasma-react';

export default () => (
    <CollapsibleConnected
        id="collapsible-example-1"
        headerContent={<h6 className="p2">Q: Why can't you trust an atom?</h6>}
    >
        <div className="p2">A: Because they make up everything</div>
    </CollapsibleConnected>
);
