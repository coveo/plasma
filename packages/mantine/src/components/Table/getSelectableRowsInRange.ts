interface SelectableRow {
    id: string;
    getCanSelect: () => boolean;
}

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
