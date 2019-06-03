// tslint:disable-next-line:no-unused-variable
import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {UUID} from '../../../../utils/UUID';
import {IDropdownSearchProps} from '../../DropdownSearch';
import {MultiSelectDropdownSearch} from '../MultiSelectDropdownSearch';

describe('MultiSelectDropdownSearch', () => {
    const id: string = UUID.generate();
    const options = [
        {value: 'test a'},
        {value: 'test b'},
        {value: 'test c'},
    ];

    const props: IDropdownSearchProps = {
        id,
        options,
        modMenu: false,
        filterPlaceholder: 'fill me',
        maxWidth: 400,
        width: 300,
        hasFilterSuggestionBoxWidthFixed: true,
        isDisabled: false,
        isOpened: false,
        filterText: '',
        noResultText: 'no result',
    };

    describe('<MultiSelectDropdownSearch />', () => {
        let multiSelectDropdownSearch: ReactWrapper<IDropdownSearchProps, any>;

        const renderMultiSelectDropdownSearch = (currentProps?: IDropdownSearchProps) => {
            multiSelectDropdownSearch = mount(
                <MultiSelectDropdownSearch {...currentProps} />,
                {attachTo: document.getElementById('App')},
            );
        };

        beforeEach(() => {
            renderMultiSelectDropdownSearch(props);
        });

        afterEach(() => {
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

            it('should render a "No Option" label if the filterText is a value present in the selectedOptions', () => {
                const filterText: string = 'selectedValue';
                multiSelectDropdownSearch.setProps({
                    filterText,
                    isOpened: true,
                    options: [...options, {value: filterText, selected: true, custom: true}],
                });

                expect(multiSelectDropdownSearch.find('li span').text()).toEqual(multiSelectDropdownSearch.props().noResultText);
            });

            it('should call onKeyDownFilterBox props on key down in input', () => {
                const onKeyDownFilterBox = jasmine.createSpy('onKeyDownFilterBox');

                multiSelectDropdownSearch.setProps({
                    onKeyDownFilterBox,
                });

                multiSelectDropdownSearch.find('input').simulate('keyDown');

                expect(onKeyDownFilterBox).toHaveBeenCalled();
            });

            it('should call onBlur props on blur in input', () => {
                const onBlur = jasmine.createSpy('onBlur');

                multiSelectDropdownSearch.setProps({
                    onBlur,
                });

                multiSelectDropdownSearch.find('input').simulate('blur');

                expect(onBlur).toHaveBeenCalledTimes(1);
            });
        });
    });
});
