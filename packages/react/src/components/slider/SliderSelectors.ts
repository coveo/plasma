import {createSelector} from 'reselect';

import {IReactVaporState} from '../../ReactVaporState';
import {ISliderState} from './SliderReducers';

const getSlider = (state: IReactVaporState, {id}: {id: string}): ISliderState => state.sliders[id];

const getSliderValue = createSelector(getSlider, (slider: ISliderState): number => slider?.value);

export const SliderSelectors = {
    getSliderValue,
};
