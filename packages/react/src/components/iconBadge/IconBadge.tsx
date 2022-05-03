import {SvgName} from '@coveord/plasma-style';
import classNames from 'classnames';
import {FunctionComponent} from 'react';

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
    /**
     * Icon to display
     */
    svgName: SvgName;
    /**
     * Type of the icon badge (New - Information - Warning - Major)
     */
    type: IconBadgeType;
    /**
     * Size of the icon badge
     *
     * @default Medium
     */
    size?: IconBadgeSize;
    /**
     * Additionnal CSS class for the icon
     */
    svgClass?: string;
    /**
     * Additionnal CSS class for the icon badge
     */
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

export const IconBadge: FunctionComponent<IconBadgeProps> = ({
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
