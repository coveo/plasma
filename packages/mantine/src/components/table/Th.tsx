import {ArrowHeadDownSize16Px, ArrowHeadUpSize16Px} from '@coveord/plasma-react-icons';
import {Center, createStyles, Group, Text, UnstyledButton} from '@mantine/core';
import {defaultColumnSizing, flexRender, Header} from '@tanstack/react-table';

const useStyles = createStyles((theme) => ({
    th: {
        padding: '0 !important',
        fontWeight: '400 !important' as any,
        color: theme.black + '!important',
    },

    noSort: {
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    },

    control: {
        width: '100%',
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[6] : theme.colors.gray[2],
        },
    },
}));

interface ThProps<T> {
    header: Header<T, unknown>;
}

const SortingIcons = {
    asc: ArrowHeadDownSize16Px,
    desc: ArrowHeadUpSize16Px,
};

const SortingLabels = {
    asc: 'ascending',
    desc: 'descending',
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
                <Text className={classes.noSort} size="xs">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                </Text>
            </th>
        );
    }

    const onSort = header.column.getToggleSortingHandler();
    const sortingOrder = header.column.getIsSorted();
    const Icon = SortingIcons[sortingOrder || header.column.getFirstSortDir()];

    return (
        <th className={classes.th} style={{width}} aria-sort={sortingOrder ? SortingLabels[sortingOrder] : 'none'}>
            <UnstyledButton onClick={onSort} className={classes.control}>
                <Group position="apart">
                    <Text size="xs">{flexRender(header.column.columnDef.header, header.getContext())}</Text>
                    <Center sx={(theme) => ({color: sortingOrder ? theme.colors.action[8] : undefined})}>
                        <Icon height={14} />
                    </Center>
                </Group>
            </UnstyledButton>
        </th>
    );
};
