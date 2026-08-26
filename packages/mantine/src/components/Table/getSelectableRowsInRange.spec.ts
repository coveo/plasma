import {getSelectableRowsInRange} from './getSelectableRowsInRange.js';

describe('getSelectableRowsInRange', () => {
    const makeRow = (id: string, canSelect = true) => ({id, getCanSelect: () => canSelect});

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
