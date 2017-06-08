import * as React from 'react';
import { mount, ReactWrapper, shallow } from 'enzyme';
import { Button } from '../Button';
import { IBaseActionOptions } from '../../actions/Action';

describe('Button', () => {

  let buttonComponent: ReactWrapper<IBaseActionOptions, any>;

  it('should render without errors', () => {
    expect(() => {
      shallow(<Button enabled={true} />);
    }).not.toThrow();
  });

  describe('<Button /> with default props', () => {

    beforeEach(() => {
      buttonComponent = mount(
        <Button enabled={true} />,
        { attachTo: document.getElementById('App') },
      );
    });

    it('should render the default name', () => {
      expect(buttonComponent.find('button').text()).toEqual('');
    });
  });

  describe('<Button /> with custom props', () => {

    const showButton = (props: IBaseActionOptions) => {
      buttonComponent = mount(
        <Button {...props} />,
        { attachTo: document.getElementById('App') },
      );
    };

    it('should render the custom name', () => {
      showButton({
        enabled: true,
        name: 'test',
      });

      expect(buttonComponent.find('button').text()).toEqual('test');
    });

    it('should render the default button disabled with enabled at false', () => {
      showButton({
        enabled: false,
      });

      expect(buttonComponent.find('button').prop('disabled')).toBe(true);
      expect(buttonComponent.find('button').hasClass('disabled')).toBe(true);
    });

    it('should render the link button disabled with enabled at false', () => {
      showButton({
        enabled: false,
        link: 'test',
      });

      expect(buttonComponent.find('a').prop('disabled')).toBe(true);
      expect(buttonComponent.find('a').hasClass('disabled')).toBe(true);
    });

    it('should call the onClick props on click', () => {
      const spyOnClick = jasmine.createSpy('onClick');

      showButton({
        enabled: true,
        onClick: spyOnClick,
      });
      buttonComponent.find('button').simulate('click');

      expect(spyOnClick).toHaveBeenCalledTimes(1);
    });

    it('should add title on element if tooltip is defined', () => {
      showButton({
        enabled: true,
        tooltip: 'test',
      });
      expect(buttonComponent.find('button').prop('title')).toBe('test');
    });

    it('should add placement on element if tooltipPlacement is defined', () => {
      showButton({
        enabled: true,
        tooltip: 'test',
        tooltipPlacement: 'bottom',
      });
      expect(buttonComponent.find('button').prop('placement')).toBe('bottom');
    });

    describe('with the link button', () => {

      it('should have the class btn-container', () => {
        showButton({
          enabled: true,
          link: 'test',
        });

        expect(buttonComponent.find('.btn-container').length).toBe(1);
      });
    });
  });
});
