import {shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';

import {Radio} from '../Radio';
import {IRadioSelectAllProps, RadioSelect} from '../RadioSelect';

describe('<RadioSelect />', () => {

    it('should mount without errors', () => {
        expect(() => {
            shallow(
                <RadioSelect />,
            );
        }).not.toThrow();
    });

    it('should unmount without errors', () => {
        const wrapper = shallow(<RadioSelect />);
        expect(() => {
            wrapper.unmount();
        }).not.toThrow();
    });

    describe('once mounted', () => {
        let radioSelect: ShallowWrapper<IRadioSelectAllProps>;
        let spy: jasmine.Spy;

        const firstRadioValue = 'blue';
        const secondRadioValue = 'red';
        const radioName = 'Johnny the almighty magic chicken';

        const shallowRadioSelect = (props: IRadioSelectAllProps = {}) => {
            spy = jasmine.createSpy('onClick');
            radioSelect = shallow(
                <RadioSelect
                    {...props}
                >
                    <Radio id='radio1' value={firstRadioValue} onClick={spy} />
                    <Radio id='radio2' value={secondRadioValue} name={radioName} />
                </RadioSelect>,
            );
        };

        it('should call onMount on mount', () => {
            const spyOnMount = jasmine.createSpy('onMount');
            shallowRadioSelect({
                onMount: spyOnMount,
            });

            expect(spyOnMount).toHaveBeenCalledTimes(1);
        });

        it('should call onUnmount on unmount', () => {
            const spyOnUnmount = jasmine.createSpy('onUnmount');
            shallowRadioSelect({
                onUnmount: spyOnUnmount,
            });
            radioSelect.unmount();

            expect(spyOnUnmount).toHaveBeenCalledTimes(1);
        });

        it('should set disabled on child if the props disabled is set to true', () => {
            shallowRadioSelect({
                disabled: true,
            });

            expect(radioSelect.find(Radio).first().props().disabled).toBe(true);
        });

        it('should set disabled on child if the child value is present in the disabled values list', () => {
            shallowRadioSelect({
                disabled: false,
                disabledValues: [firstRadioValue, secondRadioValue],
            });

            expect(radioSelect.find(Radio).first().props().disabled).toBe(true);
            expect(radioSelect.find(Radio).last().props().disabled).toBe(true);
        });

        it('should use the name from the child if defined', () => {
            shallowRadioSelect();

            expect(radioSelect.find(Radio).last().props().name).toBe(radioName);
        });

        it('should use the name prop instead of the child name if its not defined', () => {
            shallowRadioSelect({
                name: 'leaf',
            });

            expect(radioSelect.find(Radio).first().props().name).toBe('leaf');
        });

        it('should pass disabledTooltip prop to each child', () => {
            const disabledTooltip = 'golf';
            shallowRadioSelect({
                disabledTooltip,
            });

            expect(radioSelect.find(Radio).first().props().disabledTooltip).toBe(disabledTooltip);
            expect(radioSelect.find(Radio).last().props().disabledTooltip).toBe(disabledTooltip);
        });

        it('should set the prop checked of the children with the same value than the radio select', () => {
            shallowRadioSelect({
                value: firstRadioValue,
            });

            expect(radioSelect.find(Radio).first().props().checked).toBe(true);
            expect(radioSelect.find(Radio).last().props().checked).toBe(false);
        });

        it('should call onClick on children props if defined', () => {
            shallowRadioSelect();

            expect(radioSelect.find(Radio).first().props().onClick).toBeDefined();

            radioSelect.find(Radio).first().props().onClick({} as any);

            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('should call onChange prop when the child call onClick', () => {
            const spyOnChange = jasmine.createSpy('onChange');
            shallowRadioSelect({
                onChange: spyOnChange,
            });

            radioSelect.find(Radio).first().props().onClick({} as any);

            expect(spyOnChange).toHaveBeenCalledTimes(1);
        });

        it('should call onChangeCallback prop when the child call onClick', () => {
            const spyOnChangeCallback = jasmine.createSpy('onChangeCallback');
            shallowRadioSelect({
                onChangeCallback: spyOnChangeCallback,
            });

            radioSelect.find(Radio).first().props().onClick({} as any);

            expect(spyOnChangeCallback).toHaveBeenCalledTimes(1);
        });
    });
});
