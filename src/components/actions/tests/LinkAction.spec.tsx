import { shallow, mount, ReactWrapper } from 'enzyme';
import { IActionOptions } from '../Action';
import { LinkAction, ILinkActionProps } from '../LinkAction';
import * as _ from 'underscore';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('Actions', () => {
  let action: IActionOptions = {
    name: 'action',
    link: 'http://coveo.com',
    target: '_blank',
    enabled: true
  };

  describe('<LinkAction />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <LinkAction action={action} />
        );
      }).not.toThrow();
    });
  });

  describe('<LinkAction />', () => {
    let linkAction: ReactWrapper<ILinkActionProps, any>;
    let simple: boolean = false;

    beforeEach(() => {
      linkAction = mount(
        <LinkAction
          action={action}
          simple={simple}
          />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      linkAction.unmount();
      linkAction.detach();
    });

    it('should get an action as a prop', () => {
      let actionProp = linkAction.props().action;

      expect(actionProp).toBeDefined();
      expect(actionProp).toEqual(jasmine.objectContaining(action));
    });

    it('should get if the action is simple (no html) as a prop', () => {
      let simpleProp = linkAction.props().simple;

      expect(simpleProp).toBeDefined();
      expect(simpleProp).toBe(simple);
    });

    it('should render a <Action /> component', () => {
      expect(linkAction.find('Action').length).toBe(1);
    });

    it('should have a target attribute if there is a target for the action', () => {
      let expectedTarget = 'target="' + action.target + '"';
      expect(linkAction.html()).toContain(expectedTarget);

      let newAction = _.extend({}, action);
      newAction.target = undefined;
      linkAction.setProps({ action: newAction, simple: simple });

      expect(linkAction.html()).not.toContain(expectedTarget);
    });

    it('should have a "noopener noreferrer" as rel attribute if there is a target for the action', () => {
      let expectedRel = 'rel="noopener noreferrer"';
      expect(linkAction.html()).toContain(expectedRel);

      let newAction = _.extend({}, action);
      newAction.target = undefined;
      linkAction.setProps({ action: newAction, simple: simple });

      expect(linkAction.html()).not.toContain(expectedRel);
    });

    it('should have flex classes if action is not simple', () => {
      let expectedFlexClass = 'inline-flex';
      let expectedCenterFlexClass = 'flex-center';

      expect(linkAction.find('a').hasClass(expectedFlexClass)).toBe(true);
      expect(linkAction.find('a').hasClass(expectedCenterFlexClass)).toBe(true);

      linkAction.setProps({ action: action, simple: true });

      expect(linkAction.find('a').hasClass(expectedFlexClass)).toBe(false);
      expect(linkAction.find('a').hasClass(expectedCenterFlexClass)).toBe(false);
    });
  });
});
