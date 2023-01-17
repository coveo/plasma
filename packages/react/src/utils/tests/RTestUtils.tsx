import {mount} from 'enzyme';
import {ReactNode} from 'react';
import {DndProvider} from 'react-dnd';
import {TestBackend} from 'react-dnd-test-backend';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {PlasmaState} from '../../PlasmaState.js';
import {UUID} from '../UUID.js';
import {TestUtils} from './TestUtils.js';

const mockUUID = (generatedId: string = 'id') => {
    jest.spyOn(UUID, 'generate').mockReturnValue(generatedId);
};

const renderComponent = (ComponentClass: any, props = {}, child: ReactNode = null) => {
    const store: Store<PlasmaState> = TestUtils.buildStore();

    const wrapper = mount(
        <DndProvider backend={TestBackend}>
            <Provider store={store}>
                <ComponentClass {...props}>{child}</ComponentClass>
            </Provider>
        </DndProvider>
    );

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
    renderComponent,
    addHTMLElementWithId,
    removeHTMLElementWithId,
    clickOnElement,
    defaultId,
};
