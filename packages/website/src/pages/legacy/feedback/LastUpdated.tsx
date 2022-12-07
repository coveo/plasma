import {LastUpdatedMetadata} from '@coveord/plasma-components-props-analyzer';
import LastUpdatedDemo from '@examples/legacy/feedback/LastUpdated/LastUpdated.demo.tsx';
import LastUpdatedSpecificTimeDemo from '@examples/legacy/feedback/LastUpdated/LastUpdatedSpecifiedTime.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const DemoPage = () => (
    <PageLayout
        id="LastUpdated"
        title="Last Updated"
        section="Feedback"
        description="A “last updated” string displays the time a set of data has been last updated by a system."
        componentSourcePath="/lastUpdated/LastUpdated.tsx"
        demo={<LastUpdatedDemo />}
        propsMetadata={LastUpdatedMetadata}
        examples={{specificTime: <LastUpdatedSpecificTimeDemo title="Specific date" />}}
    />
);

export default DemoPage;
