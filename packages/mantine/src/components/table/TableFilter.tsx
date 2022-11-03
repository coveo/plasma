import {SearchSize16Px} from '@coveord/plasma-react-icons';
import {createStyles, TextInput} from '@mantine/core';
import {TableState} from '@tanstack/react-table';
import {ChangeEvent, FunctionComponent} from 'react';
import {useTable} from './useTable';

const useStyles = createStyles((theme) => ({
    wrapper: {
        marginBottom: '0 !important',
    },
    empty: {
        color: theme.colors.gray[4],
    },
}));

interface TableFilterProps {
    /**
     * The placeholder for the filter input
     *
     * @default "Search by any field"
     */
    placeholder?: string;
}

export const TableFilter: FunctionComponent<TableFilterProps> = ({placeholder = 'Search by any field'}) => {
    const {classes, cx} = useStyles();
    const {state, setState} = useTable();

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget;
        setState((prevState: TableState) => ({...prevState, globalFilter: value}));
    };

    return (
        <TextInput
            className={classes.wrapper}
            placeholder={placeholder}
            mb="md"
            rightSection={<SearchSize16Px height={14} className={cx({[classes.empty]: !state.globalFilter})} />}
            value={state.globalFilter}
            onChange={handleSearchChange}
        />
    );
};
