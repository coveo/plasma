import * as React from 'react';

import {XYChartContext} from './XYChart';

export interface InfoLineProps {
    value: number;
    label?: string;
    stroke?: string;
    isVertical?: boolean;
    padding?: number;
}

export const InfoLine: React.FunctionComponent<InfoLineProps> = ({
    stroke = '#000',
    isVertical = false,
    label = '',
    padding = 30,
    value,
}: InfoLineProps) => {
    const {xDomain, yDomain, xScale, yScale, height} = React.useContext(XYChartContext);

    return (
        <g className="info-line">
            <line
                stroke={stroke}
                strokeDasharray="6"
                x1={isVertical ? xScale(value) : 0 - padding}
                x2={isVertical ? xScale(value) : xScale(xDomain[1]) + padding}
                y1={isVertical ? 0 - padding : yScale(value)}
                y2={isVertical ? height + padding : yScale(value)}
            />
            {label && !isVertical && (
                <text textAnchor="end" x={xScale(xDomain[1])} y={yScale(value) - 4}>
                    {label}
                </text>
            )}
            {label && isVertical && (
                <text textAnchor="end" transform="rotate(-90)" x={yScale(yDomain[1])} y={xScale(value) - 4}>
                    {label}
                </text>
            )}
        </g>
    );
};
InfoLine.displayName = 'InfoLine';
