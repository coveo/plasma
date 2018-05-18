import * as classNames from 'classnames';
import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {slugify} from 'underscore.string';

import {Badge, IBadgeProps} from '../badge/Badge';
import {CornerRibbon, DEFAULT_CORNER_RIBBON_CONTAINER_CLASSNAME, ICornerRibbonProps} from '../cornerRibbon/CornerRibbon';
import {Svg} from '../svg/Svg';

export const DEFAULT_LOGO_CARD_CLASSNAME: string = 'logo-card';
export const DEFAULT_LOGO_ICON: string = VaporSVG.svg.sourceCustom.name;
export const DEFAULT_LOGO_ICON_CLASSNAME: string = 'icon';
export const DEFAULT_LOGO_ICON_SIZE: string = 'mod-4x';
export const DEFAULT_DISABLED_RIBBON_LABEL: string = 'Unavailable';

export interface ILogoCardProps {
    badges?: IBadgeProps[];
    description?: string;
    disabled?: boolean;
    disabledRibbon?: ICornerRibbonProps;
    extraContainerClasses?: string[];
    onClick?: () => void;
    ribbon?: ICornerRibbonProps;
    svgName?: string;
    title: string;
}

export class LogoCard extends React.Component<ILogoCardProps & React.HTMLProps<HTMLDivElement>> {
    static defaultProps: Partial<ILogoCardProps> = {
        badges: [],
        disabled: false,
        disabledRibbon: {
            label: DEFAULT_DISABLED_RIBBON_LABEL,
        },
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
            (this.props.disabled || this.props.ribbon) ? DEFAULT_CORNER_RIBBON_CONTAINER_CLASSNAME : '',
            this.props.extraContainerClasses,
            this.props.disabled ? 'disabled' : '',
        );
        const logoIconClassName = classNames(
            DEFAULT_LOGO_ICON_CLASSNAME,
            DEFAULT_LOGO_ICON_SIZE,
        );
        const descriptionClassName = classNames(
            this.props.badges.length ? 'ml1' : '',
        );

        const badges = this.props.badges.map((badgeProps) =>
            <Badge
                {...badgeProps}
                key={slugify(badgeProps.label)}
            />,
        );
        const description = this.props.description
            ? <span className={descriptionClassName}>{this.props.description}</span>
            : null;

        let ribbon = null;
        if (this.props.disabled) {
            ribbon = <CornerRibbon {...this.props.disabledRibbon} />;
        } else if (this.props.ribbon) {
            ribbon = <CornerRibbon {...this.props.ribbon} />;
        }

        return (
            <div
                className={containerClassName}
                onClick={() => this.handleClick()}
                {...this.props}>
                <div className='logo-card-logo'>
                    <Svg svgName={this.props.svgName} className={logoIconClassName} />
                </div>
                <div className='logo-card-content'>
                    <h2 className='logo-card-title'>{this.props.title}</h2>
                    <div>
                        {...badges}
                        {description}
                    </div>
                </div>
                {ribbon}
            </div>
        );
    }
}
