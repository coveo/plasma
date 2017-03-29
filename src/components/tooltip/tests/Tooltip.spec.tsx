import { shallow, mount, ReactWrapper } from 'enzyme';
import { ITooltipProps, Tooltip } from '../Tooltip';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('Tooltip', () => {
  let tooltipWrapper: ReactWrapper<ITooltipProps, void>;
  const TOOLTIP_PROPS: ITooltipProps = {
    title: 'My test tooltip!'
  };

  describe('<Tooltip />', () => {
    it('should render without error', () => {
      expect(() => shallow(
        <Tooltip {...TOOLTIP_PROPS}>
          Hover me!
        </Tooltip>
      )).not.toThrow();
    });

    it('should mount and unmount/detach without error', () => {
      expect(() => {
        tooltipWrapper = mount(
          <Tooltip {...TOOLTIP_PROPS}>
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
  });

  describe('<Tooltip />', () => {
    beforeEach(() => {
      tooltipWrapper = mount(
        <Tooltip {...TOOLTIP_PROPS}>
          Hover me!
        </Tooltip>,
        { attachTo: document.getElementById('App') }
      );

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
        expect(tooltipWrapper.find('OverlayTrigger').length).toBe(1);
      });

      it('should display a <BootstrapTooltip/>', () => {
        expect(tooltipWrapper.find('BootstrapTooltip').length).toBe(1);
      });
    });
  });
});
