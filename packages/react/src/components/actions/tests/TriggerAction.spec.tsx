import {mount, ReactWrapper, shallow} from 'enzyme';
import * as _ from 'underscore';

import {IActionOptions} from '../Action';
import {ITriggerActionProps, TriggerAction} from '../TriggerActionConnected';

describe('Actions', () => {
    let triggerSpy: jest.Mock;
    const action: IActionOptions = {
        name: 'action',
        enabled: true,
    };
    const simple: boolean = false;

    it('should render without errors', () => {
        expect(() => {
            shallow(<TriggerAction action={action} />);
        }).not.toThrow();
    });

    describe('<TriggerAction />', () => {
        let triggerAction: ReactWrapper<ITriggerActionProps, any>;
        let triggerActionInstance: TriggerAction;

        beforeEach(() => {
            triggerSpy = jest.fn();
            action.trigger = triggerSpy;
            triggerAction = mount(<TriggerAction action={action} simple={simple} />, {
                attachTo: document.getElementById('App'),
            });
            triggerActionInstance = triggerAction.instance() as TriggerAction;
        });

        afterEach(() => {
            triggerAction.unmount();
        });

        it('should get if the action is simple (no html) as a prop', () => {
            const simpleProp = triggerAction.props().simple;

            expect(simpleProp).toBeDefined();
            expect(simpleProp).toBe(simple);
        });

        it('should render a <Action /> component', () => {
            expect(triggerAction.find('Action').length).toBe(1);
        });

        it('should have the "enabled" class if action is enabled', () => {
            expect(triggerAction.find('.enabled').length).toBe(1);

            const newAction = _.extend({}, action);
            newAction.enabled = false;
            triggerAction.setProps({action: newAction, simple: simple});

            expect(triggerAction.find('.enabled').length).toBe(0);
            expect(triggerAction.find('.disabled').length).toBe(1);

            triggerAction.setProps({action: newAction, simple: true});

            expect(triggerAction.find('.enabled').length).toBe(0);
            expect(triggerAction.find('.state-disabled').length).toBe(1);

            triggerAction.setProps({action: {...newAction, hideDisabled: false}, simple: false});

            expect(triggerAction.find('.enabled').length).toBe(0);
            expect(triggerAction.find('.state-disabled').length).toBe(1);
        });

        it('should call onTriggerAction when clicked if action is enabled', () => {
            const onTriggerActionSpy = jest.spyOn<any, string>(triggerActionInstance, 'onTriggerAction');

            triggerAction.find('.enabled').simulate('click');

            expect(onTriggerActionSpy).toHaveBeenCalledTimes(1);
        });

        it('should not call onTriggerAction when clicked if action is not enabled and visible', () => {
            triggerAction.setProps({action: {...action, enabled: false, hideDisabled: false}});
            const onTriggerActionSpy = jest.spyOn<any, string>(triggerActionInstance, 'onTriggerAction');

            triggerAction.find('.state-disabled').simulate('click');

            expect(onTriggerActionSpy).not.toHaveBeenCalled();
        });

        it('should call the trigger of the action when clicked and no confirmation is required', () => {
            triggerAction.find('.enabled').simulate('click');

            expect(triggerSpy).toHaveBeenCalledTimes(1);
        });

        it('should call the onCloseDropdown if it exists and no confirmation is required', () => {
            const onCloseDropdownSpy = jest.fn();
            triggerAction.setProps({onCloseDropdown: onCloseDropdownSpy});

            triggerAction.find('.enabled').simulate('click');

            expect(onCloseDropdownSpy).toHaveBeenCalledTimes(1);
        });

        it('should call the onTriggerConfirm if set when clicked and confirmation is required', () => {
            const onTriggerConfirmSpy = jest.fn();

            const newAction = _.extend({}, action);
            newAction.requiresConfirmation = {
                confirmType: 'danger',
                buttonLabels: {
                    confirm: 'delete',
                    cancel: 'cancel',
                },
            };
            triggerAction.setProps({action: newAction});

            expect(() => triggerActionInstance['onTriggerAction'].call(triggerActionInstance)).not.toThrow();

            triggerAction.setProps({action: newAction, onTriggerConfirm: onTriggerConfirmSpy});

            triggerAction.find('.enabled').simulate('click');

            expect(onTriggerConfirmSpy.mock.calls.length).toBe(1);
        });

        it('should not throw when clicking the action when the trigger of the action is not set and confirmation is not required', () => {
            const newAction = _.extend({}, action);
            newAction.trigger = undefined;
            triggerAction.setProps({action: newAction});

            expect(() => triggerActionInstance['onTriggerAction'].call(triggerActionInstance)).not.toThrow();
        });

        it(
            'should send a function that calls the trigger of the action and the onConfirm prop when confirmation is required and ' +
                'onTriggerConfirm is set',
            () => {
                const onTriggerConfirm = (onClick: () => void) => {
                    onClick();
                };
                const onConfirmSpy = jest.fn();
                const newAction = _.extend({}, action);
                newAction.requiresConfirmation = {
                    confirmType: 'danger',
                    buttonLabels: {
                        confirm: 'delete',
                        cancel: 'cancel',
                    },
                };
                triggerAction.setProps({
                    action: newAction,
                    onTriggerConfirm: onTriggerConfirm,
                    onConfirm: onConfirmSpy,
                });
                triggerAction.find('.enabled').simulate('click');

                expect(triggerSpy).toHaveBeenCalled();
                expect(onConfirmSpy).toHaveBeenCalled();
            },
        );

        it('should not thrown on the function sent when the trigger of the action or the onConfirm prop are not set', () => {
            const onTriggerConfirm = (onClick: () => void) => {
                onClick();
            };
            const newAction = _.extend({}, action, {trigger: undefined});
            newAction.requiresConfirmation = {
                confirmType: 'danger',
                buttonLabels: {
                    confirm: 'delete',
                    cancel: 'cancel',
                },
            };
            triggerAction.setProps({action: newAction, onTriggerConfirm: onTriggerConfirm});

            expect(() => triggerActionInstance['onTriggerAction'].call(triggerActionInstance)).not.toThrow();
        });

        it('should use a custom prompt description when the confirmLabel is set', () => {
            const newAction = _.extend({requiresConfirmation: {confirmLabel: 'custom label'}}, action);
            triggerAction.setProps({action: newAction});

            triggerAction
                .find('.enabled')
                .props()
                .onClick('mouseEvent' as any);

            expect(triggerSpy).toHaveBeenCalled();

            expect(triggerSpy.mock.instances[0].requiresConfirmation.confirmLabel).toEqual(
                newAction.requiresConfirmation.confirmLabel,
            );
        });
    });
});
