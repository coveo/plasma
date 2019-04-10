import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';
import {Defaults} from '../../Defaults';
import {
    DomPositionCalculator,
    DropPodPosition,
    IBoundingLimit, IDomPositionCalculatorReturn,
    IDropUIPosition,
    OrientationByPosition,
} from './DomPositionCalculator';
import {IDropProps} from './Drop';

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
}

export const defaultDropPodPosition = [DropPodPosition.right, DropPodPosition.bottom, DropPodPosition.top, DropPodPosition.left];

class RDropPod extends React.PureComponent<IRDropPodProps, IDropPodState> {
    readonly dropRef: React.RefObject<HTMLElement>;

    private lastPosition: IDropUIPosition;

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
        };

        this.updateOffset = this.updateOffset.bind(this);
    }

    componentWillMount() {
        if (this.props.isOpen) {
            this.setEventsOnDocument();
        }

        if (this.props.positions && !!this.props.positions.length && _.contains(DropPodPosition, this.props.positions[0])) {
            this.lastPosition = {
                position: this.props.positions && this.props.positions[0],
                orientation: OrientationByPosition[this.props.positions[0]][0],
            };
        } else {
            this.lastPosition = {
                position: DropPodPosition.bottom,
                orientation: DropPodPosition.left,
            };
        }
    }

    componentWillUnmount() {
        this.removeEventsOnDocument();
    }

    componentDidUpdate(prevProps: Readonly<IDropProps>) {
        if (!prevProps.isOpen && this.props.isOpen) {
            this.setEventsOnDocument();
        } else if (prevProps.isOpen && !this.props.isOpen) {
            this.removeEventsOnDocument();
        }
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

    private calculateStyleOffset(): React.CSSProperties {
        let newDomPosition: IDomPositionCalculatorReturn = {};
        if (this.canRenderDrop()) {
            const buttonOffset: ClientRect | DOMRect = this.props.buttonRef.current &&
                this.props.buttonRef.current.getBoundingClientRect() || this.state.offset;
            let dropOffset: ClientRect | DOMRect = this.dropRef.current.getBoundingClientRect();
            if (this.props.hasSameWidth) {
                dropOffset = {
                    ...(dropOffset as DOMRect).toJSON(),
                    width: buttonOffset.width,
                };
            }

            const parentOffset = this.props.parentSelector ?
                this.props.buttonRef.current.closest(this.props.parentSelector).getBoundingClientRect() :
                this.props.buttonRef.current.offsetParent.getBoundingClientRect();
            const boundingLimit: IBoundingLimit = {
                maxY: Math.min(parentOffset.bottom, window.innerHeight),
                minY: Math.max(parentOffset.top, 0),
                maxX: Math.min(parentOffset.right, window.innerWidth),
                minX: Math.max(parentOffset.left, 0),
            };

            // Calculate the projection of the next drop position or the last one if no position available
            let index = 0;
            const dropOffsetPrime = {
                ...dropOffset,
                width: Math.max(dropOffset.width, this.props.minWidth),
                height: Math.max(dropOffset.height, this.props.minHeight),
            };

            while (_.isEmpty(newDomPosition) && index < this.props.positions.length) {
                const validator = DomPositionCalculator[this.props.positions[index]];
                newDomPosition = validator && validator(buttonOffset, dropOffsetPrime, boundingLimit, {}) || {};
                index += 1;
            }

            if (_.isEmpty(newDomPosition)) {
                newDomPosition = DomPositionCalculator[this.lastPosition.position](buttonOffset, dropOffsetPrime, boundingLimit, this.lastPosition);
            }

            const {style} = newDomPosition;
            if (style) {
                style.top = Math.max(boundingLimit.minY, style.top as number);
                style.top = Math.min(boundingLimit.maxY, style.top + dropOffset.height) - dropOffset.height;
                style.left = Math.max(boundingLimit.minX, style.left as number);
                style.left = Math.min(boundingLimit.maxX, style.left + dropOffset.width) - dropOffset.width;
            }

            // Set drop size same has the container
            if (this.props.hasSameWidth) {
                newDomPosition.style = {
                    ...style,
                    width: buttonOffset.width,
                };
            }

            // No space to render the drop target
            if (dropOffset.height >= boundingLimit.maxY - boundingLimit.minY || dropOffset.width >= boundingLimit.maxX -
                boundingLimit.minX) {
                return {};
            }

            this.lastPosition = newDomPosition.lastPosition;
            return newDomPosition.style;
        }
    }

    render() {
        const selector: any = this.props.selector || Defaults.DROP_ROOT;
        const drop: React.ReactNode = this.props.renderDrop({
            position: 'absolute',
            display: 'inline-block',
            ...{
                ...this.calculateStyleOffset(),
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
