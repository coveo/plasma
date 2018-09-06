import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {Radio} from '../Radio';
import {IRadioSelectAllProps, RadioSelect} from '../RadioSelect';

describe('RadioSelect', () => {
    describe('<RadioSelect />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <RadioSelect />,
                );
            }).not.toThrow();
        });
    });

    describe('<RadioSelect />', () => {
        let radioSelect: ReactWrapper<IRadioSelectAllProps, any>;
        let clickSpy: jasmine.Spy;
        const aRadioValue = 'blue';
        const anotherRadioValue = 'red';
        const anotherName = 'Johnny the almighty magic chicken';

        beforeEach(() => {
            clickSpy = jasmine.createSpy('onClick');
            radioSelect = mount(
                <RadioSelect>
                    <Radio id='radio1' value={aRadioValue} onClick={clickSpy} />
                    <Radio id='radio2' value={anotherRadioValue} name={anotherName} />
                </RadioSelect>,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            radioSelect.unmount();
            radioSelect.detach();
        });

        it('should set value prop when specified', () => {
            expect(radioSelect.prop('value')).toBe(undefined);

            radioSelect.setProps({value: aRadioValue}).mount();
            expect(radioSelect.prop('value')).toBe(aRadioValue);
        });

        it('should disable children when disabled', () => {
            const innerRadios = radioSelect.find('Radio');
            const innerRadio1 = innerRadios.findWhere((radio) => radio.prop('value') === aRadioValue).first();
            const innerRadio2 = innerRadios.findWhere((radio) => radio.prop('value') === anotherRadioValue).first();

            radioSelect.setProps({disabled: false}).mount();
            expect(innerRadio1.prop('disabled')).toBe(false);
            expect(innerRadio2.prop('disabled')).toBe(false);

            radioSelect.setProps({disabled: true}).mount();
            expect(innerRadio1.prop('disabled')).toBe(true);
            expect(innerRadio2.prop('disabled')).toBe(true);
        });

        it('should check children with same value', () => {
            const innerRadios = radioSelect.find('Radio');
            const innerRadio1 = innerRadios.findWhere((radio) => radio.prop('value') === aRadioValue).first();
            const innerRadio2 = innerRadios.findWhere((radio) => radio.prop('value') === anotherRadioValue).first();

            radioSelect.setProps({value: undefined}).mount();
            expect(innerRadio1.prop('checked')).toBe(false);
            expect(innerRadio2.prop('checked')).toBe(false);

            radioSelect.setProps({value: aRadioValue}).mount();
            expect(innerRadio1.prop('checked')).toBe(true);
            expect(innerRadio2.prop('checked')).toBe(false);
        });

        it('should set children name prop with self name prop when children does not specify it', () => {
            const name = 'Maurice the nuclear trout 04';
            const innerRadios = radioSelect.find('Radio');
            const innerRadio1 = innerRadios.findWhere((radio) => radio.prop('value') === aRadioValue).first();
            const innerRadio2 = innerRadios.findWhere((radio) => radio.prop('value') === anotherRadioValue).first();

            radioSelect.setProps({name}).mount();
            expect(innerRadio1.prop('name')).toBe(name);
            expect(innerRadio2.prop('name')).toBe(anotherName);
        });

        it('should chain prop onChange with children onClick prop and call both on children change', () => {
            const innerRadios = radioSelect.find('Radio');
            const innerRadio = innerRadios.findWhere((radio) => radio.prop('value') === aRadioValue).first();
            const innerRadioInput = innerRadio.find('input').first();

            radioSelect.setProps({onChange: clickSpy}).mount();
            innerRadioInput.simulate('click');

            expect(clickSpy.calls.count()).toBe(2);
        });
    });
});
