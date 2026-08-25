import type {TableStore} from '../use-table.js';

type SelectionVisibilityStore<T> = Pick<
    TableStore<T>,
    'multiRowSelectionEnabled' | 'rowSelectionEnabled' | 'getSelectedRows'
>;

export const areSelectionCheckboxesVisible = <T>(store: SelectionVisibilityStore<T>): boolean =>
    store.multiRowSelectionEnabled && (store.rowSelectionEnabled || store.getSelectedRows().length > 0);
