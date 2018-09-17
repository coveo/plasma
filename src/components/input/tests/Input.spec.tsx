import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';

import {Tooltip} from '../../tooltip/Tooltip';
import {IInputProps, Input} from '../Input';
import {Label} from '../Label';

describe('Input', () => {
    describe('<Input />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <Input />,
                );
            }).not.toThrow();
        });
    });

    describe('<Input />', () => {
        let input: ReactWrapper<IInputProps, any>;

        beforeEach(() => {
            input = mount(
                <Input />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            input.detach();
        });

        it('should set inner input classes when specified', () => {
            const innerInputClass = 'valid';
            const classes = [innerInputClass];
            expect(input.find('input').first().find(`.${innerInputClass}`).length).toBe(0);

            input.setProps({innerInputClasses: classes}).mount().update();
            expect(input.find('input').first().find(`.${innerInputClass}`).length).toBe(1);
        });

        it('should set inner input id when specified', () => {
            const id = 'yo';
            expect(input.find('input').first().prop('id')).toBe(undefined);

            input.setProps({id});
            expect(input.find('input').first().prop('id')).toBe(id);
        });

        it('should set inner input name when specified', () => {
            const name = 'yo';
            expect(input.find('input').first().prop('name')).toBe(undefined);

            input.setProps({name}).mount().update();
            expect(input.find('input').first().prop('name')).toBe(name);
        });

        it('should set checked prop when specified', () => {
            input.setProps({checked: false}).mount().update();
            expect(input.find('input').first().prop('checked')).toBe(false);

            input.setProps({checked: true}).mount();
            expect(input.find('input').first().prop('checked')).toBe(true);
        });

        it('should set disabled prop when specified', () => {
            input.setProps({disabled: false}).mount().update();
            expect(input.find('input').first().prop('disabled')).toBe(false);

            input.setProps({disabled: true}).mount().update();
            expect(input.find('input').first().prop('disabled')).toBe(true);
        });

        it('should set readonly prop when specified', () => {
            input.setProps({readOnly: false}).mount().update();
            expect(input.find('input').first().prop('readOnly')).toBe(false);

            input.setProps({readOnly: true}).mount().update();
            expect(input.find('input').first().prop('readOnly')).toBe(true);
        });

        it('should set inner input type when specified', () => {
            const type = 'password';
            expect(input.find('input').first().prop('type')).toBe('text');

            input.setProps({type}).mount().update();
            expect(input.find('input').first().prop('type')).toBe(type);
        });

        it('should call prop onBlur on inner input blur', () => {
            const blurSpy = jasmine.createSpy('onBlur');

            input.setProps({onBlur: blurSpy});
            input.find('input').first().simulate('blur');

            expect(blurSpy.calls.count()).toBe(1);
        });

        it('should call prop onChange on inner input change', () => {
            const changeSpy = jasmine.createSpy('onChange');
            const innerInput = input.find('input');

            input.setProps({onChange: changeSpy});
            innerInput.simulate('change');

            expect(changeSpy.calls.count()).toBe(1);
        });

        it('should call prop onClick on inner container click', () => {
            const clickSpy = jasmine.createSpy('onClick');
            const innerContainer = input.find('div');

            input.setProps({onClick: clickSpy});
            innerContainer.simulate('click');

            expect(clickSpy.calls.count()).toBe(1);
        });

        it('should call prop onKeyUp on key up', () => {
            const keyUpSpy = jasmine.createSpy('onKeyUp');
            const innerInput = input.find('input');

            input.setProps({onKeyUp: keyUpSpy});
            innerInput.simulate('keyUp');

            expect(keyUpSpy.calls.count()).toBe(1);
        });

        it('should not render without a label if labelTitle is not passed as prop (even with labelProps)', () => {
            expect(input.find(Label).length).toBe(0);

            input.setProps({labelProps: {}});
            expect(input.find(Label).length).toBe(0);
        });

        it('should render with a label if labelTitle is passed as prop', () => {
            input.setProps({labelTitle: 'hello there'});
            expect(input.find(Label).length).toBe(1);
            expect(input.find(Label).text()).toBe('hello there');
        });

        it('should pass the labelProps to the rendered Label if labelTitle and labelProps are set as props', () => {
            const labelProps = {invalidMessage: 'do not leave me empty'};
            input.setProps({labelTitle: 'hello there', labelProps});
            expect(input.find(Label).props()).toEqual(jasmine.objectContaining(labelProps));
        });

        it('should set the input-field class on the container if the input is of type text or number', () => {
            expect(input.find('div').first().hasClass('input-field')).toBe(true);

            input.setProps({type: 'number'});
            expect(input.find('div').first().hasClass('input-field')).toBe(true);

            input.setProps({type: 'checkbox'});
            expect(input.find('div').first().hasClass('input-field')).toBe(false);
        });

        it('should set the invalid class on the input if valid prop is false and input text is of type text or number or password', () => {
            expect(input.find('.invalid').length).toBe(0);

            input.setProps({valid: false}).update();
            expect(input.find('.invalid').length).toBe(1);

            input.setProps({type: 'number'}).update();
            expect(input.find('.invalid').length).toBe(1);

            input.setProps({type: 'password'}).update();
            expect(input.find('.invalid').length).toBe(1);

            input.setProps({type: 'checkbox'}).update();
            expect(input.find('.invalid').length).toBe(0);
        });

        it('should set the step prop to any if the input is of type number', () => {
            expect(input.find('input').prop('step')).toBe(null);

            input.setProps({type: 'number'}).update();
            expect(input.find('input').prop('step')).toBe('any');
        });

        it('should set the autoFocus prop to the input', () => {
            expect(input.find('input').prop('autoFocus')).toBe(false);

            input.setProps({autoFocus: true});

            expect(input.find('input').prop('autoFocus')).toBe(true);
        });

        it('should change the value if we change the value prop', () => {
            const expectedValue = 'a new value';

            input.setProps({value: expectedValue}).update();

            expect((input.instance() as any).innerInput.value).toBe(expectedValue);
        });

        describe('with disabledTooltip', () => {
            it('should wrap the input with a tooltip if the input is disabled and disabledTooltip is truthy', () => {
                const disabledTooltip = 'i am truthy';
                input.setProps({disabledTooltip, disabled: true});

                expect(input.find(Tooltip).prop('title')).toBe(disabledTooltip);
                expect(input.find(Tooltip).find('input').length).toBe(1);
            });
        });
    });
});
