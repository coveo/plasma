import {IReduxAction} from '../../../utils/ReduxUtils';
import {ILastUpdatedPayload, LastUpdatedActions} from '../LastUpdatedActions';
import {
    ILastUpdatedState,
    lastUpdatedCompositeInitialState,
    lastUpdatedCompositeReducer,
    lastUpdatedInitialState,
    lastUpdatedReducer,
} from '../LastUpdatedReducers';

describe('LastUpdated', () => {
    describe('LastUpdatedReducers', () => {
        const genericAction: IReduxAction<ILastUpdatedPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'some-timer',
            },
        };
        const initialDate: Date = new Date();

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const lastUpdateTimeState: ILastUpdatedState[] = lastUpdatedCompositeReducer(undefined, genericAction);

            expect(lastUpdateTimeState).toBe(lastUpdatedCompositeInitialState);
        });

        it('should return the default state if the action is not defined and the state is undefined for one timer', () => {
            const lastUpdateTimeState: ILastUpdatedState = lastUpdatedReducer(undefined, genericAction);

            expect(lastUpdateTimeState).toBe(lastUpdatedInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: ILastUpdatedState[] = [lastUpdatedInitialState];
            const lastUpdateTimeState: ILastUpdatedState[] = lastUpdatedCompositeReducer(oldState, genericAction);

            expect(lastUpdateTimeState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one timer', () => {
            const oldState: ILastUpdatedState = lastUpdatedInitialState;
            const lastUpdateTimeState: ILastUpdatedState = lastUpdatedReducer(oldState, genericAction);

            expect(lastUpdateTimeState).toBe(oldState);
        });

        it('should return the old state with one more LastUpdateTimeState when the action is "lastUpdatedActions.addLastUpdated"', () => {
            let oldState: ILastUpdatedState[] = lastUpdatedCompositeInitialState;
            const action: IReduxAction<ILastUpdatedPayload> = {
                type: LastUpdatedActions.addLastUpdated,
                payload: {
                    id: 'some_timer',
                },
            };
            let lastUpdateTimeState: ILastUpdatedState[] = lastUpdatedCompositeReducer(oldState, action);

            expect(lastUpdateTimeState.length).toBe(oldState.length + 1);

            oldState = lastUpdateTimeState;
            action.payload.id = 'some-timer2';
            lastUpdateTimeState = lastUpdatedCompositeReducer(oldState, action);

            expect(lastUpdateTimeState.length).toBe(oldState.length + 1);
        });

        it('should return the old state without the LastUpdateTimeState with the timer id when the action is "lastUpdatedActions.removeLastUpdated"', () => {
            let oldState: ILastUpdatedState[] = [
                {
                    id: 'some_timer2',
                    time: initialDate,
                },
                {
                    id: 'some_timer',
                    time: initialDate,
                },
                {
                    id: 'some_timer3',
                    time: initialDate,
                },
            ];
            const action: IReduxAction<ILastUpdatedPayload> = {
                type: LastUpdatedActions.removeLastUpdated,
                payload: {
                    id: 'some_timer',
                },
            };
            let lastUpdateTimeState: ILastUpdatedState[] = lastUpdatedCompositeReducer(oldState, action);

            expect(lastUpdateTimeState.length).toBe(oldState.length - 1);
            expect(lastUpdateTimeState.filter((timer) => timer.id === action.payload.id).length).toBe(0);

            oldState = lastUpdateTimeState;
            action.payload.id = 'some_timer2';
            lastUpdateTimeState = lastUpdatedCompositeReducer(oldState, action);

            expect(lastUpdateTimeState.length).toBe(oldState.length - 1);
            expect(lastUpdateTimeState.filter((timer) => timer.id === action.payload.id).length).toBe(0);
        });

        it('should return the time of a timer when the action is "lastUpdatedActions.changeLastUpdated"', () => {
            jasmine.clock().install();

            const oldState: ILastUpdatedState[] = [
                {
                    id: 'some_timer2',
                    time: initialDate,
                },
                {
                    id: 'some_timer',
                    time: initialDate,
                },
                {
                    id: 'some_timer3',
                    time: initialDate,
                },
            ];
            const action: IReduxAction<ILastUpdatedPayload> = {
                type: LastUpdatedActions.changeLastUpdated,
                payload: {
                    id: 'some_timer',
                },
            };
            const addedTime: number = 20001;

            jasmine.clock().tick(addedTime);

            const lastUpdateTimeState: ILastUpdatedState[] = lastUpdatedCompositeReducer(oldState, action);

            expect(lastUpdateTimeState.length).toBe(oldState.length);
            expect(lastUpdateTimeState.filter((timer) => timer.id === action.payload.id)[0].time).not.toBe(initialDate);

            jasmine.clock().uninstall();
        });
    });
});
