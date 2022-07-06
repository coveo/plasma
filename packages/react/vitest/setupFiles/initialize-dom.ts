import {Defaults} from '../../src/Defaults';

const TEST_CONTAINER_ID = 'app';
const MODAL_ROOT_ID = 'modals';
const DROP_ROOT_ID = 'dropdowns';

beforeAll(() => {
    Defaults.MODAL_ROOT = '#' + MODAL_ROOT_ID;
    Defaults.DROP_ROOT = '#' + DROP_ROOT_ID;
    Defaults.MODAL_TIMEOUT = 0;
});

beforeEach(() => {
    document.body.innerHTML = `<div id="${TEST_CONTAINER_ID}"></div><div id="${MODAL_ROOT_ID}"></div><div id="${DROP_ROOT_ID}"></div>`;
    Defaults.APP_ELEMENT = '#' + TEST_CONTAINER_ID;
});
