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
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Actions', () => {
  let id: string = 'secondary-actions';
  let actions: IActionOptions[] = [{
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

  describe('TableActionsView', () => {
    let wrapper: ReactWrapper<any, any>;
    let actionBar: ReactWrapper<IActionBarProps, any>;
    let store: Store<IReactVaporState>;

    beforeEach(() => {
      store = TestUtils.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <ActionBarConnected id={id} />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      actionBar = wrapper.find(ActionBar).first();

      store.dispatch(addActionsToActionBar(id, actions));
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

    it('should what to do on render as a prop', () => {
      let onRenderProp = actionBar.props().onRender;

      expect(onRenderProp).toBeDefined();
    });

    it('should what to do on destroy as a prop', () => {
      let onDestroyProp = actionBar.props().onDestroy;

      expect(onDestroyProp).toBeDefined();
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

      wrapper.mount();
      expect(store.getState().actionBars.length).toBe(1);
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
  });
});
