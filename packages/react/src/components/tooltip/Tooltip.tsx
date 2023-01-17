import {Component, ReactNode, ReactText} from 'react';
import {OverlayInjectedProps} from 'react-bootstrap/esm/Overlay.js';
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger.js';
import BootstrapTooltip from 'react-bootstrap/esm/Tooltip.js';
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
    children?: ReactNode;
}

export interface ITooltipProps extends IOverlayTriggerProps {
    /**
     * The text displayed inside the tooltip
     */
    title: ReactNode;
    /**
     * Additionnal CSS class the tooltip should have
     */
    className?: string;
    /**
     * @deprecated Do not use
     */
    arrowOffsetLeft?: ReactText;
    /**
     * @deprecated Do not use
     */
    arrowOffsetTop?: ReactText;
    /**
     * @deprecated Do not use
     */
    bsStyle?: string;
    /**
     * The position of the tooltip should have - Use the TooltipPlacement enum from TooltipUtils
     */
    placement?: string;
    /**
     * @deprecated Do not use
     */
    positionLeft?: number;
    /**
     * @deprecated Do not use
     */
    positionTop?: number;
    /**
     * Add a footer to the tooltip
     */
    footer?: string;
    /**
     * By default, <Tooltip /> wraps children inside a span element to make sure the tooltip is applied on one html element only.
     * Use noSpanWrapper to avoid wrapping your children inside a span.
     *
     * CAUTION: Make sure you have only 1 child if you use this prop.
     */
    noSpanWrapper?: boolean;
}

const PROPS_TO_OMIT: string[] = ['title', 'className', 'children'];

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
    'container',
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

/**
 * @deprecated Use Mantine Tooltip instead: https://mantine.dev/core/tooltip/
 */
export class Tooltip extends Component<ITooltipProps> {
    static defaultProps: Partial<ITooltipProps> = {
        className: '',
    };

    render() {
        const tooltipFooter: JSX.Element = this.props.footer ? (
            <div className="tooltip-footer">{this.props.footer}</div>
        ) : null;

        const id = _.uniqueId('tooltip-');

        const tooltip = (injectedProps: OverlayInjectedProps) => (
            <BootstrapTooltip
                id={id}
                {..._.omit(this.props, TOOLTIP_PROPS_TO_OMIT)}
                {...injectedProps}
                className="react-vapor-tooltip"
            >
                {this.props.title}
                {tooltipFooter}
            </BootstrapTooltip>
        );

        const children = this.props.noSpanWrapper ? (
            (this.props.children as any)
        ) : (
            <span className={this.props.className} aria-labelledby={id}>
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
