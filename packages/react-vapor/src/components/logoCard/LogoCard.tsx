import classNames from 'classnames';
import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import * as _ from 'underscore';
import {slugify} from 'underscore.string';

import {TooltipPlacement} from '../../utils';
import {Badge, IBadgeProps} from '../badge/Badge';
import {Svg} from '../svg/Svg';
import {Tooltip} from '../tooltip';

export const DEFAULT_LOGO_CARD_CLASSNAME: string = 'logo-card card';
export const DEFAULT_LOGO_ICON: string = VaporSVG.svg.sourceCustom.name;
export const DEFAULT_LOGO_ICON_CLASSNAME: string = 'icon';
export const DEFAULT_LOGO_ICON_SIZE: string = 'mod-4x';
export const DEFAULT_DISABLED_BADGE: string = 'Unavailable';

export interface ILogoCardProps {
    badges?: IBadgeProps[];
    description?: string;
    disabled?: boolean;
    extraContainerClasses?: string[];
    onClick?: () => void;
    svgName?: string;
    title: string;
    tooltip?: string;
    tooltipPlacement?: TooltipPlacement;
}

const LogoCardPropsToOmit = [
    'badges',
    'description',
    'disabled',
    'extraContainerClasses',
    'onClick',
    'svgName',
    'title',
    'tooltip',
    'tooltipPlacement',
];

export class LogoCard extends React.Component<ILogoCardProps & React.HTMLProps<HTMLDivElement>> {
    static defaultProps: Partial<ILogoCardProps> = {
        badges: [],
        disabled: false,
        extraContainerClasses: [],
        svgName: DEFAULT_LOGO_ICON,
    };

    private handleClick() {
        if (this.props.onClick && !this.props.disabled) {
            this.props.onClick();
        }
    }

    render() {
        const containerClassName = classNames(
            DEFAULT_LOGO_CARD_CLASSNAME,
            this.props.extraContainerClasses,
            this.props.disabled ? 'disabled' : ''
        );
        const logoIconClassName = classNames(DEFAULT_LOGO_ICON_CLASSNAME, DEFAULT_LOGO_ICON_SIZE);

        const badges = this.props.badges.map((badgeProps) => <Badge {...badgeProps} key={slugify(badgeProps.label)} />);

        const logoCard: JSX.Element = (
            <Tooltip title={this.props.tooltip} placement={this.props.tooltipPlacement}>
                <div
                    className={containerClassName}
                    onClick={() => this.handleClick()}
                    {..._.omit(this.props, LogoCardPropsToOmit)}
                >
                    <div className="logo-card-logo">
                        <Svg svgName={this.props.svgName} className={logoIconClassName} />
                    </div>
                    <div className="logo-card-content">
                        <h2 className={classNames('logo-card-title', {mb1: !!this.props.description})}>
                            {this.props.title}
                        </h2>
                        {this.props.description}
                    </div>
                    {this.props.badges.length > 0 ? <div className="logo-card-badge">{...badges}</div> : null}
                </div>
            </Tooltip>
        );

        return logoCard;
    }
}
