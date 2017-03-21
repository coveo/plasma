import { shallow, mount, ReactWrapper } from 'enzyme';
import { IActionOptions, Action, IActionProps } from '../Action';
import * as _ from 'underscore';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('Actions', () => {
  let action: IActionOptions = {
    name: 'action',
    trigger: jasmine.createSpy('triggerMethod'),
    enabled: true
  };

  describe('<Action />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <Action action={action} />
        );
      }).not.toThrow();
    });
  });

  describe('<Action />', () => {
    let actionComponent: ReactWrapper<IActionProps, any>;
    let simple: boolean = false;

    beforeEach(() => {
      actionComponent = mount(
        <Action
          action={action}
          simple={simple}
        />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      actionComponent.unmount();
      actionComponent.detach();
    });

    it('should get an action as a prop', () => {
      let actionProp = actionComponent.props().action;

      expect(actionProp).toBeDefined();
      expect(actionProp).toEqual(jasmine.objectContaining(action));
    });

    it('should get if the action is simple (no html) as a prop', () => {
      let simpleProp = actionComponent.props().simple;

      expect(simpleProp).toBeDefined();
      expect(simpleProp).toBe(simple);
    });

    it('should not contain html if the action is simple', () => {
      expect(actionComponent.find('span').find('span').length).toBeGreaterThan(1);

      actionComponent.setProps({ action: action, simple: true });

      expect(actionComponent.find('span').length).toBe(1);
    });

    it('should have icon more if no icon is defined', () => {
      expect(actionComponent.find('.action-icon-more').length).toBe(1);

      let newAction = _.extend({}, action);
      newAction.icon = 'delete';
      actionComponent.setProps({ action: newAction, simple: false });

      expect(actionComponent.find('Svg').length).toBe(1);
      expect(actionComponent.find('.more-icon').length).toBe(0);
    });

    it('should display the action name', () => {
      expect(actionComponent.html()).toContain(action.name);
    });

    it('should display a <Tooltip /> if the action has a tooltip', () => {
      expect(actionComponent.find('Tooltip').length).toBe(0);

      let newAction = _.extend({}, action, { tooltip: 'A useful tooltip' });
      actionComponent.setProps({ action: newAction, simple: false });

      expect(actionComponent.find('Tooltip').length).toBe(1);
    });
  });
});
