import {
    Input,
    Slider as MantineSlider,
    type SliderCssVariables,
    type SliderFactory as MantineSliderFactory,
    type SliderProps as MantineSliderProps,
    type SliderStylesNames,
    factory,
} from '@mantine/core';
import {type ReactNode} from 'react';

export interface SliderInputProps extends MantineSliderProps {
    /**
     * Label displayed above the slider.
     */
    inputLabel?: ReactNode;
    /**
     * Supporting description displayed below the label.
     */
    inputDescription?: ReactNode;
    /**
     * Validation feedback displayed below the slider.
     */
    inputError?: ReactNode;
    /**
     * Whether the slider is required.
     */
    required?: boolean;
}

export type SliderInputStylesNames = SliderStylesNames;
export type SliderInputCssVariables = SliderCssVariables;

export type SliderInputFactory = Omit<MantineSliderFactory, 'props'> & {
    props: SliderInputProps;
};

export const SliderInput = factory<SliderInputFactory>(
    ({inputDescription, inputError, inputLabel, required, ref, ...props}) => (
        <Input.Wrapper label={inputLabel} description={inputDescription} error={inputError} required={required}>
            <MantineSlider ref={ref} {...props} data-slider-input />
        </Input.Wrapper>
    ),
);

SliderInput.displayName = 'SliderInput';

export namespace SliderInput {
    export type Props = SliderInputProps;
    export type StylesNames = SliderInputStylesNames;
    export type CssVariables = SliderInputCssVariables;
    export type Factory = SliderInputFactory;
}
