import {TabConstants} from '../TabConstants';
import {ITabGroupState, ITabState} from '../TabReducers';
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
                            id: TabConstants.DefaultGroupId,
                            tabs: [
                                {id: 'coulili-zazou', isSelected: true},
                                {id: 'gros-boudesse', isSelected: false},
                            ],
                        },
                    ],
                },
                ownProps,
            );

            expect(tabGroup).toBe(undefined);
        });

        it('should return tabs that have the matching the tabs id', () => {
            const tabGroupState = {
                tabs: [
                    {
                        id: TabConstants.DefaultGroupId,
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

    describe('getTabSelected', () => {
        it('should return the selected tab', () => {
            const tabGroupState = {
                id: TabConstants.DefaultGroupId,
                tabs: [
                    {id: 'coulili-zazou', isSelected: true},
                    {id: 'gros-boudesse', isSelected: false},
                ],
            };

            expect(TabSelectors.getSelectedTab.resultFunc(tabGroupState)).toEqual({
                id: 'coulili-zazou',
                isSelected: true,
            });
        });

        it('should return false if no tabs are selected', () => {
            const tabGroupState = {
                id: TabConstants.DefaultGroupId,
                tabs: [
                    {id: 'coulili-zazou', isSelected: false},
                    {id: 'gros-boudesse', isSelected: false},
                ],
            };

            expect(TabSelectors.getSelectedTab.resultFunc(tabGroupState)).toBe(undefined);
        });
    });

    describe('getTab', () => {
        it('should return the tab with the corresponding id', () => {
            const tabGroupState = {
                tabs: [
                    {
                        id: TabConstants.DefaultGroupId,
                        tabs: [
                            {id: 'gabriel quinoa', isSelected: true},
                            {id: 'el bourde', isSelected: false},
                        ],
                    },
                ],
            };

            const tab: ITabState = TabSelectors.getTab(tabGroupState, {id: 'gabriel quinoa'});
            const expectedTabGroup = tabGroupState.tabs[0].tabs[0];

            expect(tab).toEqual(expectedTabGroup);
        });

        it('should return undefined if no tabs have the provided id', () => {
            const tabGroupState = {
                tabs: [
                    {
                        id: TabConstants.DefaultGroupId,
                        tabs: [
                            {id: 'gabriel quinoa', isSelected: true},
                            {id: 'el bourde', isSelected: false},
                        ],
                    },
                ],
            };

            const tab: ITabState = TabSelectors.getTab(tabGroupState, {id: 'olive tailleur'});

            expect(tab).toEqual(undefined);
        });
    });
});
