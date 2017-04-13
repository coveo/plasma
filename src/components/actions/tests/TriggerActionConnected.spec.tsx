import { mount, ReactWrapper } from 'enzyme';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { IActionOptions } from '../Action';
import { TriggerActionConnected } from '../TriggerActionConnected';
import { TestUtils } from '../../../utils/TestUtils';
import { clearState } from '../../../utils/ReduxUtils';
import { IReactVaporState } from '../../../ReactVapor';
import { ITriggerActionProps, TriggerAction } from '../TriggerAction';
import { addPrompt } from '../../inlinePrompt/InlinePromptActions';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('Actions', () => {
  describe('<TriggerActionConnected />', () => {
    let action: IActionOptions = {
      name: 'action',
      trigger: jasmine.createSpy('triggerMethod'),
      enabled: true
    };
    let simple: boolean = false;
    let parentId: string = 'parent';

    let wrapper: ReactWrapper<any, any>;
    let triggerAction: ReactWrapper<ITriggerActionProps, any>;
    let store: Store<IReactVaporState>;

    beforeEach(() => {
      store = TestUtils.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <TriggerActionConnected
            action={action}
            simple={simple}
            parentId={parentId}
          />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      triggerAction = wrapper.find(TriggerAction).first();
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get parentId as a prop', () => {
      let parentIdProp = triggerAction.props().parentId;

      expect(parentIdProp).toBeDefined();
      expect(parentIdProp).toBe(parentId);
    });

    it('should get what to do when an action needs confirmation as a prop', () => {
      let onTriggerConfirmProp = triggerAction.props().onTriggerConfirm;

      expect(onTriggerConfirmProp).toBeDefined();
    });

    it('should get what to do after the confirmation of an action as a prop', () => {
      let onConfirmProp = triggerAction.props().onConfirm;

      expect(onConfirmProp).toBeDefined();
    });

    it('should add a prompt onTriggerConfirm', () => {
      expect(store.getState().prompts.length).toBe(0);
      triggerAction.props().onTriggerConfirm(jasmine.createSpy('onClick'), {}, 'someClass');
      expect(store.getState().prompts.length).toBe(1);
    });

    it('should remove the prompt onConfirm', () => {
      store.dispatch(addPrompt(parentId,
        { onClick: jasmine.createSpy('onClick'), userChoice: {}, isOpened: false, className: 'someClass' }));
      expect(store.getState().prompts.length).toBe(1);
      triggerAction.props().onConfirm();
      expect(store.getState().prompts.length).toBe(0);
    });
  });
});
