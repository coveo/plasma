import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {IActionOptions} from '../Action';
import {ISecondaryActionsProps, SecondaryActions} from '../SecondaryActions';

describe('Actions', () => {
    const actions: IActionOptions[] = [{
        name: 'action',
        link: 'http://coveo.com',
        target: '_blank',
        enabled: true,
    }, {
        separator: true,
        enabled: true,
    }, {
        name: 'action2',
        trigger: jasmine.createSpy('triggerMethod'),
        enabled: true,
    }];

    describe('<SecondaryActions />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <SecondaryActions actions={actions} />,
                );
            }).not.toThrow();
        });
    });

    describe('SecondaryActions', () => {
        let secondaryActions: ReactWrapper<ISecondaryActionsProps, any>;

        beforeEach(() => {
            secondaryActions = mount(
                <SecondaryActions
                    actions={actions}
                />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            secondaryActions.detach();
        });

        it('should get the actions as a prop', () => {
            const actionsProp = secondaryActions.props().actions;

            expect(actionsProp).toBeDefined();
            expect(actionsProp.length).toBe(actions.length);
            expect(actionsProp[0]).toEqual(jasmine.objectContaining(actions[0]));
        });

        it('should display a <ActionsDropdown /> if there is more than one action', () => {
            expect(secondaryActions.find('ActionsDropdown').length).toBe(1);

            secondaryActions.setProps({actions: [actions[0]]});

            expect(secondaryActions.find('ActionsDropdown').length).toBe(0);
        });

        it('should display a <PrimaryAction /> if there is only one action', () => {
            expect(secondaryActions.find('PrimaryAction').length).toBe(0);

            secondaryActions.setProps({actions: [actions[0]]});

            expect(secondaryActions.find('PrimaryAction').length).toBe(1);
        });
    });
});
