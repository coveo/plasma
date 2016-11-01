import { ILastUpdatedAction, lastUpdatedActions } from '../LastUpdatedActions';
import {
  ILastUpdatedState, lastUpdatedComposite, lastUpdatedCompositeInitialState,
  lastUpdatedInitialState, lastUpdated
} from '../LastUpdatedReducers';

describe('Reducers', () => {

  describe('lastUpdateTime', () => {
    let genericAction: ILastUpdatedAction = {
      type: 'DO_SOMETHING',
      id: 'some-timer'
    };
    let initialDate: Date = new Date();

    it('should return the default state if the action is not defined and the state is undefined', () => {
      let oldState: ILastUpdatedState[] = undefined;
      let lastUpdateTimeState: ILastUpdatedState[] = lastUpdatedComposite(oldState, genericAction);

      expect(lastUpdateTimeState).toBe(lastUpdatedCompositeInitialState);
    });

    it('should return the default state if the action is not defined and the state is undefined for one timer', () => {
      let oldState: ILastUpdatedState = undefined;
      let lastUpdateTimeState: ILastUpdatedState = lastUpdated(oldState, genericAction);

      expect(lastUpdateTimeState).toBe(lastUpdatedInitialState);
    });

    it('should return the old state when the action is not defined', () => {
      let oldState: ILastUpdatedState[] = [lastUpdatedInitialState];
      let lastUpdateTimeState: ILastUpdatedState[] = lastUpdatedComposite(oldState, genericAction);

      expect(lastUpdateTimeState).toBe(oldState);
    });

    it('should return the old state when the action is not defined for one timer', () => {
      let oldState: ILastUpdatedState = lastUpdatedInitialState;
      let lastUpdateTimeState: ILastUpdatedState = lastUpdated(oldState, genericAction);

      expect(lastUpdateTimeState).toBe(oldState);
    });

    it('should return the old state with one more LastUpdateTimeState when the action is "lastUpdatedActions.addLastUpdated"', () => {
      let oldState: ILastUpdatedState[] = lastUpdatedCompositeInitialState;
      let action: ILastUpdatedAction = {
        type: lastUpdatedActions.addLastUpdated,
        id: 'some_timer'
      };
      let lastUpdateTimeState: ILastUpdatedState[] = lastUpdatedComposite(oldState, action);

      expect(lastUpdateTimeState.length).toBe(oldState.length + 1);

      oldState = lastUpdateTimeState;
      action.id = 'some-timer2';
      lastUpdateTimeState = lastUpdatedComposite(oldState, action);

      expect(lastUpdateTimeState.length).toBe(oldState.length + 1);
    });

    it('should return the old state without the LastUpdateTimeState with the timer id when the action is "lastUpdatedActions.removeLastUpdated"', () => {
      let oldState: ILastUpdatedState[] = [
        {
          id: 'some_timer2',
          time: initialDate
        }, {
          id: 'some_timer',
          time: initialDate
        }, {
          id: 'some_timer3',
          time: initialDate
        }
      ];
      let action: ILastUpdatedAction = {
        type: lastUpdatedActions.removeLastUpdated,
        id: 'some_timer'
      };
      let lastUpdateTimeState: ILastUpdatedState[] = lastUpdatedComposite(oldState, action);

      expect(lastUpdateTimeState.length).toBe(oldState.length - 1);
      expect(lastUpdateTimeState.filter(timer => timer.id === action.id).length).toBe(0);

      oldState = lastUpdateTimeState;
      action.id = 'some_timer2';
      lastUpdateTimeState = lastUpdatedComposite(oldState, action);

      expect(lastUpdateTimeState.length).toBe(oldState.length - 1);
      expect(lastUpdateTimeState.filter(timer => timer.id === action.id).length).toBe(0);
    });

    it('should return the time of a timer when the action is "lastUpdatedActions.changeLastUpdated"', () => {
      jasmine.clock().install();

      let oldState: ILastUpdatedState[] = [
        {
          id: 'some_timer2',
          time: initialDate
        }, {
          id: 'some_timer',
          time: initialDate
        }, {
          id: 'some_timer3',
          time: initialDate
        }
      ];
      let action: ILastUpdatedAction = {
        type: lastUpdatedActions.changeLastUpdated,
        id: 'some_timer'
      };
      let addedTime: number = 20001;

      jasmine.clock().tick(addedTime);

      let lastUpdateTimeState: ILastUpdatedState[] = lastUpdatedComposite(oldState, action);

      expect(lastUpdateTimeState.length).toBe(oldState.length);
      expect(lastUpdateTimeState.filter(timer => timer.id === action.id)[0].time).not.toBe(initialDate);

      jasmine.clock().uninstall();
    });
  });
});
