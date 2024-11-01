import {
    Box,
    type BoxProps,
    type Factory,
    polymorphicFactory,
    type StylesApiProps,
    Text,
    type TextProps,
    Tooltip,
    type TooltipProps,
    useProps,
    useStyles,
} from '@mantine/core';
import {ReactNode, useRef, useState} from 'react';
import clsx from 'clsx';
import classes from './EllipsisText.module.css';

export type EllipsisTextStylesNames = 'root' | 'tooltip' | 'text';

export interface EllipsisTextProps
    extends BoxProps,
        Pick<TextProps, 'variant' | 'lineClamp'>,
        Omit<StylesApiProps<EllipsisTextFactory>, 'variant'> {
    children: ReactNode;
    tooltipProps?: Partial<Omit<TooltipProps, 'label' | 'opened' | 'children'>>;
}

type EllipsisTextFactory = Factory<{
    props: EllipsisTextProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: EllipsisTextStylesNames;
}>;

const defaultProps: Partial<EllipsisTextProps> = {
    tooltipProps: {},
};

export const EllipsisText = polymorphicFactory<EllipsisTextFactory>((props, ref) => {
    const {className, children, style, classNames, styles, unstyled, variant, lineClamp, tooltipProps, ...others} =
        useProps('EllipsisText', defaultProps, props);

    const getStyles = useStyles<EllipsisTextFactory>({
        name: 'EllipsisText',
        classes,
        props,
        className,
        style,
        classNames,
        styles,
        unstyled,
    });

    const [showTooltip, setShowTooltip] = useState(false);
    const textRef = useRef<HTMLDivElement>();

    const {className: rootClass, ...rootStyles} = getStyles('root');
    const {className: textClass, ...textStyles} = getStyles('text');

    return (
        <Box
            ref={ref}
            onMouseEnter={() => {
                if (textRef.current && isOverflowing(textRef.current)) {
                    setShowTooltip(true);
                }
            }}
            onMouseLeave={() => setShowTooltip(false)}
            display="flex"
            w="100%"
            className={clsx(rootClass, {[classes.noWrap]: !lineClamp})}
            {...rootStyles}
            {...others}
        >
            <Tooltip label={children} opened={showTooltip} {...tooltipProps} {...getStyles('tooltip')}>
                <Text
                    variant={variant}
                    ref={textRef}
                    className={clsx(textClass, {[classes.ellipsis]: !lineClamp})}
                    {...(!!lineClamp && {lineClamp: lineClamp})}
                    {...textStyles}
                >
                    {children}
                </Text>
            </Tooltip>
        </Box>
    );
});

const isOverflowing = (h: HTMLDivElement) => h.scrollWidth > h.clientWidth || h.scrollHeight > h.clientHeight;
