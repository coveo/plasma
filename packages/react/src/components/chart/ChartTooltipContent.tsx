import {FunctionComponent, useContext} from 'react';
import * as _ from 'underscore';

import {Color} from '../color/Color.js';
import {ChartUtils} from './ChartUtils.js';
import {XYChartContext, XYSerie} from './XYChart.js';

export interface ChartTooltipContentProps {
    x: number;
    sort: boolean;
}

/**
 * @deprecated Use Mantine instead
 */
export const ChartTooltipContent: FunctionComponent<ChartTooltipContentProps> = ({x, sort}) => {
    const {series, xFormat, yFormat, color, colorPattern} = useContext(XYChartContext);
    const xValues = ChartUtils.getXValues(series);
    const title = xFormat(xValues[x]);
    return (
        <div className="chart-tooltip-content flex flex-column">
            <div className="flex flex-row center-align flex-start tooltip-serie-title">
                <div className="chart-tooltip-color" />
                <div className="chart-tooltip-label px1">{title}</div>
                <div className="pr1 flex-auto" />
            </div>
            {_.chain(series)
                .sortBy((serie: XYSerie, index: number) => {
                    if (sort) {
                        const point = serie.data[x];
                        return -point.y;
                    }
                    return index;
                })
                .map((serie: XYSerie, serieIndex) => {
                    const point = serie.data[x];
                    return (
                        point && (
                            <div
                                key={`tooltip-serie-row-${serie.label}`}
                                className="flex flex-row center-align flex-start tooltip-serie-row"
                            >
                                <Color className="chart-tooltip-color" color={color(serieIndex, colorPattern, point)} />
                                <div className="chart-tooltip-label pl1 pr2">{serie.label}</div>
                                <div className="pr1 flex-auto right-align">{yFormat(point.y)}</div>
                            </div>
                        )
                    );
                })
                .value()}
        </div>
    );
};
