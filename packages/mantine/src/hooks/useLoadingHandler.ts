import {MouseEvent, MouseEventHandler, useState} from 'react';

export const useLoadingHandler = (handler?: MouseEventHandler<HTMLButtonElement>) => {
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
