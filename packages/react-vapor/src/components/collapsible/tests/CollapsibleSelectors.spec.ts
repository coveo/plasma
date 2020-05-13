import {IReactVaporState} from '../../../ReactVapor';
import {CollapsibleSelectors} from '../CollapsibleSelectors';

describe('CollapsibleSelectors', () => {
    it('should not throw and return false when passing a falsy id', () => {
        expect(CollapsibleSelectors.isExpanded({} as IReactVaporState, undefined)).toBe(false);
        expect(CollapsibleSelectors.isExpanded({} as IReactVaporState, null)).toBe(false);
        expect(CollapsibleSelectors.isExpanded({} as IReactVaporState, '')).toBe(false);
    });

    it('should return the collapsible expanded status at the specified id', () => {
        const id = '0. 0';
        const state = {
            collapsibles: [{id, expanded: true}],
        };

        expect(CollapsibleSelectors.isExpanded(state, id)).toBe(true);
    });
});
