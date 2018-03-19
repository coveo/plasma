import * as _ from 'underscore';

import { IReduxAction } from '../../../Index';
import { FlippableActions, IFlippablePayload } from '../FlippableActions';
import { flippablesInitialState, flippablesReducer, IFlippableState } from '../FlippableReducers';

describe('Flippable', () => {
  const GENERIC_ACTION: IReduxAction<IFlippablePayload> = {
    type: 'DO_SOMETHING',
    payload: {
      id: 'some-flippable',
    },
  };

  const BASE_FLIPPABLE_STATE: IFlippableState = {
    id: 'some-flippable',
    flipped: false,
  };

  describe('flippablesReducer', () => {
    const filterById = (actionId: string) => {
      return (flippable: IFlippableState) => flippable.id === actionId;
    };

    it('should return the default state if the action is undefined and the state is undefined', () => {
      const flippablesState: IFlippableState[] = flippablesReducer(undefined, GENERIC_ACTION);

      expect(flippablesState).toBe(flippablesInitialState);
    });

    it('should return the old state when the action is not defined', () => {
      const oldFlippables: IFlippableState[] = [_.extend({}, BASE_FLIPPABLE_STATE)];
      const newFlippables: IFlippableState[] = flippablesReducer(oldFlippables, GENERIC_ACTION);

      expect(newFlippables).toBe(oldFlippables);
    });

    it('should return the old state with one more IFlippableState when the action is "ADD_FLIPPABLE', () => {
      const oldFlippables: IFlippableState[] = flippablesInitialState;
      const action: IReduxAction<IFlippablePayload> = {
        type: FlippableActions.add,
        payload: {
          id: 'my-flippable-poney',
        },
      };
      const newFlippables: IFlippableState[] = flippablesReducer(oldFlippables, action);

      expect(newFlippables.length).toBe(oldFlippables.length + 1);
      expect(newFlippables.filter(filterById(action.payload.id)).length).toBe(1);
    });

    it('should return the old state with the specified flippable removed when the action is "REMOVE_FLIPPABLE"', () => {
      const oldFlippables: IFlippableState[] = [
        _.extend({}, BASE_FLIPPABLE_STATE),
        _.extend({}, BASE_FLIPPABLE_STATE, { id: 'flipping-cool' }),
        _.extend({}, BASE_FLIPPABLE_STATE, { id: 'bod-the-flippable' }),
      ];
      const action: IReduxAction<IFlippablePayload> = {
        type: FlippableActions.remove,
        payload: {
          id: 'flipping-cool',
        },
      };
      const newFlippables: IFlippableState[] = flippablesReducer(oldFlippables, action);

      expect(newFlippables.length).toBe(oldFlippables.length - 1);
      expect(newFlippables.filter(filterById(action.payload.id)).length).toBe(0);
    });

    it('should return the old state with when the action is "REMOVE_FLIPPABLE" and the flipable id ' +
      `doesn't exist`, () => {
        const oldFlippables: IFlippableState[] = [
          _.extend({}, BASE_FLIPPABLE_STATE),
          _.extend({}, BASE_FLIPPABLE_STATE, { id: 'flipping-cool' }),
          _.extend({}, BASE_FLIPPABLE_STATE, { id: 'bod-the-flippable' }),
        ];
        const action: IReduxAction<IFlippablePayload> = {
          type: FlippableActions.remove,
          payload: {
            id: 'some-random-flippable',
          },
        };
        const newFlippables: IFlippableState[] = flippablesReducer(oldFlippables, action);

        expect(newFlippables.length).toBe(oldFlippables.length);
        expect(newFlippables.filter(filterById(action.payload.id)).length).toBe(0);
      });
  });
});
