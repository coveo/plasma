import {
    Box,
    type BoxProps,
    type Factory,
    polymorphicFactory,
    Spoiler,
    type StylesApiProps,
    useProps,
    useStyles,
} from '@mantine/core';
import clsx from 'clsx';
import {forwardRef, type MouseEvent, type ReactNode, useCallback, useState} from 'react';
import {EllipsisText, type EllipsisTextProps} from '../../EllipsisText/EllipsisText.js';
import classes from './TableCell.module.css';

export type TableCellStylesNames = 'root' | 'content' | 'toggle';

export interface TableCellProps extends BoxProps, Omit<StylesApiProps<TableCellFactory>, 'variant'> {
    children: ReactNode;
    /**
     * When true, text wraps normally without any truncation.
     * Cannot be combined with `lineClamp` or `expandable`.
     */
    wrap?: boolean;
    /**
     * Number of lines before clamping with ellipsis.
     * When set, shows a tooltip on hover if content overflows.
     * @default undefined (single-line ellipsis)
     */
    lineClamp?: number;
    /**
     * When true, shows a "Show more" / "Show less" toggle when content overflows.
     * Uses `lineClamp` (default 2) for the collapsed state.
     */
    expandable?: boolean;
    /**
     * Props forwarded to the EllipsisText tooltip.
     * Only applies in ellipsis mode (no `wrap`, no `expandable`).
     */
    tooltipProps?: EllipsisTextProps['tooltipProps'];
}

export type TableCellFactory = Factory<{
    props: TableCellProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: TableCellStylesNames;
}>;

const defaultProps = {} satisfies Partial<TableCellProps>;

export const TableCell = polymorphicFactory<TableCellFactory>((props, ref) => {
    const {
        className,
        children,
        style,
        classNames,
        styles,
        unstyled,
        wrap,
        lineClamp,
        expandable,
        tooltipProps,
        ...others
    } = useProps('TableCell', defaultProps, props);

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

    // Expandable mode
    if (expandable) {
        return (
            <ExpandableCell ref={ref} getStyles={getStyles} lineClamp={lineClamp ?? 2} {...others}>
                {children}
            </ExpandableCell>
        );
    }

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

// --- Internal ExpandableCell ---

interface ExpandableCellInternalProps extends BoxProps {
    children: ReactNode;
    lineClamp: number;
    getStyles: ReturnType<typeof useStyles<TableCellFactory>>;
}

const ExpandableCell = forwardRef<HTMLDivElement, ExpandableCellInternalProps>(
    ({children, lineClamp, getStyles, ...others}, ref) => {
        const [maxHeight, setMaxHeight] = useState(0);

        const measureRef = useCallback(
            (node: HTMLDivElement | null) => {
                if (node) {
                    const lineHeight = parseFloat(getComputedStyle(node).lineHeight);
                    setMaxHeight(lineHeight * lineClamp);
                }
            },
            [lineClamp],
        );

        return (
            <Box ref={ref} {...getStyles('root')} {...others}>
                <Spoiler
                    maxHeight={maxHeight}
                    showLabel="Show more"
                    hideLabel="Show less"
                    onClick={(e: MouseEvent) => e.stopPropagation()}
                >
                    <Box ref={measureRef} {...getStyles('content')}>
                        {children}
                    </Box>
                </Spoiler>
            </Box>
        );
    },
);

ExpandableCell.displayName = 'ExpandableCell';
