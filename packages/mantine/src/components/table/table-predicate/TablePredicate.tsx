import {
    BoxProps,
    ComboboxData,
    CompoundStylesApiProps,
    factory,
    Factory,
    Grid,
    Group,
    Select,
    Text,
    useProps,
} from '@mantine/core';
import {FunctionComponent} from 'react';

import {TableComponentsOrder} from '../Table';
import {useTable, useTableStyles} from '../TableContext';

export type TablePredicateStylesNames = 'predicate' | 'predicateWrapper' | 'predicateLabel' | 'predicateSelect';

export interface TablePredicateProps extends BoxProps, CompoundStylesApiProps<TablePredicateFactory> {
    /**
     * Unique identifier for this predicate. Will be used to access the selected value in the table state
     */
    id: string;
    /**
     * The values to display in the predicate
     */
    data: ComboboxData;
    /**
     * Input label (not displayed for now)
     *
     * @default default to the predicate id
     */
    label?: string;
}

export type TablePredicateFactory = Factory<{
    props: TablePredicateProps;
    ref: HTMLDivElement;
    stylesNames: TablePredicateStylesNames;
    compound: true;
}>;

const defaultProps: Partial<TablePredicateProps> = {};

export const TablePredicate: FunctionComponent<TablePredicateProps> = factory<TablePredicateFactory>((props, ref) => {
    const ctx = useTableStyles();
    const {id, data, label, classNames, className, styles, style, vars, ...others} = useProps(
        'PlasmaTablePredicate',
        defaultProps,
        props,
    );
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

    const stylesApiProps = {classNames, styles};

    return (
        <Grid.Col
            span="content"
            order={TableComponentsOrder.Predicate}
            ref={ref}
            {...ctx.getStyles('predicate', {className, style, ...stylesApiProps})}
            {...others}
        >
            <Group gap="xs" {...ctx.getStyles('predicateWrapper', stylesApiProps)}>
                {label ? <Text {...ctx.getStyles('predicateLabel', stylesApiProps)}>{label}:</Text> : null}
                <Select
                    comboboxProps={{withinPortal: true}}
                    value={form.values.predicates[id]}
                    onChange={handleChange}
                    data={data}
                    aria-label={label ?? id}
                    searchable={data.length > 7}
                    {...ctx.getStyles('predicateSelect', stylesApiProps)}
                />
            </Group>
        </Grid.Col>
    );
});
