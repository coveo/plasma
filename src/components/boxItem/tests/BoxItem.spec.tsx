import * as React from 'react';
import { mount, ReactWrapper, shallow } from 'enzyme';
import * as _ from 'underscore';
import { ISvgProps, Svg } from '../../svg/Svg';
import { BoxItem, IBoxItemProps } from '../BoxItem';
import { ITooltipProps, Tooltip } from '../../tooltip/Tooltip';

describe('BoxItem', () => {

  let boxItemComponent: ReactWrapper<IBoxItemProps, any>;
  const defaultProps: IBoxItemProps = {
    value: 'test',
  };

  it('should render without errors', () => {
    expect(() => {
      shallow(<BoxItem
        value='test'
      />);
    }).not.toThrow();
  });

  describe('<BoxItem /> with default props', () => {

    beforeEach(() => {
      boxItemComponent = mount(
        <BoxItem {...defaultProps} />,
        { attachTo: document.getElementById('App') },
      );
    });

    it('should render with the box-item class', () => {
      expect(boxItemComponent.find('li').hasClass('box-item')).toBe(true);
    });

    it('should render with the data-value set with the value', () => {
      expect(boxItemComponent.find(`[data-value="${defaultProps.value}"]`).length).toBe(1);
    });
  });

  describe('<BoxItem /> with custom props', () => {

    const tooltip: ITooltipProps = {
      title: 'title test for the box item',
      placement: 'bottom',
      container: 'body',
    };

    const svg: ISvgProps = {
      svgName: 'domain-google',
    };

    const renderBoxItem = (props: Partial<IBoxItemProps> = {}) => {
      boxItemComponent = mount(
        <BoxItem {..._.defaults(props, defaultProps) } />,
        { attachTo: document.getElementById('App') },
      );
    };

    it('should render the display value', () => {
      const displayValue: string = 'display value';
      renderBoxItem({
        displayValue,
      });
      expect(boxItemComponent.find('li').text()).toEqual(displayValue);
    });

    it('should render the prefix', () => {
      const prefix: string = 'prefix';
      renderBoxItem({
        prefix,
      });
      expect(boxItemComponent.find('li').text()).toContain(prefix);
    });

    it('should render the svg with the default classes', () => {
      renderBoxItem({
        svg,
      });
      expect(boxItemComponent.find(Svg).length).toBe(1);
    });

    it('should render the tooltip', () => {
      renderBoxItem({
        tooltip,
      });
      expect(boxItemComponent.find(Tooltip).length).toBe(1);
    });

    it('should render with the class active if set to true', () => {
      renderBoxItem({
        active: true,
      });
      expect(boxItemComponent.find('li').hasClass('active')).toBe(true);
    });

    it('should render with the class selected if set to true', () => {
      renderBoxItem({
        selected: true,
      });
      expect(boxItemComponent.find('li').hasClass('selected')).toBe(true);
    });

    it('should render with the class disabled if set to true', () => {
      renderBoxItem({
        disabled: true,
      });
      expect(boxItemComponent.find('li').hasClass('disabled')).toBe(true);
    });

    it('should render with the class hidden if set to true', () => {
      renderBoxItem({
        hidden: true,
      });
      expect(boxItemComponent.find('li').hasClass('hidden')).toBe(true);
    });

    it('should call the onOptionClick on click', () => {
      const onOptionClick: jasmine.Spy = jasmine.createSpy('onOptionClick');

      renderBoxItem({
        onOptionClick,
      });

      boxItemComponent.find('li').simulate('mouseDown');

      expect(onOptionClick).toHaveBeenCalled();
    });
  });
});
