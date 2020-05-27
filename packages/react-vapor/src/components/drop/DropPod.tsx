import React from 'react';
import ReactDOM from 'react-dom';
import * as _ from 'underscore';

import {Defaults} from '../../Defaults';
import {BrowserUtils} from '../../utils/BrowserUtils';
import {
    DomPositionCalculator,
    DropPodPosition,
    IBoundingLimit,
    IDomPositionCalculatorReturn,
    IDropUIPosition,
    OrientationByPosition,
} from './DomPositionCalculator';

export interface IDropPodProps {
    renderDrop: (
        style: React.CSSProperties,
        dropRef: React.RefObject<HTMLElement>,
        position: IDropUIPosition
    ) => React.ReactNode;
    isOpen?: boolean;
    positions?: string[];
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

export const defaultDropPodPosition = [
    DropPodPosition.right,
    DropPodPosition.bottom,
    DropPodPosition.top,
    DropPodPosition.left,
];

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
    private parentMutationObserver: MutationObserver;

    constructor(props: IDropPodProps, state: IDropPodState) {
        super(props, state);

        this.dropRef = React.createRef();
        this.state = {
            offset: undefined,
        };

        this.updateOffset = this.updateOffset.bind(this);
        if (
            this.props.positions &&
            !!this.props.positions.length &&
            _.contains(DropPodPosition, this.props.positions[0])
        ) {
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

    componentDidMount() {
        if (this.props.isOpen) {
            this.setEventsOnDocument();
        }
    }

    componentWillUnmount() {
        this.removeEventsOnDocument();
    }

    componentDidUpdate(prevProps: Readonly<IRDropPodProps>) {
        if (!prevProps.isOpen && this.props.isOpen) {
            this.setEventsOnDocument();
        } else if (prevProps.isOpen && !this.props.isOpen) {
            this.removeEventsOnDocument();
        }
    }

    private setEventsOnDocument() {
        window.addEventListener('resize', this.updateOffset, true);
        window.addEventListener('scroll', this.updateOffset, true);

        if (this.dropRef && this.dropRef.current) {
            const config = {attributes: false, childList: true, subtree: true};
            this.parentMutationObserver = new MutationObserver(this.updateOffset);
            this.parentMutationObserver.observe(this.dropRef.current, config);
        }
    }

    private removeEventsOnDocument() {
        window.removeEventListener('scroll', this.updateOffset, true);
        window.removeEventListener('resize', this.updateOffset, true);

        if (this.parentMutationObserver) {
            this.parentMutationObserver.disconnect();
        }
    }

    private updateOffset() {
        if (this.props.buttonRef?.current) {
            this.setState({
                offset: this.props.buttonRef?.current?.getBoundingClientRect(),
            });
        }
    }

    private canRenderDrop() {
        return this.dropRef.current && this.props.isOpen && !!this.props.positions.length;
    }

    private getRelativeParent = () => {
        const closestCurrentRef = this.props.buttonRef.current?.closest(
            this.props.parentSelector ?? Defaults.DROP_PARENT_ROOT
        );
        return closestCurrentRef ?? this.props.buttonRef.current?.parentElement;
    };

    private calculateStyleOffset(): React.CSSProperties {
        let newDomPosition: IDomPositionCalculatorReturn = {};
        if (this.canRenderDrop()) {
            const buttonOffset: ClientRect | DOMRect =
                this.props.buttonRef.current?.getBoundingClientRect() ?? this.state.offset;
            const dropOffset: ClientRect | DOMRect = this.dropRef.current.getBoundingClientRect();

            const relativeParent = this.getRelativeParent();
            const parentOffset = relativeParent.getBoundingClientRect();

            const boundingLimit: IBoundingLimit = {
                maxY: Math.min(parentOffset?.bottom, window.innerHeight),
                minY: Math.max(parentOffset?.top, 0),
                maxX: Math.min(parentOffset?.right, window.innerWidth),
                minX: Math.max(parentOffset?.left, 0),
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
                newDomPosition = (validator && validator(buttonOffset, dropOffsetPrime, boundingLimit, {})) || {};
                index += 1;
            }

            if (_.isEmpty(newDomPosition)) {
                newDomPosition = DomPositionCalculator[this.lastPosition.position](
                    buttonOffset,
                    dropOffsetPrime,
                    boundingLimit,
                    this.lastPosition
                );
            }

            const {style} = newDomPosition;
            if (style) {
                if (style.top < boundingLimit.minY) {
                    style.top = Math.max(boundingLimit.minY, style.top as number);
                } else {
                    style.top =
                        Math.min(boundingLimit.maxY, (style.top as number) + dropOffset.height) - dropOffset.height;
                }
                if (style.left < boundingLimit.minX) {
                    style.left = Math.max(boundingLimit.minX, style.left as number);
                } else {
                    style.left =
                        Math.min(boundingLimit.maxX, (style.left as number) + dropOffset.width) - dropOffset.width;
                }
            }

            // Set drop size same as the container
            if (this.props.hasSameWidth) {
                newDomPosition.style = {
                    ...style,
                    left: buttonOffset.left,
                    width: buttonOffset.width,
                };
            }

            // Restrict the max-width to the inner width of the closest relatively positioned ancestor
            if (relativeParent) {
                const {paddingLeft, paddingRight} = getComputedStyle(relativeParent) ?? {};
                newDomPosition.style = {
                    ...newDomPosition.style,
                    maxWidth: parentOffset.width - (parseFloat(paddingLeft) + parseFloat(paddingRight)),
                };

                // Don't show if no space to render the drop target inside the window
                if (dropOffset.height > window.innerHeight) {
                    return {};
                }

                this.lastPosition = newDomPosition.lastPosition;
                return newDomPosition.style;
            }
        }
    }

    render() {
        const style: React.CSSProperties = {
            display: 'inline-block',
            position: 'absolute',
            visibility: this.canRenderDrop() ? 'visible' : 'hidden',
            ...this.calculateStyleOffset(),
        };

        // set the display none for ei 11
        // this browser dont handle position absolute and visibility hidden like other browser
        if (!this.canRenderDrop() && BrowserUtils.isIE()) {
            style.display = 'none';
        }

        const drop: React.ReactNode = this.props.renderDrop(style, this.dropRef, this.lastPosition);

        return ReactDOM.createPortal(drop, document.querySelector(this.props.selector ?? Defaults.DROP_ROOT));
    }
}

export const DropPod: React.ForwardRefExoticComponent<IDropPodProps &
    React.RefAttributes<HTMLElement>> = React.forwardRef((props: IDropPodProps, ref: React.RefObject<HTMLElement>) => (
    <RDropPod {...props} buttonRef={ref} />
));
