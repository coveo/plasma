import {areSelectionCheckboxesVisible} from './areSelectionCheckboxesVisible.js';

describe('areSelectionCheckboxesVisible', () => {
    it('returns false when multi-row selection is disabled', () => {
        expect(
            areSelectionCheckboxesVisible({
                multiRowSelectionEnabled: false,
                rowSelectionEnabled: true,
                getSelectedRows: () => [{}],
            }),
        ).toBe(false);
    });

    it('returns true when multi-row selection and row selection are enabled', () => {
        expect(
            areSelectionCheckboxesVisible({
                multiRowSelectionEnabled: true,
                rowSelectionEnabled: true,
                getSelectedRows: () => [],
            }),
        ).toBe(true);
    });

    it('returns true when row selection is disabled and selected rows exist', () => {
        expect(
            areSelectionCheckboxesVisible({
                multiRowSelectionEnabled: true,
                rowSelectionEnabled: false,
                getSelectedRows: () => [{}],
            }),
        ).toBe(true);
    });

    it('returns false when row selection is disabled and no selected rows exist', () => {
        expect(
            areSelectionCheckboxesVisible({
                multiRowSelectionEnabled: true,
                rowSelectionEnabled: false,
                getSelectedRows: () => [],
            }),
        ).toBe(false);
    });
});
