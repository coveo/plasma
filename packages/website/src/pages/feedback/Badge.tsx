import {BadgeMetadata} from '@coveord/plasma-components-props-analyzer';

import {PageLayout} from '../../building-blocs/PageLayout';
import BadgeExample from '../../examples/Badge/Badge.example.tsx';
import BadgeSmallExample from '../../examples/Badge/BadgeSmall.example.tsx';
import BadgeWithIconsExample from '../../examples/Badge/BadgeWithIcons.example.tsx';

export const BadgeExamples = () => (
    <PageLayout
        id="Badge"
        componentSourcePath="/badge/Badge.tsx"
        title="Badge"
        section="Feedback"
        description="A badge is a small label that displays a short yet important piece of information."
        thumbnail="badge"
        code={BadgeExample}
        propsMetadata={BadgeMetadata}
        examples={{
            BadgeWithIconsExample: {code: BadgeWithIconsExample, title: 'Badge with icon'},
            BadgeSmallExample: {code: BadgeSmallExample, title: 'Badge small'},
        }}
    />
);

export default BadgeExamples;
