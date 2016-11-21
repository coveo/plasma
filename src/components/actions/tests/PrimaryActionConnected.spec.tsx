import { mount, ReactWrapper } from 'enzyme';
import { IActionOptions } from '../Action';
import { IPrimaryActionProps, PrimaryAction } from '../PrimaryAction';
import { Store } from 'react-redux';
import { IReactVaporState } from '../../../utils/ReduxUtils';
import { TestUtils } from '../../../utils/TestUtils';
import { Provider } from 'react-redux';
import { PrimaryActionConnected } from '../PrimaryActionConnected';
import { TriggerActionConnected } from '../TriggerActionConnected';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Actions', () => {

  describe('TablePrimaryActionView', () => {
    let action: IActionOptions = {
      name: 'action2',
      trigger: jasmine.createSpy('triggerMethod'),
      enabled: true
    };
    let wrapper: ReactWrapper<any, any>;
    let primaryAction: ReactWrapper<IPrimaryActionProps, any>;
    let store: Store<IReactVaporState>;

    beforeEach(() => {
      store = TestUtils.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <PrimaryActionConnected action={action} />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      primaryAction = wrapper.find(PrimaryAction).first();
    });

    afterEach(() => {
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get withReduxState as a prop', () => {
      let withReduxStateProp = primaryAction.props().withReduxState;

      expect(withReduxStateProp).toBeDefined();
      expect(withReduxStateProp).toBe(true);
    });

    it('should display a <TriggerActionConnected /> component if the action is a trigger action', () => {
      expect(primaryAction.find(TriggerActionConnected).length).toBe(1);
    });
  });
});
