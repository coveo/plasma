import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';

import {IInputProps} from '../../input/Input';
import {Checkbox, ICheckboxProps} from '../Checkbox';

describe('Checkbox', () => {
    describe('<Checkbox />', () => {
        it('should render without errors', () => {
            expect(() => mount(<Checkbox />)).not.toThrow();
        });

        describe('<Checkbox />', () => {
            let checkbox: ReactWrapper<IInputProps, any>;

            const renderCheckbox = (props: ICheckboxProps = {}) => {
                if (checkbox && checkbox.length) {
                    checkbox.unmount();
                }

                checkbox = mount(
                    <Checkbox {...props} />,
                    {attachTo: document.getElementById('App')},
                );
            };

            afterEach(() => {
                checkbox.detach();
            });

            it('should call prop onClick when specified on click', () => {
                const clickSpy = jasmine.createSpy('onClick');
                renderCheckbox({
                    onClick: clickSpy,
                });
                const innerLabel = checkbox.find('div');

                innerLabel.simulate('click');

                expect(clickSpy.calls.count()).toBe(1);
            });

            it('should not call prop onClick when specified on click if disabled', () => {
                const clickSpy = jasmine.createSpy('onClick');
                renderCheckbox({
                    onClick: clickSpy,
                    disabled: true,
                });
                const innerLabel = checkbox.find('div');

                innerLabel.simulate('click');

                expect(clickSpy).not.toHaveBeenCalled();
            });

            it('should call prop handleOnClick when specified on click', () => {
                const handleOnClickSpy = jasmine.createSpy('handleOnClick');
                renderCheckbox({
                    handleOnClick: handleOnClickSpy,
                });

                const innerLabel = checkbox.find('div');

                innerLabel.simulate('click');

                expect(handleOnClickSpy).toHaveBeenCalledTimes(1);
            });

            it('should not call prop handleOnClick when specified on click if disabled', () => {
                const handleOnClickSpy = jasmine.createSpy('handleOnClick');
                renderCheckbox({
                    handleOnClick: handleOnClickSpy,
                    disabled: true,
                });
                const innerLabel = checkbox.find('div');

                innerLabel.simulate('click');

                expect(handleOnClickSpy.calls.count()).toBe(0);
            });

            it('should set inner input type to checkbox', () => {
                renderCheckbox();

                const innerInput = checkbox.find('input');

                expect(innerInput.prop('type')).toBe('checkbox');
            });

            it('should set indeterminate on input', () => {
                renderCheckbox({
                    indeterminate: true,
                });
                const innerInput: any = checkbox.find('input').instance();
                expect(innerInput.indeterminate).toBe(true);
            });

            it('should add the disable class on the label only if input is disabled', () => {
                renderCheckbox({
                    disabled: true,
                });

                expect(checkbox.find('.coveo-checkbox-label').hasClass('disabled')).toBe(true);

                [false, undefined].forEach((falsyValue) => {
                    renderCheckbox({
                        disabled: falsyValue,
                    });
                    expect(checkbox.find('.coveo-checkbox-label').hasClass('disabled')).toBe(false);
                });
            });
        });
    });
});
