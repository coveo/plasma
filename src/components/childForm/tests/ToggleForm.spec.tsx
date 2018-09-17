import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {Radio} from '../../radio/Radio';
import {ChildForm} from '../ChildForm';
import {IToggleFormProps, ToggleForm} from '../ToggleForm';

describe('ToggleForm', () => {
    describe('<ToggleForm />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <ToggleForm />,
                );
            }).not.toThrow();
        });
    });

    describe('<ToggleForm />', () => {
        let toggleForm: ReactWrapper<IToggleFormProps, any>;

        beforeEach(() => {
            toggleForm = mount(
                <ToggleForm>
                    <Radio id='id' />
                    <ChildForm />
                </ToggleForm>,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            toggleForm.detach();
        });

        it('should set classes when specified', () => {
            const innerClass = 'salut';
            const classes = [innerClass];
            expect(toggleForm.find('div').first().hasClass(innerClass)).toBe(false);

            toggleForm.setProps({classes}).mount().update();
            expect(toggleForm.find('div').first().hasClass(innerClass)).toBe(true);
        });

        it('should check inner radio control when checked property is true', () => {
            toggleForm.setProps({checked: false}).mount().update();
            expect(toggleForm.find('Radio').first().prop('checked')).toBe(false);

            toggleForm.setProps({checked: true}).mount().update();
            expect(toggleForm.find('Radio').first().prop('checked')).toBe(true);
        });

        it('should not throw when parent control is clicked and prop is undefined', () => {
            const parentControlInnerInput = toggleForm.find('.radio-option').first();

            toggleForm.mount();
            expect(() => parentControlInnerInput.simulate('click')).not.toThrow();
        });

        it('should call onClick handler when parent control is clicked and prop is set', () => {
            const clickSpy = jasmine.createSpy('onClick');
            const parentControlInnerInput = toggleForm.find('.radio-option').first();

            toggleForm.setProps({onClick: clickSpy});
            toggleForm.mount();
            parentControlInnerInput.simulate('click');

            expect(clickSpy.calls.count()).toBe(1);
        });

        it('should disable ChildForm children when checked property is false', () => {
            expect(toggleForm.find('ChildForm').first().prop('disabled')).toBe(true);

            toggleForm.setProps({checked: false}).mount().update();
            expect(toggleForm.find('ChildForm').first().prop('disabled')).toBe(true);

            toggleForm.setProps({checked: true}).mount().update();
            expect(toggleForm.find('ChildForm').first().prop('disabled')).toBe(false);
        });
    });
});
