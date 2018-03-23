import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {IInputProps} from '../../input/Input';
import {Checkbox} from '../Checkbox';

describe('Checkbox', () => {
    describe('<Checkbox />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <Checkbox />,
                );
            }).not.toThrow();
        });

        describe('<Checkbox />', () => {
            let checkbox: ReactWrapper<IInputProps, any>;

            const renderCheckbox = (props: IInputProps = {}) => {
                checkbox = mount(
                    <Checkbox {...props} />,
                    {attachTo: document.getElementById('App')},
                );
            };

            afterEach(() => {
                checkbox.unmount();
                checkbox.detach();
            });

            it('should call prop onClick when specified on click', () => {
                renderCheckbox();

                checkbox.setProps({onClick: clickSpy}).mount();
                innerLabel.simulate('click');

                expect(clickSpy.calls.count()).toBe(1);
            });

            it('should set inner input type to checkbox', () => {
                renderCheckbox();

                const innerInput = checkbox.find('input');

                expect(innerInput.prop('type')).toBe('checkbox');
            });
        });

        it('should set indeterminate on input', () => {
            renderCheckbox({
                indeterminate: true,
            });
            const innerInput = checkbox.find('input');
            expect((innerInput as any).node.indeterminate).toBe(true);
        });
    });
});
