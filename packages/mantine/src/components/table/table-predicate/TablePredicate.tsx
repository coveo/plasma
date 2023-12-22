import {Grid, Group, Select, Text} from '@mantine/core';
import {FunctionComponent} from 'react';

import SelectClasses from '../../../styles/Select.module.css';
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
            classNames={{col: TablePredicateClasses.root}}
            {...others}
        >
            <Group gap="xs" classNames={{root: TablePredicateClasses.wrapper}}>
                {label ? <Text classNames={{root: TablePredicateClasses.label}}>{label}:</Text> : null}
                <Select
                    // withinPortal what
                    value={form.values.predicates[id]}
                    onChange={handleChange}
                    data={data}
                    aria-label={label ?? id}
                    searchable={data.length > 7}
                    classNames={{input: SelectClasses.input, option: SelectClasses.option}}
                />
            </Group>
        </Grid.Col>
    );
};
