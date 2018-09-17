import {mount, ReactWrapper} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../../../ReactVapor';
import {clearState} from '../../../../utils/ReduxUtils';
import {TestUtils} from '../../../../utils/TestUtils';
import {addLoading, turnOffLoading} from '../../../loading/LoadingActions';
import {INavigationPaginationProps, NavigationPagination} from '../NavigationPagination';
import {changePage, resetPaging} from '../NavigationPaginationActions';
import {NavigationPaginationConnected} from '../NavigationPaginationConnected';
import {NavigationPaginationSelect} from '../NavigationPaginationSelect';

describe('<NavigationPaginationConnected />', () => {
    let wrapper: ReactWrapper<any, any>;
    let navigationPagination: ReactWrapper<INavigationPaginationProps, any>;
    let fewPagesNavigationPagination: ReactWrapper<INavigationPaginationProps, any>;
    let store: Store<IReactVaporState>;
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
                    <NavigationPaginationConnected
                        id='few-pages-navigation-pagination'
                        totalPages={3}
                    />
                </div>
            </Provider>,
            {attachTo: document.getElementById('App')},
        );
        navigationPagination = wrapper.find(NavigationPagination).first();
        fewPagesNavigationPagination = wrapper.find(NavigationPagination).last();
    });

    afterEach(() => {
        store.dispatch(clearState());
        wrapper.detach();
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

    it('should render no more <NavigationPaginationSelect /> than the total number of pages', () => {
        expect(navigationPagination.find(NavigationPaginationSelect).length).toBeLessThan(basicNavigationPaginationProps.totalPages + 1);
        expect(fewPagesNavigationPagination.find(NavigationPaginationSelect).length).toBeLessThan(basicNavigationPaginationProps.totalPages + 1);
    });

    it('should render no more <NavigationPaginationSelect /> than the maximum of pages shown (7)', () => {
        expect(navigationPagination.find(NavigationPaginationSelect).length).toBeLessThan(8);
        expect(fewPagesNavigationPagination.find(NavigationPaginationSelect).length).toBeLessThan(8);
    });

    it('should set the previous arrow to disabled if on first page', () => {
        expect(wrapper.find('.flat-select-option').first().hasClass('disabled')).toBe(true);

        store.dispatch(changePage(basicNavigationPaginationProps.id, 3));
        wrapper.update();

        expect(wrapper.find('.flat-select-option').first().hasClass('disabled')).toBe(false);
    });

    it('should set the next arrow to disabled if on last page', () => {
        expect(wrapper.find(NavigationPagination).first().find('.flat-select-option').last().hasClass('disabled')).toBe(false);

        store.dispatch(changePage(basicNavigationPaginationProps.id, 3));
        wrapper.update();

        expect(wrapper.find(NavigationPagination).first().find('.flat-select-option').last().hasClass('disabled')).toBe(false);

        store.dispatch(changePage(basicNavigationPaginationProps.id, basicNavigationPaginationProps.totalPages - 1));
        wrapper.update();

        expect(wrapper.find(NavigationPagination).first().find('.flat-select-option').last().hasClass('disabled')).toBe(true);
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

    it('should add loading on page click', () => {
        expect(_.findWhere(store.getState().loadings, {id: loadingId}).isOn).toBe(false);

        navigationPagination.find('.flat-select-option').last().simulate('click');

        expect(_.findWhere(store.getState().loadings, {id: loadingId}).isOn).toBe(true);
    });

    it('should change the current page on page click', () => {
        expect(_.findWhere(store.getState().paginationComposite, {id: basicNavigationPaginationProps.id}).pageNb).toBe(0);

        navigationPagination.find('.flat-select-option').last().simulate('click');

        expect(_.findWhere(store.getState().paginationComposite, {id: basicNavigationPaginationProps.id}).pageNb).not.toBe(0);
    });

    it('should return to the first page when resetting the pagination', () => {
        store.dispatch(store.dispatch(changePage(basicNavigationPaginationProps.id, basicNavigationPaginationProps.totalPages - 4)));
        wrapper.update();
        expect(wrapper.find(NavigationPagination).first().props().currentPage).not.toBe(0);

        store.dispatch(resetPaging(basicNavigationPaginationProps.id));
        wrapper.update();
        expect(wrapper.find(NavigationPagination).first().props().currentPage).toBe(0);
    });
});
