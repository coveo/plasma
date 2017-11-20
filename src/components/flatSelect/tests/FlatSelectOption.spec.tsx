import { shallow, mount, ReactWrapper } from 'enzyme';
import { IFlatSelectOptionProps, FlatSelectOption } from '../FlatSelectOption';
import * as _ from 'underscore';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('FlatSelectOption picker', () => {
  const OPTION_BASIC_PROPS: IFlatSelectOptionProps = {
    option: {
      label: 'FlatSelectOption 1',
      value: () => 'flatSelectOptionValue'
    },
    selected: false,
    onClick: jasmine.createSpy('onClick')
  };

  describe('<FlatSelectOption />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <FlatSelectOption {...OPTION_BASIC_PROPS} />
        );
      }).not.toThrow();
    });
  });

  describe('<FlatSelectOption />', () => {
    let flatSelectOption: ReactWrapper<IFlatSelectOptionProps, any>;

    beforeEach(() => {
      flatSelectOption = mount(
        <FlatSelectOption {...OPTION_BASIC_PROPS} />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      flatSelectOption.unmount();
      flatSelectOption.detach();
    });

    it('should get the value as a prop', () => {
      let flatSelectOptionProp = flatSelectOption.props().option;

      expect(flatSelectOptionProp).toBeDefined();
      expect(flatSelectOptionProp).toEqual(OPTION_BASIC_PROPS.option);
    });

    it('should get if it is selected as a prop', () => {
      let isSelectedProp = flatSelectOption.props().selected;

      expect(isSelectedProp).toBeDefined();
      expect(isSelectedProp).toEqual(OPTION_BASIC_PROPS.selected);
    });

    it('should get what to do on click as a prop', () => {
      let onClickProp = flatSelectOption.props().onClick;

      expect(onClickProp).toBeDefined();
    });

    it('should display the flatSelectOption label', () => {
      expect(flatSelectOption.html()).toContain(OPTION_BASIC_PROPS.option.label);
    });

    it('should have the selectable class if selected prop is set to false', () => {
      let selectedFlatSelectOptionProps = _.extend({}, OPTION_BASIC_PROPS, { selected: true });

      expect(flatSelectOption.find('a').hasClass('selectable')).toBe(true);

      flatSelectOption.setProps(selectedFlatSelectOptionProps);

      expect(flatSelectOption.find('a').hasClass('selectable')).toBe(false);
    });

    it('should call the onClick prop with the result of the flatSelectOption value when clicking the button', () => {
      flatSelectOption.find('a').simulate('click');

      expect(OPTION_BASIC_PROPS.onClick).toHaveBeenCalledWith(
        OPTION_BASIC_PROPS.option.value()
      );
    });
  });
});
