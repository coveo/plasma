import {InfoTokenMetadata} from '@coveord/plasma-components-props-analyzer';
import InfoTokenDemo from '@examples/feedback/info-token/InfoToken.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout.js';

const AlertPage = () => (
    <PageLayout
        id="InfoToken"
        title="InfoToken"
        section="Feedback"
        thumbnail="placeholder"
        description="Attract user attention with important static message."
        demo={<InfoTokenDemo center />}
        sourcePath="/packages/mantine/src/components/info-token/InfoToken.tsx"
        propsMetadata={InfoTokenMetadata}
    />
);

export default AlertPage;
