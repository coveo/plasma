import {shallow, ShallowWrapper, ReactWrapper, mount} from 'enzyme';
import {Loading, ILoadingProps} from '../Loading';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('<Loading />', () => {
  it('should render without errors', () => {
    expect(() => {
      shallow(<Loading />);
    }).not.toThrow();
  });

  it('should render the spinner', () => {
    let loading: ShallowWrapper<ILoadingProps, any> = shallow(<Loading />);
    expect(loading.find('.spinner').length).toBe(1);
  });

  it('should call onRender if prop is set when mounting', () => {
    let onRenderSpy = jasmine.createSpy('onRender');
    let loading: ReactWrapper<ILoadingProps, any> = mount(
      <Loading onRender={onRenderSpy} />,
      { attachTo: document.getElementById('App') }
    );
    expect(onRenderSpy).toHaveBeenCalled();
    loading.unmount();
    loading.detach();
  });

  it('should call onDestroy if prop is set when unmounting', () => {
    let onDestroySpy = jasmine.createSpy('onDestroy');
    let loading: ReactWrapper<ILoadingProps, any> = mount(
      <Loading onDestroy={onDestroySpy} />,
      { attachTo: document.getElementById('App') }
    );
    loading.unmount();
    expect(onDestroySpy).toHaveBeenCalled();
    loading.detach();
  });
});
