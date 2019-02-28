import {mount} from 'enzyme';
import * as React from 'react';
import {DragDropContext} from 'react-dnd';
import TestBackend from 'react-dnd-test-backend';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {createMockStore, mockStore} from 'redux-test-utils';
import {DnDUtils} from '../../components/dragAndDrop/DnDUtils';
import {IReactVaporState} from '../../ReactVapor';
import {UUID} from '../UUID';
import {TestUtils} from './TestUtils';

const mockUUID = (generatedId: string = 'id') => {
    spyOn(UUID, 'generate').and.returnValue(generatedId);
};

const buildMockStore = (state: IReactVaporState = {}): mockStore<IReactVaporState> => createMockStore(state);

const mockTagContext = () => {
    DnDUtils.TagControlContext = (DecoratedClass: any) => DecoratedClass;
};

const DD = DragDropContext(TestBackend);

const renderComponent = (ComponentClass: any, props = {}, child: React.ReactNode = null) => {
    const store: Store<IReactVaporState> = TestUtils.buildStore();

    class Tester extends React.Component {
        render() {
            return (
                <Provider store={store}>
                    <ComponentClass {...props} >
                        {child}
                    </ComponentClass>
                </Provider>
            );
        }
    }

    const Draggable = DD(Tester);
    const wrapper = mount(
        <Draggable {...props} />,
    );

    return {
        wrapper,
        store,
    };
};

export const RTestUtils = {
    buildMockStore,
    mockUUID,
    mockTagContext,
    renderComponent,
};
