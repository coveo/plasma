import {
    Box,
    type BoxProps,
    type Factory,
    polymorphicFactory,
    type StylesApiProps,
    useProps,
    useStyles,
} from '@mantine/core';
import clsx from 'clsx';
import {type ReactNode} from 'react';
import {EllipsisText, type EllipsisTextProps} from '../../EllipsisText/EllipsisText.js';
import classes from './TableCell.module.css';

export type TableCellStylesNames = 'root' | 'content';

export interface TableCellProps extends BoxProps, Omit<StylesApiProps<TableCellFactory>, 'variant'> {
    children: ReactNode;
    /**
     * When true, text wraps normally without any truncation.
     */
    wrap?: boolean;
    /**
     * Number of lines before clamping with ellipsis.
     * When set, shows a tooltip on hover if content overflows.
     * @default undefined (single-line ellipsis)
     */
    lineClamp?: number;
    /**
     * Props forwarded to the EllipsisText tooltip.
     * Only applies in ellipsis mode (no `wrap`).
     */
    tooltipProps?: EllipsisTextProps['tooltipProps'];
}

export type TableCellFactory = Factory<{
    props: TableCellProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: TableCellStylesNames;
}>;

const defaultProps: Partial<TableCellProps> = {};

export const TableCell = polymorphicFactory<TableCellFactory>((props, ref) => {
    const {className, children, style, classNames, styles, unstyled, wrap, lineClamp, tooltipProps, ...others} =
        useProps('TableCell', defaultProps, props);

    const getStyles = useStyles<TableCellFactory>({
        name: 'TableCell',
        classes,
        props,
        className,
        style,
        classNames,
        styles,
        unstyled,
    });

    // Wrap mode — no truncation
    if (wrap) {
        return (
            <Box ref={ref} {...getStyles('root')} {...others}>
                <Box {...getStyles('content')} className={clsx(getStyles('content').className, classes.wrap)}>
                    {children}
                </Box>
            </Box>
        );
    }

    // Default: ellipsis (single-line or line-clamped)
    return (
        <Box ref={ref} {...getStyles('root')} {...others}>
            <EllipsisText lineClamp={lineClamp} tooltipProps={tooltipProps}>
                {children}
            </EllipsisText>
        </Box>
    );
});

TableCell.displayName = 'Table.Cell';
