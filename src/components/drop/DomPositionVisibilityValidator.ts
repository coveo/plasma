import {CSSProperties} from 'react';

export interface IBoundingLimit {
    maxY: number;
    minY: number;
    maxX: number;
    minX: number;
}

export const DomPositionVisibilityValidator: {[position: string]: (buttonOffset: ClientRect | DOMRect, dropOffset: ClientRect | DOMRect, boundingLimit: IBoundingLimit) => Partial<CSSProperties>} = {
    bottom: (buttonOffset: ClientRect | DOMRect, dropOffset: ClientRect | DOMRect, boundingLimit: IBoundingLimit): Partial<CSSProperties> => {
        if (buttonOffset.bottom + dropOffset.height < boundingLimit.maxY) {
            if (buttonOffset.left + dropOffset.width < boundingLimit.maxX) {
                return {
                    top: buttonOffset.bottom,
                    left: buttonOffset.left,
                };
            } else if (buttonOffset.right - dropOffset.width >= boundingLimit.minX) {
                return {
                    top: buttonOffset.top,
                    left: buttonOffset.left + buttonOffset.width,
                };
            }
        }

        return {};
    },
    top: (buttonOffset: ClientRect | DOMRect, dropOffset: ClientRect | DOMRect, boundingLimit: IBoundingLimit) => {
        if (buttonOffset.top - dropOffset.height > boundingLimit.minY) {
            debugger;
            if (buttonOffset.left + dropOffset.width < boundingLimit.maxX) {
                return {
                    top: buttonOffset.top - dropOffset.height,
                    left: buttonOffset.left,
                };
            } else if (buttonOffset.right - dropOffset.width > boundingLimit.minX) {
                return {
                    top: buttonOffset.top - dropOffset.height,
                    left: buttonOffset.right - dropOffset.width,
                };
            }
        }

        return {};
    },
    left: (buttonOffset: ClientRect | DOMRect, dropOffset: ClientRect | DOMRect, boundingLimit: IBoundingLimit) => {
        if (buttonOffset.left - dropOffset.width > boundingLimit.minX) {
            if (buttonOffset.top + dropOffset.height < boundingLimit.maxY) {
                return {
                    top: buttonOffset.top,
                    left: buttonOffset.left - dropOffset.width,
                };
            } else if (buttonOffset.bottom - dropOffset.height > boundingLimit.minY) {
                return {
                    top: buttonOffset.bottom - dropOffset.height,
                    left: buttonOffset.left - dropOffset.width,
                };
            }
        }

        return {};
    },
    right: (buttonOffset: ClientRect | DOMRect, dropOffset: ClientRect | DOMRect, boundingLimit: IBoundingLimit) => {
        if (buttonOffset.right + dropOffset.width < boundingLimit.maxX) {
            if (buttonOffset.top + dropOffset.height < boundingLimit.maxY) {
                return {
                    top: buttonOffset.top,
                    left: buttonOffset.right,
                };
            } else if (buttonOffset.bottom - dropOffset.height > boundingLimit.minY) {
                return {
                    top: buttonOffset.bottom - dropOffset.height,
                    left: buttonOffset.right,
                };
            }
        }

        return {};
    },
};
