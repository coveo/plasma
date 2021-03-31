import * as React from 'react';
import {DragDropContext} from 'react-dnd';
import TestBackend from 'react-dnd-test-backend';
import * as Redux from 'redux';
import createMockStore, {MockStoreEnhanced} from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as _ from 'underscore';

import {ISvgProps} from '../../components/svg/Svg';
import {ITooltipProps} from '../../components/tooltip/Tooltip';
import {IReactVaporState} from '../../ReactVapor';
import {ReactVaporReducers} from '../../ReactVaporReducers';
import {CommonActions, IDispatch} from '../ReduxUtils';

export interface IExampleRowData {
    city: string;
    email: string;
    username: string;
    dateOfBirth: Date;
    id: string;
}

export interface IExampleServerTableState {
    data: IExampleRowData[];
    isLoading: boolean;
}

export interface IReactVaporTestState extends IReactVaporState {
    lastAction?: Redux.Action;
    tableHOCExample?: IExampleServerTableState;
}

export class TestUtils {
    static buildStore() {
        const reactVaporReducers = Redux.combineReducers<IReactVaporState>({
            ...ReactVaporReducers,
        });

        const reactVapor = (state: IReactVaporTestState, action: Redux.Action) => {
            state = action.type === CommonActions.clearState ? undefined : state;
            return reactVaporReducers(state, action as any);
        };

        return Redux.createStore(reactVapor, Redux.applyMiddleware(thunk));
    }

    static randomDate() {
        return new Date(+new Date() - Math.floor(Math.random() * 10000000000));
    }

    static randomValue1To100() {
        return Math.floor(Math.random() * 100 + 1);
    }

    static makeDebounceStatic() {
        jest.mock('underscore', () => {
            const originalUnderscore = jest.requireActual('underscore');
            return {
                ...originalUnderscore,
                debounce: jest.fn((func: any) => {
                    func.cancel = jest.fn();
                    return func as ((...args: any[]) => any) & _.Cancelable;
                }),
            };
        });
    }

    static makeDeferSync() {
        jest.mock('underscore', () => {
            const originalUnderscore = jest.requireActual('underscore');
            return {
                ...originalUnderscore,
                defer: function (this: any, func: () => void) {
                    func.apply(this, arguments as any);
                },
            };
        });
    }

    static wrapComponentInDnDContext(WrappedComponent: any): React.ComponentType<any> {
        @DragDropContext(TestBackend)
        class TestContextContainer extends React.Component {
            render() {
                return React.createElement(WrappedComponent, this.props);
            }
        }

        return TestContextContainer;
    }
}

export const defaultMapStateToProps = () => ({});

export const defaultSvgProps: ISvgProps = {
    svgName: 'domain-google',
    svgClass: 'icon mod-2x',
};

export const defaultTooltipProps: ITooltipProps = {
    title: 'default tooltip description',
    placement: 'bottom',
    container: 'body',
};

export const triggerAlertFunction = () => {
    alert(`Alert function triggered`);
};

export const withSelectedValues = (id: string, ...values: string[]) => (state: IReactVaporState) => ({
    ...state,
    listBoxes: [
        ...(state.listBoxes || []),
        {
            active: 0,
            ...{
                id: id,
                selected: values,
            },
        },
    ],
});

export type ReactVaporMockStore = MockStoreEnhanced<IReactVaporState, IDispatch<IReactVaporState>>;
export const getStoreMock = createMockStore<Partial<IReactVaporState>, IDispatch<IReactVaporState>>([thunk]);
export const composeMockStore = (
    ...functions: Array<(state: Partial<IReactVaporState>) => Partial<IReactVaporState>>
) => getStoreMock(_.compose(...functions) as IReactVaporState);

export const createTestAppContainer = () => {
    const div = document.createElement('div');
    div.setAttribute('id', 'App');
    document.body.appendChild(div);
};

export const removeTestAppContainer = () => {
    const div = document.getElementById('App');
    if (div) {
        document.body.removeChild(div);
    }
};
