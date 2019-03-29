import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';
import {Defaults} from '../../Defaults';
import {DomPositionVisibilityValidator, IBoundingLimit} from './DomPositionVisibilityValidator';

export const DropPodPosition = {
    bottom: 'bottom',
    top: 'top',
    left: 'left',
    right: 'right',
};

export interface IDropPodProps {
    isOpen?: boolean;
    positions?: string[];
    renderDrop: (style: React.CSSProperties, dropRef: React.RefObject<HTMLElement>) => React.ReactNode;
    selector?: string;
    parentSelector?: string;
    minWidth?: number;
    minHeight?: number;
    hasSameWidth?: boolean;
}

export interface IRDropPodProps extends IDropPodProps {
    buttonRef?: React.RefObject<HTMLElement>;
}

export interface IDropPodState {
    offset: ClientRect | DOMRect;
    style: React.CSSProperties;
}

export const defaultDropPodPosition = [DropPodPosition.right, DropPodPosition.bottom, DropPodPosition.top, DropPodPosition.left];

class RDropPod extends React.PureComponent<IRDropPodProps, IDropPodState> {
    readonly dropRef: React.RefObject<HTMLElement>;

    private currentStyle: React.CSSProperties;

    static defaultProps: Partial<IDropPodProps> = {
        isOpen: false,
        positions: defaultDropPodPosition,
        minWidth: 0,
        minHeight: 0,
        hasSameWidth: false,
    };

    constructor(props: IDropPodProps, state: IDropPodState) {
        super(props, state);

        this.dropRef = React.createRef();
        this.state = {
            offset: undefined,
            style: undefined,
        };

        this.updateOffset = this.updateOffset.bind(this);
    }

    componentWillUnmount() {
        this.removeEventsOnDocument();
    }

    private setEventsOnDocument() {
        window.addEventListener('resize', this.updateOffset, true);
        window.addEventListener('scroll', this.updateOffset, true);
    }

    private removeEventsOnDocument() {
        window.removeEventListener('scroll', this.updateOffset, true);
        window.removeEventListener('resize', this.updateOffset, true);
    }

    private updateOffset() {
        if (this.props.buttonRef && this.props.buttonRef.current) {
            this.setState({
                offset: this.props.buttonRef.current.getBoundingClientRect(),
            });
        }
    }

    private canRenderDrop() {
        return this.dropRef.current && this.props.isOpen && !!this.props.positions.length;
    }

    private calculateStyleOffset() {
        let style: React.CSSProperties = {};
        if (this.canRenderDrop()) {
            const buttonOffset: ClientRect | DOMRect = this.props.buttonRef.current && this.props.buttonRef.current.getBoundingClientRect() || this.state.offset;
            let dropOffset: ClientRect | DOMRect = this.dropRef.current.getBoundingClientRect();
            if (this.props.hasSameWidth) {
                dropOffset = {
                    ...(dropOffset as DOMRect).toJSON(),
                    width: buttonOffset.width,
                };
            }

            const parentOffset = this.props.parentSelector ? this.props.buttonRef.current.closest(this.props.parentSelector).getBoundingClientRect() : this.props.buttonRef.current.offsetParent.getBoundingClientRect();
            const boundingLimit: IBoundingLimit = {
                maxY: Math.min(parentOffset.bottom, window.innerHeight),
                minY: Math.max(parentOffset.top, 0),
                maxX: Math.min(parentOffset.right, window.innerWidth),
                minX: Math.max(parentOffset.left, 0),
            };

            // Calculate which side to render drop depending on the space available and the order set in the position array
            let index = 0;
            while (_.keys(style).length < 2 && index < this.props.positions.length) {
                const dropOffsetPrime = {
                    ...dropOffset,
                    width: Math.max(dropOffset.width, this.props.minWidth),
                    height: Math.max(dropOffset.height, this.props.minHeight),
                };
                const validator = DomPositionVisibilityValidator[this.props.positions[index]];
                style = validator &&
                    validator(buttonOffset, dropOffsetPrime, boundingLimit) || {};
                index += 1;
            }

            // Resize the button with the last position before the out of the box

            if (buttonOffset.top <= boundingLimit.minY) {
                style.top = boundingLimit.minY;
            }
            if (buttonOffset.bottom >= boundingLimit.maxY) {
                style.top = boundingLimit.maxY - dropOffset.height;
            }
            if (buttonOffset.left <= boundingLimit.minX) {
                style.left = boundingLimit.minX;
            }
            if (buttonOffset.right >= boundingLimit.maxX) {
                style.left = boundingLimit.maxX - dropOffset.width;
            }

            if (this.props.hasSameWidth) {
                style = {
                    ...style,
                    width: buttonOffset.width,
                };
            }

            // No space to render the drop target
            if (dropOffset.height >= boundingLimit.maxY - boundingLimit.minY || dropOffset.width >= boundingLimit.maxX -
                boundingLimit.minX) {
                this.currentStyle = {};
            } else {
                this.currentStyle = {
                    ...this.currentStyle,
                    ...style,
                };
            }
        }
    }

    render() {
        if (this.props.isOpen) {
            this.setEventsOnDocument();
        } else {
            this.removeEventsOnDocument();
        }

        this.calculateStyleOffset();

        const selector: any = this.props.selector || Defaults.DROP_ROOT;
        const drop: React.ReactNode = this.props.renderDrop({
            position: 'absolute',
            display: 'inline-block',
            ...{
                ...this.currentStyle,
                visibility: this.canRenderDrop() ? 'visible' : 'hidden',
            },
        }, this.dropRef);

        return ReactDOM.createPortal(drop, document.querySelector(selector));
    }
}

export const DropPod: React.ForwardRefExoticComponent<IDropPodProps & React.RefAttributes<HTMLElement>> =
    React.forwardRef((props: IDropPodProps, ref: React.RefObject<HTMLElement>) =>
        <RDropPod {...props} buttonRef={ref} />,
    );
