import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';

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
            input.unmount();
            input.detach();
        });

        it('should set inner input classes when specified', () => {
            const innerInputClass = 'valid';
            const classes = [innerInputClass];
            const innerInput = input.find('input').first();
            expect(innerInput.hasClass(innerInputClass)).toBe(false);

            input.setProps({innerInputClasses: classes}).mount();
            expect(innerInput.hasClass(innerInputClass)).toBe(true);
        });

        it('should set inner input id when specified', () => {
            const id = 'yo';
            const innerInput = input.find('input').first();
            expect(innerInput.prop('id')).toBe(undefined);

            input.setProps({id}).mount();
            expect(innerInput.prop('id')).toBe(id);
        });

        it('should set inner input name when specified', () => {
            const name = 'yo';
            const innerInput = input.find('input').first();
            expect(innerInput.prop('name')).toBe(undefined);

            input.setProps({name}).mount();
            expect(innerInput.prop('name')).toBe(name);
        });

        it('should set checked prop when specified', () => {
            const innerInput = input.find('input').first();
            input.setProps({checked: false}).mount();
            expect(innerInput.prop('checked')).toBe(false);

            input.setProps({checked: true}).mount();
            expect(innerInput.prop('checked')).toBe(true);
        });

        it('should set disabled prop when specified', () => {
            const innerInput = input.find('input').first();
            input.setProps({disabled: false}).mount();
            expect(innerInput.prop('disabled')).toBe(false);

            input.setProps({disabled: true}).mount();
            expect(innerInput.prop('disabled')).toBe(true);
        });

        it('should set readonly prop when specified', () => {
            const innerInput = input.find('input').first();
            input.setProps({readOnly: false}).mount();
            expect(innerInput.prop('readOnly')).toBe(false);

            input.setProps({readOnly: true}).mount();
            expect(innerInput.prop('readOnly')).toBe(true);
        });

        it('should set inner input type when specified', () => {
            const type = 'password';
            const innerInput = input.find('input').first();
            expect(innerInput.prop('type')).toBe('text');

            input.setProps({type}).mount();
            expect(innerInput.prop('type')).toBe(type);
        });

        it('should call prop onBlur on inner input blur', () => {
            const blurSpy = jasmine.createSpy('onBlur');
            const innerInput = input.find('input');

            input.setProps({onBlur: blurSpy}).mount();
            innerInput.simulate('blur');

            expect(blurSpy.calls.count()).toBe(1);
        });

        it('should call prop onChange on inner input change', () => {
            const changeSpy = jasmine.createSpy('onChange');
            const innerInput = input.find('input');

            input.setProps({onChange: changeSpy}).mount();
            innerInput.simulate('change');

            expect(changeSpy.calls.count()).toBe(1);
        });

        it('should call prop onClick on inner container click', () => {
            const clickSpy = jasmine.createSpy('onClick');
            const innerContainer = input.find('div');

            input.setProps({onClick: clickSpy}).mount();
            innerContainer.simulate('click');

            expect(clickSpy.calls.count()).toBe(1);
        });

        it('should call prop onKeyUp on key up', () => {
            const keyUpSpy = jasmine.createSpy('onKeyUp');
            const innerInput = input.find('input');

            input.setProps({onKeyUp: keyUpSpy}).mount();
            innerInput.simulate('keyUp');

            expect(keyUpSpy.calls.count()).toBe(1);
        });

        it('should not render without a label if labelTitle is not passed as prop (even with labelProps)', () => {
            expect(input.find(Label).length).toBe(0);

            input.setProps({labelProps: {}}).mount();
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
            expect(input.find('input').first().hasClass('invalid')).toBe(false);

            input.setProps({valid: false});
            expect(input.find('input').first().hasClass('invalid')).toBe(true);

            input.setProps({type: 'number'});
            expect(input.find('input').first().hasClass('invalid')).toBe(true);

            input.setProps({type: 'password'});
            expect(input.find('input').first().hasClass('invalid')).toBe(true);

            input.setProps({type: 'checkbox'});
            expect(input.find('input').first().hasClass('invalid')).toBe(false);
        });

        it('should set the step prop to any if the input is of type number', () => {
            const innerInput = input.find('input').first();
            expect(innerInput.prop('step')).toBe(null);

            input.setProps({type: 'number'});
            expect(innerInput.prop('step')).toBe('any');
        });

        it('should set the autoFocus prop to the input', () => {
            const innerInput = input.find('input').first();
            expect(innerInput.prop('autoFocus')).toBe(false);

            input.setProps({autoFocus: true});

            expect(innerInput.prop('autoFocus')).toBe(true);
        });

        it('should change the value if we change the value prop', () => {
            const expectedValue = 'a new value';

            input.setProps({value: expectedValue});

            expect((input as any).node.innerInput.value).toBe(expectedValue);
        });
    });
});
