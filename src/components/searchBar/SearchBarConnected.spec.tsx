import {mount} from 'enzyme';
import * as React from 'react';
import {Provider, Store} from 'react-redux';
import {clearState} from '../../utils/ReduxUtils';
import {TestUtils} from '../../utils/TestUtils';
import {InputConnected} from '../input/InputConnected';
import {SearchBarConnected} from './SearchBarConnected';
import {searchBarConnectedPropsScenarios} from './SearchBarPropsScenarios.spec';

describe('SearchBarConnected', () => {
    const requiredProps = {...searchBarConnectedPropsScenarios[0]};

    let store: Store<any>;

    beforeEach(() => {
        store = TestUtils.buildStore();
    });

    afterEach(() => {
        store.dispatch(clearState());
    });

    it('should not throw on mount and unmount in different props scenarios', () => {
        expect(() => {
            searchBarConnectedPropsScenarios.forEach((props) => {
                mount(
                    <Provider store={store} >
                        <SearchBarConnected {...props} />
                    </Provider>,
                ).unmount();
            });
        }).not.toThrow();
    });

    it('should add and remove the search bar on mount and unmount respectively', () => {
        const component = mount(
            <Provider store={store} >
                <SearchBarConnected {...requiredProps} />
            </Provider>,
        );

        expect(store.getState().searchBars[0].id).toBe(requiredProps.id);
        expect(store.getState().searchBars.length).toBe(1);

        component.unmount();
        expect(store.getState().searchBars.length).toBe(0);
    });

    it('should render with an InputConnected inside it', () => {
        const component = mount(
            <Provider store={store} >
                <SearchBarConnected {...requiredProps} />
            </Provider>,
        );

        expect(component.find(InputConnected).length).toBe(1);
    });
});
