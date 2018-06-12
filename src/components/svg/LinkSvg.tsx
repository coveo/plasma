import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';
import {ITooltipProps, Tooltip} from '../tooltip/Tooltip';
import {ISvgProps, Svg} from './Svg';
import {keys} from 'ts-transformer-keys';
export interface ILinkSvgPropsWithoutHTMLProps extends React.ClassAttributes<LinkSvg> {
    url?: string;
    target?: string;
    linkClasses?: string[];
    svg?: ISvgProps;
    tooltip?: ITooltipProps;
}

export interface ILinkSvgProps extends React.HTMLProps<HTMLAnchorElement> {}

export class LinkSvg extends React.Component<ILinkSvgProps, {}> {
    static defaultProps: Partial<ILinkSvgProps> = {
        target: '_blank',
        linkClasses: [],
        svg: {svgName: 'help', svgClass: 'icon'},
    };

    render() {
        const classes = classNames(this.props.linkClasses);
        const href = this.props.url ? {href: this.props.url} : null;
        return (
            <a
                {..._.omit(this.props, keys<ILinkSvgPropsWithoutHTMLProps>())}
                {...href}
                target={this.props.target}
                className={classes}
            >
                <Tooltip {...this.props.tooltip}>
                    <Svg {...this.props.svg} />
                </Tooltip>
            </a>
        );
    }
}
