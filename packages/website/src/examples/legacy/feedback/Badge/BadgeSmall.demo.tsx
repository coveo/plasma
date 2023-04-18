import {Badge, BadgeType} from '@coveord/plasma-react';

const Demo = () => (
    <>
        <Badge isSmall label="Default" type={BadgeType.Default} />
        <Badge isSmall label="Beta" type={BadgeType.Beta} extraClasses={['ml1']} />
        <Badge isSmall label="Critical" type={BadgeType.Critical} extraClasses={['ml1']} />
        <Badge isSmall label="New" type={BadgeType.New} extraClasses={['ml1']} />
        <Badge isSmall label="Success" type={BadgeType.Success} extraClasses={['ml1']} />
        <Badge isSmall label="Warning" type={BadgeType.Warning} extraClasses={['ml1']} />
        <Badge isSmall label="Information" type={BadgeType.Information} extraClasses={['ml1']} />
    </>
);
export default Demo;
