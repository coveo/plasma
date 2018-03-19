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
            toggleForm.unmount();
            toggleForm.detach();
        });

        it('should set classes when specified', () => {
            const innerClass = 'salut';
            const classes = [innerClass];
            const innerLabel = toggleForm.find('div').first();
            expect(innerLabel.hasClass(innerClass)).toBe(false);

            toggleForm.setProps({classes});
            toggleForm.mount();
            expect(innerLabel.hasClass(innerClass)).toBe(true);
        });

        it('should check inner radio control when checked property is true', () => {
            const parentControl = toggleForm.find('Radio').first();
            toggleForm.setProps({checked: false});
            toggleForm.mount();
            expect(parentControl.prop('checked')).toBe(false);

            toggleForm.setProps({checked: true});
            toggleForm.mount();
            expect(parentControl.prop('checked')).toBe(true);
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
            const childElement = toggleForm.find('ChildForm').first();
            expect(childElement.prop('disabled')).toBe(true);

            toggleForm.setProps({checked: false});
            toggleForm.mount();
            expect(childElement.prop('disabled')).toBe(true);

            toggleForm.setProps({checked: true});
            toggleForm.mount();
            expect(childElement.prop('disabled')).toBe(false);
        });
    });
});
