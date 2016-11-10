import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import { LastUpdated, ILastUpdatedProps, LAST_UPDATE_LABEL } from '../LastUpdated';
import { TestUtils } from '../../../utils/TestUtils';
import * as s from 'underscore.string';
import * as moment from 'moment';

/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('<LastUpdated />', () => {
  let lastUpdatedWrapper: ShallowWrapper<ILastUpdatedProps, any>;
  let lastUpdated: ReactWrapper<ILastUpdatedProps, any>;
  let time: Date;

  it('should render without errors', () => {

    expect(() => {
      shallow(
        <LastUpdated />
      );
    }).not.toThrow();
  });

  it('should display the time passed as a prop', () => {
    time = TestUtils.randomDate();

    let expectedTime = moment(time).format('LTS');

    lastUpdatedWrapper = shallow(
      <LastUpdated
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
      <LastUpdated />
    );

    expect(s.contains(lastUpdatedWrapper.html(), expectedTime));

    jasmine.clock().uninstall();
  });

  it('should use the label passed as a prop to display the time, else it uses the default label', () => {
    lastUpdatedWrapper = shallow(
      <LastUpdated />
    );
    expect(s.contains(lastUpdatedWrapper.html(), LAST_UPDATE_LABEL));

    let expectedLabel = 'Last update was at =>';
    lastUpdatedWrapper.setProps({ label: expectedLabel });
    expect(s.contains(lastUpdatedWrapper.html(), expectedLabel));
  });

  it('should trigger onRender prop when mounting', () => {
    let renderSpy = jasmine.createSpy('onRender');
    lastUpdated = mount(
      <LastUpdated />,
      { attachTo: document.getElementById('App') }
    );
    expect(renderSpy.calls.count()).toBe(0);
    lastUpdated.setProps({ onRender: renderSpy });
    lastUpdated.unmount();
    lastUpdated.mount();
    expect(renderSpy.calls.count()).toBe(1);
  });

  it('should trigger onDestroy prop when unmounting', () => {
    let destroySpy = jasmine.createSpy('onDestroy');
    lastUpdated = mount(
      <LastUpdated />,
      { attachTo: document.getElementById('App') }
    );
    lastUpdated.unmount();
    expect(destroySpy.calls.count()).toBe(0);
    lastUpdated.setProps({ onDestroy: destroySpy });
    lastUpdated.mount();
    lastUpdated.unmount();
    expect(destroySpy.calls.count()).toBe(1);
  });
});
