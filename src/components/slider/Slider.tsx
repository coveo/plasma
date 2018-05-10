import * as classNames from 'classnames';
import RCSlider, {createSliderWithTooltip, SliderProps} from 'rc-slider';
import * as React from 'react';

export interface ISliderProps {
    slider?: SliderProps;
    classes?: string[];
    hasTooltip?: boolean;
}

export class Slider extends React.Component<ISliderProps, {}> {

    static defaultProps: Partial<ISliderProps> = {
        slider: {},
        hasTooltip: false,
    };

    render() {
        const HtmlTag = this.props.hasTooltip ? createSliderWithTooltip(RCSlider) : RCSlider;
        if (this.props.hasTooltip) {
            (this.props.slider as any).tipProps = {
                overlayClassName: 'vapor-slider-overlay',
            };
        }

        const classes: string = classNames('vapor-slider', this.props.classes);
        return <HtmlTag className={classes} {...this.props.slider} />;
    }
}
