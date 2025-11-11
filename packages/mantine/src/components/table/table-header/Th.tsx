import {ArrowDownSize16Px, ArrowUpSize16Px, DoubleArrowHeadVSize16Px} from '@coveord/plasma-react-icons';
import {BoxProps, CompoundStylesApiProps, Factory, Group, UnstyledButton, useProps} from '@mantine/core';
import {Header, defaultColumnSizing, flexRender} from '@tanstack/react-table';
import {AriaAttributes, ComponentType, ForwardedRef, SVGProps} from 'react';
import {CustomComponentThemeExtend, identity} from '../../../utils/createFactoryComponent.js';
import {useTableContext} from '../TableContext.js';

export type TableThStylesNames = 'th';

export type SortState = 'asc' | 'desc' | 'none';

export interface ThProps<T = unknown> extends BoxProps, CompoundStylesApiProps<TableThFactory> {
    header: Header<T, unknown>;
    sortingIcons?: Record<SortState, ComponentType<SVGProps<SVGSVGElement>>>;
}

const SortingIcons: ThProps['sortingIcons'] = {
    asc: ArrowUpSize16Px,
    desc: ArrowDownSize16Px,
    none: DoubleArrowHeadVSize16Px,
};

const SortingLabels: Record<SortState, AriaAttributes['aria-sort']> = {
    asc: 'ascending',
    desc: 'descending',
    none: 'none',
} as const;

export type TableThFactory = Factory<{
    props: ThProps;
    ref: HTMLTableCellElement;
    stylesNames: TableThStylesNames;
    compound: true;
}>;

const defaultProps: Partial<ThProps> = {
    sortingIcons: SortingIcons,
};

export const Th = <T,>(props: ThProps<T> & {ref?: ForwardedRef<HTMLTableCellElement>}) => {
    const {getStyles} = useTableContext();
    const {header, sortingIcons, classNames, className, styles, style, vars, ...others} = useProps(
        'PlasmaTableTh',
        defaultProps as Partial<ThProps<T>>,
        props,
    );

    const columnSizing = {
        ...defaultColumnSizing,
        size: header.column.columnDef.size,
        minSize: header.column.columnDef.minSize,
        maxSize: header.column.columnDef.maxSize,
    };

    const thStyles = getStyles('th', {classNames, className, styles, style});

    if (header.isPlaceholder) {
        return null;
    }

    if (!header.column.getCanSort()) {
        return (
            <th
                className={thStyles.className}
                style={{
                    ...thStyles.style,
                    width: columnSizing.size ?? 'auto',
                    minWidth: columnSizing.minSize,
                    maxWidth: columnSizing.maxSize,
                }}
                {...others}
            >
                <Group wrap="nowrap" gap="xs">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                </Group>
            </th>
        );
    }

    const onSort = header.column.getToggleSortingHandler();
    const sortingOrder = header.column.getIsSorted() || 'none';
    const Icon = sortingIcons[sortingOrder];

    return (
        <UnstyledButton
            component="th"
            onClick={onSort}
            aria-sort={SortingLabels[sortingOrder]}
            data-control={true}
            {...thStyles}
            {...others}
        >
            <Group wrap="nowrap" gap="xs">
                {flexRender(header.column.columnDef.header, header.getContext())}
                <Icon height={16} width={16} />
            </Group>
        </UnstyledButton>
    );
};
Th.extend = identity as CustomComponentThemeExtend<TableThFactory>;
