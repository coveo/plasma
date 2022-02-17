import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
    renderDrop: (style: React.CSSProperties, position: IDropUIPosition) => React.ReactNode;
    isOpen?: boolean;
    positions?: Array<'bottom' | 'top' | 'left' | 'right'>;
    selector?: string;
    parentSelector?: string;
    minWidth?: number;
    minHeight?: number;
    hasSameWidth?: boolean;
}

export interface IRDropPodProps extends IDropPodProps {
    buttonRef?: React.RefObject<HTMLElement>;
}

export const defaultDropPodPosition = [
    DropPodPosition.right,
    DropPodPosition.bottom,
    DropPodPosition.top,
    DropPodPosition.left,
];

const RDropPod: React.FunctionComponent<IRDropPodProps> = ({
    isOpen = false,
    positions = defaultDropPodPosition,
    minWidth = 0,
    minHeight = 0,
    hasSameWidth = false,
    buttonRef,
    selector,
    renderDrop,
    parentSelector,
}) => {
    const [offset, setOffset] = React.useState(undefined);
    const [lastPosition, setLastPosition] = React.useState<IDropUIPosition>({
        position: positions?.[0] ?? DropPodPosition.bottom,
        orientation: OrientationByPosition[positions?.[0] ?? DropPodPosition.bottom][0],
    });
    const [computedStyle, setComputedStyle] = React.useState<React.CSSProperties>({});
    const [dropElement, setDropElement] = React.useState<HTMLDivElement>(null);

    const updateOffset = () => {
        if (buttonRef?.current) {
            setOffset(buttonRef?.current?.getBoundingClientRect());
        }
    };

    const setEventsOnDocument = () => {
        window.addEventListener('resize', updateOffset, true);
        window.addEventListener('scroll', updateOffset, true);
    };

    const removeEventsOnDocument = () => {
        window.removeEventListener('scroll', updateOffset, true);
        window.removeEventListener('resize', updateOffset, true);
    };

    React.useEffect(() => {
        let parentMutationObserver: MutationObserver;
        if (dropElement && dropElement.firstElementChild) {
            const config = {attributes: false, childList: true, subtree: true};
            parentMutationObserver = new MutationObserver(updateOffset);
            parentMutationObserver.observe(dropElement.firstElementChild, config);
        }
        return () => {
            parentMutationObserver?.disconnect();
        };
    }, [dropElement]);

    React.useEffect(() => {
        if (isOpen) {
            setEventsOnDocument();
        }
        return () => {
            removeEventsOnDocument();
        };
    }, [isOpen]);

    React.useEffect(() => {
        const element = document.createElement('div');
        const portalRoot = document.querySelector(selector ?? Defaults.DROP_ROOT);

        portalRoot.appendChild(element);

        setDropElement(element);
        return () => {
            portalRoot.removeChild(element);
        };
    }, [selector, Defaults.DROP_ROOT]);

    const canRenderDrop = () => !!dropElement && isOpen;

    const getRelativeParent = () => {
        const closestCurrentRef = buttonRef?.current?.closest(parentSelector ?? Defaults.DROP_PARENT_ROOT);
        return closestCurrentRef ?? buttonRef?.current?.parentElement;
    };

    const calculateStyleOffset = (): React.CSSProperties => {
        let newDomPosition: IDomPositionCalculatorReturn = {};
        if (canRenderDrop()) {
            const buttonOffset: ClientRect | DOMRect = buttonRef?.current?.getBoundingClientRect() ?? offset;
            const dropOffset: ClientRect | DOMRect = dropElement?.firstElementChild?.getBoundingClientRect();

            const relativeParent = getRelativeParent();
            const parentOffset = relativeParent?.getBoundingClientRect();

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
                width: Math.max(dropOffset?.width ?? 0, minWidth),
                height: Math.max(dropOffset?.height ?? 0, minHeight),
            };

            while (_.isEmpty(newDomPosition) && index < positions.length) {
                const validator = DomPositionCalculator[positions[index]];
                newDomPosition = (validator && validator(buttonOffset, dropOffsetPrime, boundingLimit, {})) || {};
                index += 1;
            }

            if (_.isEmpty(newDomPosition)) {
                newDomPosition = DomPositionCalculator[lastPosition.position](
                    buttonOffset,
                    dropOffsetPrime,
                    boundingLimit,
                    lastPosition
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
            if (hasSameWidth) {
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

                setLastPosition(newDomPosition.lastPosition);
                return newDomPosition.style;
            }
        }
    };

    React.useEffect(() => {
        setComputedStyle({
            // set the display none for IE11 which does not handle position absolute and visibility hidden like other browser
            display: !canRenderDrop() && BrowserUtils.isIE() ? 'none' : 'inline-block',
            position: 'absolute',
            visibility: canRenderDrop() ? 'visible' : 'hidden',
            ...calculateStyleOffset(),
        });
    }, [dropElement, isOpen, offset, buttonRef?.current]);

    if (!dropElement) {
        return null;
    }

    const drop: React.ReactNode = renderDrop(computedStyle, lastPosition);
    return ReactDOM.createPortal(drop, dropElement);
};

export const DropPod: React.ForwardRefExoticComponent<
    IDropPodProps & React.RefAttributes<HTMLElement>
> = React.forwardRef((props: IDropPodProps, ref: React.RefObject<HTMLElement>) => (
    <RDropPod {...props} buttonRef={ref} />
));
