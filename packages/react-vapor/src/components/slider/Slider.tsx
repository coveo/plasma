import 'rc-slider/assets/index.css';

import classNames from 'classnames';
import RCSlider, {createSliderWithTooltip, SliderProps, WithTooltipProps} from 'rc-slider';
import * as React from 'react';

export interface ISliderProps {
    slider?: WithTooltipProps & SliderProps;
    classes?: string[];
    hasTooltip?: boolean;
}

const Slider: React.SFC<ISliderProps> = ({hasTooltip, slider, classes}) => {
    const HtmlTag = hasTooltip ? createSliderWithTooltip(RCSlider) : RCSlider;
    if (hasTooltip) {
        (slider as any).tipProps = {
            overlayClassName: 'vapor-slider-overlay',
            ...slider.tipProps,
        };
    }

    return (
        <div className="flex">
            <HtmlTag className={classNames('vapor-slider input-wrapper input-field', classes)} {...slider} />
        </div>
    );
};

Slider.defaultProps = {
    slider: {},
    hasTooltip: false,
};

export {Slider};
