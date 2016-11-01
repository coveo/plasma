import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import { LastUpdated, ILastUpdatedProps, defaultLastUpdateLabel } from '../LastUpdated';
import { IReactVaporState, clearState } from '../../../utils/ReduxUtils';
import { LastUpdatedConnected } from '../LastUpdatedConnected';
import { TestUtils } from '../../../utils/TestUtils';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import * as s from 'underscore.string';
import * as moment from 'moment';

/* tslint:disable:no-unused-variable */
import * as React from 'react';
import { changeLastUpdated } from '../LastUpdatedActions';
/* tslint:enable:no-unused-variable */

describe('LastUpdated', () => {
  let lastUpdatedWrapper: ShallowWrapper<ILastUpdatedProps, any>;
  let lastUpdated: ReactWrapper<ILastUpdatedProps, any>;
  let id: string;
  let time: Date;
  let onRender: () => void;
  let onDestroy: () => void;

  describe('<LastUpdated />', () => {
    it('should render without errors', () => {
      id = 'last-update';
      time = new Date();
      onRender = jasmine.createSpy('onRender');
      onDestroy = jasmine.createSpy('onDestroy');

      expect(() => {
        shallow(
          <LastUpdated
            id={id}
            />
        );
      }).not.toThrow();
    });

    it('should display the time passed as a prop', () => {
      time = TestUtils.randomDate();

      let expectedTime = moment(time).format('LTS');

      lastUpdatedWrapper = shallow(
        <LastUpdated
          id={id}
          time={time}
          />
      );

      expect(s.contains(lastUpdatedWrapper.html(), expectedTime));
    });

    it('should add the current time if we do not pass it the time prop', () => {
      jasmine.clock().install();
      time = TestUtils.randomDate();
      jasmine.clock().mockDate(time);

      let expectedTime = moment(time).format('LTS');

      lastUpdatedWrapper = shallow(
        <LastUpdated
          id={id}
          />
      );

      expect(s.contains(lastUpdatedWrapper.html(), expectedTime));

      jasmine.clock().uninstall();
    });

    it('should use the label passed as a prop to display the time, else it uses the default label', () => {
      lastUpdatedWrapper = shallow(
        <LastUpdated
          id={id}
          />
      );
      expect(s.contains(lastUpdatedWrapper.html(), defaultLastUpdateLabel));

      let expectedLabel = 'Last update was at =>';
      lastUpdatedWrapper.setProps({ id: id, label: expectedLabel });
      expect(s.contains(lastUpdatedWrapper.html(), expectedLabel));
    });

    it('should trigger onRender prop when mounting', () => {
      let renderSpy = jasmine.createSpy('onRender');
      lastUpdated = mount(
        <LastUpdated
          id={id}
          />,
        { attachTo: document.getElementById('App') }
      );
      expect(renderSpy.calls.count()).toBe(0);
      lastUpdated.setProps({ id: id, onRender: renderSpy });
      lastUpdated.unmount();
      lastUpdated.mount();
      expect(renderSpy.calls.count()).toBe(1);
    });

    it('should trigger onDestroy prop when unmounting', () => {
      let destroySpy = jasmine.createSpy('onDestroy');
      lastUpdated = mount(
        <LastUpdated
          id={id}
          />,
        { attachTo: document.getElementById('App') }
      );
      lastUpdated.unmount();
      expect(destroySpy.calls.count()).toBe(0);
      lastUpdated.setProps({ id: id, onDestroy: destroySpy });
      lastUpdated.mount();
      lastUpdated.unmount();
      expect(destroySpy.calls.count()).toBe(1);
    });
  });

  describe('<LastUpdatedConnected />', () => {
    let wrapper: ReactWrapper<any, any>;
    let store: Store<IReactVaporState>;

    beforeEach(() => {
      id = 'last-update';

      store = TestUtils.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <LastUpdatedConnected
            id={id}
            />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      lastUpdated = wrapper.find(LastUpdated).first();
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get its id as a prop', () => {
      let idProp = lastUpdated.props().id;

      expect(idProp).toBeDefined();
      expect(idProp).toBe(id);
    });

    it('should get last update time as a prop', () => {
      let timeProp = lastUpdated.props().time;

      expect(timeProp).toBeDefined();
    });

    it('should get what to do on render as a prop', () => {
      let onRenderProp = lastUpdated.props().onRender;

      expect(onRenderProp).toBeDefined();
    });

    it('should get what to do on destroy as a prop', () => {
      let onDestroyProp = lastUpdated.props().onDestroy;

      expect(onDestroyProp).toBeDefined();
    });

    it('should display the last update time', () => {
      expect(s.contains(lastUpdated.html(), 'AM') || s.contains(lastUpdated.html(), 'PM')).toBe(true);
    });

    it('should add the last update time in the store on render', () => {
      expect(store.getState().lastUpdatedComposite.filter(timer => timer.id === id).length).toBe(1);
    });

    it('should update the last update time in the store when dispatching a "changeLastUpdated" action', () => {
      expect(store.getState().lastUpdatedComposite.filter(timer => timer.id === id).length).toBe(1);

      let storedTime = store.getState().lastUpdatedComposite.filter(timer => timer.id === id)[0].time;
      store.dispatch(changeLastUpdated(id));
      expect(store.getState().lastUpdatedComposite.filter(timer => timer.id === id)[0]).not.toBe(storedTime);
    });

    it('should remove the last update time in the store on destroy', () => {
      wrapper.unmount();
      expect(store.getState().lastUpdatedComposite.filter(timer => timer.id === id).length).toBe(0);
    });
  });
});
