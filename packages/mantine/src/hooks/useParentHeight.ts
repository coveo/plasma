import {MutableRefObject, useEffect, useRef, useState} from 'react';

const getElementInnerHeight = (el: HTMLElement | null): number => {
    if (!el) {
        return -1;
    }
    const fullHeight = el.getBoundingClientRect().height;
    const cs = getComputedStyle(el);
    const padding = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
    const border = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);
    return fullHeight - padding - border;
};

/**
 * Computes the available height of the parent element on mount
 */
export const useParentHeight = (): [number, MutableRefObject<HTMLDivElement | null>] => {
    const [height, setHeight] = useState(-1);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current?.parentElement) {
            setHeight(getElementInnerHeight(ref.current.parentElement));
        }
    }, []);

    return [height, ref];
};
