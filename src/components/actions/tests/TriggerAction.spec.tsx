import { shallow, mount, ReactWrapper } from 'enzyme';
import { IActionOptions } from '../Action';
import { TriggerAction, ITriggerActionProps } from '../TriggerAction';
import * as _ from 'underscore';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('Actions', () => {
  let triggerSpy: jasmine.Spy;
  let action: IActionOptions = {
    name: 'action',
    enabled: true
  };
  let simple: boolean = false;

  describe('<TriggerAction />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <TriggerAction
            action={action}
            />
        );
      }).not.toThrow();
    });
  });

  describe('<TriggerAction />', () => {
    let triggerAction: ReactWrapper<ITriggerActionProps, any>;
    let triggerActionInstance: TriggerAction;
    triggerSpy = jasmine.createSpy('triggerMethod');
    action.trigger = triggerSpy;

    beforeEach(() => {
      triggerAction = mount(
        <TriggerAction
          action={action}
          simple={simple}
          />,
        { attachTo: document.getElementById('App') }
      );
      triggerActionInstance = triggerAction.instance() as TriggerAction;
    });

    afterEach(() => {
      triggerAction.unmount();
      triggerAction.detach();
    });

    it('should get if the action is simple (no html) as a prop', () => {
      let simpleProp = triggerAction.props().simple;

      expect(simpleProp).toBeDefined();
      expect(simpleProp).toBe(simple);
    });

    it('should render a <Action /> component', () => {
      expect(triggerAction.find('Action').length).toBe(1);
    });

    it('should have the "enabled" class if action is enabled', () => {
      expect(triggerAction.find('.enabled').length).toBe(1);

      let newAction = _.extend({}, action);
      newAction.enabled = false;
      triggerAction.setProps({ action: newAction, simple: simple });

      expect(triggerAction.find('.enabled').length).toBe(0);
      expect(triggerAction.find('.disabled').length).toBe(1);

      triggerAction.setProps({ action: newAction, simple: true });

      expect(triggerAction.find('.enabled').length).toBe(0);
      expect(triggerAction.find('.state-disabled').length).toBe(1);
    });

    it('should call onTriggerAction when clicked', () => {
      let onTriggerActionSpy = spyOn(triggerActionInstance, 'onTriggerAction');

      triggerAction.find('.enabled').simulate('click');
      expect(onTriggerActionSpy.calls.count()).toBe(1);
    });

    it('should call the trigger of the action when clicked and no confirmation is required', () => {
      triggerAction.find('.enabled').simulate('click');
      expect(triggerSpy.calls.count()).toBe(1);
    });

    it('should call the onTriggerConfirm if set when clicked and confirmation is required', () => {
      let onTriggerConfirmSpy = jasmine.createSpy('onTriggerConfirmSpy');

      let newAction = _.extend({}, action);
      newAction.requiresConfirmation = {
        confirmType: 'danger',
        buttonLabels: {
          confirm: 'delete',
          cancel: 'cancel'
        }
      };
      triggerAction.setProps({ action: newAction });
      expect(() => triggerActionInstance['onTriggerAction'].call(triggerActionInstance)).not.toThrow();

      triggerAction.setProps({ action: newAction, onTriggerConfirm: onTriggerConfirmSpy });

      triggerAction.find('.enabled').simulate('click');
      expect(onTriggerConfirmSpy.calls.count()).toBe(1);
    });

    it('should not throw when clicking the action when the trigger of the action is not set and confirmation is not required', () => {
      let newAction = _.extend({}, action);
      newAction.trigger = undefined;
      triggerAction.setProps({ action: newAction });
      expect(() => triggerActionInstance['onTriggerAction'].call(triggerActionInstance)).not.toThrow();
    });

    it('should send a function that calls the trigger of the action and the onConfirm prop when confirmation is required and onTriggerConfirm is set', () => {
      let onTriggerConfirm = (onClick: () => void) => {
        onClick();
      };
      let onConfirmSpy = jasmine.createSpy('onConfirm');
      let newAction = _.extend({}, action);
      newAction.requiresConfirmation = {
        confirmType: 'danger',
        buttonLabels: {
          confirm: 'delete',
          cancel: 'cancel'
        }
      };
      triggerAction.setProps({ action: newAction, onTriggerConfirm: onTriggerConfirm, onConfirm: onConfirmSpy });
      triggerAction.find('.enabled').simulate('click');
      expect(triggerSpy).toHaveBeenCalled();
      expect(onConfirmSpy).toHaveBeenCalled();
    });

    it('should not thrown on the function sent when the trigger of the action or the onConfirm prop are not set', () => {
      let onTriggerConfirm = (onClick: () => void) => {
        onClick();
      };
      let newAction = _.extend({}, action, { trigger: undefined });
      newAction.requiresConfirmation = {
        confirmType: 'danger',
        buttonLabels: {
          confirm: 'delete',
          cancel: 'cancel'
        }
      };
      triggerAction.setProps({ action: newAction, onTriggerConfirm: onTriggerConfirm });
      expect(() => triggerActionInstance['onTriggerAction'].call(triggerActionInstance)).not.toThrow();
    });
  });
});
