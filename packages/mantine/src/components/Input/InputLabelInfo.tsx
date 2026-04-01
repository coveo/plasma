import {factory, StylesApiProps, Tooltip, useProps, useStyles, type Factory, type TooltipProps} from '@mantine/core';
import {type ReactNode} from 'react';
import {InfoToken} from '../InfoToken/InfoToken.js';
import classes from './InputLabelInfo.module.css';

export type InputLabelInfoStylesNames = 'labelInfo';

export interface InputLabelInfoProps
    extends
        Omit<TooltipProps, 'label' | 'classNames' | 'attributes' | 'styles' | 'vars'>,
        StylesApiProps<InputLabelInfoFactory> {
    children: ReactNode;
}

export type InputLabelInfoFactory = Factory<{
    props: InputLabelInfoProps;
    ref: HTMLSpanElement;
    stylesNames: InputLabelInfoStylesNames;
}>;

const defaultProps = {} satisfies Partial<InputLabelInfoProps>;

export const InputLabelInfo = factory<InputLabelInfoFactory>((_props, ref) => {
    const props = useProps('InputLabelInfo', defaultProps, _props);
    const {classNames, className, style, styles, unstyled, vars, children, attributes, ...others} = props;
    const getStyles = useStyles<InputLabelInfoFactory>({
        name: 'InputLabelInfo',
        props,
        style,
        styles,
        unstyled,
        attributes,
        className,
        classes,
        classNames,
        vars,
    });
    return (
        <Tooltip label={children} {...others}>
            <InfoToken component="span" {...getStyles('labelInfo', {className, style})} ref={ref} />
        </Tooltip>
    );
});
