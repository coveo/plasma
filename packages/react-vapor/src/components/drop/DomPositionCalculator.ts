import {CSSProperties} from 'react';

export interface IDropUIPosition {
    position: string;
    orientation: string;
}

export const DropPodPosition = {
    bottom: 'bottom',
    top: 'top',
    left: 'left',
    right: 'right',
};

export const OrientationByPosition = {
    [DropPodPosition.bottom]: [DropPodPosition.left, DropPodPosition.right],
    [DropPodPosition.top]: [DropPodPosition.left, DropPodPosition.right],
    [DropPodPosition.left]: [DropPodPosition.top, DropPodPosition.bottom],
    [DropPodPosition.right]: [DropPodPosition.top, DropPodPosition.bottom],
};

export interface IBoundingLimit {
    maxY: number;
    minY: number;
    maxX: number;
    minX: number;
}

export interface IDomPositionCalculatorReturn {
    style?: Partial<CSSProperties>;
    lastPosition?: IDropUIPosition;
}

export const DomPositionCalculator: {
    [position: string]: (
        buttonOffset: ClientRect | DOMRect,
        dropOffset: ClientRect | DOMRect,
        boundingLimit: IBoundingLimit,
        dropUIPosition: Partial<IDropUIPosition>
    ) => IDomPositionCalculatorReturn;
} = {
    bottom: (
        buttonOffset: ClientRect | DOMRect,
        dropOffset: ClientRect | DOMRect,
        boundingLimit: IBoundingLimit,
        dropUIPosition: IDropUIPosition
    ): IDomPositionCalculatorReturn => {
        if (
            buttonOffset.bottom + dropOffset.height < boundingLimit.maxY ||
            dropUIPosition.position === DropPodPosition.bottom
        ) {
            if (
                buttonOffset.left + dropOffset.width < boundingLimit.maxX ||
                dropUIPosition.orientation === DropPodPosition.left
            ) {
                return {
                    style: {
                        top: buttonOffset.bottom,
                        left: buttonOffset.left,
                    },
                    lastPosition: {
                        position: DropPodPosition.bottom,
                        orientation: DropPodPosition.left,
                    },
                };
            } else if (
                buttonOffset.right - dropOffset.width >= boundingLimit.minX ||
                dropUIPosition.orientation === DropPodPosition.right
            ) {
                return {
                    style: {
                        top: buttonOffset.bottom,
                        left: buttonOffset.right - dropOffset.width,
                    },
                    lastPosition: {
                        position: DropPodPosition.bottom,
                        orientation: DropPodPosition.right,
                    },
                };
            }
        }

        return {};
    },
    top: (
        buttonOffset: ClientRect | DOMRect,
        dropOffset: ClientRect | DOMRect,
        boundingLimit: IBoundingLimit,
        dropUIPosition: IDropUIPosition
    ): IDomPositionCalculatorReturn => {
        if (
            buttonOffset.top - dropOffset.height > boundingLimit.minY ||
            dropUIPosition.position === DropPodPosition.top
        ) {
            if (
                buttonOffset.left + dropOffset.width < boundingLimit.maxX ||
                dropUIPosition.orientation === DropPodPosition.left
            ) {
                return {
                    style: {
                        top: buttonOffset.top - dropOffset.height,
                        left: buttonOffset.left,
                    },
                    lastPosition: {
                        position: DropPodPosition.top,
                        orientation: DropPodPosition.left,
                    },
                };
            } else if (
                buttonOffset.right - dropOffset.width > boundingLimit.minX ||
                dropUIPosition.orientation === DropPodPosition.right
            ) {
                return {
                    style: {
                        top: buttonOffset.top - dropOffset.height,
                        left: buttonOffset.right - dropOffset.width,
                    },
                    lastPosition: {
                        position: DropPodPosition.top,
                        orientation: DropPodPosition.right,
                    },
                };
            }
        }

        return {};
    },
    left: (
        buttonOffset: ClientRect | DOMRect,
        dropOffset: ClientRect | DOMRect,
        boundingLimit: IBoundingLimit,
        dropUIPosition: IDropUIPosition
    ): IDomPositionCalculatorReturn => {
        if (
            buttonOffset.left - dropOffset.width > boundingLimit.minX ||
            dropUIPosition.position === DropPodPosition.left
        ) {
            if (
                buttonOffset.top + dropOffset.height < boundingLimit.maxY ||
                dropUIPosition.orientation === DropPodPosition.top
            ) {
                return {
                    style: {
                        top: buttonOffset.top,
                        left: buttonOffset.left - dropOffset.width,
                    },
                    lastPosition: {
                        position: DropPodPosition.left,
                        orientation: DropPodPosition.top,
                    },
                };
            } else if (
                buttonOffset.bottom - dropOffset.height > boundingLimit.minY ||
                dropUIPosition.orientation === DropPodPosition.bottom
            ) {
                return {
                    style: {
                        top: buttonOffset.bottom - dropOffset.height,
                        left: buttonOffset.left - dropOffset.width,
                    },
                    lastPosition: {
                        position: DropPodPosition.left,
                        orientation: DropPodPosition.bottom,
                    },
                };
            }
        }

        return {};
    },
    right: (
        buttonOffset: ClientRect | DOMRect,
        dropOffset: ClientRect | DOMRect,
        boundingLimit: IBoundingLimit,
        dropUIPosition: IDropUIPosition
    ): IDomPositionCalculatorReturn => {
        if (
            buttonOffset.right + dropOffset.width < boundingLimit.maxX ||
            dropUIPosition.position === DropPodPosition.right
        ) {
            if (
                buttonOffset.top + dropOffset.height < boundingLimit.maxY ||
                dropUIPosition.orientation === DropPodPosition.top
            ) {
                return {
                    style: {
                        top: buttonOffset.top,
                        left: buttonOffset.right,
                    },
                    lastPosition: {
                        position: DropPodPosition.right,
                        orientation: DropPodPosition.top,
                    },
                };
            } else if (
                buttonOffset.bottom - dropOffset.height > boundingLimit.minY ||
                dropUIPosition.orientation === DropPodPosition.bottom
            ) {
                return {
                    style: {
                        top: buttonOffset.bottom - dropOffset.height,
                        left: buttonOffset.right,
                    },
                    lastPosition: {
                        position: DropPodPosition.right,
                        orientation: DropPodPosition.bottom,
                    },
                };
            }
        }

        return {};
    },
};
