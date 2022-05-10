import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import {IconBadge, IconBadgeType} from '@coveord/plasma-react';
    import {BellSize16Px}  from '@coveord/plasma-react-icons'

    export default () => (
        <>
            <IconBadge
                icon={BellSize16Px}
                type={IconBadgeType.New}
                className="mr1"
            />
            <IconBadge
                icon={BellSize16Px}
                type={IconBadgeType.Information}
                className="mr1"
            />
            <IconBadge
                icon={BellSize16Px}
                type={IconBadgeType.Warning}
                className="mr1"
            />
            <IconBadge icon={BellSize16Px} type={IconBadgeType.Major} />
        </>
    );
`;

export const IconBadgeExamples = () => (
    <PageLayout
        id="IconBadge"
        componentSourcePath="/iconBadge/IconBadge.tsx"
        title="IconBadge"
        section="Feedback"
        thumbnail="placeholder"
        code={code}
    />
);

export default IconBadgeExamples;
