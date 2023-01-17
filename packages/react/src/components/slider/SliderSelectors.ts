import {createSelector} from 'reselect';

import {PlasmaState} from '../../PlasmaState.js';
import {ISliderState} from './SliderReducers.js';

const getSlider = (state: PlasmaState, {id}: {id: string}): ISliderState => state.sliders?.[id];

const getSliderValue = createSelector(getSlider, (slider: ISliderState): number => slider?.value);

export const SliderSelectors = {
    getSliderValue,
};
