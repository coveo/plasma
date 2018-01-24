import * as React from 'react';
import * as classNames from 'classnames';
import { LinkSvg } from '../svg/LinkSvg';
import { Svg } from '../svg/Svg';
import { ITooltipProps, Tooltip } from '../tooltip/Tooltip';
import { IClassName } from '../../utils/ClassNameUtils';
import { JSXRenderable } from '../../utils/JSXUtils';

export interface ICollapsibleContainerProps {
  title: JSXRenderable;
  informationUrl?: string;
  informationTooltip?: ITooltipProps;
  expanded?: boolean;
  className?: IClassName;
  collapsibleHeaderClassName?: IClassName;
  collapsibleBodyClassName?: IClassName;
}

export class CollapsibleContainer extends React.Component<ICollapsibleContainerProps, {}> {
  getCollapsibleHeaderIcon(): JSX.Element {
    if (!this.props.informationUrl && !this.props.informationTooltip) {
      return null;
    }

    const tooltipProps = { placement: 'right', ...this.props.informationTooltip };

    const svgClass = classNames(
      'icon mod-lg',
      {
        'fill-orange': !!this.props.informationUrl,
        'fill-medium-grey': !this.props.informationUrl,
      }
    );

    const collapsibleHeaderIcon = this.props.informationUrl
      ? (
        <LinkSvg url={this.props.informationUrl} target='_blank' tooltip={tooltipProps} svg={{ svgClass, svgName: 'help' }} />
      )
      : (
        <Tooltip {...tooltipProps}>
          <Svg svgName='help' svgClass={svgClass} />
        </Tooltip>
      );

    return <span className='round-contextual-help'>{collapsibleHeaderIcon}</span>;
  }

  render() {
    const collapsibleHeaderClassName = classNames(
      'collapsible-header btn',
      { active: this.props.expanded },
      this.props.collapsibleHeaderClassName,
    );

    return (
      <div className={classNames('collapsible', this.props.className)}>
        <button type='button' className={collapsibleHeaderClassName}>
          {this.props.title}
          {this.getCollapsibleHeaderIcon()}
        </button>
        <div className={classNames('collapsible-body', this.props.collapsibleBodyClassName)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
