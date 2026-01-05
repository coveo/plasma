import {
    Factory,
    factory,
    InputStylesNames,
    PillsInput as MantinePillsInput,
    PillsInputProps as MantinePillsInputProps,
} from '@mantine/core';

export interface PillsInputProps extends MantinePillsInputProps {
    readOnly?: boolean;
}

export type PillsInputFactory = Factory<{
    props: PillsInputProps;
    ref: HTMLInputElement;
    stylesNames: InputStylesNames;
    staticComponents: {
        Field: typeof MantinePillsInput.Field;
    };
}>;

export const PillsInput = factory<PillsInputFactory>(({readOnly, ...props}, ref) => (
    <MantinePillsInput ref={ref} {...props} data-readonly={readOnly || undefined} />
));

PillsInput.Field = MantinePillsInput.Field;
