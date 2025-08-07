import {LastUpdatedMetadata} from '@coveord/plasma-components-props-analyzer';
import LastUpdatedDemo from '../../examples/feedback/last-updated/LastUpdated.demo?demo';
import LastUpdatedLabelDemo from '../../examples/feedback/last-updated/LastUpdatedLabel.demo?demo';
import LastUpdatedNumberDemo from '../../examples/feedback/last-updated/LastUpdatedNumber.demo?demo';
import LastUpdatedStringDemo from '../../examples/feedback/last-updated/LastUpdatedString.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout';

const LastUpdatedPage = () => (
    <PageLayout
        id="LastUpdated"
        title="Last updated"
        section="Feedback"
        thumbnail="placeholder"
        description="Display the last update time of a data set."
        demo={<LastUpdatedDemo center />}
        examples={{
            customLabel: <LastUpdatedLabelDemo title="Custom label" />,
            numberTimestamp: <LastUpdatedNumberDemo title="Number timestamp" />,
            stringTimestamp: <LastUpdatedStringDemo title="String timestamp" />,
        }}
        sourcePath="/packages/mantine/src/components/last-updated/LastUpdated.tsx"
        propsMetadata={LastUpdatedMetadata}
    />
);

export default LastUpdatedPage;
