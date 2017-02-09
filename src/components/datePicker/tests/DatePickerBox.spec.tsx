import { shallow, mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import { TestUtils } from '../../../utils/TestUtils';
import { DatePickerBox, IDatePickerBoxProps } from '../DatePickerBox';
import { CalendarConnected } from '../../calendar/CalendarConnected';
import { DatesSelectionConnected } from '../DatesSelectionConnected';
import { OptionPickerConnected } from '../../optionsPicker/OptionPickerConnected';
import * as _ from 'underscore';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Date picker', () => {
  const DATE_PICKER_BOX_BASIC_PROPS: IDatePickerBoxProps = {
    datesSelectionBoxes: [
      {
        title: 'The first box'
      }
    ]
  };

  describe('<DatePickerBox />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <DatePickerBox {...DATE_PICKER_BOX_BASIC_PROPS} />
        );
      }).not.toThrow();
    });
  });

  describe('<DatePicker />', () => {
    let datePickerBox: ReactWrapper<IDatePickerBoxProps, any>;

    beforeEach(() => {
      datePickerBox = mount(
        <DatePickerBox {...DATE_PICKER_BOX_BASIC_PROPS} />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      datePickerBox.unmount();
      datePickerBox.detach();
    });

    it('should get the dates selection boxes as a prop', () => {
      let datesSelectionBoxesProps = datePickerBox.props().datesSelectionBoxes;

      expect(datesSelectionBoxesProps).toBeDefined();
      expect(datesSelectionBoxesProps).toEqual(DATE_PICKER_BOX_BASIC_PROPS.datesSelectionBoxes);
    });

    it('should display a <Calendar /> component', () => {
      expect(datePickerBox.find('Calendar').length).toBe(1);
    });

    it('should display as many <DatesSelection /> as there are datesSelectionBoxes', () => {
      let moreBoxesProps: IDatePickerBoxProps = _.extend({}, DATE_PICKER_BOX_BASIC_PROPS, {
        datesSelectionBoxes: [...DATE_PICKER_BOX_BASIC_PROPS.datesSelectionBoxes, { title: 'other box' }]
      });

      expect(datePickerBox.find('DatesSelection').length).toBe(DATE_PICKER_BOX_BASIC_PROPS.datesSelectionBoxes.length);

      datePickerBox.setProps(moreBoxesProps);

      expect(datePickerBox.find('DatesSelection').length).toBe(moreBoxesProps.datesSelectionBoxes.length);
    });

    it('should diplay a <OptionPicker /> for every dates selections box', () => {
      let moreBoxesProps: IDatePickerBoxProps = _.extend({}, DATE_PICKER_BOX_BASIC_PROPS, {
        datesSelectionBoxes: [...DATE_PICKER_BOX_BASIC_PROPS.datesSelectionBoxes, { title: 'other box' }]
      });

      expect(datePickerBox.find('OptionPicker').length).toBe(DATE_PICKER_BOX_BASIC_PROPS.datesSelectionBoxes.length);

      datePickerBox.setProps(moreBoxesProps);

      expect(datePickerBox.find('OptionPicker').length).toBe(moreBoxesProps.datesSelectionBoxes.length);
    });

    it('should display anything sent as the footer prop', () => {
      let footerClass: string = 'the-footer-added';
      let propsWithFooter: IDatePickerBoxProps = _.extend({}, DATE_PICKER_BOX_BASIC_PROPS, { footer: <div className={footerClass}></div> });

      expect(datePickerBox.find(`.${footerClass}`).length).toBe(0);

      datePickerBox.setProps(propsWithFooter);

      expect(datePickerBox.find(`.${footerClass}`).length).toBe(1);
    });
  });

  describe('<DatePickerBox /> with redux state', () => {
    let wrapper: ReactWrapper<any, any>;
    let datePickerBox: ReactWrapper<IDatePickerBoxProps, any>;

    beforeEach(() => {
      wrapper = mount(
        <Provider store={TestUtils.buildStore()}>
          <DatePickerBox {...DATE_PICKER_BOX_BASIC_PROPS} withReduxState />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      datePickerBox = wrapper.find(DatePickerBox).first();
    });

    afterEach(() => {
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get withReduxState as a prop', () => {
      let withReduxStateProp = datePickerBox.props().withReduxState;

      expect(withReduxStateProp).toBeDefined();
      expect(withReduxStateProp).toBe(true);
    });

    it('should display a <CalendarConnected />', () => {
      expect(datePickerBox.find(CalendarConnected).length).toBe(1);
    });

    it('should display a <DatesSelectionConnected />', () => {
      expect(datePickerBox.find(DatesSelectionConnected).length).toBe(1);
    });

    it('should display an <OptionPickerConnected />', () => {
      expect(datePickerBox.find(OptionPickerConnected).length).toBe(1);
    });
  });
});
