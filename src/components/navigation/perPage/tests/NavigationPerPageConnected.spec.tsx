import { mount, ReactWrapper } from 'enzyme';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { IReactVaporState, clearState } from '../../../../utils/ReduxUtils';
import { NavigationPerPageConnected } from '../NavigationPerPageConnected';
import { TestUtils } from '../../../../utils/TestUtils';
import { NavigationPerPage, INavigationPerPageProps } from '../NavigationPerPage';
import { addLoading, turnOffLoading } from '../../../loading/LoadingActions';
import { changePerPage } from '../NavigationPerPageActions';
import * as _ from 'underscore';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('NavigationPerPageView', () => {
  let wrapper: ReactWrapper<any, any>;
  let navigationPerPage: ReactWrapper<INavigationPerPageProps, any>;
  let store: Store<IReactVaporState>;
  let basicNavigationPerPageProps: INavigationPerPageProps = {
    totalEntries: 55,
    id: 'navigation-per-page'
  };
  let loadingId: string = basicNavigationPerPageProps.id + '-loading';
  basicNavigationPerPageProps.loadingIds = [loadingId];

  beforeEach(() => {
    store = TestUtils.buildStore();
    store.dispatch(addLoading(loadingId));
    store.dispatch(turnOffLoading([loadingId]));

    wrapper = mount(
      <Provider store={store}>
        <div>
          <NavigationPerPageConnected {...basicNavigationPerPageProps} />
        </div>
      </Provider>,
      { attachTo: document.getElementById('App') }
    );
    navigationPerPage = wrapper.find(NavigationPerPage).first();
  });

  afterEach(() => {
    store.dispatch(clearState());
    wrapper.unmount();
    wrapper.detach();
  });

  it('should get the current perPageNumber as a prop', () => {
    let currentPerPageProp = navigationPerPage.props().currentPerPage;

    expect(currentPerPageProp).toBeDefined();
    expect(currentPerPageProp).toBe(10);

    store.dispatch(changePerPage(basicNavigationPerPageProps.id, 20));

    currentPerPageProp = navigationPerPage.props().currentPerPage;
    expect(currentPerPageProp).toBe(20);
  });

  it('should get what to do onRender as a prop', () => {
    let onRenderProp = navigationPerPage.props().onRender;

    expect(onRenderProp).toBeDefined();
  });

  it('should get what to do onDestroy as a prop', () => {
    let onDestroyProp = navigationPerPage.props().onDestroy;

    expect(onDestroyProp).toBeDefined();
  });

  it('should get what to do onPerPageClick as a prop', () => {
    let onPerPageClickProp = navigationPerPage.props().onPerPageClick;

    expect(onPerPageClickProp).toBeDefined();
  });

  it('should add itself to the store with its selected per page number on mount', () => {
    expect(_.findWhere(store.getState().perPageComposite, { id: basicNavigationPerPageProps.id })).toBeDefined();
  });

  it('should remove itself to the store when unmouting', () => {
    wrapper.unmount();
    expect(_.findWhere(store.getState().perPageComposite, { id: basicNavigationPerPageProps.id })).toBeUndefined();
  });

  it('should turn on loading and change the per page number when clicking on a <NavigationPerPageSelect /> link', () => {
    let perPageSelected = navigationPerPage.find('a').last();

    expect(_.findWhere(store.getState().loadings, { id: basicNavigationPerPageProps.loadingIds[0] }).isOn).toBe(false);

    perPageSelected.simulate('click');
    expect(_.findWhere(store.getState().perPageComposite, { id: basicNavigationPerPageProps.id }).perPage.toString()).toBe(perPageSelected.find('span').text());
    expect(_.findWhere(store.getState().loadings, { id: basicNavigationPerPageProps.loadingIds[0] }).isOn).toBe(true);
  });
});
