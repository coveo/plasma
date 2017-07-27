import {UUID} from '../../../../utils/UUID';
import * as React from 'react';
import {mount, ReactWrapper} from 'enzyme';
import {IDropdownSearchProps} from '../../DropdownSearch';
import {Provider, Store} from 'react-redux';
import {IReactVaporState} from '../../../../ReactVapor';
import {MultiSelectDropdownSearchConnected} from '../MultiSelectDropdownSearchConnected';
import {MultiSelectDropdownSearch} from '../MultiSelectDropdownSearch';
import {TestUtils} from '../../../../utils/TestUtils';
import {clearState} from '../../../../utils/ReduxUtils';
import {defaultSelectedOption} from '../../DropdownSearchReducers';
import {
  closeDropdownSearch,
  openDropdownSearch,
  updateOptionsDropdownSearch
} from '../../DropdownSearchActions';

describe('MultiSelectDropdownSearch', () => {
  const id: string = UUID.generate();

  describe('<MultiSelectDropdownSearchConnected />', () => {
    let wrapper: ReactWrapper<any, any>;
    let multiSelectDropdownSearchConnected: ReactWrapper<IDropdownSearchProps, any>;
    let store: Store<IReactVaporState>;

    const defaultOptions = [{ value: 'a', displayValue: 'a' }, { value: 'b', displayValue: 'b' }];

    const renderMultiSelectDropdownSearchConnected = () => {
      wrapper = mount(
        <Provider store={store}>
          <MultiSelectDropdownSearchConnected id={id} defaultOptions={defaultOptions} />
        </Provider>,
        { attachTo: document.getElementById('App') },
      );
      multiSelectDropdownSearchConnected = wrapper.find(MultiSelectDropdownSearch).first();
    };

    beforeEach(() => {
      store = TestUtils.buildStore();
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    describe('mount and unmount', () => {

      beforeEach(() => {
        renderMultiSelectDropdownSearchConnected();
      });

      it('should call onMount prop when mounted', () => {
        wrapper.unmount();
        store.dispatch(clearState());
        expect(store.getState().dropdownSearch.length).toBe(0);

        wrapper.mount();
        expect(store.getState().dropdownSearch.length).toBe(1);
      });

      it('should call onDestroy prop when will unmount', () => {
        wrapper.unmount();
        expect(store.getState().dropdownSearch.length).toBe(0);
      });
    });

    describe('mapDispatchToProps', () => {

      beforeEach(() => {
        renderMultiSelectDropdownSearchConnected();
      });

      it('should get what to do on destroy as a prop', () => {
        const onDestroyProp = multiSelectDropdownSearchConnected.props().onDestroy;

        expect(onDestroyProp).toBeDefined();
      });

      it('should get what to do on onMount as a prop', () => {
        const onMountProp = multiSelectDropdownSearchConnected.props().onMount;

        expect(onMountProp).toBeDefined();
      });

      it('should get what to do on onBlur as a prop', () => {
        const onBlurProp = multiSelectDropdownSearchConnected.props().onBlur;

        expect(onBlurProp).toBeDefined();
      });

      it('should get what to do on onOptionClick as a prop', () => {
        const onOptionClickProp = multiSelectDropdownSearchConnected.props().onOptionClick;

        expect(onOptionClickProp).toBeDefined();
      });

      it('should get what to do on onCustomOptionClick as a prop', () => {
        const onCustomOptionClickProp = multiSelectDropdownSearchConnected.props().onCustomOptionClick;

        expect(onCustomOptionClickProp).toBeDefined();
      });


      it('should get what to do on onFilterTextChange as a prop', () => {
        const onFilterClickProp = multiSelectDropdownSearchConnected.props().onFilterTextChange;

        expect(onFilterClickProp).toBeDefined();
      });

      it('should get what to do on onKeyDownFilterBox as a prop', () => {
        const onKeyDownFilterBox = multiSelectDropdownSearchConnected.props().onKeyDownFilterBox;

        expect(onKeyDownFilterBox).toBeDefined();
      });

      it('should get what to do on onMouseEnterDropdown as a prop', () => {
        const onMouseEnterDropdown = multiSelectDropdownSearchConnected.props().onMouseEnterDropdown;

        expect(onMouseEnterDropdown).toBeDefined();
      });

      it('should get what to do on onRemoveSelectedOption as a prop', () => {
        const onRemoveSelectedOption = multiSelectDropdownSearchConnected.props().onRemoveSelectedOption;

        expect(onRemoveSelectedOption).toBeDefined();
      });

      it('should get what to do on onRemoveAllSelectedOptions as a prop', () => {
        const onRemoveAllSelectedOptions = multiSelectDropdownSearchConnected.props().onRemoveAllSelectedOptions;

        expect(onRemoveAllSelectedOptions).toBeDefined();
      });

      it('should toggle the close dropdown on blur', () => {
        const dropdown = wrapper.find('.dropdown');

        store.dispatch(closeDropdownSearch(id));

        multiSelectDropdownSearchConnected.props().onBlur();

        expect(dropdown.hasClass('open')).toBe(false, 'close the dropdown on blur');
      });

      it('should add the selected value in the state on click an option', () => {
        store.dispatch(updateOptionsDropdownSearch(id, [{ value: 'test 1' }, { value: 'test 2' }]));
        store.dispatch(openDropdownSearch(id));

        wrapper.find('li span').first().simulate('mouseDown');

        const selectedOption = store.getState().dropdownSearch[0].selectedOptions.getFirstElement();
        expect(selectedOption).not.toBe(defaultSelectedOption);
        expect(selectedOption.value).toBe('test 1');
      });

      it('should add the filterText in the state on onFilterTextChange', () => {
        const filter: string = 't';
        expect(store.getState().dropdownSearch[0].filterText).toBe('');

        multiSelectDropdownSearchConnected.props().onFilterTextChange(filter);
        expect(store.getState().dropdownSearch[0].filterText).toBe(filter);
      });

    });
  });
});
