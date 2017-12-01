import { mount, ReactWrapper } from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { UUID } from '../../../utils/UUID';
import { DropdownSearch, IDropdownOption, IDropdownSearchProps } from '../DropdownSearch';
import * as _ from 'underscore';
import { FilterBox } from '../../filterBox/FilterBox';
import { keyCode } from '../../../utils/InputUtils';
import { defaultSelectedOptionPlaceholder } from '../DropdownSearchReducers';

describe('DropdownSearch', () => {
  const id: string = UUID.generate();
  const options = [
    { value: 'test a', displayValue: 'test a', prefix: 'test' },
    { value: 'test b', displayValue: 'test b', svg: { svgClass: 'svg-class', svgName: 'svg-name' } },
    { value: 'test c', displayValue: 'test c' }
  ];

  const ownProps: IDropdownSearchProps = {
    id,
    options,
    modMenu: false,
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
        { attachTo: document.getElementById('App') },
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

    describe('render', () => {
      it('should render without error', () => {
        expect(() => {
          renderDropdownSearch(_.extend({}, ownProps));
        }).not.toThrow();
      });

      it('should render without error with no options provided', () => {
        expect(() => {
          renderDropdownSearch(_.extend({}, ownProps, {
            options: [],
          }));
        }).not.toThrow();
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
        dropdownSearch.setProps({ onMountCallBack });
        dropdownSearch.mount();

        expect(onMountCallBack).toHaveBeenCalled();
      });

      it('should call onMount prop if set when mounting', () => {
        const onMountSpy = jasmine.createSpy('onMount');

        expect(() => dropdownSearchInstance.componentWillMount()).not.toThrow();

        dropdownSearch.unmount();
        dropdownSearch.setProps({ onMount: onMountSpy });
        dropdownSearch.mount();

        expect(onMountSpy).toHaveBeenCalled();
      });

      it('should call onDestroy prop if set when will unmount', () => {
        const onDestroy = jasmine.createSpy('onDestroy');

        expect(() => dropdownSearchInstance.componentWillUnmount()).not.toThrow();

        dropdownSearch.setProps({ onDestroy });
        dropdownSearch.unmount();

        expect(onDestroy).toHaveBeenCalled();
      });

      it('should call onFilterTextChange if defined when onChange the "filter-box" input', () => {
        const onFilterTextChange = jasmine.createSpy('onFilterTextChange');
        dropdownSearch.setProps({ isOpened: true, onFilterTextChange });
        dropdownSearch.find('input.filter-box').simulate('change');

        expect(onFilterTextChange).toHaveBeenCalled();
      });

      it('should call onBlur if defined when we lost focus on "filter-box" input', () => {
        const onBlur = jasmine.createSpy('onBlur');
        dropdownSearch.setProps({ onBlur, isOpened: true });

        const element = dropdownSearch.find('.filter-box');
        element.simulate('focus');
        element.simulate('blur');

        expect(onBlur).toHaveBeenCalled();
      });

      it('should call onToggleDropdown if defined when click the "dropdown-toggle" button', () => {
        const onToggleDropdown = jasmine.createSpy('onToggleDropdown');
        dropdownSearch.setProps({ onToggleDropdown });

        dropdownSearch.find('button.dropdown-toggle').simulate('click');

        expect(onToggleDropdown).toHaveBeenCalled();
      });

      it('should call onClickCallBack if defined when click the "dropdown-toggle" button', () => {
        const onClickCallBack = jasmine.createSpy('onClickCallBack');
        dropdownSearch.setProps({ onClickCallBack });

        dropdownSearch.find('button.dropdown-toggle').simulate('click');

        expect(onClickCallBack).toHaveBeenCalled();
      });

      it('should call onOptionClickCallBack if defined when click an option "dropdown-toggle" button', () => {
        const onOptionClickCallBack = jasmine.createSpy('onOptionClickCallBack');
        dropdownSearch.setProps({ isOpened: true, onOptionClickCallBack });

        dropdownSearch.find('[data-value="test a"]').simulate('mousedown');

        expect(onOptionClickCallBack).toHaveBeenCalled();
      });

      it('should call onMouseEnterDropdown if defined when enter over the ul element and dropdown is opened', () => {
        renderDropdownSearch(_.extend({}, ownProps, { isOpened: true }));

        const onMouseEnterDropdown = jasmine.createSpy('onMouseEnterDropdown');
        dropdownSearch.setProps({ onMouseEnterDropdown });

        dropdownSearch.find('ul.dropdown-menu').simulate('mouseenter');

        expect(onMouseEnterDropdown).toHaveBeenCalled();
      });

      it('should call onKeyDownFilterBox if defined when key down on "filter-box"', () => {
        const onKeyDownFilterBox = jasmine.createSpy('onKeyDownFilterBox');
        dropdownSearch.setProps({ isOpened: true, onKeyDownFilterBox, activeOption: options[0] });

        dropdownSearch.find('input.filter-box').simulate('keydown');

        expect(onKeyDownFilterBox).toHaveBeenCalled();
      });

      it('should call onOptionClickCallBack if defined and they key is enter when key down on "filter-box"', () => {
        const onOptionClickCallBack = jasmine.createSpy('onOptionClickCallBack');
        dropdownSearch.setProps({
          isOpened: true,
          activeOption: { value: 'test a' },
          onOptionClickCallBack,
        });

        dropdownSearch.find('input.filter-box').simulate('keydown', { keyCode: keyCode.enter });

        expect(onOptionClickCallBack).toHaveBeenCalled();
      });

      it('should call onOptionClickCallBack if defined and they key is tab when key down on "filter-box"', () => {
        const onOptionClickCallBack = jasmine.createSpy('onOptionClickCallBack');
        dropdownSearch.setProps({
          isOpened: true,
          activeOption: { value: 'test a' },
          onOptionClickCallBack,
        });

        dropdownSearch.find('input.filter-box').simulate('keydown', { keyCode: keyCode.tab });

        expect(onOptionClickCallBack).toHaveBeenCalled();
      });

      it('should call onKeyDownDropdownButton if defined when key down on button "dropdown-toggle"', () => {
        const onKeyDownDropdownButton = jasmine.createSpy('onKeyDownDropdownButton');
        dropdownSearch.setProps({ onKeyDownDropdownButton });

        dropdownSearch.find('button.dropdown-toggle').simulate('keydown');

        expect(onKeyDownDropdownButton).toHaveBeenCalled();
      });
    });

    describe('Props functionality', () => {

      let selectedOption: IDropdownOption = defaultSelectedOptionPlaceholder;

      beforeEach(() => {
        selectedOption = {
          prefix: 'test', value: 'test1', displayValue: 'test 2',
          svg: {
            svgName: 'close',
            svgClass: 'small',
          },
          selected: true,
        };
      });

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
        renderDropdownSearch(_.extend({}, { ...ownProps, isOpened: true }));

        expect(dropdownSearch.find('.dropdown-prepend').text()).toBe(selectedOption.prefix);
      });

      it('should show the dropdown svg if the selected option has one', () => {
        renderDropdownSearch(_.extend({}, { ...ownProps, isOpened: true }));

        expect(dropdownSearch.find('.value-icon').length).toBe(1);
      });

      it('should show the dropdown value if the selected option has one', () => {
        renderDropdownSearch(_.extend({}, {
          ownProps,
          options: [...options, selectedOption],
        },
        ));

        expect(dropdownSearch.find('.dropdown-selected-value').text()).toBe(selectedOption.displayValue);
      });

      it('should add the mod-menu class if the modMenu is set to true', () => {
        renderDropdownSearch(_.extend({}, ownProps, {
          modMenu: true,
        }));

        expect(dropdownSearch.find('.mod-menu').length).toBe(1);
      });

      it('should show options with the highlight set on a span with the class bold when dropdown is opened', () => {
        renderDropdownSearch(_.extend({}, ownProps, {
          highlightAllFilterResult: true,
          filterText: 'tes',
          isOpened: true,
        }));

        expect(dropdownSearch.find('span.bold').length).toBe(3);
      });

      it('should show the highlight if the filterText is contained in the middle of a word', () => {
        renderDropdownSearch(_.extend({}, ownProps, {
          highlightAllFilterResult: true,
          filterText: 'es',
          isOpened: true,
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

      it('should call getNoOptions if no options are in the dropdown', () => {
        const getNoOptionsSpy = spyOn((DropdownSearch.prototype as any), 'getNoOptions');
        renderDropdownSearch(_.extend({}, ownProps, {
          selectedOption: undefined,
          isOpened: true,
          options: [],
        }));

        expect(getNoOptionsSpy).toHaveBeenCalledTimes(1);
      });

      it('should return a list of one descriptive element when getNoOptions is called', () => {
        renderDropdownSearch(_.extend({}, ownProps, {
          selectedOption: undefined,
          isOpened: true,
          options: [],
        }));

        const dropdownSearchInstance = (dropdownSearch.instance() as any);

        expect(JSON.stringify(dropdownSearchInstance.getNoOptions()))
          .toBe(JSON.stringify([
            <li key='noResultDropdownSearch'>
              <span className='no-search-results'>{dropdownSearchInstance.props.noResultText}</span>
            </li>,
          ]));
      });

      it('should scroll down if the active option is not visible by the user inside the dropdown list', () => {
        const options = _.times(20, (n: number) => {
          return { value: `test ${n}` };
        });

        renderDropdownSearch(_.extend({}, ownProps, {
          selectedOption: { value: 'test 1', displayValue: 'test 1' },
          isOpened: true,
          options,
          displayedOptions: options,
          activeOption: { value: 'testd 1', displayValue: 'test 1' },
        }));

        spyOn((dropdownSearch.instance() as any), 'isScrolledIntoView').and.returnValue(false);
        const spy = spyOn((dropdownSearch.instance() as any), 'updateScrollPositionBasedOnActiveElement').and.callThrough();

        const ul: Element = dropdownSearch.find('ul.dropdown-menu').getDOMNode();
        spyOn(ul, 'getBoundingClientRect').and.returnValue({ bottom: 10, top: 10 });

        dropdownSearch.setProps({ activeOption: { value: 'test 15' } });
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should scroll up if the active option is not visible by the user inside the dropdown list', () => {
        const options = _.times(20, (n: number) => {
          return { value: `test ${n}`, displayValue: `test ${n}` };
        });

        renderDropdownSearch(_.extend({}, ownProps, {
          selectedOption: { value: 'test 1', displayValue: 'test 1' },
          isOpened: true,
          options,
          displayedOptions: options,
          activeOption: { value: 'test 19', displayValue: 'test 19' },
        }));

        spyOn((dropdownSearch.instance() as any), 'isScrolledIntoView').and.returnValue(false);
        const spy = spyOn((dropdownSearch.instance() as any), 'updateScrollPositionBasedOnActiveElement').and.callThrough();

        const ul: Element = dropdownSearch.find('ul.dropdown-menu').getDOMNode();
        spyOn(ul, 'getBoundingClientRect').and.returnValue({ bottom: 200000, top: 200000 });

        dropdownSearch.setProps({ activeOption: { value: 'test 1', displayValue: 'test 1' } });
        expect(spy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
