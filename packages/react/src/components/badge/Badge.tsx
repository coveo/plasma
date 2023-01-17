import {Icon} from '@coveord/plasma-react-icons';
import classNames from 'clsx';
import {Component} from 'react';

export const DEFAULT_BADGE_CLASSNAME = 'badge';

export enum BadgeType {
    Default,
    Critical,
    Warning,
    Success,
    Beta,
    New,
    Information,
}

export enum BadgeIconPlacement {
    Left,
    Right,
}

const TypeClassMapping: Record<BadgeType, string> = {
    [BadgeType.Beta]: 'mod-beta',
    [BadgeType.Critical]: 'mod-critical',
    [BadgeType.Default]: 'mod-default',
    [BadgeType.New]: 'mod-new',
    [BadgeType.Success]: 'mod-success',
    [BadgeType.Warning]: 'mod-warning',
    [BadgeType.Information]: 'mod-information',
};

interface BadgeBasicProps {
    /**
     * CSS class for the badge
     */
    extraClasses?: string[];
    /**
     * The type of the badge
     *
     * @default Default
     */
    type?: BadgeType;
    /**
     * The Badge will be smaller in size when true
     *
     * @default false
     */
    isSmall?: boolean;
}

interface BadgeWithLabelProps extends BadgeBasicProps {
    /**
     * The label of the badge (Required if no icon)
     */
    label: string;
}
interface BadgeWithIconProps extends BadgeBasicProps {
    /**
     * Add an icon to the badge (Required if no label)
     */
    icon: Icon;
    /**
     * Whether the icon is left or right (Required if no label)
     *
     * @default BadgeIconPlacement.Left
     */
    iconPlacement?: BadgeIconPlacement;
}
export type IBadgeProps = BadgeWithLabelProps | BadgeWithIconProps | (BadgeWithLabelProps & BadgeWithIconProps);

/**
 * @deprecated Use Mantine Badge instead: https://mantine.dev/core/badge/
 */
export class Badge extends Component<IBadgeProps> {
    static defaultProps: IBadgeProps = {
        extraClasses: [],
        isSmall: false,
        label: '',
        iconPlacement: BadgeIconPlacement.Left,
    };

    private get className(): string {
        return classNames(DEFAULT_BADGE_CLASSNAME, TypeClassMapping[this.props.type], this.props.extraClasses, {
            'mod-small': this.props.isSmall,
        });
    }

    render() {
        return (
            <div className={this.className} aria-label="badge">
                {'icon' in this.props && this.props.icon ? (
                    <this.props.icon
                        className={classNames('mod-badge', {
                            'mod-right': this.props.iconPlacement === BadgeIconPlacement.Right,
                        })}
                        height={this.props.isSmall ? 14 : 18}
                    />
                ) : null}
                {'label' in this.props && this.props.label ? (
                    <div className="badge_label">{this.props.label}</div>
                ) : null}
            </div>
        );
    }
}
