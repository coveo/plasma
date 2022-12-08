import {TabMetadata} from '@coveord/plasma-components-props-analyzer';
import TabDemo from '@examples/legacy/navigation/Tabs/Tab.demo.tsx';
import TabWithIconDemo from '@examples/legacy/navigation/Tabs/TabWithIcon.demo.tsx';
import {FunctionComponent} from 'react';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const TabsDemos: FunctionComponent = () => (
    <PageLayout
        id="Tab"
        sourcePath="/packages/react/src/components/tab/Tab.tsx"
        title="Tab"
        section="Navigation"
        description="A set of tabs allows users to navigate between sections of the same interface."
        thumbnail="tab"
        demo={<TabDemo />}
        propsMetadata={TabMetadata}
        examples={{withIcons: <TabWithIconDemo title="Tab with icons" />}}
    />
);

export default TabsDemos;
