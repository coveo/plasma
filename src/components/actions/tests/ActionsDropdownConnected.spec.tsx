import { mount, ReactWrapper } from 'enzyme';
import { IActionOptions } from '../Action';
import { ActionsDropdownConnected } from '../ActionsDropdownConnected';
import { IActionsDropdownProps, ActionsDropdown } from '../ActionsDropdown';
import { clearState } from '../../../utils/ReduxUtils';
import { IReactVaporState } from '../../../ReactVapor';
import { TestUtils } from '../../../utils/TestUtils';
import { Provider } from 'react-redux';
import { TriggerActionConnected } from '../TriggerActionConnected';
import { Store } from 'react-redux';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('Actions', () => {
  const actionTrigger: jasmine.Spy = jasmine.createSpy('triggerMethod');

  let id: string = 'dropdown-actions';
  let actions: IActionOptions[] = [{
    name: 'action2',
    trigger: actionTrigger,
    enabled: true
  }];

  describe('<ActionsDropdownConnected />', () => {
    let wrapper: ReactWrapper<any, any>;
    let actionsDropdown: ReactWrapper<IActionsDropdownProps, any>;
    let store: Store<IReactVaporState>;

    beforeEach(() => {
      store = TestUtils.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <ActionsDropdownConnected
            actions={actions}
            id={id}
            />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      actionsDropdown = wrapper.find(ActionsDropdown).first();
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get an id as a prop', () => {
      let idProp = actionsDropdown.props().id;

      expect(idProp).toBeDefined();
      expect(idProp).toBe(id);
    });

    it('should get an withReduxState as a prop', () => {
      let withReduxStateProp = actionsDropdown.props().withReduxState;

      expect(withReduxStateProp).toBeDefined();
      expect(withReduxStateProp).toBe(true);
    });

    it('should display a TriggerActionConnected if there is a trigger action', () => {
      expect(actionsDropdown.find(TriggerActionConnected).length).toBe(1);
    });
  });
});
