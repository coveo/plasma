import { mount, ReactWrapper } from 'enzyme';
import { clearState } from '../../../utils/ReduxUtils';
import { IReactVaporState } from '../../../ReactVapor';
import { TestUtils } from '../../../utils/TestUtils';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { Checkbox } from '../Checkbox';
import { CheckboxConnected } from '../CheckboxConnected';
import { toggleCheckbox } from '../CheckboxActions';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { IInputProps } from '../../input/Input';

describe('Checkbox', () => {
  describe('<CheckboxConnected />', () => {
    let checkbox: ReactWrapper<IInputProps, any>;
    let id: string;
    let wrapper: ReactWrapper<any, any>;
    let store: Store<IReactVaporState>;

    beforeEach(() => {
      id = 'checkbox';

      store = TestUtils.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <CheckboxConnected
            id={id}
          />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      checkbox = wrapper.find(Checkbox).first();
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get its id as a prop', () => {
      const idProp = checkbox.props().id;

      expect(idProp).toBeDefined();
      expect(idProp).toBe(id);
    });

    it('should get checked false as a prop', () => {
      expect(store.getState().checkboxes.filter(checkbox => checkbox.id === id)[0].checked).toBe(false);
    });

    it('should get what to do on render as a prop', () => {
      const onRenderProp = checkbox.props().onRender;

      expect(onRenderProp).toBeDefined();
    });

    it('should get what to do on destroy as a prop', () => {
      const onDestroyProp = checkbox.props().onDestroy;

      expect(onDestroyProp).toBeDefined();
    });

    it('should add the checkbox in the store on render', () => {
      expect(store.getState().checkboxes.filter(checkbox => checkbox.id === id).length).toBe(1);
    });

    it('should toggle the checkbox in the store when dispatching a "toggleCheckbox" action', () => {
      expect(store.getState().checkboxes.filter(checkbox => checkbox.id === id).length).toBe(1);
      expect(store.getState().checkboxes.filter(checkbox => checkbox.id === id)[0].checked).toBe(false);

      store.dispatch(toggleCheckbox(id));
      expect(store.getState().checkboxes.filter(checkbox => checkbox.id === id)[0].checked).toBe(true);
    });

    it('should remove the checkbox in the store on destroy', () => {
      wrapper.unmount();
      expect(store.getState().checkboxes.filter(checkboxs => checkboxs.id === id).length).toBe(0);
    });
  });
});
