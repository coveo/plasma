import {ArrowDownSize16Px, ArrowUpSize16Px, DoubleArrowHeadVSize16Px} from '@coveord/plasma-react-icons';
import {Center, createStyles, Group, Text, UnstyledButton} from '@mantine/core';
import {defaultColumnSizing, flexRender, Header} from '@tanstack/react-table';

const useStyles = createStyles((theme) => ({
    th: {
        fontWeight: '400 !important' as any,
        padding: '0 !important',
        color: theme.black + '!important',
        verticalAlign: 'middle',
    },

    control: {
        width: '100%',
        padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
        whiteSpace: 'nowrap',

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[6] : theme.colors.gray[2],
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
    const {classes} = useStyles();
    const size = header.column.getSize();
    const width = size !== defaultColumnSizing.size ? size : undefined;

    if (header.isPlaceholder) {
        return null;
    }

    if (!header.column.getCanSort()) {
        return (
            <th className={classes.th} style={{width}}>
                <Text size="xs" py="xs" px="sm">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                </Text>
            </th>
        );
    }

    const onSort = header.column.getToggleSortingHandler();
    const sortingOrder = header.column.getIsSorted() || 'none';
    const Icon = SortingIcons[sortingOrder];

    return (
        <th className={classes.th} style={{width}} aria-sort={SortingLabels[sortingOrder]}>
            <UnstyledButton onClick={onSort} className={classes.control}>
                <Group position="apart" noWrap>
                    <Text size="xs">{flexRender(header.column.columnDef.header, header.getContext())}</Text>
                    <Center>
                        <Icon height={14} />
                    </Center>
                </Group>
            </UnstyledButton>
        </th>
    );
};
