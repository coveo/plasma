import {Input as MantineInput, type InputFactory as MantineInputFactory, type InputProps} from '@mantine/core';
import {
    InputLabelInfo,
    type InputLabelInfoFactory,
    type InputLabelInfoProps,
    type InputLabelInfoStylesNames,
} from './InputLabelInfo.js';

type PlasmaInputFactory = Omit<MantineInputFactory, 'staticComponents'> & {
    staticComponents: MantineInputFactory['staticComponents'] & {
        LabelInfo: typeof InputLabelInfo;
    };
};

const Input = MantineInput as typeof MantineInput & {
    LabelInfo: typeof InputLabelInfo;
};

Input.displayName = 'Input';
Input.LabelInfo = InputLabelInfo;

InputLabelInfo.displayName = 'Input.LabelInfo';

export {Input};
export type InputFactory = PlasmaInputFactory;
export type {InputProps, InputLabelInfoFactory, InputLabelInfoProps, InputLabelInfoStylesNames};
export {InputLabelInfo};

export namespace Input {
    export type Props = InputProps;
    export type Factory = InputFactory;

    export namespace LabelInfo {
        export type Props = InputLabelInfoProps;
        export type StylesNames = InputLabelInfoStylesNames;
        export type Factory = InputLabelInfoFactory;
    }
}
