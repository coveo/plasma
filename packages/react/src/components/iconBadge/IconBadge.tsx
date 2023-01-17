import {Icon} from '@coveord/plasma-react-icons';
import classNames from 'clsx';
import {FunctionComponent} from 'react';

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
    icon: Icon;
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

/**
 * @deprecated Use Mantine instead
 */
export const IconBadge: FunctionComponent<IconBadgeProps> = ({icon, type, size = IconBadgeSize.Medium, className}) => {
    const IconName = icon;

    return (
        <div className={classNames('icon-badge', SizeClassMapping[size], TypeColorMapping[type], className)}>
            <IconName height={24} className={'align-middle'} />
        </div>
    );
};
