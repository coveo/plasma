import {UUID} from '../UUID';

const mockUUID = (generatedId: string = 'id') => {
    jest.spyOn(UUID, 'generate').mockReturnValue(generatedId);
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
    addHTMLElementWithId,
    removeHTMLElementWithId,
    clickOnElement,
    defaultId,
};
