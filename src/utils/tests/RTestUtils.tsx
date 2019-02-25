import * as React from 'react';
import {createMockStore, mockStore} from 'redux-test-utils';
import {IReactVaporState} from '../../ReactVapor';
import {UUID} from '../UUID';
import TestBackend from 'react-dnd-test-backend';
import {DragDropContext} from 'react-dnd';
import {DnDUtils} from '../../components/dragAndDrop/DnDUtils';

const mockUUID = (generatedId: string = 'id') => {
    spyOn(UUID, 'generate').and.returnValue(generatedId);
};

const buildMultilineStore = (state: IReactVaporState = {multilineIds: {}}): mockStore<IReactVaporState> => createMockStore(state);

const wrapInTestContext = (DecoratedDraggableComponent: any): any => {
    @DragDropContext(TestBackend) // eslint-disable-line new-cap
    class TestContextContainer extends React.Component {
        render() {
            return DecoratedDraggableComponent;
        }
    }
    return TestContextContainer;
};

const mockTagContext = () => {
    DnDUtils.TagControlContext = (DecoratedClass: any) => DecoratedClass;
};

export const RTestUtils = {
    buildMultilineStore,
    mockUUID,
    wrapInTestContext,
    mockTagContext,
};
