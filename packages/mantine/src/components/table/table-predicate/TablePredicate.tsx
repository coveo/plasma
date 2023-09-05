import {Grid, Group, Select, Text} from '@mantine/core';
import {FunctionComponent} from 'react';

import {TableComponentsOrder} from '../Table.styles';
import {useTable} from '../TableContext';
import useStyles from './TablePredicate.styles';
import {TablePredicateProps} from './TablePredicate.types';

export const TablePredicate: FunctionComponent<TablePredicateProps> = ({
    id,
    data,
    label,
    classNames,
    styles,
    unstyled,
    ...others
}) => {
    const {classes} = useStyles(null, {name: 'TablePredicate', classNames, styles, unstyled});
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
        <Grid.Col span="content" order={TableComponentsOrder.Predicate} py="sm" className={classes.root} {...others}>
            <Group spacing="xs" className={classes.wrapper}>
                {label ? <Text className={classes.label}>{label}:</Text> : null}
                <Select
                    withinPortal
                    value={form.values.predicates[id]}
                    onChange={handleChange}
                    data={data}
                    aria-label={label ?? id}
                    searchable={data.length > 7}
                    className={classes.select}
                />
            </Group>
        </Grid.Col>
    );
};
