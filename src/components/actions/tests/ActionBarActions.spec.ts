import {IReduxAction} from '../../../utils/ReduxUtils';
import {ActionBarActions, IActionBarPayload, setYPosition} from '../ActionBarActions';

describe('ActionBarActions', () => {
    it('should create an action to set the y position of a table', () => {
        const id: string = 'some-id';
        const yPosition: number = 33;
        const expectedAction: IReduxAction<IActionBarPayload> = {
            type: ActionBarActions.setYPosition,
            payload: {
                id,
                yPosition,
            },
        };

        expect(setYPosition(id, yPosition)).toEqual(expectedAction);
    });
});
