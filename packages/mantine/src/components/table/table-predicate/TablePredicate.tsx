import {Grid, Group, Select, Text} from '@mantine/core';
import {FunctionComponent} from 'react';

import {TableComponentsOrder} from '../Table';
import {useTable} from '../TableContext';
import TablePredicateClasses from './TablePredicate.module.css';
import {TablePredicateProps} from './TablePredicate.types';

export const TablePredicate: FunctionComponent<TablePredicateProps> = ({id, data, label, ...others}) => {
    const {form, setState} = useTable();

    const handleChange = (newValue: string) => {
        form.setFieldValue('predicates', {...form.values.predicates, [id]: newValue});
        setState((prevState) => ({
            ...prevState,
            pagination: prevState.pagination
                ? {pageIndex: 0, pageSize: prevState.pagination.pageSize}
                : prevState.pagination,
        }));
    };

    return (
        <Grid.Col
            span="content"
            order={TableComponentsOrder.Predicate}
            py="sm"
            className={TablePredicateClasses.root}
            {...others}
        >
            <Group gap="xs" className={TablePredicateClasses.wrapper}>
                {label ? <Text className={TablePredicateClasses.label}>{label}:</Text> : null}
                <Select
                    // withinPortal what
                    value={form.values.predicates[id]}
                    onChange={handleChange}
                    data={data}
                    aria-label={label ?? id}
                    searchable={data.length > 7}
                    className={TablePredicateClasses.select}
                />
            </Group>
        </Grid.Col>
    );
};
