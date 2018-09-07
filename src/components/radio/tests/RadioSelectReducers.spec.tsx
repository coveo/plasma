import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {IRadioSelectActionPayload, removeRadioSelect, setRadioSelect} from '../RadioSelectActions';
import {IRadioSelectState, radioSelectInitialState, radioSelectsInitialState, radioSelectsReducer} from '../RadioSelectReducers';

describe('RadioSelect', () => {
    describe('RadioSelectReducers', () => {
        const genericAction: IReduxAction<IRadioSelectActionPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'some-radioselect',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const oldState: IRadioSelectState[] = undefined;
            const radioSelectsState: IRadioSelectState[] = radioSelectsReducer(oldState, genericAction);

            expect(radioSelectsState).toBe(radioSelectsInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: IRadioSelectState[] = [radioSelectInitialState];
            const radioSelectsState: IRadioSelectState[] = radioSelectsReducer(oldState, genericAction);

            expect(radioSelectsState).toBe(oldState);
        });

        it('should return the old state with one more IRadioSelectState when the action is "RadioSelectAction.set" and the id is not yet in the state', () => {
            let oldState: IRadioSelectState[] = radioSelectsInitialState;
            const action = setRadioSelect('idontexistinthestateyet', {value: 'anywoulddo'});
            let radioSelectsState: IRadioSelectState[] = radioSelectsReducer(oldState, action);

            expect(radioSelectsState.length).toBe(oldState.length + 1);
            expect(radioSelectsState.filter((radioSelect) => radioSelect.id === action.payload.id).length).toBe(1);

            oldState = radioSelectsState;
            action.payload.id = 'ialsodontexistinthestateyet';
            radioSelectsState = radioSelectsReducer(oldState, action);

            expect(radioSelectsState.length).toBe(oldState.length + 1);
            expect(radioSelectsState.filter((radioSelect) => radioSelect.id === action.payload.id).length).toBe(1);
        });

        describe('"RadioSelectAction.set" when id is arleady in the state', () => {
            it('should return the old state with the same number of IRadioSelectStatec and update the proper IRadioSelectState', () => {
                let oldState: IRadioSelectState[] = [{...radioSelectInitialState, id: 'somealreadyexistingradioselect'}];
                const radioSelectId = 'testRadioSelect';
                const action = setRadioSelect(radioSelectId, {value: 'anywoulddo'});
                let radioSelectsState: IRadioSelectState[] = radioSelectsReducer(oldState, action);

                expect(radioSelectsState.length).toBe(oldState.length + 1);
                expect(radioSelectsState.filter((radioSelect) => radioSelect.id === action.payload.id).length).toBe(1);

                oldState = radioSelectsState;
                action.payload.value = 'check if the value changed';
                radioSelectsState = radioSelectsReducer(oldState, action);

                expect(radioSelectsState.length).toBe(oldState.length);
                expect(_.findWhere(radioSelectsState, {id: action.payload.id}).value).toBe(action.payload.value);
                expect(_.reject(radioSelectsState, (radio) => radio.id === action.payload.id)).toEqual(_.reject(oldState, (radio) => radio.id === action.payload.id));
            });

            it('should not change the value if the value in the payload is also in the disabled values in the state', () => {
                let oldState: IRadioSelectState[] = [{...radioSelectInitialState, id: 'somealreadyexistingradioselect'}];
                const radioSelectId = 'testRadioSelect';
                const action = setRadioSelect(radioSelectId, {value: 'anywoulddo', disabledValues: ['disabledValue']});
                let radioSelectsState: IRadioSelectState[] = radioSelectsReducer(oldState, action);

                oldState = radioSelectsState;
                const secondAction = {...action, payload: {...action.payload, value: 'disabledValue'}};
                radioSelectsState = radioSelectsReducer(oldState, secondAction);

                expect(radioSelectsState.length).toBe(oldState.length);
                // check if value is still  the value of the first action
                expect(_.findWhere(radioSelectsState, {id: action.payload.id}).value).toBe(action.payload.value);
            });
        });

        it('should return the old state without the IRadioSelectState when the action is "RadioSelectAction.remove"', () => {
            const oldState: IRadioSelectState[] = [
                {
                    id: 'some-radioSelect1',
                    value: 'somevalue',
                    disabledValues: [],
                },
                {
                    id: 'some-radioSelect2',
                    value: 'somevalue2',
                    disabledValues: [],
                },
            ];
            const action: IReduxAction<IRadioSelectActionPayload> = removeRadioSelect('some-radioSelect1');
            const radioSelectsState: IRadioSelectState[] = radioSelectsReducer(oldState, action);

            expect(radioSelectsState.length).toBe(oldState.length - 1);
            expect(radioSelectsState.filter((radioSelect) => radioSelect.id === action.payload.id).length).toBe(0);
        });
    });
});
