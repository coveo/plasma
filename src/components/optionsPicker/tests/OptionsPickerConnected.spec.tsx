import { mount, ReactWrapper } from 'enzyme';
import { Store } from 'react-redux';
import { clearState } from '../../../utils/ReduxUtils';
import { IReactVaporState } from '../../../ReactVapor';
import { TestUtils } from '../../../utils/TestUtils';
import { Provider } from 'react-redux';
import { IOptionPickerProps, OptionPicker } from '../OptionPicker';
import { OptionPickerConnected } from '../OptionPickerConnected';
import { changeOptionPicker } from '../OptionPickerActions';
import * as _ from 'underscore';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Option picker', () => {
  const OPTION_PICKER_BASIC_PROPS: IOptionPickerProps = {
    id: 'option-picker',
    options: [
      {
        label: 'Option 1',
        value: () => 'optionValue'
      },
      {
        label: 'Option 2',
        value: () => '1238'
      }
    ]
  };

  describe('<OptionsCycleConnected />', () => {
    let wrapper: ReactWrapper<any, any>;
    let optionPicker: ReactWrapper<IOptionPickerProps, any>;
    let store: Store<IReactVaporState>;

    beforeEach(() => {
      store = TestUtils.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <OptionPickerConnected {...OPTION_PICKER_BASIC_PROPS} />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      optionPicker = wrapper.find(OptionPicker).first();
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get an id as a prop', () => {
      let idProp = optionPicker.props().id;

      expect(idProp).toBeDefined();
      expect(idProp).toBe(OPTION_PICKER_BASIC_PROPS.id);
    });

    it('should get the active value as a prop', () => {
      let activeValueProp = optionPicker.props().activeValue;

      expect(activeValueProp).toBeDefined();
      expect(activeValueProp).toBe('');
    });

    it('should get what to do on render as a prop', () => {
      let onRenderProp = optionPicker.props().onRender;

      expect(onRenderProp).toBeDefined();
    });

    it('should get what to do on destroy as a prop', () => {
      let onDestroyProp = optionPicker.props().onDestroy;

      expect(onDestroyProp).toBeDefined();
    });

    it('should get what to do on click as a prop', () => {
      let onChangeProp = optionPicker.props().onClick;

      expect(onChangeProp).toBeDefined();
    });

    it('should return an empty string for the activeValue when the option picker does not exist in the state', () => {
      store.dispatch(clearState());

      expect(_.findWhere(store.getState().optionPickers, { id: OPTION_PICKER_BASIC_PROPS.id })).toBeUndefined();
      expect(optionPicker.props().activeValue).toBe('');
    });

    it('should return the selectedValue from the state when the option picker exists in the state', () => {
      let expectedSelectedValue: string = 'our value';

      store.dispatch(changeOptionPicker(OPTION_PICKER_BASIC_PROPS.id, expectedSelectedValue));

      expect(optionPicker.props().activeValue).toBe(expectedSelectedValue);
    });

    it('should call onRender prop when mounted', () => {
      wrapper.unmount();
      store.dispatch(clearState());

      expect(store.getState().optionPickers.length).toBe(0);

      wrapper.mount();

      expect(store.getState().optionPickers.length).toBe(1);
    });

    it('should call onDestroy prop when will unmount', () => {
      wrapper.unmount();

      expect(store.getState().optionPickers.length).toBe(0);
    });

    it('should set the selected value to the one sent when calling the onClick prop', () => {
      let expectedSelectedValue: string = 'our value';

      optionPicker.props().onClick(expectedSelectedValue);

      expect(_.findWhere(store.getState().optionPickers, { id: OPTION_PICKER_BASIC_PROPS.id }).selectedValue).toBe(expectedSelectedValue);

      expectedSelectedValue = 'new value';

      optionPicker.props().onClick(expectedSelectedValue);

      expect(_.findWhere(store.getState().optionPickers, { id: OPTION_PICKER_BASIC_PROPS.id }).selectedValue).toBe(expectedSelectedValue);
    });
  });
});
