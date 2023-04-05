import {LastUpdatedMetadata} from '@coveord/plasma-components-props-analyzer';
import LastUpdatedDemo from '@examples/legacy/feedback/LastUpdated/LastUpdated.demo?demo';
import LastUpdatedSpecificTimeDemo from '@examples/legacy/feedback/LastUpdated/LastUpdatedSpecifiedTime.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const DemoPage = () => (
    <PageLayout
        id="LastUpdated"
        title="Last Updated"
        section="Feedback"
        description="A “last updated” string displays the time a set of data has been last updated by a system."
        demo={<LastUpdatedDemo />}
        sourcePath="/packages/react/src/components/lastUpdated/LastUpdated.tsx"
        propsMetadata={LastUpdatedMetadata}
        examples={{specificTime: <LastUpdatedSpecificTimeDemo title="Specific date" />}}
    />
);

export default DemoPage;
