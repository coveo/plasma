import {createSafeContext, GetStylesApi} from '@mantine/core';
import {Row, Table} from '@tanstack/table-core';
import {MutableRefObject, ReactElement} from 'react';
import {type PlasmaTableFactory} from './Table.js';
import {TableAction, TableLayout, type MultiRowSelectionMode} from './Table.types.js';
import {TableStore} from './use-table.js';

export interface TableContextValue<TData = unknown> {
    getStyles: GetStylesApi<PlasmaTableFactory>;
    store: TableStore<TData>;
    layouts: TableLayout[];
    getRowActions: (datum: TData[]) => TableAction[];
    getRowCanEdit: (datum: TData, index: number, row: Row<TData>) => boolean;
    multiRowSelectionMode: MultiRowSelectionMode;
    table: Table<TData>;
    containerRef: MutableRefObject<HTMLDivElement | null>;
    lastSelectedRowIndex: MutableRefObject<number | null>;
}

export interface TableProviderProps<T> {
    value: TableContextValue<T>;
    children: ReactElement;
}

export const [TableProvider, useTableContext] = createSafeContext<TableContextValue>(
    'Table component was not found in the tree',
) as [<TData>(props: TableProviderProps<TData>) => ReactElement, <TData>() => TableContextValue<TData>];
