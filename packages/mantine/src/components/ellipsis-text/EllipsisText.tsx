import {
    Box,
    type BoxProps,
    type Factory,
    type FloatingPosition,
    type MantineColor,
    polymorphicFactory,
    type StylesApiProps,
    Text,
    type TextProps,
    Tooltip,
    useProps,
    useStyles,
} from '@mantine/core';
import {ReactNode, useRef, useState} from 'react';
import classes from './EllipsisText.module.css';

export type EllipsisTextStylesNames = 'root' | 'tooltip' | 'text';

export interface EllipsisTextProps
    extends BoxProps,
        Pick<TextProps, 'variant'>,
        Omit<StylesApiProps<EllipsisTextFactory>, 'variant'> {
    children: ReactNode;
    /**
     * The background color of the tooltip shown when the content is truncated.
     */
    tooltipColor?: MantineColor;
    /**
     * The position of the tooltip shown when the content is truncated.
     */
    tooltipPosition?: FloatingPosition;
}

type EllipsisTextFactory = Factory<{
    props: EllipsisTextProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: EllipsisTextStylesNames;
}>;

const defaultProps: Partial<EllipsisTextProps> = {};

export const EllipsisText = polymorphicFactory<EllipsisTextFactory>((props, ref) => {
    const {
        className,
        children,
        style,
        classNames,
        styles,
        unstyled,
        variant,
        tooltipColor,
        tooltipPosition,
        ...others
    } = useProps('EllipsisText', defaultProps, props);
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
            {...getStyles('root')}
            {...others}
        >
            <Tooltip
                label={children}
                opened={showTooltip}
                color={tooltipColor}
                position={tooltipPosition}
                {...getStyles('tooltip')}
            >
                <Text variant={variant} ref={textRef} {...getStyles('text')}>
                    {children}
                </Text>
            </Tooltip>
        </Box>
    );
});

const isOverflowing = (h: HTMLDivElement) => h.scrollWidth > h.clientWidth;
