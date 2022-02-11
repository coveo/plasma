import * as React from 'react';
import {Badge, Section} from '@coveord/plasma-react';

import PlasmaComponent from '../../building-blocs/PlasmaComponent';

// start-print
export const BadgeExamples: React.FunctionComponent = () => (
    <PlasmaComponent
        id="Badge"
        title="Badge"
        usage="A badge is a small label that displays a short yet important piece of information."
        withSource
    >
        <Section>
            <Section level={2} title="Default size">
                <Badge label="Default" />
                <Badge label="Navy" extraClasses={['mod-information ml1']} />
                <Badge label="Success" extraClasses={['mod-success ml1']} />
                <Badge label="Critical" extraClasses={['mod-critical ml1']} />
                <Badge label="New" extraClasses={['mod-warning ml1']} />
                <Badge label="Beta" extraClasses={['mod-beta ml1']} />
                <Badge icon="lock" extraClasses={['ml1']} />
                <Badge icon="lock" label="Label" extraClasses={['ml1']} />
                <Badge icon="lock" label="tag" extraClasses={['mod-tag ml1']} />
            </Section>
            <Section level={2} title="Small">
                <Badge label="Default" extraClasses={['mod-small']} />
                <Badge label="Navy" extraClasses={['mod-small mod-information ml1']} />
                <Badge label="Success" extraClasses={[' mod-small mod-success ml1']} />
                <Badge label="Critical" extraClasses={['mod-small mod-critical ml1']} />
                <Badge label="New" extraClasses={['mod-small mod-warning ml1']} />
                <Badge label="Beta" extraClasses={['mod-small mod-beta ml1']} />
                <Badge icon="lock" extraClasses={['mod-small ml1']} />
                <Badge icon="lock" label="Label" extraClasses={['mod-small ml1']} />
                <Badge icon="lock" label="tag" extraClasses={['mod-small mod-tag ml1']} />
            </Section>
        </Section>
    </PlasmaComponent>
);
export default BadgeExamples;
