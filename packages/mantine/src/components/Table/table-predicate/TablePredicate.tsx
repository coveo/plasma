import {
    Box,
    BoxProps,
    ComboboxData,
    CompoundStylesApiProps,
    factory,
    Factory,
    Group,
    Select,
    SelectProps,
    Text,
    useProps,
} from '@mantine/core';
import {FunctionComponent} from 'react';

import {useTableContext} from '../TableContext.js';

export type TablePredicateStylesNames = 'predicate' | 'predicateWrapper' | 'predicateLabel' | 'predicateSelect';

export interface TablePredicateProps
    extends
        BoxProps,
        Pick<SelectProps, 'renderOption' | 'comboboxProps'>,
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

const defaultProps = {} satisfies Partial<TablePredicateProps>;

export const TablePredicate: FunctionComponent<TablePredicateProps> = factory<TablePredicateFactory>((props) => {
    const {store, getStyles} = useTableContext();
    const {id, data, label, classNames, className, styles, style, renderOption, comboboxProps, vars, ref, ...others} =
        useProps('PlasmaTablePredicate', defaultProps, props);

    const handleChange = (newValue: string | null) => {
        store.setPredicates((prev) => ({...prev, [id]: newValue ?? ''}));
        store.setPagination((prev) => ({...prev, page: 0}));
    };

    const stylesApiProps = {classNames, styles};
    return (
        <Box ref={ref} {...getStyles('predicate', {className, style, ...stylesApiProps})} {...others}>
            <Group gap="xs" wrap="nowrap" {...getStyles('predicateWrapper', stylesApiProps)}>
                {label ? <Text {...getStyles('predicateLabel', stylesApiProps)}>{label}:</Text> : null}
                <Select
                    comboboxProps={{withinPortal: true, ...comboboxProps}}
                    value={store.state.predicates[id]}
                    onChange={handleChange}
                    data={data}
                    aria-label={label ?? id}
                    searchable={data.length > 7}
                    renderOption={renderOption}
                    scrollAreaProps={{type: 'always'}}
                    {...getStyles('predicateSelect', stylesApiProps)}
                />
            </Group>
        </Box>
    );
});

TablePredicate.displayName = 'Table.Predicate';
