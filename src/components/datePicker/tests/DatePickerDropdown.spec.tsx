import { shallow, mount, ReactWrapper } from 'enzyme';
import {
  DatePickerDropdown,
  IDatePickerDropdownProps,
  DEFAULT_DATE_PICKER_DROPDOWN_LABEL,
  DEFAULT_TO_LABEL,
  DEFAULT_APPLY_DATE_LABEL,
  DEFAULT_CANCEL_DATE_LABEL
} from '../DatePickerDropdown';
import { IDatePickerState } from '../DatePickerReducers';
import { DateUtils } from '../../../utils/DateUtils';
import * as _ from 'underscore';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('Date picker', () => {
  const DATE_PICKER_DROPDOWN_BASIC_PROPS: IDatePickerDropdownProps = {
    datesSelectionBoxes: [
      {
        title: 'The first box'
      }
    ]
  };

  describe('<DatePickerDropdown />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <DatePickerDropdown {...DATE_PICKER_DROPDOWN_BASIC_PROPS} />
        );
      }).not.toThrow();
    });
  });

  describe('<DatePickerDropdown />', () => {
    let datePickerDropdown: ReactWrapper<IDatePickerDropdownProps, any>;
    let datePickerDropdownInstance: DatePickerDropdown;

    beforeEach(() => {
      datePickerDropdown = mount(
        <DatePickerDropdown {...DATE_PICKER_DROPDOWN_BASIC_PROPS} />,
        { attachTo: document.getElementById('App') }
      );
      datePickerDropdownInstance = datePickerDropdown.instance() as DatePickerDropdown;
    });

    afterEach(() => {
      datePickerDropdown.unmount();
      datePickerDropdown.detach();
    });

    it('should get the dates selection boxes as a prop', () => {
      let datesSelectionBoxesProps = datePickerDropdown.props().datesSelectionBoxes;

      expect(datesSelectionBoxesProps).toBeDefined();
      expect(datesSelectionBoxesProps).toEqual(DATE_PICKER_DROPDOWN_BASIC_PROPS.datesSelectionBoxes);
    });

    it('should not display a <DatePickerBox /> if it is not opened and prop renderDatePickerWhenClosed is false', () => {
      const props: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { renderDatePickerWhenClosed: false });
      datePickerDropdown.setProps(props);

      expect(datePickerDropdown.find('DatePickerBox').length).toBe(0);
    });

    it('should display a <DatePickerBox /> if it is not opened but prop renderDatePickerWhenClosed is true', () => {
      const props: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { open: false, renderDatePickerWhenClosed: true });
      datePickerDropdown.setProps(props);

      expect(datePickerDropdown.find('DatePickerBox').length).toBe(1);
    });

    it('should display a <DatePickerBox /> if it is opened regardless of whether prop renderDatePickerWhenClosed is true or false', () => {
      const props: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { isOpened: true, renderDatePickerWhenClosed: false });
      datePickerDropdown.setProps(props);

      expect(datePickerDropdown.find('DatePickerBox').length).toBe(1);
    });

    it('should have the class "open" if the isOpened prop is set to true', () => {
      let propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { isOpened: true });

      expect(datePickerDropdown.find('.dropdown-wrapper').hasClass('open')).toBe(false);

      datePickerDropdown.setProps(propsIsOpened);

      expect(datePickerDropdown.find('.dropdown-wrapper').hasClass('open')).toBe(true);
    });

    it('should display the label passed as a prop or use the default one', () => {
      let expectedLabel: string = 'This is the date picker dropdown label';
      let propsWithLabel: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { label: expectedLabel });

      expect(datePickerDropdown.html()).toContain(DEFAULT_DATE_PICKER_DROPDOWN_LABEL);

      datePickerDropdown.setProps(propsWithLabel);

      expect(datePickerDropdown.html()).not.toContain(DEFAULT_DATE_PICKER_DROPDOWN_LABEL);
      expect(datePickerDropdown.html()).toContain(expectedLabel);
    });

    it('should display the dates from the date picker if the datePicker prop is set', () => {
      let now: Date = new Date();
      let formattedNow: string = DateUtils.getSimpleDate(now);
      let then: Date = new Date(new Date().setDate(new Date().getDate() + 1));
      let formattedThen: string = DateUtils.getSimpleDate(then);
      let toLabel: string = 'à';
      let datePicker: IDatePickerState = {
        id: 'id',
        calendarId: 'calendarId',
        color: 'color',
        lowerLimit: now,
        upperLimit: then,
        isRange: false,
        selected: '',
        appliedLowerLimit: now,
        appliedUpperLimit: then
      };
      let propsWithDatePicker: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { datePicker });

      expect(datePickerDropdown.find('.dropdown-selected-value').text()).not.toContain(formattedNow);
      expect(datePickerDropdown.find('.dropdown-selected-value').text()).not.toContain(formattedThen);
      expect(datePickerDropdown.find('.to-label').length).toBe(0);

      datePickerDropdown.setProps(propsWithDatePicker);

      expect(datePickerDropdown.find('.dropdown-selected-value').text()).toContain(formattedNow);
      expect(datePickerDropdown.find('.dropdown-selected-value').text()).not.toContain(formattedThen);
      expect(datePickerDropdown.find('.to-label').length).toBe(0);

      datePicker = {
        id: 'id',
        calendarId: 'calendarId',
        color: 'color',
        lowerLimit: now,
        upperLimit: then,
        isRange: true,
        selected: '',
        appliedLowerLimit: now,
        appliedUpperLimit: then
      };
      propsWithDatePicker = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { datePicker });
      datePickerDropdown.setProps(propsWithDatePicker);

      expect(datePickerDropdown.find('.dropdown-selected-value').text()).toContain(formattedNow);
      expect(datePickerDropdown.find('.dropdown-selected-value').text()).toContain(formattedThen);
      expect(datePickerDropdown.find('.to-label').text()).toContain(DEFAULT_TO_LABEL);

      propsWithDatePicker = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { datePicker, toLabel });
      datePickerDropdown.setProps(propsWithDatePicker);

      expect(datePickerDropdown.find('.to-label').text()).not.toContain(DEFAULT_TO_LABEL);
      expect(datePickerDropdown.find('.to-label').text()).toContain(toLabel);
    });

    it('should display the date from the date picker with time on the label if the first dateSelectionBox is with time',
      () => {
        let now: Date = new Date();
        let newProps: IDatePickerDropdownProps = {
          datesSelectionBoxes: [
            {
              title: 'The first box',
              withTime: true
            }
          ],
          datePicker: {
            id: 'id',
            calendarId: 'calendarId',
            color: 'color',
            lowerLimit: now,
            upperLimit: now,
            isRange: true,
            selected: '',
            appliedLowerLimit: now,
            appliedUpperLimit: now
          }
        };

        datePickerDropdown.setProps(newProps);

        expect(datePickerDropdown.find('.dropdown-selected-value').html()).toContain(DateUtils.getDateWithTimeString(now));
      });

    it('should call handleClick when clicking the dropdown toggle', () => {
      let handleClickSpy: jasmine.Spy = spyOn<any>(datePickerDropdownInstance, 'handleClick');

      datePickerDropdown.find('.dropdown-toggle').simulate('click');

      expect(handleClickSpy).toHaveBeenCalled();
    });

    it('should call onClick prop if set when calling handleClick', () => {
      let onClickSpy: jasmine.Spy = jasmine.createSpy('onClick');
      let onClickProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { onClick: onClickSpy });

      expect(() => {
        datePickerDropdownInstance['handleClick'].call(datePickerDropdownInstance);
      }).not.toThrow();

      datePickerDropdown.setProps(onClickProps);
      datePickerDropdownInstance['handleClick'].call(datePickerDropdownInstance);

      expect(onClickSpy).toHaveBeenCalled();
    });

    it('should trigger onDocumentClick dispatch on mount and remove it on unmount if prop onDocumentClick is set and isOpened is true', () => {
      let onDocumentClickSpy = jasmine.createSpy('onDocumentClick');
      let newDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { onDocumentClick: onDocumentClickSpy, isOpened: true });

      datePickerDropdown.mount();
      document.getElementById('App').click();
      expect(onDocumentClickSpy).not.toHaveBeenCalled();

      datePickerDropdown.unmount();
      datePickerDropdown.setProps(newDropdownProps);
      datePickerDropdown.mount();
      document.getElementById('App').click();
      expect(onDocumentClickSpy).toHaveBeenCalledTimes(1);

      datePickerDropdown.unmount();
      document.getElementById('App').click();
      expect(onDocumentClickSpy).toHaveBeenCalledTimes(1);
    });

    it('should not trigger onDocumentClick dispatch on mount if prop onDocumentClick is set and isOpened is false', () => {
      let onDocumentClickSpy = jasmine.createSpy('onDocumentClick');
      let newDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { onDocumentClick: onDocumentClickSpy, isOpened: false });

      datePickerDropdown.mount();
      document.getElementById('App').click();
      expect(onDocumentClickSpy).not.toHaveBeenCalled();

      datePickerDropdown.unmount();
      datePickerDropdown.setProps(newDropdownProps);
      datePickerDropdown.mount();
      document.getElementById('App').click();
      expect(onDocumentClickSpy).not.toHaveBeenCalled();

      datePickerDropdown.unmount();
      document.getElementById('App').click();
      expect(onDocumentClickSpy).not.toHaveBeenCalled();
    });

    it('should not call onDocumentClick when prop is set and clicking on the dropdown', () => {
      let onDocumentClickSpy = jasmine.createSpy('onDocumentClick');
      let newDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { onDocumentClick: onDocumentClickSpy, isOpened: true });

      datePickerDropdown = mount(
        <DatePickerDropdown {...newDropdownProps} />,
        { attachTo: document.getElementById('App') }
      );

      (document.getElementsByClassName('dropdown-wrapper')[0] as HTMLDivElement).click();
      expect(onDocumentClickSpy).not.toHaveBeenCalled();

      document.getElementById('App').click();
      expect(onDocumentClickSpy).toHaveBeenCalled();
    });

    it('should call onRender prop if set when mounting', () => {
      let onRenderSpy: jasmine.Spy = jasmine.createSpy('onRender');
      let onRenderProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { onRender: onRenderSpy });

      expect(() => datePickerDropdownInstance.componentWillMount()).not.toThrow();

      datePickerDropdown.unmount();
      datePickerDropdown.setProps(onRenderProps);
      datePickerDropdown.mount();
      expect(onRenderSpy).toHaveBeenCalled();
    });

    it('should call onDestroy prop if set when will unmount', () => {
      let onDestroySpy: jasmine.Spy = jasmine.createSpy('onDestroy');
      let onDestroyProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { onDestroy: onDestroySpy });

      expect(() => datePickerDropdownInstance.componentWillUnmount()).not.toThrow();

      datePickerDropdown.setProps(onDestroyProps);
      datePickerDropdown.unmount();
      expect(onDestroySpy).toHaveBeenCalled();
    });

    it('should display a footer with two button if the dropdown is opened', () => {
      let propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { isOpened: true });
      datePickerDropdown.setProps(propsIsOpened);

      expect(datePickerDropdown.find('footer').length).toBe(1);
      expect(datePickerDropdown.find('footer').find('button').length).toBe(2);
    });

    it('should display the apply label passed as a prop or use the default one if the dropdown is opened', () => {
      let propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { isOpened: true });
      datePickerDropdown.setProps(propsIsOpened);

      let applyLabel: string = 'appliquer';
      let newProps: IDatePickerDropdownProps = _.extend({}, propsIsOpened, { applyLabel });

      expect(datePickerDropdown.find('footer').html()).toContain(DEFAULT_APPLY_DATE_LABEL);

      datePickerDropdown.setProps(newProps);

      expect(datePickerDropdown.find('footer').html()).not.toContain(DEFAULT_APPLY_DATE_LABEL);
      expect(datePickerDropdown.find('footer').html()).toContain(applyLabel);
    });

    it('should display the cancel label passed as a prop or use the default one if the dropdown is opened', () => {
      let propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { isOpened: true });
      datePickerDropdown.setProps(propsIsOpened);

      let cancelLabel: string = 'annuler';
      let newProps: IDatePickerDropdownProps = _.extend({}, propsIsOpened, { cancelLabel });

      expect(datePickerDropdown.find('footer').html()).toContain(DEFAULT_CANCEL_DATE_LABEL);

      datePickerDropdown.setProps(newProps);

      expect(datePickerDropdown.find('footer').html()).not.toContain(DEFAULT_CANCEL_DATE_LABEL);
      expect(datePickerDropdown.find('footer').html()).toContain(cancelLabel);
    });

    it('should call handleApply when clicking on the apply button', () => {
      let propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { isOpened: true });
      datePickerDropdown.setProps(propsIsOpened);

      let handleApplySpy: jasmine.Spy = spyOn<any>(datePickerDropdownInstance, 'handleApply');

      datePickerDropdown.find('footer').find('button').first().simulate('click');

      expect(handleApplySpy).toHaveBeenCalled();
    });

    it('should call handleCancel when clicking on the cancel button', () => {
      let propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { isOpened: true });
      datePickerDropdown.setProps(propsIsOpened);

      let handleCancelSpy: jasmine.Spy = spyOn<any>(datePickerDropdownInstance, 'handleCancel');

      datePickerDropdown.find('footer').find('button').last().simulate('click');

      expect(handleCancelSpy).toHaveBeenCalled();
    });

    it('should call onApply prop if set when calling handleApply', () => {
      let onBeforeApplySpy: jasmine.Spy = jasmine.createSpy('onBeforeApply');
      let onBeforeApplyProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS,
        { onBeforeApply: onBeforeApplySpy });

      expect(() => {
        datePickerDropdownInstance['handleApply'].call(datePickerDropdownInstance);
      }).not.toThrow();

      datePickerDropdown.setProps(onBeforeApplyProps);
      datePickerDropdownInstance['handleApply'].call(datePickerDropdownInstance);

      expect(onBeforeApplySpy).toHaveBeenCalled();
    });

    it('should call onApply prop if set when calling handleApply', () => {
      let onApplySpy: jasmine.Spy = jasmine.createSpy('onApply');
      let onApplyProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { onApply: onApplySpy });

      expect(() => {
        datePickerDropdownInstance['handleApply'].call(datePickerDropdownInstance);
      }).not.toThrow();

      datePickerDropdown.setProps(onApplyProps);
      datePickerDropdownInstance['handleApply'].call(datePickerDropdownInstance);

      expect(onApplySpy).toHaveBeenCalled();
    });

    it('should call onCancel prop if set when calling handleCancel', () => {
      let onCancelSpy: jasmine.Spy = jasmine.createSpy('onCancel');
      let onCancelProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { onCancel: onCancelSpy });

      expect(() => {
        datePickerDropdownInstance['handleCancel'].call(datePickerDropdownInstance);
      }).not.toThrow();

      datePickerDropdown.setProps(onCancelProps);
      datePickerDropdownInstance['handleCancel'].call(datePickerDropdownInstance);

      expect(onCancelSpy).toHaveBeenCalled();
    });

    it('should have class "on-right" on menu if onRight prop is set to true', () => {
      let expectedClass: string = 'on-right';
      let onRightProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, { onRight: true });

      expect(datePickerDropdown.find('.dropdown-menu').hasClass(expectedClass)).toBe(false);

      datePickerDropdown.setProps(onRightProps);

      expect(datePickerDropdown.find('.dropdown-menu').hasClass(expectedClass)).toBe(true);
    });
  });
});
