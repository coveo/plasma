import {mount, ReactWrapper, shallow} from 'enzyme';
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
        let innerRadios: any;
        let innerRadio1: any;
        let innerRadio2: any;

        const aRadioValue = 'blue';
        const anotherRadioValue = 'red';
        const anotherName = 'Johnny the almighty magic chicken';

        const updateInnerRadioVariables = () => {
            innerRadios = radioSelect.find('Radio');
            innerRadio1 = innerRadios.findWhere((radio: any) => radio.prop('value') === aRadioValue).first();
            innerRadio2 = innerRadios.findWhere((radio: any) => radio.prop('value') === anotherRadioValue).first();
        };

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
            radioSelect.detach();
        });

        it('should set value prop when specified', () => {
            expect(radioSelect.prop('value')).toBe(undefined);

            radioSelect.setProps({value: aRadioValue}).mount();
            expect(radioSelect.prop('value')).toBe(aRadioValue);
        });

        it('should disable children when disabled', () => {
            radioSelect.setProps({disabled: false}).mount().update();
            updateInnerRadioVariables();

            expect(innerRadio1.prop('disabled')).toBe(false);
            expect(innerRadio2.prop('disabled')).toBe(false);

            radioSelect.setProps({disabled: true}).mount().update();
            updateInnerRadioVariables();

            expect(innerRadio1.prop('disabled')).toBe(true);
            expect(innerRadio2.prop('disabled')).toBe(true);
        });

        it('should check children with same value', () => {
            radioSelect.setProps({value: undefined}).mount().update();
            updateInnerRadioVariables();
            expect(innerRadio1.prop('checked')).toBe(false);
            expect(innerRadio2.prop('checked')).toBe(false);

            radioSelect.setProps({value: aRadioValue}).mount().update();
            updateInnerRadioVariables();
            expect(innerRadio1.prop('checked')).toBe(true);
            expect(innerRadio2.prop('checked')).toBe(false);
        });

        it('should set children name prop with self name prop when children does not specify it', () => {
            const name = 'Maurice the nuclear trout 04';

            radioSelect.setProps({name}).mount().update();
            updateInnerRadioVariables();
            expect(innerRadio1.prop('name')).toBe(name);
            expect(innerRadio2.prop('name')).toBe(anotherName);
        });

        it('should chain prop onChange with children onClick prop and call both on children change', () => {
            radioSelect.setProps({onChange: clickSpy}).mount().update();
            updateInnerRadioVariables();
            const innerRadioInput = innerRadio1.find('input').first();
            innerRadioInput.simulate('click');

            expect(clickSpy.calls.count()).toBe(2);
        });
    });
});
