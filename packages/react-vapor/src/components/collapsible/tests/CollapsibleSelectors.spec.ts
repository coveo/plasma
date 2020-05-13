import {IReactVaporState} from '../../../ReactVapor';
import {CollapsibleSelectors} from '../CollapsibleSelectors';

describe('CollapsibleSelectors', () => {
    it('should not throw and return undefined when passing a falsy id', () => {
        expect(CollapsibleSelectors.isExpanded({} as IReactVaporState, undefined)).toBeUndefined();
        expect(CollapsibleSelectors.isExpanded({} as IReactVaporState, null)).toBeUndefined();
        expect(CollapsibleSelectors.isExpanded({} as IReactVaporState, '')).toBeUndefined();
    });

    it('should return the collapsible expanded status at the specified id', () => {
        const id = '0. 0';
        const state = {
            collapsibles: [{id, expanded: true}],
        };

        expect(CollapsibleSelectors.isExpanded(state, id)).toBe(true);
    });
});
