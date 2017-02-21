import { shallow, mount, ReactWrapper } from 'enzyme';
import { IOptionPickerProps, OptionPicker } from '../OptionPicker';
import * as _ from 'underscore';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('Option picker', () => {
  const OPTION_PICKER_BASIC_PROPS: IOptionPickerProps = {
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

  describe('<OptionPicker />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <OptionPicker {...OPTION_PICKER_BASIC_PROPS} />
        );
      }).not.toThrow();
    });
  });

  describe('<OptionPicker />', () => {
    let optionPicker: ReactWrapper<IOptionPickerProps, any>;
    let optionPickerInstance: OptionPicker;

    beforeEach(() => {
      optionPicker = mount(
        <OptionPicker {...OPTION_PICKER_BASIC_PROPS} />,
        { attachTo: document.getElementById('App') }
      );
      optionPickerInstance = optionPicker.instance() as OptionPicker;
    });

    afterEach(() => {
      optionPicker.unmount();
      optionPicker.detach();
    });

    it('should get the options as a prop', () => {
      let optionsProp = optionPicker.props().options;

      expect(optionsProp).toBeDefined();
      expect(optionsProp).toEqual(OPTION_PICKER_BASIC_PROPS.options);
    });

    it('should display as many <Option /> as there are options in the options prop', () => {
      let moreOptionsProps: IOptionPickerProps = _.extend({}, OPTION_PICKER_BASIC_PROPS,
        {
          options: [
            ...OPTION_PICKER_BASIC_PROPS.options,
            {
              label: 'Option 3',
              value: () => 'aaa'
            }
          ]
        }
      );

      expect(optionPicker.find('Option').length).toBe(OPTION_PICKER_BASIC_PROPS.options.length);

      optionPicker.setProps(moreOptionsProps);

      expect(optionPicker.find('Option').length).toBe(moreOptionsProps.options.length);
    });

    it('should call prop onRender on mounting if set', () => {
      let renderSpy: jasmine.Spy = jasmine.createSpy('onRender');
      let withRenderProps: IOptionPickerProps = _.extend({}, OPTION_PICKER_BASIC_PROPS, { onRender: renderSpy });

      expect(() => optionPickerInstance.componentWillMount()).not.toThrow();

      optionPicker.setProps(withRenderProps);
      optionPicker.unmount();
      optionPicker.mount();

      expect(renderSpy).toHaveBeenCalledTimes(1);
    });

    it('should call prop onDestroy on unmounting if set', () => {
      let destroySpy: jasmine.Spy = jasmine.createSpy('onDestroy');
      let withDestroyProps: IOptionPickerProps = _.extend({}, OPTION_PICKER_BASIC_PROPS, { onDestroy: destroySpy });

      expect(() => optionPickerInstance.componentWillUnmount()).not.toThrow();

      optionPicker.setProps(withDestroyProps);
      optionPicker.mount();
      optionPicker.unmount();

      expect(destroySpy).toHaveBeenCalledTimes(1);
    });

    it('should call prop onClick on mounting if set when calling handleClick', () => {
      let onClickSpy: jasmine.Spy = jasmine.createSpy('onClick');
      let expectedValue: string = 'value';
      let withOnClickProps: IOptionPickerProps = _.extend({}, OPTION_PICKER_BASIC_PROPS, { onClick: onClickSpy });

      expect(() => optionPickerInstance['handleClick'].call(optionPickerInstance, expectedValue)).not.toThrow();
      expect(onClickSpy).not.toHaveBeenCalled();

      optionPicker.setProps(withOnClickProps);
      optionPickerInstance['handleClick'].call(optionPickerInstance, expectedValue);

      expect(onClickSpy).toHaveBeenCalledWith(expectedValue);
    });

    it('should call handleClick when clicking an option', () => {
      let handleClickSpy: jasmine.Spy = spyOn<any>(optionPickerInstance, 'handleClick');

      optionPicker.find('Option').first().find('button').simulate('click');

      expect(handleClickSpy).toHaveBeenCalledWith(OPTION_PICKER_BASIC_PROPS.options[0].value);
    });
  });
});
