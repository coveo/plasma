import * as React from 'react';
import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import * as React from 'react';
    import {Badge} from '@coveord/plasma-react';
    import {LockSize16Px} from '@coveord/plasma-react-icons';

    export default () => (
        <>
            <Badge label="Default" />
            <Badge label="Navy" extraClasses={['mod-information ml1']} />
            <Badge label="Success" extraClasses={['mod-success ml1']} />
            <Badge label="Critical" extraClasses={['mod-critical ml1']} />
            <Badge label="New" extraClasses={['mod-warning ml1']} />
            <Badge label="Beta" extraClasses={['mod-beta ml1']} />
            <Badge icon={LockSize16Px} extraClasses={['ml1']} />
            <Badge icon={LockSize16Px} label="Label" extraClasses={['ml1']} />
            <Badge icon={LockSize16Px} label="tag" extraClasses={['mod-tag ml1']} />
        </>
    );
`;

const modSmall = `
    import * as React from 'react';
    import {Badge} from '@coveord/plasma-react';
    import {LockSize16Px} from '@coveord/plasma-react-icons';

    export default () => (
        <>
            <Badge label="Default" extraClasses={['mod-small']} />
            <Badge label="Navy" extraClasses={['mod-small mod-information ml1']} />
            <Badge label="Success" extraClasses={[' mod-small mod-success ml1']} />
            <Badge label="Critical" extraClasses={['mod-small mod-critical ml1']} />
            <Badge label="New" extraClasses={['mod-small mod-warning ml1']} />
            <Badge label="Beta" extraClasses={['mod-small mod-beta ml1']} />
            <Badge icon={LockSize16Px} extraClasses={['mod-small ml1']} />
            <Badge icon={LockSize16Px} label="Label" extraClasses={['mod-small ml1']} />
            <Badge icon={LockSize16Px} label="tag" extraClasses={['mod-small mod-tag ml1']} />
        </>
    );
`;

export const BadgeExamples = () => (
    <PageLayout
        id="Badge"
        componentSourcePath="/badge/Badge.tsx"
        title="Badge"
        section="Feedback"
        description="A badge is a small label that displays a short yet important piece of information."
        thumbnail="placeholder"
        code={code}
        examples={{modSmall: {code: modSmall, title: 'mod-small'}}}
    />
);

export default BadgeExamples;
