import {mount, ReactWrapper} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {LoadingConnected} from '../../loading/LoadingConnected';
import {INavigationProps, Navigation} from '../Navigation';
import {NavigationConnected} from '../NavigationConnected';
import {NavigationPaginationConnected} from '../pagination/NavigationPaginationConnected';
import {NavigationPerPageConnected} from '../perPage/NavigationPerPageConnected';

describe('<NavigationConnected />', () => {
    const basicNavigationProps: INavigationProps = {
        id: 'navigation',
        totalPages: 10,
        totalEntries: 105,
        perPageNumbers: [10, 100],
        initialPosition: 0,
    };
    let store: Store<IReactVaporState>;
    let wrapper: ReactWrapper<any, any>;
    let navigation: ReactWrapper<INavigationProps, any>;

    beforeEach(() => {
        store = TestUtils.buildStore();

        wrapper = mount(
            <Provider store={store}>
                <div>
                    <NavigationConnected {...basicNavigationProps} />
                </div>
            </Provider>,
            {attachTo: document.getElementById('App')},
        );
        navigation = wrapper.find(Navigation).first();
    });

    afterEach(() => {
        store.dispatch(clearState());
        wrapper.unmount();
        wrapper.detach();
    });

    it('should get if it is loading as a prop', () => {
        const isLoadingProp = navigation.props().isLoading;

        expect(isLoadingProp).toBeDefined();
        expect(isLoadingProp).toBe(true);
    });

    it('should get withReduxState as a prop', () => {
        const withReduxStateProp = navigation.props().withReduxState;

        expect(withReduxStateProp).toBeDefined();
        expect(withReduxStateProp).toBe(true);
    });

    it('should render a <LoadingConnected /> component', () => {
        expect(navigation.find(LoadingConnected).length).toBe(1);
    });

    it('should render a <NavigationPaginationConnected /> component if totalPages is higher than 1', () => {
        expect(navigation.find(NavigationPaginationConnected).length).toBe(1);
    });

    it('should render a <NavigationPerPageConnected /> component if totalEntries is higher than the first perPageNumber',
        () => {
            expect(navigation.find(NavigationPerPageConnected).length).toBe(1);
        });

    it('should adjust page selected to appropriate one if a perPageSelect is clicked', () => {
        navigation.find('NavigationPaginationSelect').last().simulate('click');

        expect(_.findWhere(store.getState().paginationComposite, {id: `pagination-${basicNavigationProps.id}`}).pageNb)
            .toBe(6);

        navigation.find('NavigationPerPageSelect').last().simulate('click');

        expect(_.findWhere(store.getState().paginationComposite, {id: `pagination-${basicNavigationProps.id}`}).pageNb)
            .toBe(0);

        navigation.find('NavigationPaginationSelect').at(1).simulate('click');
        navigation.find('NavigationPerPageSelect').first().simulate('click');

        expect(_.findWhere(store.getState().paginationComposite, {id: `pagination-${basicNavigationProps.id}`}).pageNb)
            .toBe(10);
    });
});
