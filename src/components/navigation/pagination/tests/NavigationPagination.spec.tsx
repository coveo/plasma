import { shallow, mount, ReactWrapper } from 'enzyme';
import { clearState } from '../../../src/actions/index';
import { changePage } from '../../../src/actions/pagination';
import { Utilities } from '../../TestUtilities';
import { ActivityBrowserState } from '../../../src/activity-browser/ActivityBrowserLayout';
import {
  TableNavigationPaginationView,
  TableNavigationPaginationViewConnected, TableNavigationPaginationProps
} from '../../../src/tables/navigation/TableNavigationPaginationView';
import { TableNavigationPaginationSelectView } from '../../../src/tables/navigation/TableNavigationPaginationSelectView';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import * as React from 'react';
import createSpy = jasmine.createSpy;

describe('Table navigation', () => {
  let totalPages: number;
  let currentPage: number;
  let onPageClick: (pageNb: number) => void;

  describe('TableNavigationPaginationView', () => {
    it('should render without errors', () => {
      totalPages = 22;
      currentPage = 2;
      onPageClick = createSpy('onPageClick');

      expect(() => {
        shallow(
          <TableNavigationPaginationView
            totalPages={totalPages}
            currentPage={currentPage}
            onPageClick={onPageClick}
            />
        );
      }).not.toThrow();
    });
  });

  describe('TableNavigationPaginationView', () => {
    let wrapper: ReactWrapper<any, any>;
    let tableNavigationPaginationView: ReactWrapper<TableNavigationPaginationProps, any>;
    let fewPagesTableNavigationPaginationView: ReactWrapper<TableNavigationPaginationProps, any>;
    let store: Store<ActivityBrowserState>;

    beforeEach(() => {
      totalPages = 20;

      store = Utilities.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <div>
            <TableNavigationPaginationViewConnected
              totalPages={totalPages}
              />
            <TableNavigationPaginationViewConnected
              totalPages={3}
              />
          </div>
        </Provider>,
        { attachTo: document.body }
      );
      tableNavigationPaginationView = wrapper.find(TableNavigationPaginationView).first();
      fewPagesTableNavigationPaginationView = wrapper.find(TableNavigationPaginationView).last();
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get the number of pages as a prop', () => {
      let totalPagesProp = tableNavigationPaginationView.props().totalPages;

      expect(totalPagesProp).toBeDefined();
      expect(totalPagesProp).toBe(totalPages);
    });

    it('should get the current page as a prop', () => {
      let currentPageProp = tableNavigationPaginationView.props().currentPage;

      expect(currentPageProp).toBeDefined();
      expect(currentPageProp).toBe(0);
    });

    it('should get what to do on click as a prop', () => {
      let onPageClickProp = tableNavigationPaginationView.props().onPageClick;

      expect(onPageClickProp).toBeDefined();
    });

    it('should render no more <TableNavigationPaginationSelectView /> than the total number of pages', () => {
      expect(tableNavigationPaginationView.find(TableNavigationPaginationSelectView).length).toBeLessThan(totalPages + 1);
      expect(fewPagesTableNavigationPaginationView.find(TableNavigationPaginationSelectView).length).toBeLessThan(totalPages + 1);
    });

    it('should render no more <TableNavigationPaginationSelectView /> than the maximum of pages shown (7)', () => {
      expect(tableNavigationPaginationView.find(TableNavigationPaginationSelectView).length).toBeLessThan(8);
      expect(fewPagesTableNavigationPaginationView.find(TableNavigationPaginationSelectView).length).toBeLessThan(8);
    });

    it('should set the previous arrow to disabled if on first page', () => {
      let previousArrow = tableNavigationPaginationView.find('.flat-select-option').first();

      expect(previousArrow.hasClass('disabled')).toBe(true);

      store.dispatch(changePage(3));

      expect(previousArrow.hasClass('disabled')).toBe(false);
    });

    it('should set the next arrow to disabled if on last page', () => {
      let nextArrow = tableNavigationPaginationView.find('.flat-select-option').last();

      expect(nextArrow.hasClass('disabled')).toBe(false);

      store.dispatch(changePage(3));

      expect(nextArrow.hasClass('disabled')).toBe(false);

      store.dispatch(changePage(totalPages - 1));

      expect(nextArrow.hasClass('disabled')).toBe(true);
    });

    it('should show the last page if there are less pages left than half maximum number of pages shown (7)', () => {
      let lastPage = totalPages - 1;

      expect(tableNavigationPaginationView.findWhere(select => select.prop('pageNb') === lastPage).length).toBe(0);

      store.dispatch(changePage(lastPage - 4));

      expect(tableNavigationPaginationView.findWhere(select => select.prop('pageNb') === lastPage).length).toBe(0);

      store.dispatch(changePage(lastPage - 3));

      expect(tableNavigationPaginationView.findWhere(select => select.prop('pageNb') === lastPage).length).toBe(1);
    });

    it('should add loading on page click', () => {
      expect(store.getState().loading).toBe(false);

      tableNavigationPaginationView.find('.flat-select-option').first().simulate('click');

      expect(store.getState().loading).toBe(true);
    });

    it('should change the current page on page click', () => {
      expect(store.getState().pageNb).toBe(0);

      tableNavigationPaginationView.find('.flat-select-option').last().simulate('click');

      expect(store.getState().pageNb).not.toBe(0);
    });
  });
});
