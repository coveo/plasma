import {render, RenderOptions, RenderResult} from '@testing-library/react';
import * as React from 'react';
import {Provider} from 'react-redux';
import {AnyAction, applyMiddleware, combineReducers, createStore, Store} from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import {Defaults} from '../src/Defaults';
import {ReactVaporReducers} from '../src/ReactVaporReducers';
import {IReactVaporState} from '../src/ReactVaporState';
import {IDispatch} from '../src/utils/ReduxUtils';

const TEST_CONTAINER_ID = 'app';
const MODAL_ROOT_ID = 'modals';
const DROP_ROOT_ID = 'dropdowns';

const setup = () => {
    document.body.innerHTML = `<div id="${TEST_CONTAINER_ID}"></div><div id="${MODAL_ROOT_ID}"></div><div id="${DROP_ROOT_ID}"></div>`;
    Defaults.APP_ELEMENT = '#' + TEST_CONTAINER_ID;
    Defaults.MODAL_ROOT = '#' + MODAL_ROOT_ID;
    Defaults.DROP_ROOT = '#' + DROP_ROOT_ID;
    Defaults.MODAL_TIMEOUT = 0;
};

const cleanup = () => {
    jest.restoreAllMocks();
};

const customRender = (
    ui: React.ReactElement,
    {
        initialState,
        store = createStore(
            combineReducers<IReactVaporState>(ReactVaporReducers),
            initialState,
            applyMiddleware(thunk, promise)
        ),
        container = document.getElementById(TEST_CONTAINER_ID),
        ...renderOptions
    }: Omit<RenderOptions, 'queries'> & {
        initialState?: IReactVaporState;
        store?: Store<IReactVaporState, AnyAction> & {
            dispatch: IDispatch<IReactVaporState>;
        };
    } = {}
): RenderResult => {
    const TestWrapper: React.FunctionComponent = ({children}) => <Provider store={store}>{children}</Provider>;

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
