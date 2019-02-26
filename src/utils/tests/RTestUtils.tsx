import {mount} from 'enzyme';
import * as React from 'react';
import {DragDropContext} from 'react-dnd';
import TestBackend from 'react-dnd-test-backend';
import {Provider} from 'react-redux';
import {createMockStore, mockStore} from 'redux-test-utils';
import {DnDUtils} from '../../components/dragAndDrop/DnDUtils';
import {IReactVaporState} from '../../ReactVapor';
import {TestUtils} from '../TestUtils';
import {UUID} from '../UUID';
import {Store} from 'redux';

const mockUUID = (generatedId: string = 'id') => {
    spyOn(UUID, 'generate').and.returnValue(generatedId);
};

const buildMockStore = (state: IReactVaporState = {}): mockStore<IReactVaporState> => createMockStore(state);

const mockTagContext = () => {
    DnDUtils.TagControlContext = (DecoratedClass: any) => DecoratedClass;
};

const DD = DragDropContext(TestBackend);

const renderComponent = (ComponentClass: any, props = {}) => {
    const store: Store<IReactVaporState> = TestUtils.buildStore();

    class Tester extends React.Component {
        render() {
            return (
                <Provider store={store}>
                    <ComponentClass {...props} />
                </Provider>
            );
        }
    }

    const Draggable = DD(Tester);
    const ret = mount(
        <Draggable/>,
    );

    return {
        ret,
        store,
    };
};

export const RTestUtils = {
    buildMockStore,
    mockUUID,
    mockTagContext,
    renderComponent,
};
