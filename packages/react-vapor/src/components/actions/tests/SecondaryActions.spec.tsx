import {shallow} from 'enzyme';
import * as React from 'react';

import {IActionOptions} from '../Action';
import {ACTION_SEPARATOR} from '../ActionConstants';
import {ActionsDropdown} from '../ActionsDropdown';
import {PrimaryActionConnected} from '../PrimaryActionConnected';
import {SecondaryActions} from '../SecondaryActions';

describe('Actions', () => {
    const linkAction: IActionOptions = {
        name: 'action',
        link: 'http://coveo.com',
        target: '_blank',
        enabled: true,
    };
    const triggerAction: IActionOptions = {
        name: 'action2',
        trigger: jasmine.createSpy('methodTrigger'),
        enabled: true,
    };
    const actions: IActionOptions[] = [linkAction, ACTION_SEPARATOR, triggerAction];

    it('should render and unmount without throwing errors', () => {
        expect(() => {
            const component = shallow(<SecondaryActions actions={[]} />);
            component.unmount();
        }).not.toThrow();
    });

    it('should render nothing if there are no actions to render', () => {
        expect(shallow(<SecondaryActions actions={[]} />).isEmptyRender()).toBe(true);
    });

    it('should display a <ActionsDropdown /> if there is more than one action', () => {
        expect(
            shallow(<SecondaryActions actions={actions} />)
                .children()
                .type()
        ).toBe(ActionsDropdown);
    });

    it('should display a <PrimaryAction /> if there is only one action', () => {
        expect(
            shallow(<SecondaryActions actions={[linkAction]} />)
                .children()
                .type()
        ).toBe(PrimaryActionConnected);
    });

    it('should not set disabled on ActionsDropdown if more than 1 secondary action by default', () => {
        const wrapper = shallow(
            <SecondaryActions
                actions={[linkAction, {...linkAction, primary: false}, {...linkAction, primary: false}]}
            />
        );
        expect(wrapper.find(ActionsDropdown).props().disabled).toBe(false);
    });

    it('should set disabled on ActionsDropdown if more than 1 secondary action', () => {
        const wrapper = shallow(
            <SecondaryActions
                actions={[linkAction, {...linkAction, primary: false}, {...linkAction, primary: false}]}
                disabled
            />
        );
        expect(wrapper.find(ActionsDropdown).props().disabled).toBe(true);
    });

    it('should add the style cursor pointer if the component is enabled', () => {
        const wrapper = shallow(
            <SecondaryActions
                actions={[linkAction, {...linkAction, primary: false}, {...linkAction, primary: false}]}
            />
        );
        expect(wrapper.find('div.dropdown').props().style.cursor).toBe('pointer');
    });

    it('should add the style cursor default if the component is disabled', () => {
        const wrapper = shallow(
            <SecondaryActions
                actions={[linkAction, {...linkAction, primary: false}, {...linkAction, primary: false}]}
                disabled
            />
        );
        expect(wrapper.find('div.dropdown').props().style.cursor).toBe('default');
    });

    describe('separators', () => {
        const shallowAndGetActions = (actionsList: IActionOptions[]) => {
            return shallow(<SecondaryActions actions={actionsList} />)
                .children()
                .prop('actions');
        };

        it('should remove a separator if followed by another separator', () => {
            expect(shallowAndGetActions([linkAction, ACTION_SEPARATOR, ACTION_SEPARATOR, triggerAction])).toEqual([
                linkAction,
                ACTION_SEPARATOR,
                triggerAction,
            ]);
        });

        it('should remove the separator if it is the last action', () => {
            expect(shallowAndGetActions([linkAction, triggerAction, ACTION_SEPARATOR])).toEqual([
                linkAction,
                triggerAction,
            ]);
        });

        it('should remove the separator if it is the first action', () => {
            expect(shallowAndGetActions([ACTION_SEPARATOR, linkAction, triggerAction])).toEqual([
                linkAction,
                triggerAction,
            ]);
        });

        it('should remove the useless separators', () => {
            expect(
                shallowAndGetActions([
                    ACTION_SEPARATOR,
                    ACTION_SEPARATOR,
                    linkAction,
                    ACTION_SEPARATOR,
                    ACTION_SEPARATOR,
                    triggerAction,
                    ACTION_SEPARATOR,
                    ACTION_SEPARATOR,
                ])
            ).toEqual([linkAction, ACTION_SEPARATOR, triggerAction]);
        });

        it('should remove the separator if it is between disabled actions', () => {
            expect(
                shallow(
                    <SecondaryActions
                        actions={[
                            {...linkAction, enabled: false},
                            ACTION_SEPARATOR,
                            {...triggerAction, enabled: false},
                        ]}
                    />
                ).isEmptyRender()
            ).toBe(true);
        });

        it('should not remove the separator if it is between disabled actions but they are still shown', () => {
            expect(
                shallowAndGetActions([
                    {...linkAction, enabled: false, hideDisabled: false},
                    ACTION_SEPARATOR,
                    {...triggerAction, enabled: false, hideDisabled: false},
                ])
            ).toEqual([
                {...linkAction, enabled: false, hideDisabled: false},
                ACTION_SEPARATOR,
                {...triggerAction, enabled: false, hideDisabled: false},
            ]);
        });

        it('should not remove the separator if it is between disabled actions but there are other actions around', () => {
            expect(
                shallowAndGetActions([
                    linkAction,
                    {...linkAction, enabled: false},
                    ACTION_SEPARATOR,
                    {...triggerAction, enabled: false},
                    triggerAction,
                ])
            ).toEqual([linkAction, ACTION_SEPARATOR, triggerAction]);
        });

        it('should render a primary action if thre is only one action remaining after removing disabled actions and separators', () => {
            const rendered = shallow(
                <SecondaryActions actions={[linkAction, ACTION_SEPARATOR, {...triggerAction, enabled: false}]} />
            ).children();
            expect(rendered.type()).toBe(PrimaryActionConnected);
            expect(rendered.prop('action')).toEqual(linkAction);
        });
    });
});
