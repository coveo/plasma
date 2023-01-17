import {PlasmaState} from '../../../PlasmaState.js';
import {CollapsibleSelectors} from '../CollapsibleSelectors.js';

describe('CollapsibleSelectors', () => {
    it('should not throw and return false when passing a falsy id', () => {
        expect(CollapsibleSelectors.isExpanded({} as PlasmaState, undefined)).toBe(false);
        expect(CollapsibleSelectors.isExpanded({} as PlasmaState, null)).toBe(false);
        expect(CollapsibleSelectors.isExpanded({} as PlasmaState, '')).toBe(false);
    });

    it('should return the collapsible expanded status at the specified id', () => {
        const id = '0. 0';
        const state = {
            collapsibles: [{id, expanded: true}],
        };

        expect(CollapsibleSelectors.isExpanded(state, id)).toBe(true);
    });
});
