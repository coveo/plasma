import {ActionBarConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import ActionBarDemo from '@examples/legacy/advanced/ActionBar/ActionBar.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const DemoPage = () => (
    <PageLayout
        id="ActionBarConnected"
        title="Action Bar"
        section="Advanced"
        demo={<ActionBarDemo />}
        propsMetadata={ActionBarConnectedMetadata}
    />
);

export default DemoPage;
