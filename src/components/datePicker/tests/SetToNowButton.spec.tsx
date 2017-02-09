import { shallow, mount, ReactWrapper } from 'enzyme';
import { SetToNowButton, ISetToNowProps, SET_TO_NOW_DEFAULT_TOOLTIP } from '../SetToNowButton';
import * as _ from 'underscore';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Date picker', () => {
  const BUTTON_BASIC_PROPS: ISetToNowProps = {
    onClick: jasmine.createSpy('onClick')
  };

  describe('<SetToNowButton />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <SetToNowButton {...BUTTON_BASIC_PROPS} />
        );
      }).not.toThrow();
    });
  });

  describe('<SetToNowButton />', () => {
    let setToNowButton: ReactWrapper<ISetToNowProps, any>;

    beforeEach(() => {
      setToNowButton = mount(
        <SetToNowButton {...BUTTON_BASIC_PROPS} />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      setToNowButton.unmount();
      setToNowButton.detach();
    });

    it('should get what to do on click as a prop', () => {
      let onClickProp = setToNowButton.props().onClick;

      expect(onClickProp).toBeDefined();
    });

    it('should display a <Svg /> component', () => {
      expect(setToNowButton.find('Svg').length).toBe(1);
    });

    it('should display a <Tooltip /> component', () => {
      expect(setToNowButton.find('Tooltip').length).toBe(1);
    });

    it('should use the tooltip passed as a prop or the default one', () => {
      let propsWithTooltip: ISetToNowProps = _.extend({}, BUTTON_BASIC_PROPS, { tooltip: 'We now have a custom tooltip' });

      expect(setToNowButton.html()).toContain(SET_TO_NOW_DEFAULT_TOOLTIP);

      setToNowButton.setProps(propsWithTooltip);

      expect(setToNowButton.html()).toContain(propsWithTooltip.tooltip);
    });

    it('should call the onClick prop when clicking the button', () => {
      setToNowButton.find('button').simulate('click');

      expect(BUTTON_BASIC_PROPS.onClick).toHaveBeenCalled();
    });
  });
});
