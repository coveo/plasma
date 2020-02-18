import {IReactVaporState} from '../../../ReactVapor';
import {SubNavigationSelector} from '../SubNavigationSelector';

describe('SubNavigationSelector', () => {
    const defaultState: IReactVaporState = {
        subNavigations: [
            {
                id: '🌻',
                selected: 'FloweyTheFlower',
            },
        ],
    };

    describe('getItem', () => {
        it('should return falsy if the SubNavigation is not in the state', () => {
            expect(SubNavigationSelector.getSubNavigation(defaultState, '🌼')).toBeFalsy();
        });

        it('should return falsy if the id is empty', () => {
            expect(SubNavigationSelector.getSubNavigation(defaultState, '')).toBeFalsy();
        });

        it('should return the current state if the SubNavigation is in the state', () => {
            const subNavigation = defaultState.subNavigations[0];

            expect(SubNavigationSelector.getSubNavigation(defaultState, '🌻')).toEqual(subNavigation);
        });
    });

    describe('getItemSelected', () => {
        it('should return an empty string if the SubNavigation is not in the state', () => {
            expect(SubNavigationSelector.getSelectedItem(defaultState, '🌼')).toEqual('');
        });

        it('should return an empty string if the id is empty', () => {
            expect(SubNavigationSelector.getSelectedItem(defaultState, '')).toEqual('');
        });

        it('should return the selected item if the SubNavigation is in the state', () => {
            const selectedItem = defaultState.subNavigations[0].selected;

            expect(SubNavigationSelector.getSelectedItem(defaultState, '🌻')).toEqual(selectedItem);
        });
    });
});
