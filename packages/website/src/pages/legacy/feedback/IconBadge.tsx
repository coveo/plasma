import {IconBadgeMetadata} from '@coveord/plasma-components-props-analyzer';
import IconBadgeExample from '@examples/legacy/feedback/IconBadge/IconBadge.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const IconBadgeExamples = () => (
    <PageLayout
        id="IconBadge"
        componentSourcePath="/iconBadge/IconBadge.tsx"
        title="IconBadge"
        section="Feedback"
        thumbnail="placeholder"
        code={IconBadgeExample}
        propsMetadata={IconBadgeMetadata}
    />
);

export default IconBadgeExamples;
