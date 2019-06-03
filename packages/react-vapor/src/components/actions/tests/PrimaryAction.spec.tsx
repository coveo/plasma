import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {IActionOptions} from '../Action';
import {IPrimaryActionProps, PrimaryAction} from '../PrimaryAction';

describe('Actions', () => {
    const actions: IActionOptions[] = [{
        name: 'action',
        link: 'http://google.com',
        target: '_blank',
        enabled: true,
    }, {
        name: 'action2',
        trigger: jasmine.createSpy('triggerMethod'),
        enabled: true,
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
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            primaryAction.detach();
        });

        it('should get an action as a prop', () => {
            const actionProp = primaryAction.props().action;

            expect(actionProp).toBeDefined();
            expect(actionProp).toEqual(jasmine.objectContaining(actions[0]));
        });

        it('should display a <LinkAction /> component if the action is a link action', () => {
            expect(primaryAction.find('LinkAction').length).toBe(1);
            expect(primaryAction.find('TriggerAction').length).toBe(0);
        });

        it('should display a <TriggerAction /> component if the action is a trigger action', () => {
            primaryAction.setProps({action: actions[1]});

            expect(primaryAction.find('TriggerAction').length).toBe(1);
            expect(primaryAction.find('LinkAction').length).toBe(0);
        });
    });
});
