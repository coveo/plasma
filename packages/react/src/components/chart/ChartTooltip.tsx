import classNames from 'classnames';
import {FunctionComponent, CSSProperties, ReactNode, useRef, useContext, useState, Fragment} from 'react';

import {DropPodPosition, IDropUIPosition} from '../drop/DomPositionCalculator.js';
import {DropPod} from '../drop/DropPod.js';
import {ChartTooltipContent} from './ChartTooltipContent.js';
import {XYChartContext, XYPoint} from './XYChart.js';

export interface ChartTooltipProps {
    sort?: boolean;
}

/**
 * @deprecated Use Mantine instead
 */
export const ChartTooltip: FunctionComponent<ChartTooltipProps> = ({sort = false}) => {
    const ref = useRef<HTMLElement>(null);
    const {series, xScale, yScale, xDomain, yDomain, width, height} = useContext(XYChartContext);
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
        index: 0,
        position: null,
        pointX: null,
    });

    const onMouseMove = (index: number, pointX: number, x: number) => {
        const dropPodPosition = x < width / 2 ? DropPodPosition.right : DropPodPosition.left;
        setPosition({x, y: height / 2, index, pointX, position: dropPodPosition});
    };
    const onMouseLeave = () => setPosition({...position, position: null});

    const barWidth =
        series[0].data.length > 1
            ? (xScale(xDomain[1]) - xScale(xDomain[0])) / series[0].data.length
            : xScale(xDomain[0]);
    const bars = series[0].data.map((point: XYPoint, index: number) => {
        const x = xScale(point.x);
        return (
            <Fragment key={`chart-zone-${index}`}>
                <rect
                    fill="transparent"
                    width={barWidth / 2}
                    height={yScale(yDomain[0])}
                    x={x - barWidth / 2}
                    y={yScale(yDomain[1])}
                    onMouseMove={() => onMouseMove(index, point.x, x)}
                    onMouseLeave={onMouseLeave}
                />
                <rect
                    fill="transparent"
                    width={barWidth / 2}
                    height={yScale(yDomain[0])}
                    x={x}
                    y={yScale(yDomain[1])}
                    onMouseMove={() => onMouseMove(index, point.x, x)}
                    onMouseLeave={onMouseLeave}
                />
            </Fragment>
        );
    });
    return (
        <g className="chart-tooltip-zones">
            {!!position.position && (
                <rect
                    ref={ref as any}
                    className="chart-tooltip-line"
                    width={2}
                    x={xScale(position.pointX) - 1}
                    y={yScale(yDomain[1])}
                    height={yScale(yDomain[0])}
                    fill={'var(--deprecated-orange)'}
                />
            )}
            <circle cx={position.x} cy={position.y} r="1" fill="transparent" />
            <DropPod
                ref={ref}
                isOpen={!!position.position}
                positions={[position.position, DropPodPosition.left, DropPodPosition.right]}
                renderDrop={(style: CSSProperties, dropPosition: IDropUIPosition | null): ReactNode => (
                    <div
                        style={{...style, pointerEvents: 'none'}}
                        className={classNames('show-on-top', {
                            'ml-2': dropPosition?.position === DropPodPosition.left,
                            ml2: dropPosition?.position === DropPodPosition.right,
                        })}
                    >
                        <ChartTooltipContent x={position.index} sort={sort} />
                    </div>
                )}
            />
            {bars}
        </g>
    );
};
ChartTooltip.displayName = 'ChartTooltip';
