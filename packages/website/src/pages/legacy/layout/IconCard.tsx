import {IconCardMetadata} from '@coveord/plasma-components-props-analyzer';
import IconCardExample from '@examples/legacy/layout/IconCard/IconCard.example.tsx';
import IconCardDisabledExample from '@examples/legacy/layout/IconCard/IconCardDisabled.example.tsx';
import IconCardSmallExample from '@examples/legacy/layout/IconCard/IconCardSmall.example.tsx';
import IconCardWithBadgesExample from '@examples/legacy/layout/IconCard/IconCardWithBadges.example.tsx';
import IconCardWithChoicesExample from '@examples/legacy/layout/IconCard/IconCardWithChoices.example.tsx';
import {FunctionComponent} from 'react';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const IconCardExamples: FunctionComponent = () => (
    <PageLayout
        id="IconCard"
        title="Icon Card"
        section="Layout"
        description="An icon card is an element that regroups related pieces of information together. It can be either static or interactive."
        componentSourcePath="/iconCard/IconCard.tsx"
        propsMetadata={IconCardMetadata}
        code={IconCardExample}
        examples={{
            choices: {code: IconCardWithChoicesExample, title: 'With multiple choices'},
            small: {code: IconCardSmallExample, title: 'Small, with multiple choices'},
            disabled: {code: IconCardDisabledExample, title: 'Disabled, with lock badge'},
            badgesOnTop: {code: IconCardWithBadgesExample, title: 'With badges on top'},
        }}
    />
);

export default IconCardExamples;
