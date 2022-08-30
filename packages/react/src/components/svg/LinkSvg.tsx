import classNames from 'classnames';
import {ClassAttributes, Component} from 'react';

import {ITooltipProps, Tooltip} from '../tooltip/Tooltip';
import {ISvgProps, Svg} from './Svg';

export interface ILinkSvgProps extends ClassAttributes<LinkSvg> {
    url?: string;
    target?: string;
    linkClasses?: string[];
    svg?: ISvgProps;
    tooltip?: ITooltipProps;
}

/**
 * @deprecated Use Mantine ActionIcon instead: https://mantine.dev/core/action-icon/#usage-with-react-router
 */
export class LinkSvg extends Component<ILinkSvgProps> {
    static defaultProps: Partial<ILinkSvgProps> = {
        target: '_blank',
        linkClasses: [],
        svg: {svgName: 'help', svgClass: 'icon mod-14'},
    };

    render() {
        const classes = classNames('link inline-flex flex-center', this.props.linkClasses);
        const href = this.props.url ? {href: this.props.url} : null;
        return (
            <Tooltip {...this.props.tooltip} noSpanWrapper>
                <a {...href} target={this.props.target} className={classes}>
                    {this.props.children}
                    <Svg {...this.props.svg} />
                </a>
            </Tooltip>
        );
    }
}
