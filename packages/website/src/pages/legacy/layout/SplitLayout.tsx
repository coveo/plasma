import {SplitLayoutMetadata} from '@coveord/plasma-components-props-analyzer';
import SplitLayoutDemo from '@examples/legacy/layout/SplitLayout/SplitLayout.demo?demo';
import SplitLayoutBorderlessDemo from '@examples/legacy/layout/SplitLayout/SplitLayoutBorderless.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const SplitLayoutDemos = () => (
    <PageLayout
        id="SplitLayout"
        title="Split Layout"
        section="Layout"
        description="A split layout organizes information in two vertical columns."
        sourcePath="/packages/react/src/components/splitlayout/SplitLayout.tsx"
        demo={<SplitLayoutDemo />}
        propsMetadata={SplitLayoutMetadata}
        examples={{noBorder: <SplitLayoutBorderlessDemo title="Without a border" />}}
    />
);

export default SplitLayoutDemos;
