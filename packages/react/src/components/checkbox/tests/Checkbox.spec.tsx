import {mount, ReactWrapper} from 'enzyme';
import {render, screen} from '@test-utils';

import {IInputProps, Label} from '../../input';
import {Checkbox, ICheckboxProps} from '../Checkbox';

describe('Checkbox', () => {
    it('should render without errors', () => {
        expect(() => mount(<Checkbox />)).not.toThrow();
    });

    describe('<Checkbox />', () => {
        let checkbox: ReactWrapper<IInputProps, any>;

        const renderCheckbox = (props: ICheckboxProps = {}) => {
            if (checkbox && checkbox.length) {
                checkbox.unmount();
            }

            checkbox = mount(<Checkbox {...props} />, {attachTo: document.getElementById('App')});
        };

        it('should call prop onClick when specified on click', () => {
            const clickSpy = jest.fn();
            renderCheckbox({
                onClick: clickSpy,
            });
            const innerLabel = checkbox.find('div');

            innerLabel.simulate('click');

            expect(clickSpy.mock.calls.length).toBe(1);
        });

        it('should not call prop onClick when specified on click if disabled', () => {
            const clickSpy = jest.fn();
            renderCheckbox({
                onClick: clickSpy,
                disabled: true,
            });
            const innerLabel = checkbox.find('div');

            innerLabel.simulate('click');

            expect(clickSpy).not.toHaveBeenCalled();
        });

        it('should call prop handleOnClick when specified on click', () => {
            const handleOnClickSpy = jest.fn();
            renderCheckbox({
                handleOnClick: handleOnClickSpy,
            });

            const innerLabel = checkbox.find('div');

            innerLabel.simulate('click');

            expect(handleOnClickSpy).toHaveBeenCalledTimes(1);
        });

        it('should not call prop handleOnClick when specified on click if disabled', () => {
            const handleOnClickSpy = jest.fn();
            renderCheckbox({
                handleOnClick: handleOnClickSpy,
                disabled: true,
            });
            const innerLabel = checkbox.find('div');

            innerLabel.simulate('click');

            expect(handleOnClickSpy.mock.calls.length).toBe(0);
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

            expect(checkbox.find('.checkbox-label').hasClass('disabled')).toBe(true);

            [false, undefined].forEach((falsyValue) => {
                renderCheckbox({
                    disabled: falsyValue,
                });

                expect(checkbox.find('.checkbox-label').hasClass('disabled')).toBe(false);
            });
        });

        it('is possible to get the checkboxes by their labels', () => {
            render(
                <>
                    <Checkbox id="my-test">
                        <Label>awesome label</Label>
                    </Checkbox>
                    <Checkbox id="my-other-test">
                        <Label>even awesomer label</Label>
                    </Checkbox>
                </>,
            );
            expect(screen.getByRole('checkbox', {name: 'awesome label'})).toBeVisible();
            expect(screen.getByRole('checkbox', {name: 'even awesomer label'})).toBeVisible();
        });

        it('is possible to add a custom aria-labelledby attribute', () => {
            render(
                <>
                    <Checkbox id="my-test" aria-labelledby="my-id" />
                    <Label id="my-id">custom label</Label>
                </>,
            );
            expect(screen.getByRole('checkbox', {name: 'custom label'})).toBeVisible();
        });

        it('a disabled checkbox with tooltip should set classes on tooltip', () => {
            render(<Checkbox id="my-test" aria-labelledby="hover me" disabled disabledTooltip="test tooltip" />);

            const tooltipContent = document.querySelector('.input-wrapper > span');
            expect(tooltipContent).toHaveClass('flex center-align');
        });
    });
});
