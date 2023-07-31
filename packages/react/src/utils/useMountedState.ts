import {useRef, useEffect, useCallback} from 'react';

/**
 * Indicates whether a component is mounted
 */
export const useMountedState = () => {
    const isMountedRef = useRef(true);
    const unref = useCallback(() => isMountedRef.current, []);
    useEffect(
        () => () => {
            isMountedRef.current = false;
        },
        [],
    );
    return unref;
};
