import {mount, ReactWrapper} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {PlasmaState} from '../../../../PlasmaState.js';
import {clearState} from '../../../../utils/ReduxUtils.js';
import {TestUtils} from '../../../../utils/tests/TestUtils.js';
import {addLoading, turnOffLoading} from '../../../loading/LoadingActions.js';
import {PaginationSelect} from '../../../pagination.js';
import {INavigationPaginationProps, NavigationPagination} from '../NavigationPagination.js';
import {changePage, resetPaging} from '../NavigationPaginationActions.js';
import {NavigationPaginationConnected} from '../NavigationPaginationConnected.js';

describe('<NavigationPaginationConnected />', () => {
    let wrapper: ReactWrapper<any, any>;
    let navigationPagination: ReactWrapper<INavigationPaginationProps, any>;
    let fewPagesNavigationPagination: ReactWrapper<INavigationPaginationProps, any>;
    let store: Store<PlasmaState>;
    const basicNavigationPaginationProps: INavigationPaginationProps = {
        totalPages: 20,
        id: 'navigation-pagination',
    };
    const loadingId = basicNavigationPaginationProps.id + '-loading';
    basicNavigationPaginationProps.loadingIds = [loadingId];

    beforeEach(() => {
        store = TestUtils.buildStore();
        store.dispatch(addLoading(loadingId));
        store.dispatch(turnOffLoading([loadingId]));

        wrapper = mount(
            <Provider store={store}>
                <div>
                    <NavigationPaginationConnected {...basicNavigationPaginationProps} />
                    <NavigationPaginationConnected id="few-pages-navigation-pagination" totalPages={3} />
                </div>
            </Provider>,
            {attachTo: document.getElementById('App')}
        );
        navigationPagination = wrapper.find(NavigationPagination).first();
        fewPagesNavigationPagination = wrapper.find(NavigationPagination).last();
    });

    afterEach(() => {
        store.dispatch(clearState());
        wrapper?.unmount();
    });

    it('should get the number of pages as a prop', () => {
        const totalPagesProp = navigationPagination.props().totalPages;

        expect(totalPagesProp).toBeDefined();
        expect(totalPagesProp).toBe(basicNavigationPaginationProps.totalPages);
    });

    it('should get the current page as a prop', () => {
        const currentPageProp = navigationPagination.props().currentPage;

        expect(currentPageProp).toBeDefined();
        expect(currentPageProp).toBe(0);

        store.dispatch(changePage(basicNavigationPaginationProps.id, 3));
        wrapper.update();

        expect(wrapper.find(NavigationPagination).first().props().currentPage).toBe(3);
    });

    it('should get what to do on click as a prop', () => {
        const onPageClickProp = navigationPagination.props().onPageClick;

        expect(onPageClickProp).toBeDefined();
    });

    it('should render no more <PaginationSelect /> than the total number of pages', () => {
        expect(navigationPagination.find(PaginationSelect).length).toBeLessThan(
            basicNavigationPaginationProps.totalPages + 1
        );

        expect(fewPagesNavigationPagination.find(PaginationSelect).length).toBeLessThan(
            basicNavigationPaginationProps.totalPages + 1
        );
    });

    it('should render no more <PaginationSelect /> than the maximum of pages shown (7)', () => {
        expect(navigationPagination.find(PaginationSelect).length).toBeLessThan(8);
        expect(fewPagesNavigationPagination.find(PaginationSelect).length).toBeLessThan(8);
    });

    it('should set the previous arrow to disabled if on first page', () => {
        expect(wrapper.find('.flat-select-option').first().hasClass('disabled')).toBe(true);

        store.dispatch(changePage(basicNavigationPaginationProps.id, 3));
        wrapper.update();

        expect(wrapper.find('.flat-select-option').first().hasClass('disabled')).toBe(false);
    });

    it('should set the next arrow to disabled if on last page', () => {
        expect(wrapper.find(NavigationPagination).first().find('.flat-select-option').last().hasClass('disabled')).toBe(
            false
        );

        store.dispatch(changePage(basicNavigationPaginationProps.id, 3));
        wrapper.update();

        expect(wrapper.find(NavigationPagination).first().find('.flat-select-option').last().hasClass('disabled')).toBe(
            false
        );

        store.dispatch(changePage(basicNavigationPaginationProps.id, basicNavigationPaginationProps.totalPages - 1));
        wrapper.update();

        expect(wrapper.find(NavigationPagination).first().find('.flat-select-option').last().hasClass('disabled')).toBe(
            true
        );
    });

    it('should show the last page if there are less pages left than half maximum number of pages shown (7)', () => {
        const lastPage = basicNavigationPaginationProps.totalPages - 1;

        expect(wrapper.findWhere((select) => select.prop('pageNb') === lastPage).length).toBe(0);

        store.dispatch(changePage(basicNavigationPaginationProps.id, lastPage - 4));
        wrapper.update();

        expect(wrapper.findWhere((select) => select.prop('pageNb') === lastPage).length).toBe(0);

        store.dispatch(changePage(basicNavigationPaginationProps.id, lastPage - 3));
        wrapper.update();

        expect(wrapper.findWhere((select) => select.prop('pageNb') === lastPage).length).toBe(1);
    });

    it('should change the current page on page click', () => {
        expect(_.findWhere(store.getState().paginationComposite, {id: basicNavigationPaginationProps.id}).pageNb).toBe(
            0
        );

        navigationPagination.find('.flat-select-option').last().simulate('click');

        expect(
            _.findWhere(store.getState().paginationComposite, {id: basicNavigationPaginationProps.id}).pageNb
        ).not.toBe(0);
    });

    it('should return to the first page when resetting the pagination', () => {
        store.dispatch(
            store.dispatch(changePage(basicNavigationPaginationProps.id, basicNavigationPaginationProps.totalPages - 4))
        );
        wrapper.update();

        expect(wrapper.find(NavigationPagination).first().props().currentPage).not.toBe(0);

        store.dispatch(resetPaging(basicNavigationPaginationProps.id));
        wrapper.update();

        expect(wrapper.find(NavigationPagination).first().props().currentPage).toBe(0);
    });
});
