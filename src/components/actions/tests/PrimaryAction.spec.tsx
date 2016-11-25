import { shallow, mount, ReactWrapper } from 'enzyme';
import { IActionOptions } from '../Action';
import { PrimaryAction, IPrimaryActionProps } from '../PrimaryAction';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Actions', () => {
  let actions: IActionOptions[] = [{
    name: 'action',
    link: 'http://google.com',
    target: '_blank',
    enabled: true
  }, {
    name: 'action2',
    trigger: jasmine.createSpy('triggerMethod'),
    enabled: true
  }];

  describe('<PrimaryAction />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(<PrimaryAction action={actions[0]} />);
      }).not.toThrow();
    });
  });

  describe('<PrimaryAction />', () => {
    let primaryAction: ReactWrapper<IPrimaryActionProps, any>;

    beforeEach(() => {
      primaryAction = mount(
        <PrimaryAction action={actions[0]} />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      primaryAction.unmount();
      primaryAction.detach();
    });

    it('should get an action as a prop', () => {
      let actionProp = primaryAction.props().action;

      expect(actionProp).toBeDefined();
      expect(actionProp).toEqual(jasmine.objectContaining(actions[0]));
    });

    it('should display a <LinkAction /> component if the action is a link action', () => {
      expect(primaryAction.find('LinkAction').length).toBe(1);
      expect(primaryAction.find('TriggerAction').length).toBe(0);
    });

    it('should display a <TriggerAction /> component if the action is a trigger action', () => {
      primaryAction.setProps({ action: actions[1] });

      expect(primaryAction.find('TriggerAction').length).toBe(1);
      expect(primaryAction.find('LinkAction').length).toBe(0);
    });
  });
});
