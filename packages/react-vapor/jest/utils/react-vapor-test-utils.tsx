import {render, RenderOptions} from '@testing-library/react';
import * as React from 'react';
import {Provider} from 'react-redux';
import {AnyAction, applyMiddleware, combineReducers, createStore, Store} from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import {IReactVaporState} from '../../src/ReactVapor';
import {ReactVaporReducers} from '../../src/ReactVaporReducers';
import {IDispatch} from '../../src/utils/ReduxUtils';

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
) => {
    const TestWrapper: React.FunctionComponent = ({children}) => <Provider store={store}>{children}</Provider>;

    return render(ui, {wrapper: TestWrapper, ...renderOptions});
};

export * from '@testing-library/react';
export {customRender as render};
