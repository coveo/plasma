import {mount, ReactWrapper} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {UUID} from '../../../utils/UUID';
import {DropdownSearch, IDropdownSearchProps} from '../DropdownSearch';
import * as _ from 'underscore';
import {FilterBox} from '../../filterBox/FilterBox';
import {Svg} from '../../svg/Svg';

describe('DropdownSearch', () => {
  const id: string = UUID.generate();
  const options = [{value: 'test a'}, {value: 'test b'}, {value: 'test c'}];
  const defaultProps: IDropdownSearchProps = {
    highlightThreshold: 100,
    highlightAllFilterResult: false,
  };
  const ownProps: IDropdownSearchProps = {
    id,
    modMenu: false,
    options,
    selectedOption: {value: 'test a'},
    filterPlaceholder: 'fill me',
    maxWidth: 400,
    width: 300,
    hasFilterSuggestionBoxWidthFixed: true,
    isDisabled: false,
    isOpened: false,
  };

  describe('<DropdownSearch />', () => {
    let dropdownSearch: ReactWrapper<IDropdownSearchProps, any>;
    let dropdownSearchInstance: DropdownSearch;

    const renderDropdownSearch = (props?: IDropdownSearchProps) => {
      dropdownSearch = mount(
        <DropdownSearch {...props} />,
        {attachTo: document.getElementById('App')},
      );
      dropdownSearchInstance = dropdownSearch.instance() as DropdownSearch;
    };

    afterEach(() => {
      dropdownSearch.unmount();
      dropdownSearch.detach();
    });

    describe('default props', () => {

      beforeEach(() => {
        renderDropdownSearch(ownProps);
      });

      it('should have the same object send has parameter than the component props', () => {
        expect(dropdownSearch.props()).toEqual(_.extend({}, ownProps, defaultProps));
      });
    });

    describe('event props', () => {

      beforeEach(() => {
        renderDropdownSearch(ownProps);
      });

      it('should call onRender prop if set when mounting', () => {
        let onRender = jasmine.createSpy('onRender');

        expect(() => dropdownSearchInstance.componentWillMount()).not.toThrow();

        dropdownSearch.unmount();
        dropdownSearch.setProps({onRender});
        dropdownSearch.mount();

        expect(onRender).toHaveBeenCalled();
        expect(onRender).toHaveBeenCalledWith(ownProps.id);
      });

      it('should call onMount prop if set when mounting with the prop id', () => {
        let onMountSpy = jasmine.createSpy('onMount');

        expect(() => dropdownSearchInstance.componentWillMount()).not.toThrow();

        dropdownSearch.unmount();
        dropdownSearch.setProps({onMount: onMountSpy});
        dropdownSearch.mount();

        expect(onMountSpy).toHaveBeenCalled();
        expect(onMountSpy).toHaveBeenCalledWith(ownProps.id);
      });

      it('should call onDestroy prop if set when will unmount', () => {
        let onDestroySpy = jasmine.createSpy('onDestroy');

        expect(() => dropdownSearchInstance.componentWillUnmount()).not.toThrow();

        dropdownSearch.setProps({onDestroy: onDestroySpy});
        dropdownSearch.unmount();

        expect(onDestroySpy).toHaveBeenCalled();
      });

      it('should call onFilterClick if defined when onChange the "filter-box" input', () => {
        const onFilterClick = jasmine.createSpy('onFilterClick');
        dropdownSearch.setProps({isOpened: true, onFilterClick});
        dropdownSearch.find('input.filter-box').simulate('change');

        expect(onFilterClick).toHaveBeenCalled();
      });

      it('should call onBlur if defined when we lost focus on "filter-box" input', () => {
        const onBlur = jasmine.createSpy('onBlur');
        dropdownSearch.setProps({onBlur, isOpened: true});

        const element = dropdownSearch.find('.filter-box');
        element.simulate('focus');
        element.simulate('blur');

        expect(onBlur).toHaveBeenCalled();
      });

      it('should call onToggleDropdown if defined when click the "dropdown-toggle" button', () => {
        const onToggleDropdown = jasmine.createSpy('onToggleDropdown');
        dropdownSearch.setProps({onToggleDropdown});

        dropdownSearch.find('button.dropdown-toggle').simulate('click');

        expect(onToggleDropdown).toHaveBeenCalled();
      });

      it('should call onClick if defined when click the "dropdown-toggle" button', () => {
        const onClick = jasmine.createSpy('onClick');
        dropdownSearch.setProps({onClick});

        dropdownSearch.find('button.dropdown-toggle').simulate('click');

        expect(onClick).toHaveBeenCalled();
      });
    });

    describe('Props functionality', () => {

      const selectedOption = {prefix: 'test', value: 'test1', displayValue: 'test 2'};

      it('should show the filterBox if the dropdown is open', () => {
        renderDropdownSearch(_.extend({}, ownProps, {
          isOpened: true,
        }));

        expect(dropdownSearch.find(FilterBox).length).toBe(1);
      });

      it('should show the button if the dropdown is close', () => {
        renderDropdownSearch(_.extend({}, ownProps, {
          isOpened: false,
        }));

        expect(dropdownSearch.find('button.dropdown-toggle').length).toBe(1);
      });

      it('should show the drodown prepend if the selected option has one', () => {
        renderDropdownSearch(_.extend({}, ownProps, {selectedOption}));

        expect(dropdownSearch.find('.dropdown-prepend').text()).toBe(selectedOption.prefix);
      });

      it('should show the drodown svg if the selected option has one', () => {
        renderDropdownSearch(_.extend({}, ownProps, {
          selectedOption: _.extend({}, selectedOption, {
            svg: {
              svgName: 'close',
              svgClass: 'small',
            },
          }),
        }));

        expect(dropdownSearch.find(Svg).length).toBe(1);
      });

      it('should show the drodown displayValue if the selected option has one', () => {
        renderDropdownSearch(_.extend({}, ownProps, {selectedOption}));

        expect(dropdownSearch.find('.dropdown-selected-value').text()).toBe(selectedOption.displayValue);
      });

      it('should show the drodown value if the selected option has no displayValue', () => {
        renderDropdownSearch(_.extend({}, ownProps));

        expect(dropdownSearch.find('.dropdown-selected-value').text()).toBe(ownProps.selectedOption.value);
      });

      it('should add the mod-menu class if the modMenu is set to true', () => {
        renderDropdownSearch(_.extend({}, ownProps, {
          modMenu: true,
        }));

        expect(dropdownSearch.find('.mod-menu').length).toBe(1);
      });

      it('should show options with the highlight set in a span with the class bold ', () => {
        renderDropdownSearch(_.extend({}, ownProps, {
          highlightAllFilterResult: true,
          filterText: 'tes',
        }));

        expect(dropdownSearch.find('span.bold').length).toBe(3);
      });

      it('should show the highlight if the filterText is contained in the middle of the word', () => {
        renderDropdownSearch(_.extend({}, ownProps, {
          highlightAllFilterResult: true,
          filterText: 'es',
        }));

        expect(dropdownSearch.find('span.bold').length).toBe(3);
      });

      it('should not show the highlight if the number of result if greater than the highlightThreshold', () => {
        renderDropdownSearch(_.extend({}, ownProps, {
          highlightThreshold: 1,
          filterText: 'tes',
        }));

        expect(dropdownSearch.find('span.bold').length).toBe(0);
      });

      it('should disabled the dropdown if isDisabled is set to true', () => {
        renderDropdownSearch(_.extend({}, ownProps, {
          isDisabled: true,
        }));

        expect(dropdownSearch.find('.dropdown-toggle').prop('disabled')).toBe(true);
      });
    });
  });
});
