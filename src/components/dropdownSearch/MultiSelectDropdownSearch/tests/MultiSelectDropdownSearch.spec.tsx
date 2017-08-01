import { mount, ReactWrapper } from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { UUID } from '../../../../utils/UUID';
import { IDropdownOption, IDropdownSearchProps } from '../../DropdownSearch';
import { FixedQueue } from '../../../../utils/FixedQueue';
import { MultiSelectDropdownSearch } from '../MultiSelectDropdownSearch';

describe('MultiSelectDropdownSearch', () => {
  const id: string = UUID.generate();
  const options = [
    { value: 'test a', displayValue: 'test a' },
    { value: 'test b', displayValue: 'test b' },
    { value: 'test c', displayValue: 'test c' },
  ];

  const props: IDropdownSearchProps = {
    id,
    options,
    modMenu: false,
    displayedOptions: options,
    selectedOptions: new FixedQueue<IDropdownOption>(),
    filterPlaceholder: 'fill me',
    maxWidth: 400,
    width: 300,
    hasFilterSuggestionBoxWidthFixed: true,
    isDisabled: false,
    isOpened: false,
    filterText: '',
  };

  describe('<MultiSelectDropdownSearch />', () => {
    let multiSelectDropdownSearch: ReactWrapper<IDropdownSearchProps, any>;
    let multiSelectDropdownSearchInstance: MultiSelectDropdownSearch;

    const renderMultiSelectDropdownSearch = (props?: IDropdownSearchProps) => {
      multiSelectDropdownSearch = mount(
        <MultiSelectDropdownSearch {...props} />,
        { attachTo: document.getElementById('App') },
      );
      multiSelectDropdownSearchInstance = multiSelectDropdownSearch.instance() as MultiSelectDropdownSearch;
    };

    beforeEach(() => {
      renderMultiSelectDropdownSearch(props);
    });

    afterEach(() => {
      multiSelectDropdownSearch.unmount();
      multiSelectDropdownSearch.detach();
    });

    describe('render', () => {
      it('should call custom option click function on mousedown when the value is not present in the selected options', () => {
        const filterText: string = 'customValue';
        const onCustomOptionClick = jasmine.createSpy('onCustomOptionClick');
        multiSelectDropdownSearch.setProps({
          filterText,
          onCustomOptionClick,
          isOpened: true,
        });

        multiSelectDropdownSearch.find('li span').simulate('mouseDown');

        expect(onCustomOptionClick).toHaveBeenCalled();
      });

      it('should render a "Create new option" label for the custom value if it is not present in the selected options', () => {
        const filterText: string = 'customValue';
        multiSelectDropdownSearch.setProps({
          filterText,
          isOpened: true,
        });

        expect(multiSelectDropdownSearch.find('li span').text()).toEqual(`Create option for "${filterText}"`);
      });

      it('should not call custom option click function on mousedown when the value is already present in the selected options', () => {
        const filterText: string = 'customValue';
        const onCustomOptionClick = jasmine.createSpy('onCustomOptionClick');
        multiSelectDropdownSearch.setProps({
          filterText,
          onCustomOptionClick,
          selectedOptions: props.selectedOptions.push({ value: UUID.generate(), displayValue: filterText }),
          isOpened: true,
        });

        multiSelectDropdownSearch.find('li span').simulate('mouseDown');

        expect(onCustomOptionClick).not.toHaveBeenCalled();
      });

      it('should call onKeyDownFilterBox props on key down in input', () => {
        const onKeyDownFilterBox = jasmine.createSpy('onKeyDownFilterBox');

        multiSelectDropdownSearch.setProps({
          onKeyDownFilterBox,
        });

        multiSelectDropdownSearch.find('input').simulate('keyDown');

        expect(onKeyDownFilterBox).toHaveBeenCalled();
      });
    });
  });
});
