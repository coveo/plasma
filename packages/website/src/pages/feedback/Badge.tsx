import {BadgeMetadata} from '@coveord/plasma-components-props-analyzer';
import BadgeDemo from '@examples/feedback/badge/Badge.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout';

const BadgePage = () => (
    <PageLayout
        id="Badge"
        title="Badge"
        section="Feedback"
        thumbnail="placeholder"
        description="Display badge, pill or tag."
        demo={<BadgeDemo center />}
        sourcePath="/packages/mantine/src/styles/Badge.module.css"
        propsMetadata={BadgeMetadata}
    />
);

export default BadgePage;
