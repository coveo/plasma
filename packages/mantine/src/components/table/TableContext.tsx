import {createSafeContext, GetStylesApi} from '@mantine/core';
import {Table} from '@tanstack/table-core';
import {MutableRefObject, ReactElement} from 'react';
import {type PlasmaTableFactory} from './Table.js';
import {TableAction, TableLayout} from './Table.types';
import {TableStore} from './use-table.js';

export interface TableContextValue<TData = unknown> {
    getStyles: GetStylesApi<PlasmaTableFactory>;
    store: TableStore<TData>;
    layouts: TableLayout[];
    getRowActions: (datum: TData[]) => TableAction[];
    table: Table<TData>;
    containerRef: MutableRefObject<HTMLDivElement>;
}

export interface TableProviderProps<T> {
    value: TableContextValue<T>;
    children: JSX.Element;
}

export const [TableProvider, useTableContext] = createSafeContext<TableContextValue>(
    'Table component was not found in the tree',
) as [<TData>(props: TableProviderProps<TData>) => ReactElement, <TData>() => TableContextValue<TData>];
