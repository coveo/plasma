import {ActionBarConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import code from '@examples/ActionBar/ActionBar.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="ActionBarConnected"
        title="Action Bar"
        section="Advanced"
        code={code}
        propsMetadata={ActionBarConnectedMetadata}
    />
);
