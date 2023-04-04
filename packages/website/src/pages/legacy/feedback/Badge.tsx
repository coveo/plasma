import {BadgeMetadata} from '@coveord/plasma-components-props-analyzer';
import BadgeDemo from '@examples/legacy/feedback/Badge/Badge.demo?demo';
import BadgeSmallDemo from '@examples/legacy/feedback/Badge/BadgeSmall.demo?demo';
import BadgeWithIconsDemo from '@examples/legacy/feedback/Badge/BadgeWithIcons.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const BadgeDemos = () => (
    <PageLayout
        id="Badge"
        sourcePath="/packages/react/src/components/badge/Badge.tsx"
        title="Badge"
        section="Feedback"
        description="A badge is a small label that displays a short yet important piece of information."
        thumbnail="badge"
        demo={<BadgeDemo center />}
        propsMetadata={BadgeMetadata}
        examples={{
            BadgeWithIconsDemo: <BadgeWithIconsDemo center title="Badge with icon" />,
            BadgeSmallDemo: <BadgeSmallDemo center title="Badge small" />,
        }}
    />
);

export default BadgeDemos;
