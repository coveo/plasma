import {shallow, ShallowWrapper} from 'enzyme';

import {Tooltip} from '../../tooltip/Tooltip.js';
import {IInputProps, Input} from '../Input.js';
import {Label} from '../Label.js';

describe('<Input />', () => {
    it('should mount without errors', () => {
        expect(() => {
            shallow(<Input />);
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
            const spyOnBlur = jest.fn();

            shallowInput({
                onBlur: spyOnBlur,
                defaultValue: 'test',
            });

            input
                .find('input')
                .first()
                .props()
                .onBlur({} as any);

            expect(spyOnBlur).toHaveBeenCalledTimes(1);
        });

        it('should call prop onChange on inner input change', () => {
            const spyOnChange = jest.fn();

            shallowInput({
                onChange: spyOnChange,
            });

            input.find('input').first().simulate('change');

            expect(spyOnChange).toHaveBeenCalledTimes(1);
        });

        it('should call prop onClick on inner container click', () => {
            const spyOnClick = jest.fn();

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
            const spyOnKeyUp = jest.fn();

            shallowInput({
                onKeyUp: spyOnKeyUp,
            });

            input.find('input').first().simulate('keyUp');

            expect(spyOnKeyUp).toHaveBeenCalledTimes(1);
        });

        it('should render the label even if the labelTitle is undefined when validate prop exists', () => {
            shallowInput({validate: () => false});

            expect(input.find(Label).length).toBe(1);
        });

        it('should pass the labelProps to the rendered Label if labelTitle and labelProps are set as props', () => {
            const labelProps = {invalidMessage: 'do not leave me empty'};

            shallowInput({
                labelProps,
                labelTitle: 'potatos',
            });

            expect(input.find(Label).props()).toEqual(expect.objectContaining(labelProps));
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

            describe('with tooltipClasses', () => {
                it('should set the given class to the tooltip element', () => {
                    const disabledTooltip = 'i am truthy';
                    const tooltipClasses = 'test-class';
                    shallowInput({
                        disabled: true,
                        disabledTooltip,
                        tooltipClasses,
                    });

                    expect(input.find(Tooltip).hasClass(tooltipClasses)).toBe(true);
                });
            });
        });
    });
});
