import {mount} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {clearState} from '../../utils/ReduxUtils';
import {TestUtils} from '../../utils/TestUtils';
import {Svg} from '../svg/Svg';
import {toggleSearchBarDisabled, toggleSearching} from './SearchBarActions';
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

    it('should mount with a state not searching, not disabled, and without value by default', () => {
        mount(
            <Provider store={store} >
                <SearchBarConnected {...requiredProps} />
            </Provider>,
        );

        expect(store.getState().searchBars[0])
            .toEqual(jasmine.objectContaining({searching: false, disabled: false, value: ''}));
    });

    it('should mount with a state not searching, disabled, and without value if disabledOnMount is passed as prop', () => {
        mount(
            <Provider store={store} >
                <SearchBarConnected {...requiredProps} disabledOnMount />
            </Provider>,
        );

        expect(store.getState().searchBars[0])
            .toEqual(jasmine.objectContaining({searching: false, disabled: true, value: ''}));
    });

    describe('after mount', () => {
        let component: any;

        beforeEach(() => {
            component = mount(
                <Provider store={store} >
                    <SearchBarConnected {...requiredProps} />
                </Provider>,
            );
        });

        it('should change the value in the state on input change', () => {
            component.find('input').prop('onChange')({target: {value: 'new value'}});
            expect(store.getState().searchBars[0].value).toBe('new value');
        });

        it('should toggle the disabled state of search bar in the UI when toggleSearchBarDisabled is dispatched', () => {
            store.dispatch(toggleSearchBarDisabled(requiredProps.id, true));
            component.update();

            expect(component.find('input').prop('disabled')).toBe(true);
            expect(component.find(Svg).prop('svgClass')).toBe('fill-light-grey');

            store.dispatch(toggleSearchBarDisabled(requiredProps.id, false));
            component.update();

            expect(component.find('input').prop('disabled')).toBe(false);
            expect(component.find(Svg).prop('svgClass')).toBe('fill-medium-blue');
        });

        it('should toggle the searching state of search bar in the UI when toggleSearching is dispatched', () => {
            store.dispatch(toggleSearching(requiredProps.id, true));
            component.update();

            expect(component.find('div').first().hasClass('search-bar-loading')).toBe(true);
            expect(component.find('input').prop('disabled')).toBe(true);

            store.dispatch(toggleSearching(requiredProps.id, false));
            component.update();

            expect(component.find('div').first().hasClass('search-bar-loading')).toBe(false);
            expect(component.find('input').prop('disabled')).toBe(false);
        });
    });
});
