import * as React from 'react';
import { ISvgProps, Svg } from './Svg';
import * as classname from 'classnames';
import { ITooltipProps, Tooltip } from '../tooltip/Tooltip';

export interface ILinkSvgProps extends React.ClassAttributes<LinkSvg> {
  url: string;
  target?: string;
  linkClasses?: string[];
  svg?: ISvgProps;
  tooltip?: ITooltipProps;
}

export class LinkSvg extends React.Component<ILinkSvgProps, {}> {
  static defaultProps: Partial<ILinkSvgProps> = {
    url: '',
    target: '_blank',
    linkClasses: [],
    svg: { svgName: 'help', svgClass: `icon` },
  };

  render() {
    const classes = classname(this.props.linkClasses);
    return (<a href={this.props.url} target={this.props.target} className={classes}>
      <Tooltip {...this.props.tooltip}>
        <Svg {...this.props.svg} />
      </Tooltip>
    </a>);
  }
}
