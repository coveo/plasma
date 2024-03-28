import {CrossSize16Px, FilterSize16Px} from '@coveord/plasma-react-icons';
import {ActionIcon, BoxProps, factory, Factory, Grid, TextInput, useProps} from '@mantine/core';
import {CompoundStylesApiProps} from '@mantine/core/lib/core/styles-api/styles-api.types';
import {useDebouncedValue, useDidUpdate} from '@mantine/hooks';
import {ChangeEventHandler, MouseEventHandler, useEffect, useState} from 'react';

import {TableComponentsOrder} from '../Table';
import {useTable, useTableStyles} from '../TableContext';

export type TableFilterStylesNames = 'filterRoot' | 'filterWrapper' | 'filterEmpty';

export interface TableFilterProps extends BoxProps, CompoundStylesApiProps<TableFilterFactory> {
    /**
     * The placeholder for the filter input
     *
     * @default "Search by any field"
     */
    placeholder?: string;
}

export type TableFilterFactory = Factory<{
    props: TableFilterProps;
    ref: HTMLDivElement;
    stylesNames: TableFilterStylesNames;
    compound: true;
}>;

const defaultProps: Partial<TableFilterProps> = {
    placeholder: 'Search by any field',
};

export const TableFilter = factory<TableFilterFactory>((props, ref) => {
    const ctx = useTableStyles();
    const {placeholder, classNames, className, styles, style, vars, ...others} = useProps(
        'PlasmaTableFilter',
        defaultProps,
        props,
    );
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

    const stylesApiProps = {classNames, styles};

    return (
        <Grid.Col
            span="content"
            order={TableComponentsOrder.Filter}
            ref={ref}
            {...ctx.getStyles('filterRoot', {className, style, ...stylesApiProps})}
            {...others}
        >
            <TextInput
                {...ctx.getStyles('filterWrapper', stylesApiProps)}
                placeholder={placeholder}
                autoComplete="off"
                rightSection={
                    filter ? (
                        <ActionIcon onClick={handleClear} color="gray" variant="subtle">
                            <CrossSize16Px height={16} />
                        </ActionIcon>
                    ) : (
                        <FilterSize16Px height={16} {...ctx.getStyles('filterEmpty', stylesApiProps)} />
                    )
                }
                value={filter}
                onChange={handleChange}
            />
        </Grid.Col>
    );
});
