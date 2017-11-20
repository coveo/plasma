import { shallow, mount, ReactWrapper } from 'enzyme';
import { IFlatSelectStandaloneProps, FlatSelectStandalone } from '../FlatSelectStandalone';
import * as _ from 'underscore';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('FlatSelectStandalone picker', () => {
  const value2 = '1238';
  const FLAT_SELECT_BASIC_PROPS: IFlatSelectStandaloneProps = {
    options: [
      {
        label: 'Option 1',
        value: () => 'optionValue'
      },
      {
        label: 'Option 2',
        value: () => value2
      }
    ]
  };

  describe('<FlatSelectStandalone />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <FlatSelectStandalone {...FLAT_SELECT_BASIC_PROPS} />
        );
      }).not.toThrow();
    });
  });

  describe('<FlatSelectStandalone />', () => {
    let flatSelect: ReactWrapper<IFlatSelectStandaloneProps, any>;
    let flatSelectInstance: FlatSelectStandalone;

    beforeEach(() => {
      flatSelect = mount(
        <FlatSelectStandalone {...FLAT_SELECT_BASIC_PROPS} />,
        { attachTo: document.getElementById('App') }
      );
      flatSelectInstance = flatSelect.instance() as FlatSelectStandalone;
    });

    afterEach(() => {
      flatSelect.unmount();
      flatSelect.detach();
    });

    it('should get the value as a prop', () => {
      let flatSelectProp = flatSelect.props().options;

      expect(flatSelectProp).toBeDefined();
      expect(flatSelectProp).toEqual(FLAT_SELECT_BASIC_PROPS.options);
    });

    it('should get first option value as selected if no default is specified as props', () => {
      const selectedOption = flatSelectInstance.selectedOption();

      expect(selectedOption).toBeDefined();
      expect(selectedOption).toEqual(FLAT_SELECT_BASIC_PROPS.options[0].value());
    });

    it('should select first value specified in seletedValues prop if specified', () => {
      let withSelectedOptionsProps = _.extend({}, FLAT_SELECT_BASIC_PROPS, { selectedOptions: [value2] });

      flatSelect.unmount();
      flatSelect.detach();
      flatSelect = mount(
        <FlatSelectStandalone {...withSelectedOptionsProps} />,
        { attachTo: document.getElementById('App') }
      );
      flatSelectInstance = flatSelect.instance() as FlatSelectStandalone;
      const selectedOption = flatSelectInstance.selectedOption();

      expect(selectedOption).toBeDefined();
      expect(selectedOption).toEqual(value2);
    });

    it('should select value when option is clicked', () => {
      const flatSelectOptions = flatSelect.find('FlatSelectOption');
      flatSelectOptions.first().find('a').simulate('click');
      let selectedOption = flatSelectInstance.selectedOption();
      expect(selectedOption).toBeDefined();
      expect(selectedOption).toEqual(FLAT_SELECT_BASIC_PROPS.options[0].value());

      flatSelectOptions.last().find('a').simulate('click');
      selectedOption = flatSelectInstance.selectedOption();
      expect(selectedOption).toBeDefined();
      expect(selectedOption).toEqual(FLAT_SELECT_BASIC_PROPS.options[1].value());
    });

    it('should select value when select is called', () => {
      let selectedOption = flatSelectInstance.selectedOption();
      expect(selectedOption).toBeDefined();
      expect(selectedOption).toEqual(FLAT_SELECT_BASIC_PROPS.options[0].value());

      flatSelectInstance.select(value2);
      selectedOption = flatSelectInstance.selectedOption();
      expect(selectedOption).toBeDefined();
      expect(selectedOption).toEqual(value2);
    });

    it('should reset selected value when reset is called', () => {
      let selectedOption = flatSelectInstance.selectedOption();
      expect(selectedOption).toBeDefined();
      expect(selectedOption).toEqual(FLAT_SELECT_BASIC_PROPS.options[0].value());

      flatSelectInstance.select(value2);
      selectedOption = flatSelectInstance.selectedOption();
      expect(selectedOption).toBeDefined();
      expect(selectedOption).toEqual(value2);

      flatSelectInstance.reset();
      selectedOption = flatSelectInstance.selectedOption();
      expect(selectedOption).toBeDefined();
      expect(selectedOption).toEqual(FLAT_SELECT_BASIC_PROPS.options[0].value());
    });
  });
});
