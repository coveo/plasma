import {ReactNode, FunctionComponent, useRef, useState, useEffect} from 'react';
import * as _ from 'underscore';

export interface ChartContainerProps {
    /**
     * The render function for the chart.
     *
     * @param width The width of the chart container
     * @param height the height of the chart container
     */
    renderChart: (width: number, height: number) => ReactNode;
}

export interface ChartBaseProps {
    width: number;
    height: number;
}

/**
 * @deprecated Use Mantine instead
 */
export const ChartContainer: FunctionComponent<ChartContainerProps> = (props) => {
    const container = useRef<HTMLDivElement>(null);
    useDebouncedWindowResize();

    const toggleSvgs = (show: boolean) => {
        if (container.current) {
            const svgs = container.current.querySelectorAll('svg');
            _.each(svgs, (svg: SVGElement) => (svg.style.display = show ? 'block' : 'none'));
        }
    };

    toggleSvgs(false);
    const {width, height} = container.current?.getBoundingClientRect() ?? {width: 0, height: 0};
    toggleSvgs(true);

    return (
        <div className="full-content" {..._.omit(props, 'renderChart')} ref={container}>
            {width > 0 && height > 0 ? props.renderChart(width, height) : null}
        </div>
    );
};
ChartContainer.displayName = 'ChartContainer';

const useForceUpdate = () => useState(undefined)[1];
const useDebouncedWindowResize = () => {
    const forceUpdate = useForceUpdate();
    useEffect(() => {
        const debouncedResize = () => window.requestAnimationFrame(forceUpdate);

        window.addEventListener('resize', debouncedResize);
        forceUpdate(1);

        return () => window.removeEventListener('resize', debouncedResize);
    }, [forceUpdate]);
};
