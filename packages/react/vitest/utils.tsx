import {render, RenderOptions, RenderResult} from '@testing-library/react';
import {Provider} from 'react-redux';
import {AnyAction, applyMiddleware, combineReducers, createStore, Store} from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import {PlasmaReducers} from '../src/PlasmaReducers';
import {PlasmaState} from '../src/PlasmaState';
import {IDispatch} from '../src/utils/ReduxUtils';

const TEST_CONTAINER_ID = 'app';

const customRender = (
    ui: React.ReactElement,
    {
        initialState,
        store = createStore(
            combineReducers<PlasmaState>(PlasmaReducers),
            initialState,
            applyMiddleware(thunk, promise)
        ),
        container = document.getElementById(TEST_CONTAINER_ID),
        ...renderOptions
    }: Omit<RenderOptions, 'queries'> & {
        initialState?: PlasmaState;
        store?: Store<PlasmaState, AnyAction> & {
            dispatch: IDispatch<PlasmaState>;
        };
    } = {}
): RenderResult => {
    const TestWrapper: React.FunctionComponent = ({children}) => <Provider store={store}>{children}</Provider>;

    return render(ui, {wrapper: TestWrapper, container, ...renderOptions});
};

export * from '@testing-library/react';
export {customRender as render};
