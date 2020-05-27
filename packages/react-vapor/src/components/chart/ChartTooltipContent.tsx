import classNames from 'classnames';
import React from 'react';
import * as _ from 'underscore';

import {Color} from '../color/Color';
import {ChartUtils} from './ChartUtils';
import * as styles from './styles/ChartTooltipContent.scss';
import {XYChartContext, XYSerie} from './XYChart';

export interface ChartTooltipContentProps {
    x: number;
    sort: boolean;
}

export const ChartTooltipContent: React.FunctionComponent<ChartTooltipContentProps> = ({x, sort}) => {
    const {series, xFormat, yFormat, color, colorPattern} = React.useContext(XYChartContext);
    const xValues = ChartUtils.getXValues(series);
    const title = xFormat(xValues[x]);
    return (
        <div className={classNames('flex flex-column bg-pure-white', styles.chartTooltipContent)}>
            <div className="flex flex-row center-align flex-start tooltip-serie-title">
                <div className={classNames(styles.chartTooltipColor)} />
                <div className={classNames('px1', styles.chartTooltipLabel)}>{title}</div>
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
                                <Color
                                    className={classNames(styles.chartTooltipColor)}
                                    color={color(serieIndex, colorPattern, point)}
                                />
                                <div className={classNames('pl1 pr2', styles.chartTooltipLabel)}>{serie.label}</div>
                                <div className="pr1 flex-auto right-align">{yFormat(point.y)}</div>
                            </div>
                        )
                    );
                })
                .value()}
        </div>
    );
};
