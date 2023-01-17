import {mount, ReactWrapper} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {PlasmaState} from '../../../PlasmaState.js';
import {clearState} from '../../../utils/ReduxUtils.js';
import {TestUtils} from '../../../utils/tests/TestUtils.js';
import {LoadingConnected} from '../../loading/LoadingConnected.js';
import {PaginationSelect} from '../../pagination.js';
import {INavigationProps, Navigation} from '../Navigation.js';
import {NavigationConnected} from '../NavigationConnected.js';
import {NavigationPaginationConnected} from '../pagination/NavigationPaginationConnected.js';
import {NavigationPerPageConnected} from '../perPage/NavigationPerPageConnected.js';
import {NavigationPerPageSelect} from '../perPage/NavigationPerPageSelect.js';

describe('<NavigationConnected />', () => {
    const basicNavigationProps: INavigationProps = {
        id: 'navigation',
        totalPages: 10,
        totalEntries: 105,
        perPageNumbers: [10, 100],
        initialPosition: 0,
    };
    let store: Store<PlasmaState>;
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
            {attachTo: document.getElementById('App')}
        );
        navigation = wrapper.find(Navigation).first();
    });

    afterEach(() => {
        store.dispatch(clearState());
        wrapper?.unmount();
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

    it('should render a <NavigationPerPageConnected /> component if totalEntries is higher than the first perPageNumber', () => {
        expect(navigation.find(NavigationPerPageConnected).length).toBe(1);
    });

    it('should adjust page selected to appropriate one if a perPageSelect is clicked', () => {
        wrapper.find(PaginationSelect).last().simulate('click');

        expect(
            _.findWhere(store.getState().paginationComposite, {id: `pagination-${basicNavigationProps.id}`}).pageNb
        ).toBe(6);

        navigation.find(NavigationPerPageSelect).last().simulate('click');
        wrapper.update();

        expect(
            _.findWhere(store.getState().paginationComposite, {id: `pagination-${basicNavigationProps.id}`}).pageNb
        ).toBe(0);

        wrapper.find(PaginationSelect).at(1).simulate('click');
        wrapper.find(NavigationPerPageSelect).first().simulate('click');

        expect(
            _.findWhere(store.getState().paginationComposite, {id: `pagination-${basicNavigationProps.id}`}).pageNb
        ).toBe(9);
    });
});
