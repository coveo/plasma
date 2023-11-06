import {ArrowDownSize16Px, ArrowUpSize16Px, DoubleArrowHeadVSize16Px} from '@coveord/plasma-react-icons';
import {Group, UnstyledButton, useComponentDefaultProps} from '@mantine/core';
import {defaultColumnSizing, flexRender} from '@tanstack/react-table';
import {AriaAttributes} from 'react';
import useStyles from './Th.styles';
import {SortState, ThProps} from './Th.types';

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

const defaultProps: Partial<ThProps> = {
    sortingIcons: SortingIcons,
};

export const Th = <T,>(props: ThProps<T>) => {
    const {header, classNames, styles, unstyled, sortingIcons, ...others} = useComponentDefaultProps(
        'PlasmaTableColumnHeader',
        defaultProps as Partial<ThProps<T>>,
        props,
    );

    const columnSizing = {
        ...defaultColumnSizing,
        size: header.column.columnDef.size,
        minSize: header.column.columnDef.minSize,
        maxSize: header.column.columnDef.maxSize,
    };

    const {classes, cx} = useStyles(columnSizing, {name: 'PlasmaTableColumnHeader', classNames, styles, unstyled});

    if (header.isPlaceholder) {
        return null;
    }

    if (!header.column.getCanSort()) {
        return <th className={classes.root}>{flexRender(header.column.columnDef.header, header.getContext())}</th>;
    }

    const onSort = header.column.getToggleSortingHandler();
    const sortingOrder = header.column.getIsSorted() || 'none';
    const Icon = sortingIcons[sortingOrder];

    return (
        <UnstyledButton
            component="th"
            onClick={onSort}
            className={cx(classes.root, classes.control)}
            aria-sort={SortingLabels[sortingOrder]}
            {...others}
        >
            <Group noWrap spacing="xs">
                {flexRender(header.column.columnDef.header, header.getContext())}
                <Icon height={16} width={16} />
            </Group>
        </UnstyledButton>
    );
};
