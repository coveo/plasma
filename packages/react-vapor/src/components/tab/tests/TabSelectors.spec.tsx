import {DEFAULT_GROUP_ID, ITabGroupState} from '../TabReducers';
import {TabSelectors} from '../TabSelectors';

describe('TabSelector', () => {
    const ownProps = {
        groupId: 'dongle',
    };
    describe('getTabGroup', () => {
        it('should return undefined if groupId does not match with tabs', () => {
            const tabGroup: ITabGroupState = TabSelectors.getTabGroup(
                {
                    tabs: [
                        {
                            id: DEFAULT_GROUP_ID,
                            tabs: [
                                {id: 'coulili-zazou', isSelected: true},
                                {id: 'gros-boudesse', isSelected: false},
                            ],
                        },
                    ],
                },
                ownProps
            );
            expect(tabGroup).toBe(undefined);
        });

        it('should return tabs that have the matching the tabs id', () => {
            const tabGroupState = {
                tabs: [
                    {
                        id: DEFAULT_GROUP_ID,
                        tabs: [
                            {id: 'coulili-zazou', isSelected: true},
                            {id: 'gros-boudesse', isSelected: false},
                        ],
                    },
                    {
                        id: 'not-matching-tabs',
                        tabs: [
                            {id: 'forever', isSelected: true},
                            {id: 'alone', isSelected: false},
                        ],
                    },
                ],
            };
            const tabGroup: ITabGroupState = TabSelectors.getTabGroup(tabGroupState, {});
            const expectedTabGroup = tabGroupState.tabs[0];
            expect(tabGroup).toEqual(expectedTabGroup);
        });
    });
});
