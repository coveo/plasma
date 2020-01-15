import {RefreshCallBackActions} from '../RefeshCallbackActions';
import {IRefreshCallbackReducerState, refreshCallBackReducer, RefreshStatus} from '../RefreshCallbackReducer';

describe('RefreshCallbackReducer', () => {
    let state: IRefreshCallbackReducerState;

    describe('start', () => {
        it('should add the id in the state if not there"', () => {
            state = refreshCallBackReducer({}, RefreshCallBackActions.start('id'));

            expect(state['id']).toBe(RefreshStatus.started);
        });

        it('should set the element with the current id with the status "start"', () => {
            state = refreshCallBackReducer({id: RefreshStatus.stopped}, RefreshCallBackActions.start('id'));

            expect(state['id']).toBe(RefreshStatus.started);
        });
    });
    describe('stop', () => {
        it('should add the id in the state if not there"', () => {
            state = refreshCallBackReducer({}, RefreshCallBackActions.stop('id'));

            expect(state['id']).toBe(RefreshStatus.stopped);
        });

        it('should set the element with the current id with the status "stop"', () => {
            state = refreshCallBackReducer({id: RefreshStatus.inProgress}, RefreshCallBackActions.stop('id'));

            expect(state['id']).toBe(RefreshStatus.stopped);
        });
    });
    describe('inProgress', () => {
        it('should add the id in the state if not there"', () => {
            state = refreshCallBackReducer({}, RefreshCallBackActions.inProgress('id'));

            expect(state['id']).toBe(RefreshStatus.inProgress);
        });

        it('should set the element with the current id with the status "inProgress"', () => {
            state = refreshCallBackReducer({id: RefreshStatus.started}, RefreshCallBackActions.inProgress('id'));

            expect(state['id']).toBe(RefreshStatus.inProgress);
        });
    });
});
