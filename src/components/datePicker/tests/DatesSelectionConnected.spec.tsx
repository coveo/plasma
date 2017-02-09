import { mount, ReactWrapper } from 'enzyme';
import { Store } from 'react-redux';
import { clearState } from '../../../utils/ReduxUtils';
import { IReactVaporState } from '../../../ReactVapor';
import { TestUtils } from '../../../utils/TestUtils';
import { Provider } from 'react-redux';
import { IDatesSelectionProps, DatesSelection } from '../DatesSelection';
import { DatesSelectionConnected } from '../DatesSelectionConnected';
import { changeDatePickerLowerLimit, changeDatePickerUpperLimit, selectDate, DateLimits } from '../DatePickerActions';
import { addOptionPicker, changeOptionPicker } from '../../optionPicker/OptionPickerActions';
import * as _ from 'underscore';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Date picker', () => {
  describe('<DatesSelectionConnected />', () => {
    const DATES_SELECTION_ID: string = 'dates-selection';
    const NOW: Date = new Date();

    let wrapper: ReactWrapper<any, any>;
    let datesSelection: ReactWrapper<IDatesSelectionProps, any>;
    let store: Store<IReactVaporState>;

    beforeEach(() => {
      jasmine.clock().install();
      jasmine.clock().mockDate(NOW);
      store = TestUtils.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <DatesSelectionConnected id={DATES_SELECTION_ID} />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      datesSelection = wrapper.find(DatesSelection).first();
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
      jasmine.clock().uninstall();
    });

    it('should get an id as a prop', () => {
      let idProp = datesSelection.props().id;

      expect(idProp).toBeDefined();
      expect(idProp).toBe(DATES_SELECTION_ID);
    });

    it('should get the lower limit as a prop', () => {
      let lowerLimitProp = datesSelection.props().lowerLimit;

      expect(lowerLimitProp).toBeDefined();
    });

    it('should get the upper limit as a prop', () => {
      let upperLimitProp = datesSelection.props().upperLimit;

      expect(upperLimitProp).toBeDefined();
    });

    it('should get the quick option as a prop', () => {
      let quickOptionProp = datesSelection.props().quickOption;

      expect(quickOptionProp).toBeDefined();
      expect(quickOptionProp).toBe('');
    });

    it('should get if one of the pricker is being selected as a prop', () => {
      let isSelectingProp = datesSelection.props().isSelecting;

      expect(isSelectingProp).toBeDefined();
    });

    it('should get what to do on render as a prop', () => {
      let onRenderProp = datesSelection.props().onRender;

      expect(onRenderProp).toBeDefined();
    });

    it('should get what to do on destroy as a prop', () => {
      let onDestroyProp = datesSelection.props().onDestroy;

      expect(onDestroyProp).toBeDefined();
    });

    it('should get what to do on change as a prop', () => {
      let onChangeProp = datesSelection.props().onChange;

      expect(onChangeProp).toBeDefined();
    });

    it('should get what to do on change as a prop', () => {
      let onClickProp = datesSelection.props().onClick;

      expect(onClickProp).toBeDefined();
    });

    it('should return the current date for the lower limit when the date picker does not exist in the state', () => {
      store.dispatch(clearState());

      expect(_.findWhere(store.getState().datePickers, { id: DATES_SELECTION_ID })).toBeUndefined();
      expect(datesSelection.props().lowerLimit).toEqual(NOW);
    });

    it('should return the current date for the upper limit when the date picker does not exist in the state', () => {
      store.dispatch(clearState());

      expect(_.findWhere(store.getState().datePickers, { id: DATES_SELECTION_ID })).toBeUndefined();
      expect(datesSelection.props().upperLimit).toEqual(NOW);
    });

    it('should return an empty string for the picker selected when the date picker does not exist in the state', () => {
      store.dispatch(clearState());

      expect(_.findWhere(store.getState().datePickers, { id: DATES_SELECTION_ID })).toBeUndefined();
      expect(datesSelection.props().isSelecting).toBe('');
    });

    it('should return the lower limit from the state when the date picker exists in the state', () => {
      let expectedValue: Date = new Date(new Date().setHours(11, 1, 11, 1));

      store.dispatch(changeDatePickerLowerLimit(DATES_SELECTION_ID, expectedValue));

      expect(datesSelection.props().lowerLimit).toBe(expectedValue);
    });

    it('should return the upper limit from the state when the date picker exists in the state', () => {
      let expectedValue: Date = new Date(new Date().setHours(11, 1, 11, 1));

      store.dispatch(changeDatePickerUpperLimit(DATES_SELECTION_ID, expectedValue));

      expect(datesSelection.props().upperLimit).toBe(expectedValue);
    });

    it('should return the picker selected when the date picker exists in the state', () => {
      let expectedValue: string = 'one limit';

      store.dispatch(selectDate(DATES_SELECTION_ID, expectedValue));

      expect(datesSelection.props().isSelecting).toBe(expectedValue);
    });

    it('should return the selected value if the option picker exists in the state', () => {
      let expectedValue: string = 'this option';

      store.dispatch(addOptionPicker(DATES_SELECTION_ID));
      store.dispatch(changeOptionPicker(DATES_SELECTION_ID, expectedValue));

      expect(datesSelection.props().quickOption).toBe(expectedValue);
    });

    it('should call onRender prop when mounted', () => {
      wrapper.unmount();
      store.dispatch(clearState());

      expect(store.getState().datePickers.length).toBe(0);

      wrapper.mount();

      expect(store.getState().datePickers.length).toBe(1);
    });

    it('should call onDestroy prop when will unmount', () => {
      wrapper.unmount();

      expect(store.getState().datePickers.length).toBe(0);
    });

    it('should set the selected picker to the one sent when calling the onClick prop', () => {
      let expectedValue: string = DateLimits.upper;

      datesSelection.props().onClick(true);

      expect(_.findWhere(store.getState().datePickers, { id: DATES_SELECTION_ID }).selected).toBe(expectedValue);

      expectedValue = DateLimits.lower;

      datesSelection.props().onClick(false);

      expect(_.findWhere(store.getState().datePickers, { id: DATES_SELECTION_ID }).selected).toBe(expectedValue);
    });

    it('should change the lower limit in the state when calling the onChange prop with the lower limit', () => {
      let expectedValue: Date = new Date(new Date().setHours(5, 5, 5, 5));

      datesSelection.props().onChange(expectedValue, false);

      expect(_.findWhere(store.getState().datePickers, { id: DATES_SELECTION_ID }).lowerLimit).toBe(expectedValue);
    });

    it('should change the upper limit in the state when calling the onChange prop with the upper limit', () => {
      let expectedValue: Date = new Date(new Date().setHours(5, 5, 5, 5));

      datesSelection.props().onChange(expectedValue, true);

      expect(_.findWhere(store.getState().datePickers, { id: DATES_SELECTION_ID }).upperLimit).toBe(expectedValue);
    });

    it('should deselect the quick option when calling onChange prop if the call does not come from the option picker',
      () => {
        let expectedValue: string = 'anything';

        store.dispatch(addOptionPicker(DATES_SELECTION_ID));
        store.dispatch(changeOptionPicker(DATES_SELECTION_ID, expectedValue));

        datesSelection.props().onChange(new Date(), true, true);

        expect(_.findWhere(store.getState().optionPickers, { id: DATES_SELECTION_ID }).selectedValue).toBe(expectedValue);

        datesSelection.props().onChange(new Date(), true, false);
        expect(_.findWhere(store.getState().optionPickers, { id: DATES_SELECTION_ID }).selectedValue).toBe('');
      });
  });
});
