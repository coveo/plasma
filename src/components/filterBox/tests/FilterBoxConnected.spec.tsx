import { mount, ReactWrapper } from 'enzyme';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { FilterBox, IFilterBoxProps } from '../FilterBox';
import { IReactVaporState, clearState } from '../../../utils/ReduxUtils';
import { TestUtils } from '../../../utils/TestUtils';
import { FilterBoxConnected } from '../FilterBoxConnected';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('<FilterBoxConnected />', () => {
  let id: string;
  let wrapper: ReactWrapper<any, any>;
  let filterBoxView: ReactWrapper<IFilterBoxProps, any>;
  let store: Store<IReactVaporState>;

  beforeEach(() => {
    id = 'filter-box';

    store = TestUtils.buildStore();

    wrapper = mount(
      <Provider store={store}>
        <FilterBoxConnected
          id={id}
          />
      </Provider>,
      { attachTo: document.getElementById('App') }
    );
    filterBoxView = wrapper.find(FilterBox).first();
  });

  afterEach(() => {
    store.dispatch(clearState());
    wrapper.unmount();
    wrapper.detach();
  });

  it('should get its id as a prop', () => {
    let idProp = filterBoxView.props().id;

    expect(idProp).toBeDefined();
    expect(idProp).toBe(id);
  });

  it('should get what to do on render as a prop', () => {
    let onRenderProp = filterBoxView.props().onRender;

    expect(onRenderProp).toBeDefined();
  });

  it('should get what to do on destroy as a prop', () => {
    let onDestroyProp = filterBoxView.props().onDestroy;

    expect(onDestroyProp).toBeDefined();
  });

  it('should get what to do on filter as a prop', () => {
    let onFilterProp = filterBoxView.props().onFilter;

    expect(onFilterProp).toBeDefined();
  });

  it('should render an input to filter', () => {
    expect(filterBoxView.find('input').length).toBe(1);
  });

  it('should add the filter box in the store on render', () => {
    expect(store.getState().filters.filter(filter => filter.id === id).length).toBe(1);
  });

  it('should remove the filter box in the store on render', () => {
    wrapper.unmount();
    expect(store.getState().filters.filter(filter => filter.id === id).length).toBe(0);
  });

  it('should send the text from the filter input to the store on input value change', () => {
    let input = filterBoxView.find('input');
    let newValue = 'something';

    expect(store.getState().filters.filter(filter => filter.id === id && filter.filterText === '').length).toBe(1);

    input.simulate('change', { target: { value: newValue } });

    expect(store.getState().filters.filter(filter => filter.id === id && filter.filterText === '').length).toBe(0);
    expect(store.getState().filters.filter(filter => filter.id === id && filter.filterText === newValue).length).toBe(1);
  });
});
