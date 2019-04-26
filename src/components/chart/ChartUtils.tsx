import * as _ from 'underscore';
import {XYPoint, XYSerie} from './XYChart';

const getXValues = (series: XYSerie[]) => {
    return _.chain(series)
        .map((serie: XYSerie) => serie.data.map((d: XYPoint) => d.x))
        .flatten()
        .uniq()
        .sort()
        .value();
};

export const ChartUtils = {
    getXValues,
};
