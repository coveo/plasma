import { shallow, mount, ReactWrapper } from 'enzyme';
import { ITooltipProps, Tooltip } from '../Tooltip';
import * as _ from 'underscore';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { OverlayTrigger } from 'react-bootstrap';

describe('Tooltip', () => {
  let tooltipWrapper: ReactWrapper<ITooltipProps, void>;
  const TOOLTIP_PROPS: ITooltipProps = {
    title: 'My test tooltip!'
  };
  const TOOLTIP: JSX.Element = <Tooltip {...TOOLTIP_PROPS}>Hover me!</Tooltip>;

  describe('<Tooltip />', () => {
    it('should render without error', () => {
      expect(() => shallow(TOOLTIP)).not.toThrow();
    });

    it('should mount and unmount/detach without error', () => {
      expect(() => {
        tooltipWrapper = mount(TOOLTIP, { attachTo: document.getElementById('App') });
      }).not.toThrow();

      expect(() => {
        tooltipWrapper.unmount();
        tooltipWrapper.detach();
      }).not.toThrow();
    });
  });

  describe('<Tooltip />', () => {
    beforeEach(() => {
      tooltipWrapper = mount(TOOLTIP, { attachTo: document.getElementById('App') });
    });

    afterEach(() => {
      tooltipWrapper.unmount();
      tooltipWrapper.detach();
    });

    it('should get the title as a prop', () => {
      const titleProp: string = tooltipWrapper.props().title;

      expect(titleProp).toBeDefined();
      expect(titleProp).toBe(TOOLTIP_PROPS.title);
    });

    it('should display the className passed as a prop', () => {
      const newProps: ITooltipProps = _.extend({}, TOOLTIP_PROPS, { className: 'some-class' });

      tooltipWrapper.setProps(newProps);

      expect(tooltipWrapper.html()).toContain(newProps.className);
    });

    it('should display an <OverlayTrigger/>', () => {
      expect(tooltipWrapper.find(OverlayTrigger).length).toBe(1);
    });

    it('should pass a <BootstrapTooltip/> to the <OverlayTrigger/>', () => {
      expect(tooltipWrapper.find(OverlayTrigger).props().overlay).toBeDefined();
    });

    it('should display a footer section if one is passed as a prop', () => {
      const newProps: ITooltipProps = _.extend({}, TOOLTIP_PROPS, { footer: 'footer section' });

      expect(tooltipWrapper.find(OverlayTrigger).props().overlay.props.children[1]).toBeNull();

      tooltipWrapper.setProps(newProps);

      expect(tooltipWrapper.find(OverlayTrigger).props().overlay.props.children[1].toString()).not.toContain('tooltip-footer');
    });
  });
});
