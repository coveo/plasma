import * as React from 'react';
import * as _ from 'underscore';

export interface ChartContainerProps {
    renderChart: (width: number, height: number) => React.ReactNode;
}

export interface ChartBaseProps {
    width: number;
    height: number;
}

export const ChartContainer: React.FunctionComponent<ChartContainerProps> = (props) => {
    const container = React.useRef<HTMLDivElement>(null);
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

const useForceUpdate = () => React.useState(undefined)[1];
const useDebouncedWindowResize = () => {
    const forceUpdate = useForceUpdate();
    React.useEffect(() => {
        const debouncedResize = () => window.requestAnimationFrame(forceUpdate);

        window.addEventListener('resize', debouncedResize);
        forceUpdate(1);

        return () => window.removeEventListener('resize', debouncedResize);
    }, [forceUpdate]);
};
