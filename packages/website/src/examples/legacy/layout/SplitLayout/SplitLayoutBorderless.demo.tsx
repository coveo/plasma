import {SplitLayout, SplitLayoutMods} from '@coveord/plasma-react';

const Demo = () => (
    <SplitLayout
        mods={SplitLayoutMods.noBorder}
        leftChildren={<p className="p1">Hello from the left!</p>}
        rightChildren={<p className="p1">Hello from the right!</p>}
    />
);
export default Demo;
