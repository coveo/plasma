import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import {IconBadge, IconBadgeType} from '@coveord/plasma-react';

    export default () => (
        <>
            <IconBadge
                svgName={"bellStrokedMedium"}
                type={IconBadgeType.New}
                svgClass="mod-stroke"
                className="mr1"
            />
            <IconBadge
                svgName={"bellStrokedMedium"}
                type={IconBadgeType.Information}
                svgClass="mod-stroke"
                className="mr1"
            />
            <IconBadge
                svgName={"bellStrokedMedium"}
                type={IconBadgeType.Warning}
                svgClass="mod-stroke"
                className="mr1"
            />
            <IconBadge svgName={"bellStrokedMedium"} type={IconBadgeType.Major} svgClass="mod-stroke" />
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
