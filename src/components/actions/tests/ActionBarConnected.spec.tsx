import { mount, ReactWrapper } from 'enzyme';
import { IActionOptions } from '../Action';
import { IActionBarProps, ActionBar } from '../ActionBar';
import { Store } from 'react-redux';
import { clearState } from '../../../utils/ReduxUtils';
import { IReactVaporState } from '../../../ReactVapor';
import { TestUtils } from '../../../utils/TestUtils';
import { Provider } from 'react-redux';
import { ActionBarConnected } from '../ActionBarConnected';
import { addActionsToActionBar } from '../ActionBarActions';
import { PrimaryActionConnected } from '../PrimaryActionConnected';
import { SecondaryActionsConnected } from '../SecondaryActionsConnected';
import { addPrompt } from '../../inlinePrompt/InlinePromptActions';
import { IInlinePromptOptions } from '../../inlinePrompt/InlinePrompt';
import {filterItems} from '../filters/ItemFilterActions';
import * as _ from 'underscore';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Actions', () => {
  const id: string = 'secondary-actions';
  const actions: IActionOptions[] = [{
    name: 'action',
    link: 'http://coveo.com',
    target: '_blank',
    primary: true,
    enabled: true
  }, {
    name: 'action2',
    trigger: jasmine.createSpy('triggerMethod'),
    enabled: true
  }];
  const itemFilter: string = 'the item';
  const itemFilterLabel: string = 'Item filter';
  const itemFilterId: string = id + itemFilterLabel;

  describe('<ActionBarConnected />', () => {
    let wrapper: ReactWrapper<any, any>;
    let actionBar: ReactWrapper<IActionBarProps, any>;
    let store: Store<IReactVaporState>;

    beforeEach(() => {
      store = TestUtils.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <ActionBarConnected id={id} itemFilterLabel={itemFilterLabel} />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      actionBar = wrapper.find(ActionBar).first();

      store.dispatch(addActionsToActionBar(id, actions));
      store.dispatch(filterItems(itemFilterId, itemFilter));
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get an id as a prop', () => {
      let idProp = actionBar.props().id;

      expect(idProp).toBeDefined();
      expect(idProp).toBe(id);
    });

    it('should get the actions as a prop', () => {
      let actionsProp = actionBar.props().actions;

      expect(actionsProp).toBeDefined();
      expect(actionsProp.length).toBe(actions.length);
      expect(actionsProp[0]).toEqual(jasmine.objectContaining(actions[0]));
    });

    it('should get the item filter as a prop', () => {
      let itemFilterProp = actionBar.props().itemFilter;

      expect(itemFilterProp).toBeDefined();
      expect(itemFilterProp).toBe(itemFilter);
    });

    it('should get what to do on render as a prop', () => {
      let onRenderProp = actionBar.props().onRender;

      expect(onRenderProp).toBeDefined();
    });

    it('should what to do on destroy as a prop', () => {
      let onDestroyProp = actionBar.props().onDestroy;

      expect(onDestroyProp).toBeDefined();
    });

    it('should get what to do on clearItemFilter as a prop', () => {
      let clearItemFilterProp = actionBar.props().clearItemFilter;

      expect(clearItemFilterProp).toBeDefined();
    });

    it('should get withReduxState as a prop', () => {
      let withReduxStateProp = actionBar.props().withReduxState;

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

    it('should should not add an item filter on mount if there is no item filter label sent as prop', () => {
      expect(store.getState().itemFilters.length).toBe(1);

      wrapper = mount(
        <Provider store={store}>
          <ActionBarConnected id={id} />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      actionBar = wrapper.find(ActionBar).first();

      expect(store.getState().itemFilters.length).toBe(0);
    });

    it('should call onDestroy prop when will unmount', () => {
      wrapper.unmount();
      expect(store.getState().actionBars.length).toBe(0);
    });

    it('should display a <PrimaryActionConnected /> component if there is a primary action', () => {
      expect(actionBar.find(PrimaryActionConnected).length).not.toBe(0);
    });

    it('should display a <SecondaryActionsConnected /> component if there are secondary actions', () => {
      expect(actionBar.find(SecondaryActionsConnected).length).toBe(1);
    });

    it('should get the <InlinePrompt /> as a prop', () => {
      let expectedClass = 'expected-class';
      let inlinePromptOptions: IInlinePromptOptions = {
        onClick: jasmine.createSpy('onClick'),
        userChoice: {},
        className: expectedClass
      };
      store.dispatch(addPrompt(id, inlinePromptOptions));

      let promptProp = actionBar.props().prompt;
      expect(promptProp).toBeDefined();

      expect(actionBar.find('.prompt-' + expectedClass).length).toBe(1);
    });

    it('should call onClearItemFilter when calling clearItemFilter', () => {
      let onClearItemFilterSpy = jasmine.createSpy('onClearItemFilter');

      wrapper = mount(
        <Provider store={store}>
          <ActionBarConnected id={id} itemFilterLabel={itemFilterLabel} onClearItemFilter={onClearItemFilterSpy} />
        </Provider>,
        { attachTo: document.getElementById('App') }
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
      expect(_.findWhere(store.getState().itemFilters, {id: itemFilterId}).item).toBe(itemFilter);

      actionBar.props().clearItemFilter();

      expect(_.findWhere(store.getState().itemFilters, {id: itemFilterId}).item).toBe('');
    });
  });
});
