import {Group, Select, SelectItem, Text} from '@mantine/core';
import {FunctionComponent} from 'react';

import {useTable} from './TableContext';

interface TablePredicateProps {
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

export const TablePredicate: FunctionComponent<TablePredicateProps> = ({id, data, label}) => {
    const {onChange, form} = useTable();

    const onUpdate = (newValue: string) => {
        form.setFieldValue('predicates', {...form.values.predicates, [id]: newValue});
        onChange?.();
    };

    return (
        <Group spacing="xs">
            {label ? <Text>{label}:</Text> : null}
            <Select
                withinPortal
                value={form.values.predicates[id]}
                onChange={onUpdate}
                data={data}
                aria-label={label ?? id}
                searchable={data.length > 7}
            />
        </Group>
    );
};
