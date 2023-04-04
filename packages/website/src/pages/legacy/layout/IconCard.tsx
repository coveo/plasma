import {IconCardMetadata} from '@coveord/plasma-components-props-analyzer';
import IconCardDemo from '@examples/legacy/layout/IconCard/IconCard.demo?demo';
import IconCardDisabledDemo from '@examples/legacy/layout/IconCard/IconCardDisabled.demo?demo';
import IconCardSmallDemo from '@examples/legacy/layout/IconCard/IconCardSmall.demo?demo';
import IconCardWithBadgesDemo from '@examples/legacy/layout/IconCard/IconCardWithBadges.demo?demo';
import IconCardWithChoicesDemo from '@examples/legacy/layout/IconCard/IconCardWithChoices.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const IconCardDemos = () => (
    <PageLayout
        id="IconCard"
        title="Icon Card"
        section="Layout"
        description="An icon card is an element that regroups related pieces of information together. It can be either static or interactive."
        sourcePath="/packages/react/src/components/iconCard/IconCard.tsx"
        propsMetadata={IconCardMetadata}
        demo={<IconCardDemo center />}
        examples={{
            choices: <IconCardWithChoicesDemo center title="With multiple choices" />,
            small: <IconCardSmallDemo center title="Small, with multiple choices" />,
            disabled: <IconCardDisabledDemo center title="Disabled, with lock badge" />,
            badgesOnTop: <IconCardWithBadgesDemo center title="With badges on top" />,
        }}
    />
);

export default IconCardDemos;
