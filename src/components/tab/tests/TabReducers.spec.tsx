import { IReduxAction } from '../../../utils/ReduxUtils';
import { ITabActionPayload, TabAction } from '../TabActions';
import { ITabState, tabsInitialState, tabInitialState, tabsReducer, tabReducer } from '../TabReducers';

describe('Tab', () => {

  describe('TabReducers', () => {
    let genericAction: IReduxAction<ITabActionPayload> = {
      type: 'DO_SOMETHING',
      payload: {
        id: 'some-tab'
      }
    };

    it('should return the default state if the action is not defined and the state is undefined', () => {
      let oldState: ITabState[] = undefined;
      let tabsState: ITabState[] = tabsReducer(oldState, genericAction);

      expect(tabsState).toBe(tabsInitialState);
    });

    it('should return the default state if the action is not defined and the state is undefined for one tab', () => {
      let oldState: ITabState = undefined;
      let tabState: ITabState = tabReducer(oldState, genericAction);

      expect(tabState).toBe(tabInitialState);
    });

    it('should return the old state when the action is not defined', () => {
      let oldState: ITabState[] = [tabInitialState];
      let tabsState: ITabState[] = tabsReducer(oldState, genericAction);

      expect(tabsState).toBe(oldState);
    });

    it('should return the old state when the action is not defined for one tab', () => {
      let oldState: ITabState = tabInitialState;
      let tabState: ITabState = tabReducer(oldState, genericAction);

      expect(tabState).toBe(oldState);
    });

    it('should return the old state with one more ITabState when the action is "TabAction.addTab"', () => {
      let oldState: ITabState[] = tabsInitialState;
      let action: IReduxAction<ITabActionPayload> = {
        type: TabAction.addTab,
        payload: {
          id: 'some-tab'
        }
      };
      let tabsState: ITabState[] = tabsReducer(oldState, action);

      expect(tabsState.length).toBe(oldState.length + 1);
      expect(tabsState.filter(tab => tab.id === action.payload.id).length).toBe(1);

      oldState = tabsState;
      action.payload.id = 'some-tab2';
      tabsState = tabsReducer(oldState, action);

      expect(tabsState.length).toBe(oldState.length + 1);
      expect(tabsState.filter(tab => tab.id === action.payload.id).length).toBe(1);
    });

    it('should return the old state without the ITabState when the action is "TabAction.removeTab"', () => {
      let oldState: ITabState[] = [
        {
          id: 'some-tab2',
          isSelected: true
        }, {
          id: 'some-tab1',
          isSelected: false
        }, {
          id: 'some-tab3',
          isSelected: false
        }
      ];
      let action: IReduxAction<ITabActionPayload> = {
        type: TabAction.removeTab,
        payload: {
          id: 'some-tab1'
        }
      };
      let tabsState: ITabState[] = tabsReducer(oldState, action);

      expect(tabsState.length).toBe(oldState.length - 1);
      expect(tabsState.filter(tab => tab.id === action.payload.id).length).toBe(0);

      oldState = tabsState;
      action.payload.id = 'some-tab2';
      tabsState = tabsReducer(oldState, action);

      expect(tabsState.length).toBe(oldState.length - 1);
      expect(tabsState.filter(tab => tab.id === action.payload.id).length).toBe(0);
    });

    it('should select a tab when the action is "TabAction.selectTab"', () => {
      let oldState: ITabState[] = [
        {
          id: 'some-tab1',
          isSelected: false
        }, {
          id: 'some-tab2',
          isSelected: false
        }, {
          id: 'some-tab3',
          isSelected: true
        }
      ];

      let action: IReduxAction<ITabActionPayload> = {
        type: TabAction.selectTab,
        payload: {
          id: 'some-tab1'
        }
      };
      let tabsState: ITabState[] = tabsReducer(oldState, action);

      expect(tabsState.length).toBe(oldState.length);
      expect(tabsState.filter(tab => tab.id === action.payload.id)[0].isSelected).toBe(true);
      expect(tabsState.filter(tab => tab.id === 'some-tab2')[0].isSelected).toBe(false);
      expect(tabsState.filter(tab => tab.id === 'some-tab3')[0].isSelected).toBe(false);
    });
  });
});
