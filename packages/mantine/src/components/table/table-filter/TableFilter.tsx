import {IconSearch, IconX} from '@coveord/plasma-react-icons';
import {BoxProps, CompoundStylesApiProps, Factory, factory, Grid, TextInput, useProps} from '@mantine/core';
import {useDebouncedValue, useDidUpdate} from '@mantine/hooks';
import {ChangeEventHandler, MouseEventHandler, useEffect, useState} from 'react';

import {ActionIcon} from '../../action-icon';
import {TableComponentsOrder} from '../Table';
import {useTableContext} from '../TableContext';

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
    const {store, getStyles} = useTableContext();
    const {placeholder, classNames, className, styles, style, vars, ...others} = useProps(
        'PlasmaTableFilter',
        defaultProps,
        props,
    );
    const [filter, setFilter] = useState(store.state.globalFilter);
    const [debounced, cancel] = useDebouncedValue(filter, 300);

    useDidUpdate(() => {
        store.setGlobalFilter(debounced);
        store.setPagination({pageIndex: 0, pageSize: store.state.pagination.pageSize});

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
        setFilter(store.state.globalFilter);
    }, [store.state.globalFilter]);

    const stylesApiProps = {classNames, styles};

    return (
        <Grid.Col
            span="content"
            order={TableComponentsOrder.Filter}
            ref={ref}
            {...getStyles('filterRoot', {className, style, ...stylesApiProps})}
            {...others}
        >
            <TextInput
                {...getStyles('filterWrapper', stylesApiProps)}
                placeholder={placeholder}
                autoComplete="off"
                rightSection={
                    filter ? (
                        <ActionIcon.Quaternary onClick={handleClear}>
                            <IconX aria-label="clear" size={20} />
                        </ActionIcon.Quaternary>
                    ) : (
                        <IconSearch size={20} {...getStyles('filterEmpty', stylesApiProps)} />
                    )
                }
                value={filter}
                onChange={handleChange}
            />
        </Grid.Col>
    );
});
