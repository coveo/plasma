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
  const ownProps: IDropdownSearchProps = {
    id,
    modMenu: false,
    options,
    selectedOptions: {value: 'test a'},
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

      it('should have the same object sent has parameter than the component props', () => {
        expect(dropdownSearch.props()).toEqual(_.extend({}, ownProps, DropdownSearch.defaultProps));
      });
    });

    describe('event props', () => {

      beforeEach(() => {
        renderDropdownSearch(ownProps);
      });

      it('should call onMountCallBack prop if set when mounting', () => {
        const onMountCallBack = jasmine.createSpy('onMountCallBack');

        expect(() => dropdownSearchInstance.componentWillMount()).not.toThrow();

        dropdownSearch.unmount();
        dropdownSearch.setProps({onMountCallBack});
        dropdownSearch.mount();

        expect(onMountCallBack).toHaveBeenCalled();
      });

      it('should call onMount prop if set when mounting', () => {
        const onMountSpy = jasmine.createSpy('onMount');

        expect(() => dropdownSearchInstance.componentWillMount()).not.toThrow();

        dropdownSearch.unmount();
        dropdownSearch.setProps({onMount: onMountSpy});
        dropdownSearch.mount();

        expect(onMountSpy).toHaveBeenCalled();
      });

      it('should call onDestroy prop if set when will unmount', () => {
        const onDestroy = jasmine.createSpy('onDestroy');

        expect(() => dropdownSearchInstance.componentWillUnmount()).not.toThrow();

        dropdownSearch.setProps({onDestroy});
        dropdownSearch.unmount();

        expect(onDestroy).toHaveBeenCalled();
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

      it('should call onClickCallBack if defined when click the "dropdown-toggle" button', () => {
        const onClickCallBack = jasmine.createSpy('onClickCallBack');
        dropdownSearch.setProps({onClickCallBack});

        dropdownSearch.find('button.dropdown-toggle').simulate('click');

        expect(onClickCallBack).toHaveBeenCalled();
      });

      it('should call onOptionClickCallBack if defined when click an option "dropdown-toggle" button', () => {
        const onOptionClickCallBack = jasmine.createSpy('onOptionClickCallBack');
        dropdownSearch.setProps({isOpened: true, onOptionClickCallBack});

        dropdownSearch.find('[data-value="test a"]').simulate('mousedown');

        expect(onOptionClickCallBack).toHaveBeenCalled();
      });

      it('should call onMouseEnterDropdown if defined when enter over the ul element', () => {
        const onMouseEnterDropdown = jasmine.createSpy('onMouseEnterDropdown');
        dropdownSearch.setProps({onMouseEnterDropdown});

        dropdownSearch.find('ul.dropdown-menu').simulate('mouseenter');

        expect(onMouseEnterDropdown).toHaveBeenCalled();
      });

      it('should call onKeyDownFilterBox if defined when key down on "filter-box"', () => {
        const onKeyDownFilterBox = jasmine.createSpy('onKeyDownFilterBox');
        dropdownSearch.setProps({isOpened: true, onKeyDownFilterBox});

        dropdownSearch.find('input.filter-box').simulate('keydown');

        expect(onKeyDownFilterBox).toHaveBeenCalled();
      });

      it('should call onKeyDownDropdownButton if defined when key down on button "dropdown-toggle"', () => {
        const onKeyDownDropdownButton = jasmine.createSpy('onKeyDownDropdownButton');
        dropdownSearch.setProps({onKeyDownDropdownButton});

        dropdownSearch.find('button.dropdown-toggle').simulate('keydown');

        expect(onKeyDownDropdownButton).toHaveBeenCalled();
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

      it('should show the dropdown prepend if the selected option has one', () => {
        renderDropdownSearch(_.extend({}, ownProps, {selectedOption}));

        expect(dropdownSearch.find('.dropdown-prepend').text()).toBe(selectedOption.prefix);
      });

      it('should show the dropdown svg if the selected option has one', () => {
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

      it('should show the dropdown displayValue if the selected option has one', () => {
        renderDropdownSearch(_.extend({}, ownProps, {selectedOption}));

        expect(dropdownSearch.find('.dropdown-selected-value').text()).toBe(selectedOption.displayValue);
      });

      it('should show the dropdown value if the selected option has no displayValue', () => {
        renderDropdownSearch(_.extend({}, ownProps));

        expect(dropdownSearch.find('.dropdown-selected-value').text()).toBe(ownProps.selectedOptions.value);
      });

      it('should add the mod-menu class if the modMenu is set to true', () => {
        renderDropdownSearch(_.extend({}, ownProps, {
          modMenu: true,
        }));

        expect(dropdownSearch.find('.mod-menu').length).toBe(1);
      });

      it('should show options with the highlight set on a span with the class bold ', () => {
        renderDropdownSearch(_.extend({}, ownProps, {
          highlightAllFilterResult: true,
          filterText: 'tes',
        }));

        expect(dropdownSearch.find('span.bold').length).toBe(3);
      });

      it('should show the highlight if the filterText is contained in the middle of a word', () => {
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

      it('should disabled the dropdown', () => {
        renderDropdownSearch(_.extend({}, ownProps, {
          isDisabled: true,
        }));

        expect(dropdownSearch.find('.dropdown-toggle').prop('disabled')).toBe(true);
      });

      xit('should scroll down if the active option is not visible by the user inside the dropdown list', () => {
        spyOn(DropdownSearch.prototype, 'isScrolledIntoView').and.returnValue(false);
        const spy = spyOn(DropdownSearch.prototype, 'updateScollPostionBasedOnActiveElement').and.callThrough();
        const options = _.times(20, (n: number) => {
          return {value: `test ${n}`};
        });

        renderDropdownSearch(_.extend({}, ownProps, {
          selectedOption: 'test 1',
          isOpened: true,
          options,
        }));

        const ul: Element = dropdownSearch.find('ul.dropdown-menu').getDOMNode();
        const activeLi: Element = ul.getElementsByClassName('active')[0];
        spyOn(ul, 'getBoundingClientRect').and.returnValue({bottom: 10});
        spyOn(activeLi, 'getBoundingClientRect').and.returnValue({bottom: 20});

        dropdownSearch.setProps({activeOption: {value: 'test 15'}});
        expect(spy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
