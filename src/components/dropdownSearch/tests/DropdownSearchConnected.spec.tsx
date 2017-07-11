import { mount, ReactWrapper } from 'enzyme';
import { Provider, Store } from 'react-redux';
import { clearState } from '../../../utils/ReduxUtils';
import { IReactVaporState } from '../../../ReactVapor';
import { TestUtils } from '../../../utils/TestUtils';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { DropdownSearchConnected } from '../DropdownSearchConnected';
import { UUID } from '../../../utils/UUID';
import { DropdownSearch, IDropdownSearchProps } from '../DropdownSearch';
import { defaultSelectedOption } from '../DropdownSearchReducers';
import { toggleDropdownSearch, updateOptionsDropdownSearch } from '../DropdownSearchActions';

describe('DropdownSearch', () => {
  const id: string = UUID.generate();

  describe('<DropdownSearchConnected />', () => {
    let wrapper: ReactWrapper<any, any>;
    let dropdownSearch: ReactWrapper<IDropdownSearchProps, any>;
    let store: Store<IReactVaporState>;

    const renderDropdownSearchConnected = () => {
      wrapper = mount(
        <Provider store={store}>
          <DropdownSearchConnected id={id} />
        </Provider>,
        { attachTo: document.getElementById('App') },
      );
      dropdownSearch = wrapper.find(DropdownSearch).first();
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
        renderDropdownSearchConnected();
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

    describe('mapStateToProps', () => {

      beforeEach(() => {
        renderDropdownSearchConnected();
      });

      it('should get an id as a prop', () => {
        const idProp = dropdownSearch.props().id;

        expect(idProp).toBeDefined();
        expect(idProp).toBe(id);
      });

      it('should get the isOpened as a prop', () => {
        let isOpenedProp = dropdownSearch.props().isOpened;

        expect(isOpenedProp).toBeDefined();
        expect(isOpenedProp).toBe(false);
      });

      it('should get the options as a prop', () => {
        const optionsProp = dropdownSearch.props().options;

        expect(optionsProp).toBeDefined();
        expect(optionsProp.length).toBe(0);
      });

      it('should get the default selected option as a prop', () => {
        let defaultSelectedOptionProp = dropdownSearch.props().selectedOption;

        expect(defaultSelectedOptionProp).toBeDefined();
        expect(defaultSelectedOptionProp).toBe(defaultSelectedOption);
      });

      it('should get the filterText as a prop', () => {
        let filterTextProp = dropdownSearch.props().filterText;

        expect(filterTextProp).toBeDefined();
        expect(filterTextProp).toBe('');
      });

    });

    describe('mapDispatchToProps', () => {

      beforeEach(() => {
        renderDropdownSearchConnected();
      });

      it('should get what to do on destroy as a prop', () => {
        let onDestroyProp = dropdownSearch.props().onDestroy;

        expect(onDestroyProp).toBeDefined();
      });

      it('should get what to do on onMount as a prop', () => {
        let onMountProp = dropdownSearch.props().onMount;

        expect(onMountProp).toBeDefined();
      });

      it('should get what to do on onBlur as a prop', () => {
        let onBlurProp = dropdownSearch.props().onBlur;

        expect(onBlurProp).toBeDefined();
      });
      it('should get what to do on onOptionClick as a prop', () => {
        let onOptionClickProp = dropdownSearch.props().onOptionClick;

        expect(onOptionClickProp).toBeDefined();
      });

      it('should get what to do on onFilterClick as a prop', () => {
        let onFilterClickProp = dropdownSearch.props().onFilterClick;

        expect(onFilterClickProp).toBeDefined();
      });

      it('should toggle the dropdown class to open and close on click on the dropdown button', () => {
        let dropdown = wrapper.find('.dropdown');
        let button = wrapper.find('.dropdown-toggle');

        expect(dropdown.hasClass('open')).toBe(false, 'start closed');
        button.simulate('click');
        expect(dropdown.hasClass('open')).toBe(true, 'open on first click');
      });

      it('should toggle the close dropdown on blur', () => {
        let dropdown = wrapper.find('.dropdown');

        store.dispatch(toggleDropdownSearch(id));

        dropdownSearch.props().onBlur();

        expect(dropdown.hasClass('open')).toBe(false, 'close the dropdown on blur');
      });

      it('should add the selected value in the state on click an option', () => {
        store.dispatch(updateOptionsDropdownSearch(id, [{ value: 'test 1' }, { value: 'test 2' }]));
        store.dispatch(toggleDropdownSearch(id));

        wrapper.find('li span').first().simulate('mouseDown');

        const selectedOption = store.getState().dropdownSearch[0].selectedOption;
        expect(selectedOption).not.toBe(defaultSelectedOption);
        expect(selectedOption.value).toBe('test 1');
      });

      it('should add the filterText in the state on onFilterClick', () => {
        const filter: string = 't';

        expect(store.getState().dropdownSearch[0].filterText).toBe('');

        dropdownSearch.props().onFilterClick(filter);

        expect(store.getState().dropdownSearch[0].filterText).toBe(filter);
      });
    });
  });
});
