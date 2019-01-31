import {shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';

import {Tooltip} from '../../tooltip/Tooltip';
import {IInputProps, Input} from '../Input';
import {Label} from '../Label';

describe('<Input />', () => {

    it('should mount without errors', () => {
        expect(() => {
            shallow(
                <Input />,
            );
        }).not.toThrow();
    });

    it('should unMount without errors', () => {
        const wrapper = shallow(<Input />);
        expect(() => {
            wrapper.unmount();
        }).not.toThrow();
    });

    describe('once mounted', () => {
        let input: ShallowWrapper<IInputProps>;

        const shallowInput = (props: IInputProps = {}) => {
            input = shallow(<Input {...props} />);
        };

        it('should set inner input classes when specified', () => {
            const innerInputClasses = ['valid'];
            shallowInput({
                innerInputClasses,
            });

            expect(input.find('input').first().find(`.${innerInputClasses[0]}`).length).toBe(1);
        });

        it('should set inner input id when specified', () => {
            const id = 'plume';
            shallowInput({
                id,
            });
            expect(input.find('input').first().props().id).toBe(id);
        });

        it('should set inner input name when specified', () => {
            const name = 'pain';
            shallowInput({
                name,
            });
            expect(input.find('input').first().props().name).toBe(name);
        });

        it('should set checked prop when specified', () => {
            const name = 'pita';
            shallowInput({
                name,
            });
            expect(input.find('input').first().props().name).toBe(name);
        });

        it('should set disabled prop when specified', () => {
            shallowInput({
                disabled: true,
            });
            expect(input.find('input').first().props().disabled).toBe(true);
        });

        it('should set readonly prop when specified', () => {
            shallowInput({
                readOnly: true,
            });
            expect(input.find('input').first().props().readOnly).toBe(true);
        });

        it('should set inner input type when specified', () => {
            const type = 'Calinours';
            shallowInput({
                type,
            });
            expect(input.find('input').first().props().type).toBe(type);
        });

        it('should call prop onBlur on inner input blur', () => {
            const spyOnBlur = jasmine.createSpy('onBlur');

            shallowInput({
                onBlur: spyOnBlur,
                defaultValue: 'test',
            });

            input.find('input').first().props().onBlur({} as any);

            expect(spyOnBlur).toHaveBeenCalledTimes(1);
        });

        it('should call prop onChange on inner input change', () => {
            const spyOnChange = jasmine.createSpy('onChange');

            shallowInput({
                onChange: spyOnChange,
            });

            input.find('input').first().simulate('change');

            expect(spyOnChange).toHaveBeenCalledTimes(1);
        });

        it('should call prop onClick on inner container click', () => {
            const spyOnClick = jasmine.createSpy('onClick');

            shallowInput({
                classes: 'banane',
                disabled: true,
                disabledTooltip: 'biscuit aux fromages',
                onClick: spyOnClick,
            });
            input.find('.banane').first().simulate('click');

            expect(spyOnClick).toHaveBeenCalledTimes(1);
        });

        it('should call prop onKeyUp on key up', () => {
            const spyOnKeyUp = jasmine.createSpy('onKeyUp');

            shallowInput({
                onKeyUp: spyOnKeyUp,
            });

            input.find('input').first().simulate('keyUp');

            expect(spyOnKeyUp).toHaveBeenCalledTimes(1);
        });

        it('should always render the label event if the labelTitle and labelProps is not defined', () => {
            shallowInput();
            expect(input.find(Label).length).toBe(1);
        });

        it('should pass the labelProps to the rendered Label if labelTitle and labelProps are set as props', () => {
            const labelProps = {invalidMessage: 'do not leave me empty'};

            shallowInput({
                labelProps,
                labelTitle: 'potatos',
            });
            expect(input.find(Label).props()).toEqual(jasmine.objectContaining(labelProps));
        });

        describe('add classes on specific input type defined in validatedInputTypes', () => {

            it('should set the input-field class on the container if the input is of type text', () => {
                shallowInput({
                    type: 'text',
                });

                expect(input.find('div').first().hasClass('input-field')).toBe(true);
            });

            it('should set the input-field class on the container if the input is of type number', () => {
                shallowInput({
                    type: 'number',
                });

                expect(input.find('div').first().hasClass('input-field')).toBe(true);
            });

            it('should set the input-field class on the container if the input is of type password', () => {
                shallowInput({
                    type: 'password',
                });

                expect(input.find('div').first().hasClass('input-field')).toBe(true);
            });

            it('should not set the input-field class on the container if the input is of type checkbox', () => {
                shallowInput({
                    type: 'checkbox',
                });

                expect(input.find('div').first().hasClass('input-field')).toBe(false);
            });

            it('should set the invalid class on the input if valid prop is false and input type text', () => {
                shallowInput({
                    type: 'text',
                    valid: false,
                });

                expect(input.find('.invalid').length).toBe(1);
            });

            it('should set the invalid class on the input if valid prop is false and input type number', () => {
                shallowInput({
                    type: 'number',
                    valid: false,
                });

                expect(input.find('.invalid').length).toBe(1);
            });

            it('should set the invalid class on the input if valid prop is false and input type password', () => {
                shallowInput({
                    type: 'password',
                    valid: false,
                });

                expect(input.find('.invalid').length).toBe(1);
            });

            it('should not set the invalid class on the input if valid prop is true and input type text', () => {
                shallowInput({
                    type: 'text',
                    valid: true,
                });

                expect(input.find('.invalid').length).toBe(0);
            });

            it('should not set the invalid class on the input if valid prop is false and input type is not valid', () => {
                shallowInput({
                    type: 'checkbox',
                    valid: false,
                });

                expect(input.find('.invalid').length).toBe(0);
            });
        });

        it('should set the step prop to any if the input is of type number', () => {
            shallowInput({
                type: 'number',
            });

            expect(input.find('input').props().step).toBe('any');
        });

        it('should set the autoFocus prop to the input', () => {
            shallowInput({
                autoFocus: true,
            });

            expect(input.find('input').props().autoFocus).toBe(true);
        });

        describe('with disabledTooltip', () => {
            it('should wrap the input with a tooltip if the input is disabled and disabledTooltip is truthy', () => {
                const disabledTooltip = 'i am truthy';
                shallowInput({
                    disabled: true,
                    disabledTooltip,
                });

                expect(input.find(Tooltip).props().title).toBe(disabledTooltip);
                expect(input.find(Tooltip).find('input').length).toBe(1);
            });
        });
    });
});
