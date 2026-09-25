import {
    Input,
    Slider as MantineSlider,
    type InputWrapperProps,
    type SliderCssVariables,
    type SliderFactory as MantineSliderFactory,
    type SliderProps as MantineSliderProps,
    type SliderStylesNames,
    factory,
} from '@mantine/core';

type SliderInputWrapperProps = Pick<InputWrapperProps, 'description' | 'error' | 'required'>;

export interface SliderInputProps extends MantineSliderProps, SliderInputWrapperProps {
    /**
     * Label displayed above the slider.
     */
    inputLabel?: InputWrapperProps['label'];
}

export type SliderInputStylesNames = SliderStylesNames;
export type SliderInputCssVariables = SliderCssVariables;

export type SliderInputFactory = Omit<MantineSliderFactory, 'props'> & {
    props: SliderInputProps;
};

export const SliderInput = factory<SliderInputFactory>(({description, error, inputLabel, required, ref, ...props}) => (
    <Input.Wrapper label={inputLabel} description={description} error={error} required={required}>
        <MantineSlider ref={ref} {...props} data-slider-input />
    </Input.Wrapper>
));

SliderInput.displayName = 'SliderInput';

export namespace SliderInput {
    export type Props = SliderInputProps;
    export type StylesNames = SliderInputStylesNames;
    export type CssVariables = SliderInputCssVariables;
    export type Factory = SliderInputFactory;
}
