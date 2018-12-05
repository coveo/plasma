import * as classNames from 'classnames';
import RCSlider, {createSliderWithTooltip, SliderProps} from 'rc-slider';
import * as React from 'react';

export interface ISliderProps {
    slider?: SliderProps;
    classes?: string[];
    hasTooltip?: boolean;
}

const Slider: React.SFC<ISliderProps> = ({hasTooltip, slider, classes}) => {
    const HtmlTag = hasTooltip ? createSliderWithTooltip(RCSlider) : RCSlider;
    if (hasTooltip) {
        (slider as any).tipProps = {
            overlayClassName: 'vapor-slider-overlay',
        };
    }

    return <HtmlTag className={classNames('vapor-slider', classes)} {...slider} />;
};

Slider.defaultProps = {
    slider: {},
    hasTooltip: false,
};

export {Slider};
