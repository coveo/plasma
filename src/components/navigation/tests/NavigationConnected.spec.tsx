import { mount, ReactWrapper } from 'enzyme';
import { INavigationProps, Navigation } from '../Navigation';
import { NavigationConnected } from '../NavigationConnected';
import { TestUtils } from '../../../utils/TestUtils';
import { clearState } from '../../../utils/ReduxUtils';
import { IReactVaporState } from '../../../ReactVapor';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { LoadingConnected } from '../../loading/LoadingConnected';
import { NavigationPaginationConnected } from '../pagination/NavigationPaginationConnected';
import { NavigationPerPageConnected } from '../perPage/NavigationPerPageConnected';
import { NavigationPerPageSelect } from '../perPage/NavigationPerPageSelect';
import { NavigationPaginationSelect } from '../pagination/NavigationPaginationSelect';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('<NavigationConnected />', () => {
  let basicNavigationProps: INavigationProps = {
    id: 'navigation',
    totalPages: 10,
    totalEntries: 105
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
      { attachTo: document.getElementById('App') }
    );
    navigation = wrapper.find(Navigation).first();
  });

  afterEach(() => {
    store.dispatch(clearState());
    wrapper.unmount();
    wrapper.detach();
  });

  it('should get if it is loading as a prop', () => {
    let isLoadingProp = navigation.props().isLoading;

    expect(isLoadingProp).toBeDefined();
    expect(isLoadingProp).toBe(true);
  });

  it('should get withReduxState as a prop', () => {
    let withReduxStateProp = navigation.props().withReduxState;

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

  it('should not update the currentPerPage prop if a selected <NavigationPerPageSelect /> is clicked', () => {
    expect(store.getState().perPageComposite[0].perPage).toBe(10);
    let secondNavPerPageSelect = navigation.find(NavigationPerPageSelect).at(0);
    secondNavPerPageSelect.find('a').simulate('click');
    expect(store.getState().perPageComposite[0].perPage).toBe(10);
  });

  it('should update the currentPerPage prop if an unselected <NavigationPerPageSelect /> is clicked', () => {
    expect(store.getState().perPageComposite[0].perPage).toBe(10);
    let firstNavPerPageSelect = navigation.find(NavigationPerPageSelect).at(1);
    firstNavPerPageSelect.find('a').simulate('click');
    expect(store.getState().perPageComposite[0].perPage).toBe(20);
  });

  it('should reset selected page to 0 when a <NavigationPerPageSelect/> is clicked and currentPerPage and currentPage are not passed as props', () => {
    let fourthPage = navigation.find(NavigationPaginationSelect).at(3);
    fourthPage.find('a').simulate('click');
    expect(store.getState().paginationComposite[0].pageNb).toBe(3);

    let secondNavPerPageSelect = navigation.find(NavigationPerPageSelect).at(1);
    secondNavPerPageSelect.find('a').simulate('click');
    expect(store.getState().paginationComposite[0].pageNb).toBe(0);

    fourthPage.find('a').simulate('click');
    let firstNavPerPageSelect = navigation.find(NavigationPerPageSelect).at(0);
    firstNavPerPageSelect.find('a').simulate('click');
    expect(store.getState().paginationComposite[0].pageNb).toBe(0);
  });
});
