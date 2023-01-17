import * as _ from 'underscore';
import {XYPoint, XYSerie} from './XYChart.js';

const getValues = (series: XYSerie[], getValue: (point: XYPoint) => number) =>
    _.chain(series)
        .map((serie: XYSerie) => serie.data.map(getValue))
        .flatten()
        .uniq()
        .sort()
        .value();

const getXValues = (series: XYSerie[]) => getValues(series, ({x}: XYPoint) => x);

const getYValues = (series: XYSerie[]) => getValues(series, ({y}: XYPoint) => y);

export const ChartUtils = {
    getXValues,
    getYValues,
};
