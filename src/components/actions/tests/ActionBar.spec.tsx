import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {IInlinePromptOptions, InlinePrompt} from '../../inlinePrompt/InlinePrompt';
import {IActionOptions} from '../Action';
import {ActionBar, DEFAULT_ACTIONS_CONTAINER_CLASSES, IActionBarProps} from '../ActionBar';

describe('Actions', () => {
    const actions: IActionOptions[] = [{
        name: 'action',
        link: 'http://coveo.com',
        target: '_blank',
        primary: true,
        enabled: true,
    }, {
        name: 'action2',
        trigger: jasmine.createSpy('triggerMethod'),
        enabled: true,
    }];

    describe('<ActionBar />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <ActionBar />,
                );
            }).not.toThrow();
        });
    });

    describe('<ActionBar />', () => {
        let actionBar: ReactWrapper<IActionBarProps, any>;
        let actionBarInstance: ActionBar;

        const renderActionBar = (props: IActionBarProps = {}) => {
            actionBar = mount(
                <ActionBar actions={actions} {...props} />,
                {attachTo: document.getElementById('App')},
            );
            actionBarInstance = actionBar.instance() as ActionBar;
        };

        describe('with default props', () => {
            beforeEach(() => {
                renderActionBar();
            });

            afterEach(() => {
                actionBar.detach();
            });

            it('should get the actions as a prop', () => {
                const actionsProp = actionBar.props().actions;

                expect(actionsProp).toBeDefined();
                expect(actionsProp.length).toBe(actions.length);
                expect(actionsProp[0]).toEqual(jasmine.objectContaining(actions[0]));
            });

            it('should call onRender prop if set when mounting', () => {
                const onRenderSpy = jasmine.createSpy('onRender');

                expect(() => actionBarInstance.componentWillMount()).not.toThrow();

                actionBar.unmount();
                actionBar.setProps({onRender: onRenderSpy});
                actionBar.mount();
                expect(onRenderSpy).toHaveBeenCalled();
            });

            it('should call onDestroy prop if set when will unmount', () => {
                const onDestroySpy = jasmine.createSpy('onDestroy');

                expect(() => actionBarInstance.componentWillUnmount()).not.toThrow();

                actionBar.setProps({onDestroy: onDestroySpy});
                actionBar.unmount();
                expect(onDestroySpy).toHaveBeenCalled();
            });

            it('should display a top level <PrimaryAction /> component if there is a primary action', () => {
                expect(actionBar.find('.coveo-table-actions > .primary-action').length).toBe(1);

                actionBar.setProps({actions: actions.slice(1)});

                expect(actionBar.find('.coveo-table-actions > .primary-action').length).toBe(0);
            });

            it('should display a <SecondaryActions /> component if there are secondary actions', () => {
                expect(actionBar.find('SecondaryActions').length).toBe(1);

                actionBar.setProps({actions: actions.slice(0, 1)});

                expect(actionBar.find('SecondaryActions').length).toBe(0);
            });

            it('should display an <InlinePrompt /> and no actions if there is a prompt if there is a prompt', () => {
                const inlinePromptOptions: IInlinePromptOptions = {
                    onClick: jasmine.createSpy('onClick'),
                    userChoice: {},
                };
                const inlinePrompt: JSX.Element = <InlinePrompt options={inlinePromptOptions} />;

                expect(actionBar.find('InlinePrompt').length).toBe(0);

                actionBar.setProps({actions: actions, prompt: inlinePrompt});
                expect(actionBar.find('InlinePrompt').length).toBe(1);
                expect(actionBar.find('SecondaryActions').length).toBe(0);
                expect(actionBar.find('PrimaryAction').length).toBe(0);
            });

            it('should display an <ItemFilter /> if there is an itemFilter prop', () => {
                expect(actionBar.find('ItemFilter').length).toBe(0);

                actionBar.setProps({itemFilter: 'an item'});

                expect(actionBar.find('ItemFilter').length).toBe(1);
            });

            it('should not throw when handling the clear of the item filter when clearItemFilter is not defined', () => {
                const handleClearSpy: jasmine.Spy = spyOn<any>(actionBar.instance(), 'handleClear').and.callThrough();
                actionBar.setProps({itemFilter: 'an item'});
                expect(() => {
                    actionBar.find('.item-filter-clear').simulate('click');
                }).not.toThrow();

                expect(handleClearSpy).toHaveBeenCalled();
            });

            it('should call clearItemFilter if defined when clicking the "item-filter-clear" button', () => {
                const clearItemFilter = jasmine.createSpy('clearItemFilter');
                actionBar.setProps({itemFilter: 'an item', clearItemFilter});

                actionBar.find('.item-filter-clear').simulate('click');

                expect(clearItemFilter).toHaveBeenCalled();
            });

            describe('removeDefaultContainerClasses', () => {
                it('should leave the default container classes if it is not set', () => {
                    DEFAULT_ACTIONS_CONTAINER_CLASSES.forEach((className: string) => {
                        expect(actionBar.find('div').first().html()).toContain(className);
                    });
                });

                it('should leave the default container classes if it is set to false', () => {
                    actionBar.setProps({removeDefaultContainerClasses: false});
                    DEFAULT_ACTIONS_CONTAINER_CLASSES.forEach((className: string) => {
                        expect(actionBar.find('div').first().html()).toContain(className);
                    });
                });

                it('should remove the default container classes if it is set to true', () => {
                    actionBar.setProps({removeDefaultContainerClasses: true});
                    DEFAULT_ACTIONS_CONTAINER_CLASSES.forEach((className: string) => {
                        expect(actionBar.find('div').first().html()).not.toContain(className);
                    });
                });
            });

            describe('extraContainerClasses', () => {
                it('should add extra classes to the container div if extra container classes are passed', () => {
                    const extraContainerClasses = ['test', 'with', 'multiple', 'classes', 'tobesure'];
                    actionBar.setProps({extraContainerClasses});
                    extraContainerClasses.forEach((className: string) => {
                        expect(actionBar.find('div').first().html()).toContain(className);
                    });
                });
            });

            describe('loading behavior', () => {
                it('should not have the mod-deactivate-pointer class if the action bar is not loading', () => {
                    actionBar.setProps({isLoading: false});
                    expect(actionBar.find('div').first().html()).not.toContain('mod-deactivate-pointer');
                });

                it('should have the mod-deactivate-pointer class if the action bar is loading', () => {
                    actionBar.setProps({isLoading: true});
                    expect(actionBar.find('div').first().html()).toContain('mod-deactivate-pointer');
                });
            });
        });

        describe('with custom props', () => {
            it('should add the class small-actions-container if the props withSmallActions is set to true', () => {
                renderActionBar({
                    withSmallActions: true,
                });
                const actionsProp = actionBar.props().withSmallActions;

                expect(actionsProp).toBeDefined();
                expect(actionsProp).toBe(true);
                expect(actionBar.find('.small-actions-container').length).toBe(1);
            });

            it('should set the width on the bar if there is one sent as a prop', () => {
                const expectedWidth: number = 90;
                renderActionBar({
                    width: expectedWidth,
                });

                expect(actionBar.find('div').first().props().style).toEqual({width: expectedWidth});
            });
        });
    });
});
