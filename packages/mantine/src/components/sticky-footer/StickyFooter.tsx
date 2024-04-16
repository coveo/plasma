import {Factory, Group, GroupProps, StylesApiProps, factory, useProps, useStyles} from '@mantine/core';
import clsx from 'clsx';
import {ReactNode} from 'react';
import classes from './StickyFooter.module.css';

export interface StickyFooterProps
    extends Omit<GroupProps, 'classNames' | 'styles' | 'vars'>,
        StylesApiProps<StickyFooterFactory> {
    /**
     * Whether a border is render on top of the footer
     */
    borderTop?: boolean;
    /**
     * Footer's children, usually buttons
     */
    children?: ReactNode;
}

export type StickyFooterStylesNames = 'root';

export type StickyFooterFactory = Factory<{
    props: StickyFooterProps;
    ref: HTMLDivElement;
    stylesNames: StickyFooterStylesNames;
}>;

const defaultProps: Partial<StickyFooterProps> = {
    gap: 'sm',
    justify: 'flex-end',
};

export const StickyFooter = factory<StickyFooterFactory>((props, ref) => {
    const {borderTop, justify, gap, children, className, classNames, style, styles, unstyled, vars, ...others} =
        useProps('StickyFooter', defaultProps, props);
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

    const css = getStyles('root');

    return (
        <Group
            justify={justify}
            gap={gap}
            className={clsx(css.className, {[classes.border]: !!borderTop})}
            style={css.style}
            ref={ref}
            {...others}
        >
            {children}
        </Group>
    );
});
