import {ArrowDownSize16Px, ArrowUpSize16Px, DoubleArrowHeadVSize16Px} from '@coveord/plasma-react-icons';
import {Center, Group, Text, UnstyledButton, createStyles} from '@mantine/core';
import {Header, defaultColumnSizing, flexRender} from '@tanstack/react-table';

const useStyles = createStyles((theme, width: number) => ({
    th: {
        fontWeight: '400 !important' as any,
        padding: '0 !important',
        verticalAlign: 'middle',
        whiteSpace: 'nowrap',
        textAlign: 'left',
        color: theme.colors.gray[6],
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[0],
        width,
    },

    control: {
        color: 'inherit',
        whiteSpace: 'inherit',
        fontWeight: 'inherit',
        width: '100%',
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[7] : theme.colors.gray[1],
        },
    },
}));

interface ThProps<T> {
    header: Header<T, unknown>;
}

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
    const size = header.column.getSize();
    const width = size !== defaultColumnSizing.size ? size : undefined;
    const {classes} = useStyles(width);

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
