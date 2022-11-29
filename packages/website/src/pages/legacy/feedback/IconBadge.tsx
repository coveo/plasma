import {IconBadgeMetadata} from '@coveord/plasma-components-props-analyzer';
import IconAndLinkExample from '@examples/legacy/form/button/IconAndLink.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const IconBadgeExamples = () => (
    <PageLayout
        id="IconBadge"
        componentSourcePath="/iconBadge/IconBadge.tsx"
        title="IconBadge"
        section="Feedback"
        thumbnail="placeholder"
        code={IconAndLinkExample}
        propsMetadata={IconBadgeMetadata}
    />
);

export default IconBadgeExamples;
