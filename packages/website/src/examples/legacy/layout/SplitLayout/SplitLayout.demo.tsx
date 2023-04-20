import {SplitLayout} from '@coveord/plasma-react';

const Demo = () => (
    <SplitLayout
        leftChildren={<p className="p1">Hello from the left!</p>}
        rightChildren={<p className="p1">Hello from the right!</p>}
    />
);
export default Demo;
