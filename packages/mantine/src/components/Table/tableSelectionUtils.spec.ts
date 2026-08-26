import {
    areSelectionCheckboxesVisible,
    getRangeSelection,
    getSelectableRowsInRange,
    preventRangeSelectionTextSelection,
    selectRange,
} from './tableSelectionUtils.js';

describe('tableSelectionUtils', () => {
    const makeRow = (id: string, canSelect = true, isSelected = false) => ({
        id,
        original: {id},
        getCanSelect: () => canSelect,
        getIsSelected: () => isSelected,
    });

    const makeStore = (overrides: Record<string, unknown> = {}) => ({
        multiRowSelectionEnabled: true,
        rowSelectionEnabled: true,
        rowSelectionForced: false,
        getSelectedRows: () => [],
        ...overrides,
    });

    describe('areSelectionCheckboxesVisible', () => {
        it('returns false when multi-row selection is disabled', () => {
            expect(areSelectionCheckboxesVisible(makeStore({multiRowSelectionEnabled: false}))).toBe(false);
        });

        it('returns true when multi-row selection and row selection are enabled', () => {
            expect(areSelectionCheckboxesVisible(makeStore())).toBe(true);
        });

        it('returns true when row selection is disabled and selected rows exist', () => {
            expect(
                areSelectionCheckboxesVisible(makeStore({rowSelectionEnabled: false, getSelectedRows: () => [{}]})),
            ).toBe(true);
        });

        it('returns false when row selection is disabled and no selected rows exist', () => {
            expect(areSelectionCheckboxesVisible(makeStore({rowSelectionEnabled: false}))).toBe(false);
        });
    });

    describe('getSelectableRowsInRange', () => {
        it('returns selectable rows between the anchor and target in displayed order', () => {
            const rows = [makeRow('1'), makeRow('2'), makeRow('3'), makeRow('4')];

            expect(getSelectableRowsInRange(rows, '2', '4')).toEqual(rows.slice(1));
            expect(getSelectableRowsInRange(rows, '4', '2')).toEqual(rows.slice(1));
        });

        it('skips rows that cannot be selected', () => {
            const rows = [makeRow('1'), makeRow('2', false), makeRow('3')];

            expect(getSelectableRowsInRange(rows, '1', '3')).toEqual([rows[0], rows[2]]);
        });

        it('returns null when the anchor or target is not displayed', () => {
            const rows = [makeRow('1'), makeRow('2')];

            expect(getSelectableRowsInRange(rows, 'missing', '2')).toBeNull();
            expect(getSelectableRowsInRange(rows, '1', 'missing')).toBeNull();
        });
    });

    describe('getRangeSelection', () => {
        it('resolves a selectable range and preserves its anchor', () => {
            const rows = [makeRow('1'), makeRow('2', false), makeRow('3')];

            expect(
                getRangeSelection({
                    row: rows[2],
                    rows,
                    anchorId: '1',
                }),
            ).toEqual({rows: [rows[0], rows[2]], nextAnchorId: '1'});
        });

        it('selects only the target and establishes a new anchor when the range is unavailable', () => {
            const row = makeRow('2');

            expect(
                getRangeSelection({
                    row,
                    rows: [row],
                    anchorId: 'missing',
                }),
            ).toEqual({rows: [row], nextAnchorId: '2'});
        });
    });

    describe('selectRange', () => {
        it('adds range members while preserving selections outside the range', () => {
            const rows = [makeRow('2'), makeRow('3')];

            expect(selectRange({'1': {id: '1'}}, rows)).toEqual({
                '1': {id: '1'},
                '2': {id: '2'},
                '3': {id: '3'},
            });
        });
    });

    describe('preventRangeSelectionTextSelection', () => {
        it('prevents and clears browser text selection during a selectable Shift interaction', async () => {
            const preventDefault = vi.fn();
            const removeAllRanges = vi.fn();
            const getSelection = vi.spyOn(document, 'getSelection').mockReturnValue({removeAllRanges} as Selection);

            preventRangeSelectionTextSelection(
                {shiftKey: true, currentTarget: document.body, preventDefault},
                makeRow('1'),
                makeStore(),
            );

            expect(preventDefault).toHaveBeenCalledOnce();
            await vi.waitFor(() => expect(removeAllRanges).toHaveBeenCalledTimes(2));
            getSelection.mockRestore();
        });
    });
});
