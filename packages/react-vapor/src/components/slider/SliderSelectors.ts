import {createSelector} from 'reselect';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {ISliderState} from './SliderReducers';

const getSlider = (state: IReactVaporState, props: {id: string}): ISliderState =>
    _.findWhere(state.sliders, {id: props.id});

const getSliderValue = createSelector(getSlider, (slider: ISliderState): number => slider?.value);

export const SliderSelectors = {
    getSliderValue,
};
