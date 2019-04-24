import * as classNames from 'classnames';
import * as React from 'react';

import {VaporColors} from '../color/Color';
import {DropPodPosition, IDropUIPosition} from '../drop/DomPositionCalculator';
import {DropPod} from '../drop/DropPod';
import {ChartTooltipContent} from './ChartTooltipContent';
import {XYChartContext, XYPoint} from './XYChart';

export interface ChartTooltipProps {
    sort?: boolean;
}

export const ChartTooltip: React.FunctionComponent<ChartTooltipProps> = ({sort = false}) => {
    const {series, xScale, yScale, yDomain, height} = React.useContext(XYChartContext);
    const [position, setPosition] = React.useState({x: 0, y: 0, position: '', index: 0});
    const dropRoot = React.useRef<any>(null);

    console.warn(position);

    const onMouseMove = (e: React.MouseEvent<SVGRectElement, MouseEvent>) => {
        const dropPosition = e.currentTarget.getAttribute('data-position');
        const index = parseFloat(e.currentTarget.getAttribute('data-index'));
        let x = parseFloat(e.currentTarget.getAttribute('x'));
        if (dropPosition === DropPodPosition.right) {
            x = x + xScale(0.5);
        }
        setPosition({x, y: height / 2, position: dropPosition, index});
    };
    const onMouseLeave = () => setPosition({...position, position: ''});

    const bars = series[0].data.map((point: XYPoint, index: number) => (
        <>
            <rect
                key={`chart-zone-${index}-left`}
                fill='transparent'
                width={xScale(0.5)}
                height={yScale(yDomain[0])}
                x={xScale(point.x) - xScale(0.5)}
                y={yScale(yDomain[1])}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                data-position={DropPodPosition.right}
                data-index={index}
            />
            <rect
                key={`chart-zone-${index}-right`}
                fill='transparent'
                width={xScale(0.5)}
                height={yScale(yDomain[0])}
                x={xScale(point.x)}
                y={yScale(yDomain[1])}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                data-position={DropPodPosition.left}
                data-index={index}
            />
        </>
    ));

    return (
        <g className='chart-tooltip-zones'>
            {!!position.position && <rect className='chart-tooltip-line' width={2} x={xScale(position.index) - 1} y={yScale(yDomain[1])} height={yScale(yDomain[0])} fill={VaporColors.orange} />}
            <circle cx={position.x} cy={position.y} r='1' fill='transparent' ref={dropRoot} />
            <DropPod
                ref={dropRoot}
                isOpen={!!position.position}
                positions={[position.position, DropPodPosition.left, DropPodPosition.right]}
                parentSelector='body'
                renderDrop={(style: React.CSSProperties, dropRef: React.RefObject<HTMLDivElement>, dropPosition: IDropUIPosition): React.ReactNode => (
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
