import {SplitLayout} from '@coveord/plasma-react';

export default () => (
    <SplitLayout
        leftChildren={<p className="p1">Hello from the left!</p>}
        rightChildren={<p className="p1">Hello from the right!</p>}
    />
);
