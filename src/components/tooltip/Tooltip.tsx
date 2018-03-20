import * as React from 'react';
import {OverlayTrigger, Tooltip as BootstrapTooltip} from 'react-bootstrap';
import * as _ from 'underscore';

// Copy of the OverlayTriggerProps but without the overlay prop since we are building it here
export interface IOverlayTriggerProps {
    animation?: any;
    defaultOverlayShown?: boolean;
    delay?: number;
    delayHide?: number;
    delayShow?: number;
    onEnter?: (...args: any[]) => void;
    onEntered?: (...args: any[]) => void;
    onEntering?: (...args: any[]) => void;
    onExit?: (...args: any[]) => void;
    onExited?: (...args: any[]) => void;
    onExiting?: (...args: any[]) => void;
    placement?: string;
    container?: string;
    rootClose?: boolean;
    trigger?: string | string[];
}

export interface ITooltipProps extends IOverlayTriggerProps, React.ClassAttributes<Tooltip> {
    title: string;
    className?: string;
    arrowOffsetLeft?: number | string;
    arrowOffsetTop?: number | string;
    bsStyle?: string;
    placement?: string;
    positionLeft?: number;
    positionTop?: number;
    footer?: string;
}

const PROPS_TO_OMIT: string[] = [
    'title',
    'className',
    'children',
];

const TOOLTIP_PROPS_TO_OMIT: string[] = [
    ...PROPS_TO_OMIT,
    'animation',
    'footer',
    'defaultOverlayShown',
    'delay',
    'delayShow',
    'onEnter',
    'onEntered',
    'onEntering',
    'onExit',
    'onExited',
    'onExiting',
    'overlay',
    'rootClose',
    'trigger',
];
const OVERLAY_PROPS_TO_OMIT: string[] = [
    ...PROPS_TO_OMIT,
    'arrowOffsetLeft',
    'arrowOffsetTop',
    'bsClass',
    'positionTop',
    'positionLeft',
    'container',
];

export class Tooltip extends React.Component<ITooltipProps, {}> {
    static defaultProps: Partial<ITooltipProps> = {
        className: '',
    };

    render() {
        const tooltipFooter: JSX.Element = this.props.footer
            ? <div className='tooltip-footer'>{this.props.footer}</div>
            : null;

        const tooltip: JSX.Element = <BootstrapTooltip
            id={_.uniqueId('tooltip-')}
            {..._.omit(this.props, TOOLTIP_PROPS_TO_OMIT)}>
            {this.props.title}
            {tooltipFooter}
        </BootstrapTooltip>;

        if (this.props.title) {
            return (
                <OverlayTrigger {..._.omit(this.props, OVERLAY_PROPS_TO_OMIT)} overlay={tooltip}>
                    <span className={this.props.className}>
                        {this.props.children}
                    </span>
                </OverlayTrigger>
            );
        }
        return (<span>{this.props.children}</span>);
    }
}
