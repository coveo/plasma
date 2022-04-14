import {SvgName} from '@coveord/plasma-style';
import classNames from 'classnames';
import * as React from 'react';
import {Svg} from '../svg';

export const DEFAULT_BADGE_CLASSNAME = 'badge';

export enum BadgeType {
    Default,
    Critical,
    Warning,
    Success,
    Beta,
    New,
}

export enum BadgeIconPlacement {
    Left,
    Right,
}

const IconPlacementMapping: Record<BadgeIconPlacement, boolean> = {
    [BadgeIconPlacement.Left]: true,
    [BadgeIconPlacement.Right]: false,
};

const TypeClassMapping: Record<BadgeType, string> = {
    [BadgeType.Beta]: 'mod-beta',
    [BadgeType.Critical]: 'mod-critical',
    [BadgeType.Default]: 'mod-default',
    [BadgeType.New]: 'mod-new',
    [BadgeType.Success]: 'mod-success',
    [BadgeType.Warning]: 'mod-warning',
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
    icon: SvgName;
    /**
     * Whether the icon is left or right (Required if no label)
     */
    iconPlacement: BadgeIconPlacement;
}
export type IBadgeProps = BadgeWithLabelProps | BadgeWithIconProps | (BadgeWithLabelProps & BadgeWithIconProps);

export class Badge extends React.Component<IBadgeProps> {
    static defaultProps: IBadgeProps = {
        extraClasses: [],
        type: BadgeType.Default,
        isSmall: false,
        icon: undefined,
        iconPlacement: undefined,
    };

    private get className(): string {
        return classNames(DEFAULT_BADGE_CLASSNAME, TypeClassMapping[this.props.type], this.props.extraClasses, {
            'mod-small': this.props.isSmall,
        });
    }

    render() {
        return (
            <div className={this.className} aria-label="badge">
                {'icon' in this.props && this.props.icon && IconPlacementMapping[this.props.iconPlacement] ? (
                    <Svg svgName={this.props.icon} className={'mod-badge'} svgClass={'icon mod-badge'} />
                ) : null}
                {'label' in this.props ? <div className="badge_label">{this.props.label}</div> : null}
                {'icon' in this.props && this.props.icon && !IconPlacementMapping[this.props.iconPlacement] ? (
                    <Svg svgName={this.props.icon} className={'mod-badge'} svgClass={'icon mod-badge'} />
                ) : null}
            </div>
        );
    }
}
