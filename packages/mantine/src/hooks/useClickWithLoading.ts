import {MouseEvent, MouseEventHandler, useState} from 'react';

/**
 * A click handler that supports:
 * - Standard MouseEventHandler (receives event, returns void)
 * - Async handlers (receives event, returns Promise)
 * - Parameterless handlers (no event parameter)
 */
export type ClickHandler<T = HTMLButtonElement> =
    | MouseEventHandler<T>
    | ((event: MouseEvent<T>) => Promise<void>)
    | (() => void)
    | (() => Promise<void>);

export const useClickWithLoading = (handler?: ClickHandler<HTMLButtonElement>) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
        const possiblePromise: unknown = handler?.(event);
        try {
            if (possiblePromise instanceof Promise) {
                setIsLoading(true);
                await possiblePromise;
                setIsLoading(false);
            }
        } catch (err) {
            setIsLoading(false);
            console.error(err);
        }
    };

    return {isLoading, handleClick};
};
