import {IReduxAction} from '../../../utils/ReduxUtils';
import {setModalSelect, IModalSelectActionPayload, removeModalSelect, ModalSelectActions} from '../ModalSelectActions';

const MODAL_SELECT_ID: string = 'the-item-filter';

describe('Modal Select', () => {
    describe('ModalSelectActions', () => {
        it('should create an action to change the modal select value', () => {
            const value: string = 'the value';
            const expectedAction: IReduxAction<IModalSelectActionPayload> = {
                type: ModalSelectActions.set,
                payload: {
                    id: MODAL_SELECT_ID,
                    value,
                },
            };

            expect(setModalSelect(MODAL_SELECT_ID, value)).toEqual(expectedAction);
        });

        it('should create an action to remove the modal select', () => {
            const expectedAction: IReduxAction<IModalSelectActionPayload> = {
                type: ModalSelectActions.remove,
                payload: {
                    id: MODAL_SELECT_ID,
                },
            };

            expect(removeModalSelect(MODAL_SELECT_ID)).toEqual(expectedAction);
        });
    });
});
