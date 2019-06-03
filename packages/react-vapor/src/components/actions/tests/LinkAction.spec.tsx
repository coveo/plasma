import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as _ from 'underscore';
import {IActionOptions} from '../Action';
import {ILinkActionProps, LinkAction} from '../LinkAction';

describe('Actions', () => {
    const action: IActionOptions = {
        name: 'action',
        link: 'http://coveo.com',
        target: '_blank',
        enabled: true,
    };

    describe('<LinkAction />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <LinkAction action={action} />,
                );
            }).not.toThrow();
        });
    });

    describe('<LinkAction />', () => {
        let linkAction: ReactWrapper<ILinkActionProps, any>;
        const simple: boolean = false;

        beforeEach(() => {
            linkAction = mount(
                <LinkAction
                    action={action}
                    simple={simple}
                />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            linkAction.detach();
        });

        it('should get an action as a prop', () => {
            const actionProp = linkAction.props().action;

            expect(actionProp).toBeDefined();
            expect(actionProp).toEqual(jasmine.objectContaining(action));
        });

        it('should get if the action is simple (no html) as a prop', () => {
            const simpleProp = linkAction.props().simple;

            expect(simpleProp).toBeDefined();
            expect(simpleProp).toBe(simple);
        });

        it('should render a <Action /> component', () => {
            expect(linkAction.find('Action').length).toBe(1);
        });

        it('should have a target attribute if there is a target for the action', () => {
            const expectedTarget = 'target="' + action.target + '"';
            expect(linkAction.html()).toContain(expectedTarget);

            const newAction = _.extend({}, action);
            newAction.target = undefined;
            linkAction.setProps({action: newAction, simple: simple});

            expect(linkAction.html()).not.toContain(expectedTarget);
        });

        it('should have a "noopener noreferrer" as rel attribute if there is a target for the action', () => {
            const expectedRel = 'rel="noopener noreferrer"';
            expect(linkAction.html()).toContain(expectedRel);

            const newAction = _.extend({}, action);
            newAction.target = undefined;
            linkAction.setProps({action: newAction, simple: simple});

            expect(linkAction.html()).not.toContain(expectedRel);
        });

        it('should have flex classes if action is not simple', () => {
            const expectedFlexClass = 'inline-flex';
            const expectedCenterFlexClass = 'flex-center';

            expect(linkAction.find('a').hasClass(expectedFlexClass)).toBe(true);
            expect(linkAction.find('a').hasClass(expectedCenterFlexClass)).toBe(true);

            linkAction.setProps({action: action, simple: true});

            expect(linkAction.find('a').hasClass(expectedFlexClass)).toBe(false);
            expect(linkAction.find('a').hasClass(expectedCenterFlexClass)).toBe(false);
        });

        it('shoud have the enabled class if the action is enabled', () => {
            expect(linkAction.find('a').hasClass('enabled')).toBe(true);
        });

        it('shoud not have the state-disabled class if the action is enabled', () => {
            expect(linkAction.find('a').hasClass('state-disabled')).toBe(false);
        });

        describe('disabled action', () => {
            beforeEach(() => {
                linkAction.setProps({action: {...action, enabled: false}});
            });

            it('shoud not have the enabled class', () => {
                expect(linkAction.find('a').hasClass('enabled')).toBe(false);
            });

            it('shoud have the state-disabled class if hideDisabled set to false is passed as prop', () => {
                linkAction.setProps({action: {...action, enabled: false, hideDisabled: false}});
                expect(linkAction.find('a').hasClass('state-disabled')).toBe(true);
            });

            it('should have no target provided', () => {
                expect(linkAction.find('a').prop('target')).toBeUndefined();
            });

            it('should have no href provided', () => {
                expect(linkAction.find('a').prop('href')).toBeUndefined();
            });
        });
    });
});
