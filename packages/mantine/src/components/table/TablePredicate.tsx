import {createStyles, DefaultProps, Grid, Group, Select, SelectItem, Selectors, Text} from '@mantine/core';
import {FunctionComponent} from 'react';

import {TableComponentsOrder} from './Table.styles';
import {useTable} from './TableContext';

const useStyles = createStyles((theme) => ({
    root: {},
    wrapper: {},
    label: {},
    select: {}
}));

type TablePredicateStylesNames = Selectors<typeof useStyles>;

interface TablePredicateProps extends DefaultProps<TablePredicateStylesNames> {
    /**
     * Unique identifier for this predicate. Will be used to access the selected value in the table state
     */
    id: string;
    /**
     * The values to display in the predicate
     */
    data: SelectItem[];
    /**
     * Input label (not displayed for now)
     *
     * @default default to the predicate id
     */
    label?: string;
}

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
    const {form} = useTable();

    const onUpdate = (newValue: string) => {
        form.setFieldValue('predicates', {...form.values.predicates, [id]: newValue});
    };

    return (
        <Grid.Col span="content" order={TableComponentsOrder.Predicate} py="sm" className={classes.root} {...others}>
            <Group spacing="xs" className={classes.wrapper}>
                {label ? <Text className={classes.label}>{label}:</Text> : null}
                <Select
                    withinPortal
                    value={form.values.predicates[id]}
                    onChange={onUpdate}
                    data={data}
                    aria-label={label ?? id}
                    searchable={data.length > 7}
                    className={classes.select}
                />
            </Group>
        </Grid.Col>
    );
};
