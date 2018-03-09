import * as classNames from 'classnames';
import * as React from 'react';
import * as  s from 'underscore.string';
import { Badge, IBadgeProps } from '../badge/Badge';
import { CornerRibbon, DEFAULT_CORNER_RIBBON_CONTAINER_CLASSNAME, ICornerRibbonProps } from '../cornerRibbon/CornerRibbon';
import { Svg } from '../svg/Svg';

export const DEFAULT_LOGO_CARD_CLASSNAME: string = 'logo-card';
export const DEFAULT_LOGO_ICON: string = 'source-custom';
export const DEFAULT_LOGO_ICON_CLASSNAME: string = 'icon';
export const DEFAULT_DISABLED_RIBBON_LABEL: string = 'Unavailable';

export interface ILogoCardProps {
  badges?: IBadgeProps[];
  disabled?: boolean;
  disabledRibbon?: ICornerRibbonProps;
  extraContainerClasses?: string[];
  extraLogoIconClasses?: string[];
  logoIconSize?: string;
  onClick?: () => void;
  ribbon?: ICornerRibbonProps;
  svgName?: string;
  title: string;
}

export class LogoCard extends React.Component<ILogoCardProps> {
  static defaultProps: Partial<ILogoCardProps> = {
    svgName: DEFAULT_LOGO_ICON,
    disabled: false,
    disabledRibbon: {
      label: DEFAULT_DISABLED_RIBBON_LABEL,
      extraClasses: ['bold'],
    },
    badges: [],
    extraContainerClasses: [],
    extraLogoIconClasses: [],
    logoIconSize: 'mod-4x',
  };

  private handleClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const containerClassName = classNames(
      DEFAULT_LOGO_CARD_CLASSNAME,
      DEFAULT_CORNER_RIBBON_CONTAINER_CLASSNAME,
      this.props.extraContainerClasses,
      this.props.disabled ? 'disabled' : '',
    );
    const logoIconClassName = classNames(
      DEFAULT_LOGO_ICON_CLASSNAME,
      this.props.logoIconSize,
      this.props.extraLogoIconClasses,
    );
    const badges = this.props.badges.map((badgeProps) =>
      <Badge {...badgeProps}
        key={s.slugify(badgeProps.label)} />);
    const ribbon = this.props.disabled
      ? <CornerRibbon {...this.props.disabledRibbon} />
      : this.props.ribbon ? <CornerRibbon {...this.props.ribbon} /> : null;

    return (
      <div
        className={containerClassName}
        onClick={() => this.handleClick()} >
        <div className='logo-card-logo'>
          <Svg svgName={this.props.svgName} className={logoIconClassName} />
        </div>
        <div className='logo-card-content'>
          <h2 className='logo-card-title'>{this.props.title}</h2>
          <div>
            {...badges}
          </div>
        </div>
        {ribbon}
      </div>
    );
  }
}
