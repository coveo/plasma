import { shallow } from 'enzyme';
import * as React from 'react';
import { onEntering, onExiting, SlideY } from './SlideY';

describe('SlideY', () => {
  const dummyTimeout = 400;
  const testElementId = 'testId';
  const textnode = document.createTextNode('testing');

  let testElement: HTMLElement;

  beforeEach(() => {
    testElement = document.createElement('DIV');
    testElement.id = testElementId;
    testElement.appendChild(textnode);
  });

  it('should not throw when rendered with in prop to true', () => {
    expect(() => shallow(<SlideY in timeout={dummyTimeout}>{testElement}</SlideY>)).not.toThrow();
  });

  it('should not throw when rendered with in prop to false', () => {
    expect(() => shallow(<SlideY in={false} timeout={dummyTimeout}>{testElement}</SlideY>)).not.toThrow();
  });

  describe('onEntering', () => {
    beforeEach(() => {
      testElement.classList.add('slide-y-closed');
    });

    it('should not throw when passing an html Element', () => {
      expect(() => onEntering(testElement)).not.toThrow();
    });

    it('should return the same html element, modified', () => {
      expect(onEntering(testElement).id).toBe(testElement.id);
      expect(testElement.classList.contains('slide-y-closed')).toBe(false);
    });
  });

  describe('onExiting', () => {
    it('should not throw when passing an html Element', () => {
      expect(() => onExiting(testElement)).not.toThrow();
    });

    it('should return the same html element, modified', () => {
      expect(onExiting(testElement).id).toBe(testElement.id);
      expect(testElement.classList.contains('slide-y-transition')).toBe(true);
    });
  });
});
