import {Badge, BadgeType} from '@coveord/plasma-react';

export default () => (
    <>
        <Badge label="Default" type={BadgeType.Default} />
        <Badge label="Beta" type={BadgeType.Beta} extraClasses={['ml1']} />
        <Badge label="Critical" type={BadgeType.Critical} extraClasses={['ml1']} />
        <Badge label="New" type={BadgeType.New} extraClasses={['ml1']} />
        <Badge label="Success" type={BadgeType.Success} extraClasses={['ml1']} />
        <Badge label="Warning" type={BadgeType.Warning} extraClasses={['ml1']} />
        <Badge label="Information" type={BadgeType.Information} extraClasses={['ml1']} />
    </>
);
