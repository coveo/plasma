import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';

import {Flippable, IFlippableProps} from '../Flippable';

describe('Flippable', () => {
  let flippable: ReactWrapper<IFlippableProps>;
  
  it('should render without errors', () => {
    expect(() => {
      shallow(<Flippable />);
    }).not.toThrow();
  });
  
  describe('<Flippable />', () => {
    
    beforeEach(() => {
      flippable = mount(
        <Flippable />,
        { attachTo: document.getElementById('App') },
      );
    });

    afterEach(() => {
      flippable.unmount();
      flippable.detach();
    });

    it('should have the default flippable class', () => {
      expect(flippable.hasClass(Flippable.CONTAINER_CLASSNAME)).toBe(true);
    });

    it('should show the front face by default', () => {
      expect(flippable.find(Flippable.FLIPPER_CLASSNAME).hasClass(Flippable.triggers.FRONT)).toBe(true);
    });

    it('should render the front side content on the front', () => {
      flippable.setProps({
        front: <div id='MyFrontContent'></div>,
      });

      const renderedFrontSide = flippable.find(Flippable.sides.FRONT);

      expect(renderedFrontSide.length).toBeGreaterThan(0);
      expect(renderedFrontSide.find('#MyFrontContent').length).toBeGreaterThan(0);
    });

    it('should render the back side content on the back', () => {
      flippable.setProps({
        back: <div id='MyBackContent'></div>,
      });

      const renderedBackSide = flippable.find(Flippable.sides.BACK);

      expect(renderedBackSide.length).toBeGreaterThan(0);
      expect(renderedBackSide.find('#MyBackContent').length).toBeGreaterThan(0);
    });

    it('should call onFlip prop if any when clicking on the front side', () => {
      const onFlipSpy = jasmine.createSpy('onFlip');

      flippable.setProps({
        onFlip: onFlipSpy,
      });

      flippable.simulate('click');

      expect(onFlipSpy).toHaveBeenCalledTimes(1);
    });

    it('should call onUnflip prop if any when clicking outside the back side of the flippable ' +
      'only when it is flipped', () => {
        const onUnflipSpy = jasmine.createSpy('onUnflip');

        flippable.setProps({
          onUnflip: onUnflipSpy,
        });

        document.getElementById('App').click();

        expect(onUnflipSpy).not.toHaveBeenCalled();

        flippable.setProps({
          isFlipped: true,
        });

        document.getElementById('App').click();

        expect(onUnflipSpy).toHaveBeenCalledTimes(1);
      });
  });
});
