import {TabMetadata} from '@coveord/plasma-components-props-analyzer';
import TabExample from '@examples/legacy/navigation/Tabs/Tab.example.tsx';
import TabWithIconExample from '@examples/legacy/navigation/Tabs/TabWithIcon.example.tsx';
import {FunctionComponent} from 'react';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const TabsExamples: FunctionComponent = () => (
    <PageLayout
        id="Tab"
        componentSourcePath="/tab/Tab.tsx"
        title="Tab"
        section="Navigation"
        description="A set of tabs allows users to navigate between sections of the same interface."
        thumbnail="tab"
        code={TabExample}
        propsMetadata={TabMetadata}
        examples={{withIcons: {code: TabWithIconExample, title: 'Tab with icons'}}}
    />
);

export default TabsExamples;
