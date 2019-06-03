import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as _ from 'underscore';
import {IActionOptions} from '../Action';
import {ActionsDropdown, IActionsDropdownProps} from '../ActionsDropdown';

describe('Actions', () => {
    const actionLink: string = 'http://coveo.com';
    const actionTrigger: jasmine.Spy = jasmine.createSpy('methodTrigger');

    const actions: IActionOptions[] = [{
        name: 'action',
        link: actionLink,
        target: '_blank',
        enabled: true,
    }, {
        separator: true,
        enabled: true,
    }, {
        name: 'action2',
        trigger: actionTrigger,
        enabled: true,
    }];

    describe('<ActionsDropdown />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <ActionsDropdown actions={actions} />,
                );
            }).not.toThrow();
        });
    });

    describe('<ActionsDropdown />', () => {
        let actionsDropdown: ReactWrapper<IActionsDropdownProps, any>;

        beforeEach(() => {
            actionsDropdown = mount(
                <ActionsDropdown actions={actions} />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            actionsDropdown.detach();
        });

        it('should get the actions as a prop', () => {
            const actionsProp = actionsDropdown.props().actions;

            expect(actionsProp).toBeDefined();
            expect(actionsProp.length).toBe(actions.length);
            expect(actionsProp[0]).toEqual(jasmine.objectContaining(actions[0]));
        });

        it('should display the more label', () => {
            expect(actionsDropdown.find('.action-label').length).toBe(1);
        });

        it('should display separators if any', () => {
            const separatorActionsLength = _.where(actions, {separator: true}).length;
            expect(actionsDropdown.find('.divider').length).toBe(separatorActionsLength);

            const newActions = _.reject(actions, (action) => {
                return !!action.separator;
            });
            actionsDropdown.setProps({actions: newActions});
            expect(actionsDropdown.find('.divider').length).toBe(separatorActionsLength - 1);
        });

        it('should display as many <LinkAction /> components as link actions', () => {
            const linkActionsLength = _.where(actions, {link: actionLink}).length;
            expect(actionsDropdown.find('LinkAction').length).toBe(linkActionsLength);

            const newActions = _.reject(actions, (action) => {
                return !!action.link;
            });
            actionsDropdown.setProps({actions: newActions});
            expect(actionsDropdown.find('LinkAction').length).toBe(linkActionsLength - 1);
        });

        it('should display as many <TriggerAction/> components as trigger actions', () => {
            const triggerActionsLength = _.where(actions, {trigger: actionTrigger}).length;
            expect(actionsDropdown.find('TriggerAction').length).toBe(triggerActionsLength);

            const newActions = _.reject(actions, (action) => {
                return !!action.trigger;
            });
            actionsDropdown.setProps({actions: newActions});
            expect(actionsDropdown.find('TriggerAction').length).toBe(triggerActionsLength - 1);
        });
    });
});
