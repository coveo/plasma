import {FunctionComponent} from 'react';
import * as Redux from 'redux';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as _ from 'underscore';
import {useSelector} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {ITooltipProps} from '../../components/tooltip/Tooltip.js';
import {PlasmaReducers} from '../../PlasmaReducers.js';
import {PlasmaState} from '../../PlasmaState.js';
import {CommonActions, IDispatch} from '../ReduxUtils.js';
import {ValidationSelectors} from '../../components.js';

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

export interface PlasmaTestState extends PlasmaState {
    lastAction?: Redux.Action;
    tableHOCExample?: IExampleServerTableState;
}

export class TestUtils {
    static buildStore() {
        const plasmaReducers = Redux.combineReducers<PlasmaState>({
            ...PlasmaReducers,
        });

        const plasma = (state: PlasmaTestState, action: Redux.Action) => {
            state = action.type === CommonActions.clearState ? undefined : state;
            return plasmaReducers(state, action as any);
        };

        return Redux.createStore(plasma, Redux.applyMiddleware(thunk));
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
}

export const ErrorList: FunctionComponent<{id: string}> = ({id}) => {
    const errors = useSelector(ValidationSelectors.getErrors(id));
    const errorList = errors.map(({value}) => <li key={value}>{value}</li>);

    return <ul aria-label="errors">{errorList}</ul>;
};

export const WarningList: FunctionComponent<{id: string}> = ({id}) => {
    const warnings = useSelector(ValidationSelectors.getWarnings(id));
    const warningList = warnings.map(({value}) => <li key={value}>{value}</li>);

    return <ul aria-label="warnings">{warningList}</ul>;
};

export const IsDirtyIndicator: FunctionComponent<{id: string; label?: string}> = ({id, label = 'is dirty'}) => {
    const {isDirty} = useSelector(
        createStructuredSelector({
            isDirty: ValidationSelectors.isDirty([id]),
        })
    );
    return isDirty && <div>{label}</div>;
};

export const defaultMapStateToProps = () => ({});

export const defaultTooltipProps: ITooltipProps = {
    title: 'default tooltip description',
    placement: 'bottom',
    container: 'body',
};

export const triggerAlertFunction = () => {
    alert(`Alert function triggered`);
};

export const withSelectedValues =
    (id: string, ...values: string[]) =>
    (state: PlasmaState) => ({
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

export const getStoreMock = createMockStore<Partial<PlasmaState>, IDispatch>([thunk]);
export type PlasmaMockStore = ReturnType<typeof getStoreMock>;
export const composeMockStore = (...functions: Array<(state: Partial<PlasmaState>) => Partial<PlasmaState>>) =>
    getStoreMock(_.compose(...functions) as PlasmaState);

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
