import {mount, ReactWrapper} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {UUID} from '../../../../utils/UUID';
import {ISelectedOptionProps, SelectedOption} from '../SelectedOption';

describe('SelectedOption', () => {
    const key: string = UUID.generate();
    const props: ISelectedOptionProps = {
        key,
        value: 'test',
        label: '',
    };

    describe('<SelectedOption />', () => {
        let selectedOption: ReactWrapper<ISelectedOptionProps, any>;

        const renderSelectedOption = (currentProps?: ISelectedOptionProps) => {
            selectedOption = mount(
                <SelectedOption {...currentProps} />,
                {attachTo: document.getElementById('App')},
            );
        };

        beforeEach(() => {
            renderSelectedOption(props);
        });

        afterEach(() => {
            selectedOption.detach();
        });

        describe('render', () => {
            it('should render the display value in the selectedOption', () => {
                const label: string = 'displayTest';
                selectedOption.setProps({label});

                expect(selectedOption.find('.selected-option-value').text()).toBe(label);
            });
        });

        describe('remove option', () => {
            it('should call remove option when click on the remove-option div', () => {
                const onRemoveOptionClick = jasmine.createSpy('onRemoveOptionClick');
                selectedOption.setProps({onRemoveClick: onRemoveOptionClick});

                selectedOption.find('.remove-option').simulate('click');

                expect(onRemoveOptionClick).toHaveBeenCalled();
            });

            it('should not call remove option when clicking anywhere else', () => {
                const onRemoveOptionClick = jasmine.createSpy('onRemoveOptionClick');
                selectedOption.setProps({onRemoveClick: onRemoveOptionClick});

                selectedOption.simulate('click');
                selectedOption.find('.selected-option').simulate('click');
                selectedOption.find('.selected-option-value').simulate('click');

                expect(onRemoveOptionClick).not.toHaveBeenCalled();
            });
        });
    });
});
