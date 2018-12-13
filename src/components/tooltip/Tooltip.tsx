import * as React from 'react';
import {OverlayTrigger, Tooltip as BootstrapTooltip} from 'react-bootstrap';
import * as ReactDOM from 'react-dom';
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
    onClick?: (...args: any[]) => void;
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
    /**
     * By default, <Tooltip /> wraps children inside a span element to make sure the tooltip is applied on one html element only.
     * Use noSpanWrapper to avoid wrapping your children inside a span.
     *
     * CAUTION: Make sure you have only 1 child if you use this prop.
     */
    noSpanWrapper?: boolean;
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
    'noSpanWrapper',
    'onEnter',
    'onEntered',
    'onEntering',
    'onExit',
    'onExited',
    'onExiting',
    'onClick',
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

export class Tooltip extends React.Component<ITooltipProps> {
    static defaultProps: Partial<ITooltipProps> = {
        className: '',
    };

    private readonly overlay: React.RefObject<BootstrapTooltip>;

    constructor(props: ITooltipProps) {
        super(props);
        this.overlay = React.createRef();
    }

    componentWillUnmount() {
        if (this.overlay && this.overlay.current) {
            const node = ReactDOM.findDOMNode(this.overlay.current);
            if (node && !document.body.contains(node)) {
                document.body.appendChild(node);
            }
        }
    }

    render() {
        const tooltipFooter: JSX.Element = this.props.footer
            ? <div className='tooltip-footer'>{this.props.footer}</div>
            : null;

        const tooltip: JSX.Element = <BootstrapTooltip
            id={_.uniqueId('tooltip-')}
            ref={this.overlay}
            {..._.omit(this.props, TOOLTIP_PROPS_TO_OMIT)}
        >
            {this.props.title}
            {tooltipFooter}
        </BootstrapTooltip>;

        const children = this.props.noSpanWrapper
            ? this.props.children as any
            : (
                <span className={this.props.className}>
                    {this.props.children}
                </span>
            );

        if (this.props.title) {
            return (
                <OverlayTrigger {..._.omit(this.props, OVERLAY_PROPS_TO_OMIT)} overlay={tooltip}>
                    {children}
                </OverlayTrigger>
            );
        }
        return children;
    }
}
