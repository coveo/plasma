import {mount, ReactWrapper} from 'enzyme';

import {IDropdownOption} from '../../DropdownSearch.js';
import {IMultiselectInputProps, MultiselectInput} from '../MultiSelectInput.js';

describe('MultiSelectInput', () => {
    const selectedOptions: IDropdownOption[] = [
        {value: 'test 1'},
        {value: 'test 2'},
        {value: 'test 3'},
        {value: 'test 4'},
    ];
    const props: IMultiselectInputProps = {
        selectedOptions: [],
        filterText: '',
    };

    describe('<SelectedOption />', () => {
        let multiSelectInput: ReactWrapper<IMultiselectInputProps, any>;

        const renderMultiSelectInput = (curentProps?: IMultiselectInputProps) => {
            multiSelectInput = mount(<MultiselectInput {...curentProps} />, {attachTo: document.getElementById('App')});
        };

        afterEach(() => {
            multiSelectInput?.unmount();
        });

        describe('render', () => {
            it('should render placeholder text', () => {
                renderMultiSelectInput(props);

                const filterPlaceholder = 'placeholdertext';
                multiSelectInput.setProps({filterPlaceholder});

                expect(multiSelectInput.find(`input[placeholder="${filterPlaceholder}"]`).length).toBe(1);
            });

            it('should render filter text', () => {
                renderMultiSelectInput(props);

                const filterText = 'text';
                multiSelectInput.setProps({filterText});

                expect(multiSelectInput.find(`input[value="${filterText}"]`).length).toBe(1);
            });

            it('should not render the remove-all button if there are no options given', () => {
                renderMultiSelectInput(props);

                expect(multiSelectInput.find('.remove-all-selected-options').length).toBe(0);
            });

            it('should render all the supplied selected options', () => {
                renderMultiSelectInput(props);

                multiSelectInput.setProps({selectedOptions});

                expect(multiSelectInput.find('SelectedOption').length).toBe(selectedOptions.length);
            });

            it('should not render any selected options if none provided', () => {
                renderMultiSelectInput(props);

                expect(multiSelectInput.find('SelectedOption').length).toBe(0);
            });

            it('should not render the remove-all button if there are no selected options', () => {
                renderMultiSelectInput(props);

                expect(multiSelectInput.find('.remove-all-selected-options').length).toBe(0);
            });

            it('should render the remove-all button if there are selected options', () => {
                renderMultiSelectInput(props);

                multiSelectInput.setProps({selectedOptions});

                expect(multiSelectInput.find('.remove-all-selected-options').length).toBe(1);
            });
        });

        describe('handle functions', () => {
            it('should handle on remove all', () => {
                renderMultiSelectInput(props);

                const onRemoveAll = jest.fn();

                multiSelectInput.setProps({
                    selectedOptions,
                    onRemoveAll: onRemoveAll,
                });

                multiSelectInput.find('.remove-all-selected-options').simulate('click');

                expect(onRemoveAll).toHaveBeenCalled();
            });

            it('should handle on input change', () => {
                renderMultiSelectInput(props);

                const onInputChange = jest.fn();

                multiSelectInput.setProps({
                    onFilterTextChange: onInputChange,
                });

                multiSelectInput.find('input').simulate('change', {target: {value: 'input value changed'}});

                expect(onInputChange).toHaveBeenCalled();
            });

            it('should handle on blur', () => {
                renderMultiSelectInput(props);

                const onBlur = jest.fn();

                multiSelectInput.setProps({
                    onBlur: onBlur,
                });

                multiSelectInput.find('input').simulate('blur');

                expect(onBlur).toHaveBeenCalled();
            });

            it('should handle on focus', () => {
                renderMultiSelectInput(props);

                const onFocus = jest.fn();

                multiSelectInput.setProps({
                    onFocus: onFocus,
                });

                multiSelectInput.find('input').simulate('focus');

                expect(onFocus).toHaveBeenCalled();
            });

            it('should handle on key down', () => {
                renderMultiSelectInput(props);

                const onKeyDown = jest.fn();

                multiSelectInput.setProps({
                    onKeyDownFilterBox: onKeyDown,
                });

                multiSelectInput.find('input').simulate('keyDown');

                expect(onKeyDown).toHaveBeenCalled();
            });
        });
    });
});
