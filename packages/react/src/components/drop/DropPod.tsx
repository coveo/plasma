import {
    ReactNode,
    CSSProperties,
    RefObject,
    FunctionComponent,
    RefAttributes,
    ForwardRefExoticComponent,
    useState,
    useEffect,
    forwardRef,
} from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';

import {BrowserUtils} from '../../utils/BrowserUtils';
import {Defaults} from '../../Defaults';
import {
    DomPositionCalculator,
    DropPodPosition,
    IBoundingLimit,
    IDomPositionCalculatorReturn,
    IDropUIPosition,
    OrientationByPosition,
} from './DomPositionCalculator';

export interface IDropPodProps {
    renderDrop: (style: CSSProperties, position: IDropUIPosition | null) => ReactNode;
    isOpen?: boolean;
    positions?: Array<'bottom' | 'top' | 'left' | 'right'>;
    selector?: string;
    parentSelector?: string;
    minWidth?: number;
    minHeight?: number;
    hasSameWidth?: boolean;
}

export interface IRDropPodProps extends IDropPodProps {
    buttonRef?: RefObject<HTMLElement>;
}

export const defaultDropPodPosition = [
    DropPodPosition.right,
    DropPodPosition.bottom,
    DropPodPosition.top,
    DropPodPosition.left,
];

const RDropPod: FunctionComponent<IRDropPodProps> = ({
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
    const [offset, setOffset] = useState(undefined);
    const [lastPosition, setLastPosition] = useState<IDropUIPosition | null>(null);
    const [computedStyle, setComputedStyle] = useState<React.CSSProperties>({});
    const [dropElement, setDropElement] = useState<HTMLDivElement>(null);

    const updateElement = () => {
        if (buttonRef?.current) {
            setOffset(buttonRef?.current?.getBoundingClientRect());
        }
    };

    const updateOffset = () => {
        setLastPosition(null);
        updateElement();
    };

    const setEventsOnDocument = () => {
        window.addEventListener('resize', updateOffset, true);
        window.addEventListener('scroll', updateOffset, true);
    };

    const removeEventsOnDocument = () => {
        window.removeEventListener('scroll', updateOffset, true);
        window.removeEventListener('resize', updateOffset, true);
    };

    useEffect(() => {
        let parentMutationObserver: MutationObserver;
        if (dropElement && dropElement.firstElementChild) {
            const config = {attributes: false, childList: true, subtree: true};
            parentMutationObserver = new MutationObserver(updateElement);
            parentMutationObserver.observe(dropElement.firstElementChild, config);
        }
        return () => {
            parentMutationObserver?.disconnect();
        };
    }, [dropElement]);

    useEffect(() => {
        if (isOpen) {
            setEventsOnDocument();
        }
        return () => {
            removeEventsOnDocument();
        };
    }, [isOpen]);

    useEffect(() => {
        const element = document.createElement('div');
        const rootSelector = selector ?? Defaults.DROP_ROOT;
        const portalRoot = document.querySelector(rootSelector);

        if (portalRoot === null) {
            throw new Error(
                `Plasma dropdowns' root element at "${rootSelector}" does not exist in the DOM. Make sure this element exists or change Defaults.DROP_ROOT to something else. More info at https://github.com/coveo/plasma/blob/master/packages/react/README.md#dropdowns`
            );
        }
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

    const calculateStyleOffset = (): CSSProperties => {
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

            if (lastPosition) {
                newDomPosition = DomPositionCalculator[lastPosition.position](
                    buttonOffset,
                    dropOffsetPrime,
                    boundingLimit,
                    lastPosition
                );
            }

            while (_.isEmpty(newDomPosition) && index < positions.length) {
                const validator = DomPositionCalculator[positions[index]];
                newDomPosition = (validator && validator(buttonOffset, dropOffsetPrime, boundingLimit, {})) || {};
                index += 1;
            }

            if (_.isEmpty(newDomPosition)) {
                if (lastPosition?.position) {
                    newDomPosition = DomPositionCalculator[lastPosition.position](
                        buttonOffset,
                        dropOffsetPrime,
                        boundingLimit,
                        lastPosition
                    );
                } else {
                    const position = positions?.[0] ?? DropPodPosition.bottom;
                    const orientation = OrientationByPosition[position][0];
                    newDomPosition = DomPositionCalculator[position](buttonOffset, dropOffsetPrime, boundingLimit, {
                        position,
                        orientation,
                    });
                }
            }

            const {style} = newDomPosition;
            if (style) {
                if (+style.top < boundingLimit.minY) {
                    style.top = Math.max(boundingLimit.minY, style.top as number);
                } else {
                    style.top =
                        Math.min(boundingLimit.maxY, (style.top as number) + dropOffset.height) - dropOffset.height;
                }
                if (+style.left < boundingLimit.minX) {
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
                const fallbackMaxWidth = 850;
                const calculatedMaxWidth = parentOffset.width - (parseFloat(paddingLeft) + parseFloat(paddingRight));
                const maxWidth = isNaN(calculatedMaxWidth) ? fallbackMaxWidth : calculatedMaxWidth;
                newDomPosition.style = {
                    ...newDomPosition.style,
                    maxWidth: maxWidth,
                };

                // Don't show if no space to render the drop target inside the window
                if (dropOffset.height > window.innerHeight) {
                    return {};
                }

                setLastPosition(newDomPosition.lastPosition);
                return newDomPosition.style;
            }
        } else {
            setLastPosition(null);
        }
    };

    useEffect(() => {
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

    const drop: ReactNode = renderDrop(computedStyle, lastPosition);
    return ReactDOM.createPortal(drop, dropElement);
};

/**
 * @deprecated Use Mantine instead
 */
export const DropPod: ForwardRefExoticComponent<IDropPodProps & RefAttributes<HTMLElement>> = forwardRef(
    (props: IDropPodProps, ref: RefObject<HTMLElement>) => <RDropPod {...props} buttonRef={ref} />
);
