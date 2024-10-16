import {
    BoxProps,
    ComboboxData,
    CompoundStylesApiProps,
    factory,
    Factory,
    Grid,
    Group,
    Select,
    SelectProps,
    Text,
    useProps,
} from '@mantine/core';
import {FunctionComponent} from 'react';

import {TableComponentsOrder} from '../Table';
import {useTableContext} from '../TableContext';

export type TablePredicateStylesNames = 'predicate' | 'predicateWrapper' | 'predicateLabel' | 'predicateSelect';

export interface TablePredicateProps
    extends BoxProps,
        Pick<SelectProps, 'renderOption'>,
        CompoundStylesApiProps<TablePredicateFactory> {
    /**
     * Unique identifier for this predicate. Will be used to access the selected value in the table state
     */
    id: string;
    /**
     * The values to display in the predicate
     */
    data: ComboboxData;
    /**
     * The label to display next to the Select
     *
     */
    label: string;
}

export type TablePredicateFactory = Factory<{
    props: TablePredicateProps;
    ref: HTMLDivElement;
    stylesNames: TablePredicateStylesNames;
    compound: true;
}>;

const defaultProps: Partial<TablePredicateProps> = {};

export const TablePredicate: FunctionComponent<TablePredicateProps> = factory<TablePredicateFactory>((props, ref) => {
    const {store, getStyles} = useTableContext();
    const {id, data, label, classNames, className, styles, style, renderOption, vars, ...others} = useProps(
        'PlasmaTablePredicate',
        defaultProps,
        props,
    );

    const handleChange = (newValue: string) => {
        store.setPredicates((prev) => ({...prev, [id]: newValue}));
        store.setPagination((prev) => ({...prev, pageIndex: 0}));
    };

    const stylesApiProps = {classNames, styles};

    return (
        <Grid.Col
            span="content"
            order={TableComponentsOrder.Predicate}
            ref={ref}
            {...getStyles('predicate', {className, style, ...stylesApiProps})}
            {...others}
        >
            <Group gap="xs" {...getStyles('predicateWrapper', stylesApiProps)}>
                {label ? <Text {...getStyles('predicateLabel', stylesApiProps)}>{label}:</Text> : null}
                <Select
                    comboboxProps={{withinPortal: true}}
                    value={store.state.predicates[id]}
                    onChange={handleChange}
                    data={data}
                    aria-label={label ?? id}
                    searchable={data.length > 7}
                    renderOption={renderOption}
                    {...getStyles('predicateSelect', stylesApiProps)}
                />
            </Group>
        </Grid.Col>
    );
});
