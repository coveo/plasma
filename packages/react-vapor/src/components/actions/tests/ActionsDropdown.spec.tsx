import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';
import {Dropdown} from '../../dropdown/Dropdown';
import {IActionOptions} from '../Action';
import {ActionsDropdown, IActionsDropdownProps} from '../ActionsDropdown';

describe('Actions', () => {
    const actionLink: string = 'http://coveo.com';
    const actionTrigger: jasmine.Spy = jasmine.createSpy('methodTrigger');

    const simpleLinkAction: IActionOptions = {
        name: 'action',
        link: actionLink,
        target: '_blank',
        enabled: true,
    };
    const simpleAction: IActionOptions = {
        name: 'action2',
        trigger: actionTrigger,
        enabled: true,
    };
    const separator: IActionOptions = {
        separator: true,
        enabled: true,
    };
    const actions: IActionOptions[] = [simpleLinkAction, separator, simpleAction];

    describe('<ActionsDropdown />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(<ActionsDropdown actions={actions} />);
            }).not.toThrow();
        });
    });

    describe('<ActionsDropdown />', () => {
        let actionsDropdown: ReactWrapper<IActionsDropdownProps, any>;

        beforeEach(() => {
            actionsDropdown = mount(<ActionsDropdown actions={actions} />, {attachTo: document.getElementById('App')});
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

    describe('separators', () => {
        const shallowAndGetActions = (actionsList: IActionOptions[]) => {
            const wrapper = shallow(<ActionsDropdown actions={actionsList} />);
            return shallow(<div>{wrapper.find(Dropdown).prop('dropdownItems')}</div>).children();
        };

        it('should remove a separator if followed by another separator', () => {
            const withTwoSeparators: IActionOptions[] = [simpleLinkAction, separator, separator, simpleAction];

            const filteredActions = shallowAndGetActions(withTwoSeparators);
            expect(filteredActions.length).toBe(3);
            expect(filteredActions.find('.divider').length).toBe(1);
        });

        it('should remove the separator if it is the last action', () => {
            const withSeparatorAtEnd: IActionOptions[] = [simpleLinkAction, simpleAction, separator];

            const filteredActions = shallowAndGetActions(withSeparatorAtEnd);
            expect(filteredActions.length).toBe(2);
            expect(filteredActions.find('.divider').length).toBe(0);
        });

        it('should remove the separator if it is the first action', () => {
            const withSeparatorAtStart: IActionOptions[] = [separator, simpleLinkAction, simpleAction];

            const filteredActions = shallowAndGetActions(withSeparatorAtStart);
            expect(filteredActions.length).toBe(2);
            expect(filteredActions.find('.divider').length).toBe(0);
        });

        it('should remove the useless separators', () => {
            const withSeparatorAtStart: IActionOptions[] = [
                separator,
                separator,
                simpleLinkAction,
                separator,
                separator,
                simpleAction,
                separator,
                separator,
            ];

            const filteredActions = shallowAndGetActions(withSeparatorAtStart);
            expect(filteredActions.length).toBe(3); // Action separator Action
            expect(filteredActions.find('.divider').length).toBe(1);
        });

        it('should remove the separator if it is between disabled actions', () => {
            const withSeparatorAtStart: IActionOptions[] = [
                {...simpleLinkAction, enabled: false},
                separator,
                {...simpleAction, enabled: false},
            ];

            const filteredActions = shallowAndGetActions(withSeparatorAtStart);
            expect(filteredActions.length).toBe(0);
            expect(filteredActions.find('.divider').length).toBe(0);
        });

        it('should not remove the separator if it is between disabled actions but they are still shown', () => {
            const withSeparatorAtStart: IActionOptions[] = [
                {...simpleLinkAction, enabled: false, hideDisabled: false},
                separator,
                {...simpleAction, enabled: false, hideDisabled: false},
            ];

            const filteredActions = shallowAndGetActions(withSeparatorAtStart);
            expect(filteredActions.length).toBe(3);
            expect(filteredActions.find('.divider').length).toBe(1);
        });

        it('should not remove the separator if it is between disabled actions but there are other actions around', () => {
            const withSeparatorAtStart: IActionOptions[] = [
                simpleLinkAction,
                {...simpleLinkAction, enabled: false},
                separator,
                {...simpleAction, enabled: false},
                simpleAction,
            ];

            const filteredActions = shallowAndGetActions(withSeparatorAtStart);
            expect(filteredActions.length).toBe(3);
            expect(filteredActions.find('.divider').length).toBe(1);
        });
    });
});
