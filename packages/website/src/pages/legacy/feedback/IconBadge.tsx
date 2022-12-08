import {IconBadgeMetadata} from '@coveord/plasma-components-props-analyzer';
import IconBadgeDemo from '@examples/legacy/feedback/IconBadge/IconBadge.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const IconBadgeDemos = () => (
    <PageLayout
        id="IconBadge"
        componentSourcePath="/iconBadge/IconBadge.tsx"
        title="IconBadge"
        section="Feedback"
        thumbnail="placeholder"
        demo={<IconBadgeDemo center />}
        propsMetadata={IconBadgeMetadata}
    />
);

export default IconBadgeDemos;
