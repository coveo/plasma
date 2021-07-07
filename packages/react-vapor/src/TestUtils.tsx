import {render, RenderOptions, RenderResult} from '@testing-library/react';
import * as React from 'react';
import {Provider} from 'react-redux';
import {AnyAction, applyMiddleware, combineReducers, createStore, Store} from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import {Defaults} from './Defaults';
import {ReactVaporReducers} from './ReactVaporReducers';
import {IReactVaporState} from './ReactVaporState';
import {IDispatch} from './utils/ReduxUtils';

const customRender = (
    ui: React.ReactElement,
    {
        initialState,
        store = createStore(
            combineReducers<IReactVaporState>(ReactVaporReducers),
            initialState,
            applyMiddleware(thunk, promise)
        ),
        ...renderOptions
    }: Omit<RenderOptions, 'queries'> & {
        initialState?: IReactVaporState;
        store?: Store<IReactVaporState, AnyAction> & {
            dispatch: IDispatch<IReactVaporState>;
        };
    } = {}
): RenderResult => {
    const TestWrapper: React.FunctionComponent = ({children}) => <Provider store={store}>{children}</Provider>;

    return render(ui, {wrapper: TestWrapper, ...renderOptions});
};

const renderModal: typeof customRender = (ui, renderOptions) => {
    const appRoot = document.createElement('div');
    appRoot.id = 'root';
    document.body.appendChild(appRoot);
    Defaults.APP_ELEMENT = appRoot;
    return customRender(ui, {...renderOptions, container: appRoot});
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
export {customRender as render, renderModal, expectToThrow};
