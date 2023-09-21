import {ArrowDownSize16Px, ArrowUpSize16Px, DoubleArrowHeadVSize16Px} from '@coveord/plasma-react-icons';
import {Center, Group, Text, UnstyledButton} from '@mantine/core';
import {defaultColumnSizing, flexRender} from '@tanstack/react-table';
import useStyles from './Th.styles';
import {ThProps} from './Th.types';

const SortingIcons = {
    asc: ArrowUpSize16Px,
    desc: ArrowDownSize16Px,
    none: DoubleArrowHeadVSize16Px,
};

const SortingLabels = {
    asc: 'ascending',
    desc: 'descending',
    none: 'none',
} as const;

export const Th = <T,>({header}: ThProps<T>) => {
    const columnSizing = {
        ...defaultColumnSizing,
        size: header.column.columnDef.size,
        minSize: header.column.columnDef.minSize,
        maxSize: header.column.columnDef.maxSize,
    };

    const {classes} = useStyles(columnSizing);

    if (header.isPlaceholder) {
        return null;
    }

    if (!header.column.getCanSort()) {
        return (
            <th className={classes.th}>
                <Text size="xs" py="xs" px="sm" fw={500}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                </Text>
            </th>
        );
    }

    const onSort = header.column.getToggleSortingHandler();
    const sortingOrder = header.column.getIsSorted() || 'none';
    const Icon = SortingIcons[sortingOrder];

    return (
        <th className={classes.th} aria-sort={SortingLabels[sortingOrder]}>
            <UnstyledButton onClick={onSort} className={classes.control}>
                <Group position="apart" noWrap>
                    <Text size="xs" fw={500}>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                    </Text>
                    <Center>
                        <Icon height={14} />
                    </Center>
                </Group>
            </UnstyledButton>
        </th>
    );
};
