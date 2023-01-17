import {SearchSize16Px} from '@coveord/plasma-react-icons';
import {createStyles, TextInput, Selectors, DefaultProps} from '@mantine/core';
import {TableState} from '@tanstack/react-table';
import {ChangeEvent, FunctionComponent} from 'react';
import {useTable} from './useTable.js';

const useStyles = createStyles((theme) => ({
    wrapper: {
        marginBottom: '0 !important',
    },
    empty: {
        color: theme.colors.gray[4],
    },
}));

type TableFilterStylesNames = Selectors<typeof useStyles>;
interface TableFilterProps extends DefaultProps<TableFilterStylesNames> {
    /**
     * The placeholder for the filter input
     *
     * @default "Search by any field"
     */
    placeholder?: string;
}

export const TableFilter: FunctionComponent<TableFilterProps> = ({
    placeholder = 'Search by any field',
    classNames,
    styles,
    unstyled,
    ...others
}) => {
    const {classes, cx} = useStyles(null, {name: 'TableHeader', classNames, styles, unstyled});
    const {state, setState} = useTable();

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget;
        setState((prevState: TableState) => ({
            ...prevState,
            pagination: prevState.pagination
                ? {pageIndex: 0, pageSize: prevState.pagination.pageSize}
                : prevState.pagination,
            globalFilter: value,
        }));
    };

    return (
        <TextInput
            className={classes.wrapper}
            placeholder={placeholder}
            mb="md"
            rightSection={<SearchSize16Px height={14} className={cx({[classes.empty]: !state.globalFilter})} />}
            value={state.globalFilter}
            onChange={handleSearchChange}
            {...others}
        />
    );
};
