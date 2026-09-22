import {
    Input,
    Slider as MantineSlider,
    type SliderCssVariables,
    type SliderFactory as MantineSliderFactory,
    type SliderProps as MantineSliderProps,
    type SliderStylesNames,
    factory,
} from '@mantine/core';

export interface SliderInputProps extends MantineSliderProps {
    /**
     * Label displayed above the slider.
     */
    inputLabel?: string;
    /**
     * Supporting description displayed below the label.
     */
    inputDescription?: string;
    /**
     * Validation feedback displayed below the slider.
     */
    inputError?: string;
}

export type SliderInputStylesNames = SliderStylesNames;
export type SliderInputCssVariables = SliderCssVariables;

export type SliderInputFactory = Omit<MantineSliderFactory, 'props'> & {
    props: SliderInputProps;
};

export const SliderInput = factory<SliderInputFactory>(({inputDescription, inputError, inputLabel, ref, ...props}) => (
    <Input.Wrapper label={inputLabel} description={inputDescription} error={inputError}>
        <MantineSlider ref={ref} {...props} />
    </Input.Wrapper>
));

SliderInput.displayName = 'SliderInput';

export namespace SliderInput {
    export type Props = SliderInputProps;
    export type StylesNames = SliderInputStylesNames;
    export type CssVariables = SliderInputCssVariables;
    export type Factory = SliderInputFactory;
}
