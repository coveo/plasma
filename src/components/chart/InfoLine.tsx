import * as React from 'react';

import {XYChartContext} from './XYChart';

export interface InfoLineProps {
    value: number;
    label?: string;
    stroke?: string;
    isVertical?: boolean;
}

export const InfoLine: React.FunctionComponent<InfoLineProps> = ({stroke = '#000', isVertical = false, label = '', value}: InfoLineProps) => {
    const {xDomain, xScale, yScale, height} = React.useContext(XYChartContext);

    return (
        <>
            <line
                className='info-line'
                stroke={stroke}
                strokeDasharray='6'
                x1={isVertical ? xScale(value) : 0}
                x2={isVertical ? xScale(value) : xScale(xDomain[1])}
                y1={isVertical ? 0 : yScale(value)}
                y2={isVertical ? height : yScale(value)}
            />
            {label && (
                <text textAnchor='end' x={xScale(xDomain[1])} y={yScale(value) - 5}>{label}</text>
            )}
        </>
    );
};
