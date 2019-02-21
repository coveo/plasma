import {createMockStore, mockStore} from 'redux-test-utils';
import {IReactVaporState} from '../../ReactVapor';
import {UUID} from '../UUID';

const mockUUID = (generatedId: string = 'id') => {
    spyOn(UUID, 'generate').and.returnValue(generatedId);
};

const buildMultilineStore = (state: IReactVaporState = {multilineIds: {}}): mockStore<IReactVaporState> => createMockStore(state);

export const RTestUtils = {
    buildMultilineStore,
    mockUUID,
};
