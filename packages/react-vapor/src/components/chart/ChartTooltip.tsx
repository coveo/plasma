import classNames from 'classnames';
import React from 'react';

import {VaporColors} from '../color/Color';
import {DropPodPosition, IDropUIPosition} from '../drop/DomPositionCalculator';
import {DropPod} from '../drop/DropPod';
import {ChartTooltipContent} from './ChartTooltipContent';
import {XYChartContext, XYPoint} from './XYChart';

export interface ChartTooltipProps {
    sort?: boolean;
}

export const ChartTooltip: React.FunctionComponent<ChartTooltipProps> = ({sort = false}) => {
    const {series, xScale, yScale, xDomain, yDomain, width, height} = React.useContext(XYChartContext);
    const [position, setPosition] = React.useState({x: 0, y: 0, index: 0, position: '', pointX: null});
    const dropRoot = React.useRef<any>(null);

    const onMouseMove = (index: number, pointX: number, x: number) => {
        const dropPodPosition: string = x < width / 2 ? DropPodPosition.right : DropPodPosition.left;
        setPosition({x, y: height / 2, index, pointX, position: dropPodPosition});
    };
    const onMouseLeave = () => setPosition({...position, position: ''});

    const barWidth =
        series[0].data.length > 1
            ? (xScale(xDomain[1]) - xScale(xDomain[0])) / series[0].data.length
            : xScale(xDomain[0]);
    const bars = series[0].data.map((point: XYPoint, index: number) => {
        const x = xScale(point.x);
        return (
            <React.Fragment key={`chart-zone-${index}`}>
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
            </React.Fragment>
        );
    });
    return (
        <g className="chart-tooltip-zones">
            {!!position.position && (
                <rect
                    className="chart-tooltip-line"
                    width={2}
                    x={xScale(position.pointX) - 1}
                    y={yScale(yDomain[1])}
                    height={yScale(yDomain[0])}
                    fill={VaporColors.orange}
                />
            )}
            <circle cx={position.x} cy={position.y} r="1" fill="transparent" ref={dropRoot} />
            <DropPod
                ref={dropRoot}
                isOpen={!!position.position}
                positions={[position.position, DropPodPosition.left, DropPodPosition.right]}
                renderDrop={(
                    style: React.CSSProperties,
                    dropRef: React.RefObject<HTMLDivElement>,
                    dropPosition: IDropUIPosition
                ): React.ReactNode => (
                    <div
                        ref={dropRef}
                        style={{...style, pointerEvents: 'none'}}
                        className={classNames('show-on-top', {
                            'ml-2': dropPosition.position === DropPodPosition.left,
                            ml2: dropPosition.position === DropPodPosition.right,
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
