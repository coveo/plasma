import { shallow, mount, ReactWrapper } from 'enzyme';
import { IFlatSelectProps, FlatSelect } from '../FlatSelect';
import * as _ from 'underscore';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('Flat Select', () => {
  const FLAT_SELECT_BASIC_PROPS: IFlatSelectProps = {
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

  describe('<FlatSelect />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <FlatSelect {...FLAT_SELECT_BASIC_PROPS} />
        );
      }).not.toThrow();
    });
  });

  describe('<FlatSelect />', () => {
    let flatSelect: ReactWrapper<IFlatSelectProps, any>;
    let flatSelectInstance: FlatSelect;

    beforeEach(() => {
      flatSelect = mount(
        <FlatSelect {...FLAT_SELECT_BASIC_PROPS} />,
        { attachTo: document.getElementById('App') }
      );
      flatSelectInstance = flatSelect.instance() as FlatSelect;
    });

    afterEach(() => {
      flatSelect.unmount();
      flatSelect.detach();
    });

    it('should get the options as a prop', () => {
      let optionsProp = flatSelect.props().options;

      expect(optionsProp).toBeDefined();
      expect(optionsProp).toEqual(FLAT_SELECT_BASIC_PROPS.options);
    });

    it('should display as many <FlatSelectOption /> as there are options in the options prop', () => {
      let moreOptionsProps: IFlatSelectProps = _.extend({}, FLAT_SELECT_BASIC_PROPS,
        {
          options: [
            ...FLAT_SELECT_BASIC_PROPS.options,
            {
              label: 'Option 3',
              value: () => 'aaa'
            }
          ]
        }
      );

      expect(flatSelect.find('FlatSelectOption').length).toBe(FLAT_SELECT_BASIC_PROPS.options.length);

      flatSelect.setProps(moreOptionsProps);

      expect(flatSelect.find('FlatSelectOption').length).toBe(moreOptionsProps.options.length);
    });

    it('should call prop onRender on mounting if set', () => {
      let renderSpy: jasmine.Spy = jasmine.createSpy('onRender');
      let withRenderProps: IFlatSelectProps = _.extend({}, FLAT_SELECT_BASIC_PROPS, { onRender: renderSpy });

      expect(() => flatSelectInstance.componentWillMount()).not.toThrow();

      flatSelect.setProps(withRenderProps);
      flatSelect.unmount();
      flatSelect.mount();

      expect(renderSpy).toHaveBeenCalledTimes(1);
    });

    it('should call prop onDestroy on unmounting if set', () => {
      let destroySpy: jasmine.Spy = jasmine.createSpy('onDestroy');
      let withDestroyProps: IFlatSelectProps = _.extend({}, FLAT_SELECT_BASIC_PROPS, { onDestroy: destroySpy });

      expect(() => flatSelectInstance.componentWillUnmount()).not.toThrow();

      flatSelect.setProps(withDestroyProps);
      flatSelect.mount();
      flatSelect.unmount();

      expect(destroySpy).toHaveBeenCalledTimes(1);
    });

    it('should call prop onClick on mounting if set when calling handleClick', () => {
      let onClickSpy: jasmine.Spy = jasmine.createSpy('onClick');
      let expectedValue: string = 'value';
      let expectedLabel: string = 'label';
      let withOnClickProps: IFlatSelectProps = _.extend({}, FLAT_SELECT_BASIC_PROPS, { onClick: onClickSpy });

      expect(() => flatSelectInstance['handleClick'].call(flatSelectInstance, expectedValue)).not.toThrow();
      expect(onClickSpy).not.toHaveBeenCalled();

      flatSelect.setProps(withOnClickProps);
      flatSelectInstance['handleClick'].call(flatSelectInstance, expectedValue, expectedLabel);

      expect(onClickSpy).toHaveBeenCalledWith(expectedValue);
    });

    it('should call handleClick when clicking an option', () => {
      let handleClickSpy: jasmine.Spy = spyOn<any>(flatSelectInstance, 'handleClick');

      flatSelect.find('FlatSelectOption').first().find('a').simulate('click');

      expect(handleClickSpy).toHaveBeenCalledWith(
        FLAT_SELECT_BASIC_PROPS.options[0].value()
      );
    });
  });
});
