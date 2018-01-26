// inspired from https://github.com/frankwallis/react-slidedown
// implemented with the new react-transition-group https://github.com/reactjs/react-transition-group

import * as React from 'react';
import Transition, { TransitionProps } from 'react-transition-group/Transition';

export const onEntering = (element: HTMLElement): HTMLElement => {
  const prevHeight = `${element.getBoundingClientRect().height}px`;
  let endHeight = '0px';

  element.classList.remove('slide-y-closed');
  element.style.height = 'auto';
  endHeight = getComputedStyle(element).height;

  if (parseFloat(endHeight).toFixed(2) !== parseFloat(prevHeight).toFixed(2)) {
    element.classList.add('slide-y-transition');
    element.style.height = prevHeight;
    element.offsetHeight; // force repaint
    element.style.transitionProperty = 'height';
    element.style.height = endHeight;
  }

  return element;
};

export const onExiting = (element: HTMLElement) => {
  element.classList.add('slide-y-transition');
  element.style.height = getComputedStyle(element).height;
  element.offsetHeight; // force repaint
  element.style.transitionProperty = 'height';
  element.style.height = '0px';

  return element;
};

export const SlideY = (props: TransitionProps): JSX.Element => {
  return (
    <Transition
      in={props.in}
      timeout={props.timeout}
      onEntering={onEntering}
      onExiting={onExiting}>
      <div className='slide-y slide-y-closed'>
        {props.children}
      </div>
    </Transition>
  );
};
