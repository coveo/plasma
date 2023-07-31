import '@testing-library/jest-dom';

import {render, RenderOptions, RenderResult} from '@testing-library/react';
import {mount, shallow} from 'enzyme';
import {cloneElement, createElement} from 'react';
import {Provider} from 'react-redux';
import {AnyAction, applyMiddleware, combineReducers, createStore, Store} from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import {Defaults} from '../src/Defaults';
import {PlasmaReducers} from '../src/PlasmaReducers';
import {PlasmaState} from '../src/PlasmaState';
import {IDispatch} from '../src/utils/ReduxUtils';

const TEST_CONTAINER_ID = 'app';
const MODAL_ROOT_ID = 'modals';
const originalError = console.error;

const setup = () => {
    document.body.innerHTML = `<div id="${TEST_CONTAINER_ID}"></div><div id="${MODAL_ROOT_ID}"></div><div id="plasma-dropdowns"></div>`;
    Defaults.APP_ELEMENT = '#' + TEST_CONTAINER_ID;
    Defaults.MODAL_ROOT = '#' + MODAL_ROOT_ID;
    Defaults.MODAL_TIMEOUT = 0;
    console.error = (...args) => {
        if (/Warning: ReactDOM.render is no longer supported in React 18./.test(args[0])) {
            return;
        } else {
            originalError.call(console, ...args);
        }
    };
};

const cleanup = () => {
    jest.restoreAllMocks();
    console.error = originalError;
};

const customRender = (
    ui: React.ReactElement,
    {
        initialState,
        store = createStore(
            combineReducers<PlasmaState>(PlasmaReducers),
            initialState,
            applyMiddleware(thunk, promise),
        ),
        container = document.getElementById(TEST_CONTAINER_ID),
        ...renderOptions
    }: Omit<RenderOptions, 'queries'> & {
        initialState?: PlasmaState;
        store?: Store<PlasmaState, AnyAction> & {
            dispatch: IDispatch<PlasmaState>;
        };
    } = {},
): RenderResult => {
    const TestWrapper: React.FunctionComponent<PropsWithChildren<unknown>> = ({children}) => (
        <Provider store={store}>{children}</Provider>
    );

    return render(ui, {wrapper: TestWrapper, container, ...renderOptions});
};

/**
 * Jest logs thrown errors with console.error even when using `.toThrow()` matcher.
 * This function will silence those logs.
 *
 * @param func Function that you would normally pass to `expect(func).toThrow()`
 */
const expectToThrow = (func: () => unknown, error?: JestToErrorArg): void => {
    // Even though the error is caught, it still gets printed to the console
    // so we mock that out to avoid the wall of red text.
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => null);

    expect(func).toThrow(error);

    spy.mockRestore();
};

type JestToErrorArg = Parameters<jest.Matchers<unknown, () => unknown>['toThrow']>[0];

export * from '@testing-library/react';
export {customRender as render, expectToThrow, cleanup, setup};

export const shallowWithStore = (Component: any, store: any) => {
    const ReactReduxComponent = cloneElement(Component, {store}, null);
    return shallow(ReactReduxComponent);
};

export const mountWithStore = (Component: any, store: any, withContext = true) => {
    const ComponentAlreadyWithProvider = cloneElement(Component, {store}, null);
    const ReactReduxComponent = createElement(Provider, {store}, Component);
    return mount(withContext ? ComponentAlreadyWithProvider : ReactReduxComponent);
};

export const shallowWithState = (Component: any, state: any) => {
    const store = {
        getState: () => state,
        subscribe: () => ({}),
        dispatch: () => ({}),
    };
    const ReactReduxComponent = cloneElement(Component, {store}, null);
    return shallow(ReactReduxComponent);
};
