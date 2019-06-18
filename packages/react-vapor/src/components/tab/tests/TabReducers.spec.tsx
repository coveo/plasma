import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {ITabActionPayload, TabAction} from '../TabActions';
import {
    DEFAULT_GROUP_ID,
    ITabGroupState,
    ITabState,
    tabGroupInitialState,
    tabGroupReducer,
    tabGroupsInitialState,
    tabGroupsReducer,
    tabInitialState,
    tabReducer,
    tabsInitialState,
    tabsReducer,
} from '../TabReducers';

describe('Tab', () => {
    describe('TabReducers', () => {
        const genericAction: IReduxAction<ITabActionPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                groupId: undefined,
                id: 'some-tab',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const oldState: ITabState[] = undefined;
            const tabsState: ITabState[] = tabsReducer(oldState, genericAction);

            expect(tabsState).toBe(tabsInitialState);
        });

        it('should return the default state if the action is not defined and the state is undefined for one tab', () => {
            const oldState: ITabState = undefined;
            const tabState: ITabState = tabReducer(oldState, genericAction);

            expect(tabState).toBe(tabInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: ITabState[] = [tabInitialState];
            const tabsState: ITabState[] = tabsReducer(oldState, genericAction);

            expect(tabsState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one tab', () => {
            const oldState: ITabState = tabInitialState;
            const tabState: ITabState = tabReducer(oldState, genericAction);

            expect(tabState).toBe(oldState);
        });

        it('should return the old state with one more ITabState when the action is "TabAction.addTab"', () => {
            let oldState: ITabState[] = tabsInitialState;
            const action: IReduxAction<ITabActionPayload> = {
                type: TabAction.addTab,
                payload: {
                    groupId: undefined,
                    id: 'some-tab',
                },
            };
            let tabsState: ITabState[] = tabsReducer(oldState, action);

            expect(tabsState.length).toBe(oldState.length + 1);
            expect(tabsState.filter((tab) => tab.id === action.payload.id).length).toBe(1);

            oldState = tabsState;
            action.payload.id = 'some-tab2';
            tabsState = tabsReducer(oldState, action);

            expect(tabsState.length).toBe(oldState.length + 1);
            expect(tabsState.filter((tab) => tab.id === action.payload.id).length).toBe(1);
        });

        it('should return the old state without the ITabState when the action is "TabAction.removeTab"', () => {
            let oldState: ITabState[] = [
                {
                    id: 'some-tab2',
                    isSelected: true,
                },
                {
                    id: 'some-tab1',
                    isSelected: false,
                },
                {
                    id: 'some-tab3',
                    isSelected: false,
                },
            ];
            const action: IReduxAction<ITabActionPayload> = {
                type: TabAction.removeTab,
                payload: {
                    groupId: undefined,
                    id: 'some-tab1',
                },
            };
            let tabsState: ITabState[] = tabsReducer(oldState, action);

            expect(tabsState.length).toBe(oldState.length - 1);
            expect(tabsState.filter((tab) => tab.id === action.payload.id).length).toBe(0);

            oldState = tabsState;
            action.payload.id = 'some-tab2';
            tabsState = tabsReducer(oldState, action);

            expect(tabsState.length).toBe(oldState.length - 1);
            expect(tabsState.filter((tab) => tab.id === action.payload.id).length).toBe(0);
        });

        it('should select a tab when the action is "TabAction.selectTab"', () => {
            const oldState: ITabState[] = [
                {
                    id: 'some-tab1',
                    isSelected: false,
                },
                {
                    id: 'some-tab2',
                    isSelected: false,
                },
                {
                    id: 'some-tab3',
                    isSelected: true,
                },
            ];

            const action: IReduxAction<ITabActionPayload> = {
                type: TabAction.selectTab,
                payload: {
                    groupId: undefined,
                    id: 'some-tab1',
                },
            };
            const tabsState: ITabState[] = tabsReducer(oldState, action);

            expect(tabsState.length).toBe(oldState.length);
            expect(tabsState.filter((tab) => tab.id === action.payload.id)[0].isSelected).toBe(true);
            expect(tabsState.filter((tab) => tab.id === 'some-tab2')[0].isSelected).toBe(false);
            expect(tabsState.filter((tab) => tab.id === 'some-tab3')[0].isSelected).toBe(false);
        });
    });

    describe('TabGroupReducers', () => {
        const genericAction: IReduxAction<ITabActionPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                groupId: undefined,
                id: 'some-tab',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const oldState: ITabGroupState[] = undefined;
            const tabsState: ITabGroupState[] = tabGroupsReducer(oldState, genericAction);

            expect(tabsState).toBe(tabGroupsInitialState);
        });

        it('should return the default state if the action is not defined and the state is undefined for one tab group', () => {
            const oldState: ITabGroupState = undefined;
            const tabState: ITabGroupState = tabGroupReducer(oldState, genericAction);

            expect(tabState).toBe(tabGroupInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: ITabGroupState[] = [tabGroupInitialState];
            const tabsState: ITabGroupState[] = tabGroupsReducer(oldState, genericAction);

            expect(tabsState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one tab group', () => {
            const oldState: ITabGroupState = tabGroupInitialState;
            const tabState: ITabGroupState = tabGroupReducer(oldState, genericAction);

            expect(tabState).toBe(oldState);
        });

        it('should return the old state with one more ITabGroupState when the action is "TabAction.addTab"', () => {
            let oldState: ITabGroupState[] = tabGroupsInitialState;
            const action: IReduxAction<ITabActionPayload> = {
                type: TabAction.addTab,
                payload: {
                    groupId: undefined,
                    id: 'some-tab',
                },
            };
            let tabsState: ITabGroupState[] = tabGroupsReducer(oldState, action);

            expect(tabsState.length).toBe(oldState.length + 1);
            expect(tabsState.filter((tabGroup) => tabGroup.id === DEFAULT_GROUP_ID).length).toBe(1);

            oldState = tabsState;
            action.payload.groupId = 'some-group';

            tabsState = tabGroupsReducer(oldState, action);

            expect(tabsState.length).toBe(oldState.length + 1);
            expect(tabsState.filter((tabGroup) => tabGroup.id === action.payload.groupId).length).toBe(1);
        });

        it('should return the old state without the ITabGroupState when the action is "TabAction.removeTab" and no tab remains', () => {
            let oldState: ITabGroupState[] = [
                {
                    id: DEFAULT_GROUP_ID,
                    tabs: [
                        {
                            id: 'some-tab2',
                            isSelected: true,
                        },
                        {
                            id: 'some-tab1',
                            isSelected: false,
                        },
                    ],
                },
            ];
            const action: IReduxAction<ITabActionPayload> = {
                type: TabAction.removeTab,
                payload: {
                    groupId: undefined,
                    id: 'some-tab1',
                },
            };
            let tabsState: ITabGroupState[] = tabGroupsReducer(oldState, action);

            expect(tabsState.length).toBe(oldState.length);

            oldState = tabsState;
            action.payload.id = 'some-tab2';
            tabsState = tabGroupsReducer(oldState, action);

            expect(tabsState.length).toBe(oldState.length - 1);
            expect(tabsState.filter((tab) => tab.id === DEFAULT_GROUP_ID).length).toBe(0);
        });

        it('should select a tab when the action is "TabAction.selectTab"', () => {
            const GROUP_2_ID = 'group2';
            const oldState: ITabGroupState[] = [
                {
                    id: DEFAULT_GROUP_ID,
                    tabs: [
                        {
                            id: 'some-tab2',
                            isSelected: true,
                        },
                        {
                            id: 'some-tab1',
                            isSelected: false,
                        },
                    ],
                },
                {
                    id: GROUP_2_ID,
                    tabs: [
                        {
                            id: 'some-tab2',
                            isSelected: true,
                        },
                        {
                            id: 'some-tab1',
                            isSelected: false,
                        },
                    ],
                },
            ];

            const action: IReduxAction<ITabActionPayload> = {
                type: TabAction.selectTab,
                payload: {
                    groupId: undefined,
                    id: 'some-tab1',
                },
            };
            const tabsState: ITabGroupState[] = tabGroupsReducer(oldState, action);

            const defaultGroup = _.find(tabsState, (state: ITabGroupState) => state.id === DEFAULT_GROUP_ID);
            expect(defaultGroup.tabs.length).toBe(2);
            expect(defaultGroup.tabs.filter((tab) => tab.id === action.payload.id)[0].isSelected).toBe(true);
            expect(defaultGroup.tabs.filter((tab) => tab.id === 'some-tab2')[0].isSelected).toBe(false);

            const group2 = _.find(tabsState, (state: ITabGroupState) => state.id === GROUP_2_ID);
            expect(group2.tabs.length).toBe(2);
            expect(group2.tabs.filter((tab) => tab.id === action.payload.id)[0].isSelected).toBe(false);
            expect(group2.tabs.filter((tab) => tab.id === 'some-tab2')[0].isSelected).toBe(true);
        });
    });
});
