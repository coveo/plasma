import * as React from 'react';
import {Badge, Section} from 'react-vapor';

export const BadgeExamples: React.FunctionComponent = () => (
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
        </Section>
    </Section>
);
