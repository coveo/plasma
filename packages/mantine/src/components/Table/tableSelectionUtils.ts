import type {Row} from '@tanstack/table-core';
import type {TableState, TableStore} from './use-table.js';

interface SelectableRow {
    id: string;
    getCanSelect: () => boolean;
}

interface SelectionRow<T> extends SelectableRow {
    original: T;
}

type SelectionVisibilityStore<T> = Pick<
    TableStore<T>,
    'multiRowSelectionEnabled' | 'rowSelectionEnabled' | 'getSelectedRows'
>;

type RowSelectionStore<T> = Pick<TableStore<T>, 'multiRowSelectionEnabled' | 'rowSelectionEnabled'>;

interface RangeSelectionOptions<T, TRow extends SelectionRow<T>> {
    row: TRow;
    rows: TRow[];
    anchorId: string | null;
}

export interface RangeSelection<TRow> {
    rows: TRow[];
    nextAnchorId: string;
}

interface RangeSelectionMouseEvent {
    shiftKey: boolean;
    currentTarget: HTMLElement;
    preventDefault: () => void;
}

export const areSelectionCheckboxesVisible = <T>(store: SelectionVisibilityStore<T>): boolean =>
    store.multiRowSelectionEnabled && (!!store.rowSelectionEnabled || store.getSelectedRows().length > 0);

export const isRowSelectionPredicateRejected = <T>(row: Row<T>, store: TableStore<T>): boolean =>
    typeof store.rowSelectionEnabled === 'function' && !store.rowSelectionEnabled(row);

export const getSelectableRowsInRange = <TRow extends SelectableRow>(
    rows: TRow[],
    anchorId: string,
    targetId: string,
): TRow[] | null => {
    const anchorIndex = rows.findIndex(({id}) => id === anchorId);
    const targetIndex = rows.findIndex(({id}) => id === targetId);

    if (anchorIndex === -1 || targetIndex === -1) {
        return null;
    }

    const startIndex = Math.min(anchorIndex, targetIndex);
    const endIndex = Math.max(anchorIndex, targetIndex);
    return rows.slice(startIndex, endIndex + 1).filter((row) => row.getCanSelect());
};

export const getRangeSelection = <T, TRow extends SelectionRow<T>>({
    row,
    rows,
    anchorId,
}: RangeSelectionOptions<T, TRow>): RangeSelection<TRow> => {
    const selectableRows = anchorId ? getSelectableRowsInRange(rows, anchorId, row.id) : null;

    return {
        rows: selectableRows ?? [row],
        nextAnchorId: selectableRows ? (anchorId ?? row.id) : row.id,
    };
};

export const selectRange = <T, TRow extends SelectionRow<T>>(
    currentSelection: TableState<T>['rowSelection'],
    rows: TRow[],
): TableState<T>['rowSelection'] => {
    const nextSelection = {...currentSelection};

    rows.forEach(({id, original}) => {
        nextSelection[id] = original;
    });

    return nextSelection;
};

export const preventRangeSelectionTextSelection = <T>(
    event: RangeSelectionMouseEvent,
    row: SelectableRow,
    store: RowSelectionStore<T>,
) => {
    if (event.shiftKey && store.multiRowSelectionEnabled && store.rowSelectionEnabled && row.getCanSelect()) {
        event.preventDefault();
        const {ownerDocument} = event.currentTarget;
        const clearTextSelection = () => ownerDocument.getSelection()?.removeAllRanges();
        clearTextSelection();
        ownerDocument.defaultView?.requestAnimationFrame(clearTextSelection);
    }
};
