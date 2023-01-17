import {mount, ReactWrapper} from 'enzyme';
import {shallowWithStore} from '@test-utils';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {PlasmaState} from '../../../PlasmaState.js';
import {clearState} from '../../../utils/ReduxUtils.js';
import {getStoreMock, PlasmaMockStore, TestUtils} from '../../../utils/tests/TestUtils.js';
import {IInlinePromptOptions} from '../../inlinePrompt/InlinePrompt.js';
import {addPrompt, removePrompt} from '../../inlinePrompt/InlinePromptActions.js';
import {IActionOptions} from '../Action.js';
import {ActionBar, ActionBarConnected, IActionBarProps} from '../ActionBar.js';
import {addActionsToActionBar, removeActionBar} from '../ActionBarActions.js';
import {filterItems, removeItemFilter} from '../filters/ItemFilterActions.js';
import {PrimaryActionConnected} from '../PrimaryActionConnected.js';
import {SecondaryActions} from '../SecondaryActions.js';

describe('Actions', () => {
    const id: string = 'secondary-actions';
    let actions: IActionOptions[];
    const itemFilter: string = 'the item';
    const itemFilterLabel: string = 'Item filter';

    beforeAll(() => {
        actions = [
            {
                name: 'action',
                link: 'http://coveo.com',
                target: '_blank',
                primary: true,
                enabled: true,
            },
            {
                name: 'action2',
                trigger: jest.fn(),
                enabled: true,
            },
            {
                name: 'action3',
                trigger: jest.fn(),
                enabled: false,
            },
            {
                name: 'action4',
                trigger: jest.fn(),
                enabled: false,
                hideDisabled: false,
            },
        ];
    });

    describe('<ActionBarConnected />', () => {
        let wrapper: ReactWrapper;
        let actionBar: ReactWrapper<IActionBarProps & any>;
        let store: Store<PlasmaState>;

        beforeEach(() => {
            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <ActionBarConnected id={id} itemFilterLabel={itemFilterLabel} />
                </Provider>,
                {attachTo: document.getElementById('App')}
            );
            store.dispatch(addActionsToActionBar(id, actions));
            store.dispatch(filterItems(id, itemFilter));
            wrapper.update();
            actionBar = wrapper.find(ActionBar).first();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper?.exists() && wrapper?.unmount();
        });

        it('should get an id as a prop', () => {
            const idProp = actionBar.props().id;

            expect(idProp).toBeDefined();
            expect(idProp).toBe(id);
        });

        it('should get the enabled actions and unhidden disabled actions as a prop', () => {
            const actionsProp = actionBar.props().actions;

            expect(actionsProp).toBeDefined();
            expect(actionsProp.length).toBe(
                actions.filter((action) => action.enabled || action.hideDisabled === false).length
            );

            expect(actionsProp[0]).toEqual(expect.objectContaining(actions[0]));
        });

        it('should get the item filter as a prop', () => {
            const itemFilterProp = actionBar.props().itemFilter;

            expect(itemFilterProp).toBeDefined();
            expect(itemFilterProp).toBe(itemFilter);
        });

        it('should get isLoading as a prop', () => {
            expect(actionBar.props().isLoading).toBeDefined();
        });

        it('should get what to do on render as a prop', () => {
            const view = actionBar.props().onRender;

            expect(view).toBeDefined();
        });

        it('should what to do on destroy as a prop', () => {
            const onDestroyProp = actionBar.props().onDestroy;

            expect(onDestroyProp).toBeDefined();
        });

        it('should get what to do on clearItemFilter as a prop', () => {
            const clearItemFilterProp = actionBar.props().clearItemFilter;

            expect(clearItemFilterProp).toBeDefined();
        });

        it('should get withReduxState as a prop', () => {
            const withReduxStateProp = actionBar.props().withReduxState;

            expect(withReduxStateProp).toBeDefined();
            expect(withReduxStateProp).toBe(true);
        });

        it('should call onRender prop when mounted', () => {
            wrapper.unmount();
            store.dispatch(clearState());

            expect(store.getState().actionBars.length).toBe(0);
            expect(store.getState().itemFilters.length).toBe(0);

            wrapper.mount();

            expect(store.getState().actionBars.length).toBe(1);
            expect(store.getState().itemFilters.length).toBe(1);
        });

        it('should call onDestroy prop when will unmount', () => {
            wrapper.unmount();

            expect(store.getState().actionBars.length).toBe(0);
        });

        it('should display a <PrimaryActionConnected /> component if there is a primary action', () => {
            expect(actionBar.find(PrimaryActionConnected).length).not.toBe(0);
        });

        it('should display a <SecondaryActionsConnected /> component if there are secondary actions', () => {
            expect(actionBar.find(SecondaryActions).length).toBe(1);
        });

        it('should get the <InlinePrompt /> as a prop', () => {
            const expectedClass = 'expected-class';
            const inlinePromptOptions: IInlinePromptOptions = {
                onClick: jest.fn(),
                userChoice: {},
                className: expectedClass,
            };
            store.dispatch(addPrompt(id, inlinePromptOptions));
            wrapper.update();

            const promptProp = wrapper.find(ActionBar).props().prompt;

            expect(promptProp).toBeDefined();

            expect(wrapper.find(ActionBar).find(`.prompt-${expectedClass}`).length).toBe(1);
        });

        it('should call onClearItemFilter when calling clearItemFilter', () => {
            const onClearItemFilterSpy = jest.fn();

            wrapper = mount(
                <Provider store={store}>
                    <ActionBarConnected
                        id={id}
                        itemFilterLabel={itemFilterLabel}
                        onClearItemFilter={onClearItemFilterSpy}
                    />
                </Provider>,
                {attachTo: document.getElementById('App')}
            );
            actionBar = wrapper.find(ActionBar).first();

            actionBar.props().clearItemFilter();

            expect(onClearItemFilterSpy).toHaveBeenCalled();
        });

        it('should not throw on clearItemFilter if there is no onClearItemFilter prop', () => {
            expect(() => {
                actionBar.props().clearItemFilter();
            }).not.toThrow();
        });

        it('should clear the item filter when calling clearItemFilter', () => {
            expect(_.findWhere(store.getState().itemFilters, {id: id}).item).toBe(itemFilter);

            actionBar.props().clearItemFilter();

            expect(_.findWhere(store.getState().itemFilters, {id: id}).item).toBe('');
        });

        describe('dispatch onDestroy', () => {
            let RStore: PlasmaMockStore;
            const ownProps = {
                id: 'id',
            };

            beforeEach(() => {
                RStore = getStoreMock();
            });

            it('should remove the prompt onDestroy', () => {
                const component = shallowWithStore(<ActionBarConnected {...ownProps} />, RStore)
                    .dive()
                    .dive();
                component.unmount();

                expect(RStore.getActions()).toContainEqual(removePrompt(ownProps.id));
            });

            it('should remove the item filter onDestroy', () => {
                const component = shallowWithStore(<ActionBarConnected {...ownProps} />, RStore)
                    .dive()
                    .dive();
                component.unmount();

                expect(RStore.getActions()).toContainEqual(removeItemFilter(ownProps.id));
            });

            it('should remove the action bar onDestroy', () => {
                const component = shallowWithStore(<ActionBarConnected {...ownProps} />, RStore)
                    .dive()
                    .dive();
                component.unmount();

                expect(RStore.getActions()).toContainEqual(removeActionBar(ownProps.id));
            });
        });
    });
});
