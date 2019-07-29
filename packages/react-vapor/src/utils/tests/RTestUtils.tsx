import {mount} from 'enzyme';
import * as React from 'react';
import {DragDropContext} from 'react-dnd';
import TestBackend from 'react-dnd-test-backend';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {DnDUtils} from '../../components/dragAndDrop/DnDUtils';
import {IReactVaporState} from '../../ReactVapor';
import {UUID} from '../UUID';
import {TestUtils} from './TestUtils';

const mockUUID = (generatedId: string = 'id') => {
    spyOn(UUID, 'generate').and.returnValue(generatedId);
};

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
                    <ComponentClass {...props}>{child}</ComponentClass>
                </Provider>
            );
        }
    }

    const Draggable = DD(Tester);
    const wrapper = mount(<Draggable {...props} />);

    return {
        wrapper,
        store,
    };
};

const defaultId: string = 'other';

const addHTMLElementWithId = (id: string = defaultId) => {
    const otherElement: HTMLDivElement = document.createElement('div');
    otherElement.setAttribute('id', id);
    document.body.appendChild(otherElement);
};

const removeHTMLElementWithId = (id: string = defaultId) => {
    document.getElementById(id).remove();
};

const clickOnElement = (el: Element = document.getElementById(defaultId), event: string = 'click') => {
    const evt = new MouseEvent(event, {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: 20,
    });
    el.dispatchEvent(evt);
};

export const RTestUtils = {
    mockUUID,
    mockTagContext,
    renderComponent,
    addHTMLElementWithId,
    removeHTMLElementWithId,
    clickOnElement,
    defaultId,
};
