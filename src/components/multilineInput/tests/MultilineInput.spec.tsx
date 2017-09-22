import { shallow, mount, ReactWrapper } from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { MultilineInput, IMultilineInputProps, IMultilineInputValue } from '../MultilineInput';
import { AddInput } from '../AddInput';
import { DeletableInput } from '../DeletableInput';

describe('MultilineInput', () => {

  describe('<MultilineInput />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <MultilineInput />
        );
      }).not.toThrow();
    });
  });

  describe('<MultilineInput />', () => {
    let multilineInput: ReactWrapper<IMultilineInputProps, any>;
    let valueId = 'an-id';
    let valueValue = 'a-value';
    let multilineInputValue: IMultilineInputValue = {
      id: valueId,
      value: valueValue
    };
    let aNewValue = 'a-new-value';

    beforeEach(() => {
      multilineInput = mount(
        <MultilineInput />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      multilineInput.unmount();
      multilineInput.detach();
    });

    it('should render an AddInput when no values are specified', () => {
      let innerAddInput = multilineInput.find('AddInput');

      expect(innerAddInput.length).toBe(1);
    });

    it('should render no DeletableInput when no values are specifie.', () => {
      let innerDeleteInput = multilineInput.find(DeletableInput);

      expect(innerDeleteInput.length).toBe(0);
    });

    it('should render one DeletableInput when one value is specified', () => {
      multilineInput.setProps({ values: [multilineInputValue] });
      multilineInput.mount();
      let innerDeleteInput = multilineInput.find(DeletableInput);

      expect(innerDeleteInput.length).toBe(1);
    });

    it('should call prop onChange with new value when add input changes', () => {
      let changeSpy = jasmine.createSpy('onChange');
      multilineInput.setProps({ onChange: changeSpy, values: [] });
      multilineInput.mount();

      let innerAddInput = multilineInput.find(AddInput);
      expect(innerAddInput.length).toBe(1);

      innerAddInput.props().onBlur(aNewValue);

      expect(changeSpy.calls.count()).toBe(1);
      expect(changeSpy.calls.first().args[0][0].value).toBe(aNewValue);
    });

    it('should call prop onChange with updated value when delete input changes', () => {
      let changeSpy = jasmine.createSpy('onChange');
      multilineInput.setProps({ onChange: changeSpy, values: [multilineInputValue] });
      multilineInput.mount();

      let innerDeleteInput = multilineInput.find(DeletableInput);
      expect(innerDeleteInput.length).toBe(1);

      innerDeleteInput.props().onBlur(aNewValue);

      expect(changeSpy.calls.count()).toBe(1);
      expect(changeSpy.calls.first().args[0][0].value).toBe(aNewValue);
    });

    it('should call prop onChange with removed value when delete input changes for something empty', () => {
      let changeSpy = jasmine.createSpy('onChange');
      multilineInput.setProps({ onChange: changeSpy, values: [multilineInputValue] });
      multilineInput.mount();

      let innerDeleteInput = multilineInput.find(DeletableInput);
      expect(innerDeleteInput.length).toBe(1);

      innerDeleteInput.props().onBlur('');

      expect(changeSpy.calls.count()).toBe(1);
      expect(changeSpy.calls.first().args[0].length).toBe(0);
    });
  });
});
