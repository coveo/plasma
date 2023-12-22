import {CrossSize16Px, FilterSize16Px} from '@coveord/plasma-react-icons';
import {ActionIcon, Grid, TextInput} from '@mantine/core';
import {ChangeEventHandler, FunctionComponent, MouseEventHandler, useEffect, useState} from 'react';

import {useDebouncedValue, useDidUpdate} from '@mantine/hooks';
import {TableComponentsOrder} from '../Table';
import {useTable} from '../TableContext';
import TableFilterClasses from './TableFilter.module.css';
import {TableFilterProps} from './TableFilter.types';

export const TableFilter: FunctionComponent<TableFilterProps> = ({placeholder = 'Search by any field', ...others}) => {
    const {state, setState} = useTable();
    const [filter, setFilter] = useState(state.globalFilter);
    const [debounced, cancel] = useDebouncedValue(filter, 300);

    useDidUpdate(() => {
        setState((prevState) => ({
            ...prevState,
            pagination: prevState.pagination
                ? {pageIndex: 0, pageSize: prevState.pagination.pageSize}
                : prevState.pagination,
            globalFilter: debounced,
        }));
        return cancel;
    }, [debounced]);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const {value} = event.currentTarget;
        setFilter(value);
    };

    const handleClear: MouseEventHandler<HTMLButtonElement> = () => {
        setFilter('');
    };

    useEffect(() => {
        setFilter(state.globalFilter);
    }, [state.globalFilter]);

    return (
        <Grid.Col span="content" order={TableComponentsOrder.Filter} py="sm" className={TableFilterClasses.root}>
            <TextInput
                className={TableFilterClasses.wrapper}
                placeholder={placeholder}
                autoComplete="off"
                mb="md"
                rightSection={
                    filter ? (
                        <ActionIcon onClick={handleClear}>
                            <CrossSize16Px height={16} />
                        </ActionIcon>
                    ) : (
                        <FilterSize16Px height={16} className={TableFilterClasses.empty} />
                    )
                }
                value={filter}
                onChange={handleChange}
                {...others}
            />
        </Grid.Col>
    );
};
