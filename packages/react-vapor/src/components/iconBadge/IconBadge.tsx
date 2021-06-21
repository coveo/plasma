import classNames from 'classnames';
import * as React from 'react';

import {Svg} from '../svg';

export enum IconBadgeSize {
    Medium,
}

export enum IconBadgeType {
    New,
    Information,
    Warning,
    Major,
}

export interface IconBadgeProps {
    svgName: string;
    type: IconBadgeType;
    size?: IconBadgeSize;
    svgClass?: string;
    className?: string;
}

const SizeClassMapping: Record<IconBadgeSize, string> = {
    [IconBadgeSize.Medium]: 'mod-24',
};

const TypeColorMapping: Record<IconBadgeType, string> = {
    [IconBadgeType.New]: 'mod-new',
    [IconBadgeType.Information]: 'mod-info',
    [IconBadgeType.Warning]: 'mod-warning',
    [IconBadgeType.Major]: 'mod-major',
};

export const IconBadge: React.FunctionComponent<IconBadgeProps> = ({
    svgName,
    type,
    size = IconBadgeSize.Medium,
    svgClass,
    className,
}) => (
    <Svg
        className={classNames('icon-badge', SizeClassMapping[size], TypeColorMapping[type], className)}
        svgName={svgName}
        svgClass={classNames('icon align-middle', SizeClassMapping[size], svgClass)}
    />
);
