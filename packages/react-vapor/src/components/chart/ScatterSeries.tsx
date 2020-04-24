import React from 'react';

import {XYChartContext, XYPoint, XYSerie} from './XYChart';

export interface ScatterSeriesProps {
    radius?: number;
}

export const ScatterSeries: React.FunctionComponent<ScatterSeriesProps> = ({children, radius = 3}) => {
    const {series, xScale, yScale, color, colorPattern} = React.useContext(XYChartContext);

    const points = series.map((serie: XYSerie, i: number) =>
        serie.data.map((point: XYPoint, index: number) => (
            <circle
                key={`scatter-${serie.label}-${index}`}
                cx={xScale(point.x)}
                cy={yScale(point.y)}
                r={radius}
                fill={color(i, colorPattern, point)}
            />
        ))
    );

    return (
        <g className="scatter-series">
            {points}
            {children}
        </g>
    );
};
ScatterSeries.displayName = 'ScatterSeries';
