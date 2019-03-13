import {CSSProperties} from 'react';

export const positionValidator: {[position: string]: (boxOffset: ClientRect | DOMRect, tooltipOffset: ClientRect | DOMRect, window: Window) => Partial<CSSProperties>} = {
    bottom: (boxOffset: ClientRect | DOMRect, tooltipOffset: ClientRect | DOMRect, window: Window): Partial<CSSProperties> => {
        if (boxOffset.bottom + tooltipOffset.height < window.innerHeight) {
            if (boxOffset.left + tooltipOffset.width < window.innerWidth) {
                return {
                    top: boxOffset.top + boxOffset.height,
                    left: boxOffset.left,
                };
            } else if (boxOffset.right - tooltipOffset.width > 0) {
                return {
                    top: boxOffset.bottom,
                    left: boxOffset.right - tooltipOffset.width,
                };
            }
        }

        return {};
    },
    top: (boxOffset: ClientRect | DOMRect, tooltipOffset: ClientRect | DOMRect) => {
        if (boxOffset.top - tooltipOffset.height > 0) {
            if (boxOffset.left + tooltipOffset.width < window.innerWidth) {
                return {
                    top: boxOffset.top - tooltipOffset.height,
                    left: boxOffset.left,
                };
            } else if (boxOffset.right - tooltipOffset.width > 0) {
                return {
                    top: boxOffset.top - tooltipOffset.height,
                    left: boxOffset.right - tooltipOffset.width,
                };
            }
        }

        return {};
    },
    left: (boxOffset: ClientRect | DOMRect, tooltipOffset: ClientRect | DOMRect) => {
        if (boxOffset.left - tooltipOffset.width > 0) {
            if (boxOffset.top + tooltipOffset.height < window.innerHeight) {
                return {
                    top: boxOffset.top,
                    left: boxOffset.left - tooltipOffset.width,
                };
            } else if (boxOffset.bottom - tooltipOffset.height > 0) {
                return {
                    top: boxOffset.bottom - tooltipOffset.height,
                    left: boxOffset.left - tooltipOffset.width,
                };
            }
        }

        return {};
    },
    right: (boxOffset: ClientRect | DOMRect, tooltipOffset: ClientRect | DOMRect) => {
        if (boxOffset.right + tooltipOffset.width < window.innerWidth) {
            if (boxOffset.top + tooltipOffset.height < window.innerHeight) {
                return {
                    top: boxOffset.top,
                    left: boxOffset.right,
                };
            } else if (boxOffset.bottom - tooltipOffset.height > 0) {
                return {
                    top: boxOffset.bottom - tooltipOffset.height,
                    left: boxOffset.right,
                };
            }
        }

        return {};
    },
};
