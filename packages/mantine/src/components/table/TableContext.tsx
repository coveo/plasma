import {DateRangePickerValue} from '@mantine/dates';
import {UseFormReturnType} from '@mantine/form';
import {TableState} from '@tanstack/react-table';
import {createContext, Dispatch, RefObject} from 'react';

export type onTableChangeEvent = (params: TableState & TableFormType) => void;

export type TableFormType = {
    /**
     * Object containing the table predicates and their selected values
     *
     * @example {type: "LONG", origin: "system"}
     */
    predicates: Record<string, string>;
    /**
     * Selected date range in the table
     *
     * @example [new Date(2022, 0, 1), new Date(2022, 0, 31)]
     */
    dateRange: DateRangePickerValue;
};

type TableContextType = {
    /**
     * Function to call when the table needs an update
     */
    onChange: () => void;
    /**
     * Internal state of the table
     *
     * @see https://tanstack.com/table/v8/docs/api/core/table#state
     */
    state: TableState;
    /**
     * Function to update the table state
     */
    setState: Dispatch<(prevState: TableState) => TableState>;
    /**
     * Function that clears the filter and predicates
     */
    clearFilters: () => void;
    /**
     * Function that returns the selected row if any.
     */
    getSelectedRow: () => any | null;
    /**
     * Function that returns an array of the selected rows. Most useful when multi row selection is enabled.
     */
    getSelectedRows: () => any[];
    /**
     * Function that clear the selected row
     */
    clearSelection: () => void;
    /**
     * Form used to handle predicates and dateRange
     */
    form: UseFormReturnType<TableFormType>;
    /**
     * Table container ref
     */
    containerRef: RefObject<HTMLDivElement>;
    multiRowSelectionEnabled: boolean;

    /**
     * Function that returns the number of pages
     */
    getPageCount: () => number;
};

export const TableContext = createContext<TableContextType | null>(null);
