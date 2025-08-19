import {LastUpdatedMetadata} from '@coveord/plasma-components-props-analyzer';
import LastUpdatedDemo from '../../examples/feedback/last-updated/LastUpdated.demo?demo';
import LastUpdatedCustomDemo from '../../examples/feedback/last-updated/LastUpdatedCustom.demo?demo';
import LastUpdatedFormatterDemo from '../../examples/feedback/last-updated/LastUpdatedFormatter.demo?demo';

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
            custom: <LastUpdatedCustomDemo title="Custom label and time" />,
            formatter: <LastUpdatedFormatterDemo title="Custom formatter" />,
        }}
        sourcePath="/packages/mantine/src/components/last-updated/LastUpdated.tsx"
        propsMetadata={LastUpdatedMetadata}
    />
);

export default LastUpdatedPage;
