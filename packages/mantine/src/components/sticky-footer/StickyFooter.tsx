import {
    Box,
    BoxProps,
    Divider,
    Factory,
    Group,
    MantineSpacing,
    StylesApiProps,
    factory,
    useProps,
    useStyles,
} from '@mantine/core';
import {ReactNode} from 'react';
import classes from './StickyFooter.module.css';
import {StickyFooterProvider} from './StickyFooterContext';

export interface StickyFooterProps extends BoxProps, StylesApiProps<StickyFooterFactory> {
    /**
     * Whether a border is render on top of the footer
     */
    borderTop?: boolean;
    /**
     * Position of the children within the footer
     *
     * @default 'right'
     */
    justify?: 'right' | 'left' | 'center' | 'apart';
    /**
     * Defines the spacing between footer children
     *
     * @default 'sm'
     */
    gap?: MantineSpacing;
    /**
     * Footer's children, usually buttons
     */
    children?: ReactNode;
}

export type StickyFooterStylesNames = 'root' | 'footer' | 'divider';

export type StickyFooterFactory = Factory<{
    props: StickyFooterProps;
    ref: HTMLDivElement;
    stylesNames: StickyFooterStylesNames;
}>;

const defaultProps: Partial<StickyFooterProps> = {
    gap: 'sm',
    justify: 'right',
};

export const StickyFooter = factory<StickyFooterFactory>((props, ref) => {
    const {borderTop, justify, gap, children, className, classNames, style, styles, unstyled, ...others} = useProps(
        'StickyFooter',
        defaultProps,
        props,
    );
    const getStyles = useStyles<StickyFooterFactory>({
        name: 'StickyFooter',
        classes,
        props,
        className,
        style,
        classNames,
        styles,
        unstyled,
    });

    return (
        <StickyFooterProvider value={{getStyles}}>
            <Box ref={ref} {...getStyles('root')} {...others}>
                {borderTop ? <Divider size="xs" {...getStyles('divider')} /> : null}
                <Group justify={justify} gap={gap} {...getStyles('footer')}>
                    {children}
                </Group>
            </Box>
        </StickyFooterProvider>
    );
});
