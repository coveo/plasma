import { shallow, mount, ReactWrapper } from 'enzyme';
import { ITooltipProps, Tooltip } from './Tooltip';
import * as $ from 'jquery';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('<Tooltip>', () => {
  let tooltipWrapper: ReactWrapper<ITooltipProps, any>;

  let tooltipProps: ITooltipProps;

  beforeEach(() => {
    tooltipProps = {
      title: 'My test tooltip!'
    };
  });

  it('should render without error', () => {
    expect(() => shallow(
      <Tooltip {...tooltipProps}>
        Hover me!
      </Tooltip>
    )).not.toThrow();
  });

  it('should mount and unmount/detach without error', () => {
    expect(() => {
      tooltipWrapper = mount(
        <Tooltip {...tooltipProps}>
          Hover me!
        </Tooltip>,
        { attachTo: document.getElementById('App') }
      );
    }).not.toThrow();

    expect(() => {
      tooltipWrapper.unmount();
      tooltipWrapper.detach();
    }).not.toThrow();
  });

  it('should unmount without error when tooltip element is not present in the DOM', () => {
    tooltipWrapper = mount(
      <Tooltip {...tooltipProps}>
        Hover me!
      </Tooltip>,
      { attachTo: document.getElementById('App') }
    );

    let tooltip = (tooltipWrapper.instance() as Tooltip)['tooltip'];
    tooltip = $('.new');

    expect(tooltip[0]).toBeFalsy();
    expect(() => {
      tooltipWrapper.unmount();
      tooltipWrapper.detach();
    }).not.toThrow();


    tooltipWrapper = mount(
      <Tooltip {...tooltipProps}>
        Hover me!
      </Tooltip>,
      { attachTo: document.getElementById('App') }
    );
    (tooltipWrapper.instance() as Tooltip)['tooltip'] = null;

    expect(() => {
      tooltipWrapper.unmount();
      tooltipWrapper.detach();
    }).not.toThrow();
  });
});
