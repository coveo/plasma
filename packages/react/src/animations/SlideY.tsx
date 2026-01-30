// inspired from https://github.com/frankwallis/react-slidedown
// implemented with the new react-transition-group https://github.com/reactjs/react-transition-group

import {ReactNode, useCallback, useEffect, useMemo, useRef} from 'react';
import {Transition} from 'react-transition-group';

export interface SlideYProps {
    id?: string;
    /**
     * Duration of the animation in milliseconds
     *
     * @default 200
     */
    duration?: number;
    /**
     * Whether the slider should be expanded
     *
     * @default false
     */
    in?: boolean;
    /**
     * Delay  in milliseconds before the animation starts when the "in" prop value changes
     *
     * @default 200
     */
    timeout?: number | {enter?: number; exit?: number};
    children?: ReactNode;
}

export const defaultTimeout: number = 200;
export const defaultDuration: number = 200;

export const SlideY = ({duration = defaultDuration, timeout = defaultTimeout, in: isIn, children}: SlideYProps) => {
    const elRef = useRef<HTMLDivElement>(null);
    const isFirstRender = useRef(true);

    const getCurrentHeight = useCallback(
        (): string => `${elRef.current?.getBoundingClientRect().height ?? 0}px`,
        [elRef.current],
    );

    const transitionHeight = (from: string, to: string) => {
        if (!elRef.current) {
            return;
        }
        elRef.current.classList.add('slide-y-transition');
        elRef.current.style.height = from;
        elRef.current.offsetHeight; // force repaint
        elRef.current.style.transitionProperty = 'height';
        elRef.current.style.height = to;
    };

    const onEntering = () => {
        if (!elRef.current) {
            return;
        }
        const prevHeight = getCurrentHeight();

        elRef.current.classList.remove('slide-y-closed');
        elRef.current.style.height = 'auto';

        const endHeight = getCurrentHeight();

        if (parseFloat(endHeight).toFixed(2) !== parseFloat(prevHeight).toFixed(2)) {
            transitionHeight(prevHeight, endHeight);
        }
    };

    const onExiting = () => {
        transitionHeight(getCurrentHeight(), '0px');
    };

    const handleTransitionEnd = () => {
        if (!elRef.current) {
            return;
        }
        elRef.current.classList.remove('slide-y-transition');
        elRef.current.style.transitionProperty = 'none';
        elRef.current.style.height = !isIn ? '0px' : 'auto';

        if (!isIn) {
            elRef.current.classList.add('slide-y-closed');
        }
    };

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            if (isIn && elRef.current) {
                elRef.current.classList.remove('slide-y-closed');
                elRef.current.style.height = 'auto';
            }
            return;
        }

        if (!elRef.current) {
            return;
        }
        elRef.current.style.height = getCurrentHeight();
    }, [isIn]);

    const style = useMemo(
        () => (duration ? {transitionDuration: `${duration}ms`, transitionTimingFunction: 'ease-in-out'} : undefined),
        [duration],
    );

    return (
        <Transition
            in={isIn}
            timeout={timeout}
            onEntering={onEntering}
            onExiting={onExiting}
            onTransitionEnd={handleTransitionEnd}
            nodeRef={elRef}
        >
            <div className="slide-y slide-y-closed" aria-hidden={!isIn} data-testid="slide-y" ref={elRef} style={style}>
                {children}
            </div>
        </Transition>
    );
};
