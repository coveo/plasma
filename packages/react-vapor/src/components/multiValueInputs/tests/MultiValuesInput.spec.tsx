import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';

import {InputConnected} from '../../input/InputConnected';
import {IMultilineSingleBoxProps} from '../../multilineBox/MultilineBox';
import {MultiValuesInput} from '../MultiValuesInput';

describe('MultiValuesInput', () => {
    const defaultValues = ['🚕', '🚌', '🚒'];
    const defaultAboveDataLimitValues = ['🚕', '🚌', '🚒', '⌚'];
    const arrayOfMultilineSingleBoxProps: Array<IMultilineSingleBoxProps<string>> = [
        {id: 'test1', isLast: false, props: '🚕'},
        {id: 'test2', isLast: false, props: '🚌'},
        {id: 'test3', isLast: false, props: '🚒'},
        {id: 'test4', isLast: true, props: ''},
    ];
    const arrayOfMultilineSingleBoxAboveDataLimitProps: Array<IMultilineSingleBoxProps<string>> = [
        {id: 'test1', isLast: false, props: '🚕'},
        {id: 'test2', isLast: false, props: '🚌'},
        {id: 'test3', isLast: false, props: '🚒'},
        {id: 'test4', isLast: false, props: '⌚'},
    ];

    const testInputProps = {
        placeholder: 'a placeholder',
        labelTitle: 'a title',
        validate: (value: string) => !!value,
        validateOnMount: true,
    };

    const defaultProps = {
        id: '🚗',
        dataLimit: 3,
        inputProps: testInputProps,
        reachedLimitPlaceholder: 'a reached placeholder',
        disabledTooltipTitle: "this input can't edited",
    };

    it('should render and unmount without throwing errors', () => {
        expect(() => {
            const component = shallowWithState(<MultiValuesInput {...defaultProps} data={defaultValues} />, {}).dive();
            component.unmount();
        }).not.toThrow();
    });

    it('should create an input for every value in data', () => {
        const component = shallowWithState(<MultiValuesInput {...defaultProps} data={defaultValues} />, {}).dive();

        const body = shallowWithState(
            <div>{(component.prop('renderBody') as any)(arrayOfMultilineSingleBoxProps)}</div>,
            {}
        );

        expect(body.find(InputConnected).length).toBe(arrayOfMultilineSingleBoxProps.length);
    });

    it('should disabled the possibility to add an input if a dataLimit is set and reached', () => {
        const component = shallowWithState(<MultiValuesInput {...defaultProps} data={defaultValues} />, {}).dive();

        const body = shallowWithState(
            <div>{(component.prop('renderBody') as any)(arrayOfMultilineSingleBoxProps)}</div>,
            {}
        );
        const lastInputConnectedProps = body.find(InputConnected).last().props();

        expect(lastInputConnectedProps.disabled).toBe(true);
    });

    it('should display all data, even if the data length are above the dataLimit', () => {
        const component = shallowWithState(
            <MultiValuesInput {...defaultProps} data={defaultAboveDataLimitValues} />,
            {}
        ).dive();

        const body = shallowWithState(
            <div>{(component.prop('renderBody') as any)(arrayOfMultilineSingleBoxAboveDataLimitProps)}</div>,
            {}
        );
        const lastInputConnectedProps = body.find(InputConnected).last().props();

        expect(lastInputConnectedProps.defaultValue).toBe('⌚');
    });

    it("should disable all the inputs in which it's index are above or equal the dataLimit", () => {
        const component = shallowWithState(
            <MultiValuesInput {...defaultProps} data={defaultAboveDataLimitValues} />,
            {}
        ).dive();

        const body = shallowWithState(
            <div>{(component.prop('renderBody') as any)(arrayOfMultilineSingleBoxAboveDataLimitProps)}</div>,
            {}
        );
        const lastInputConnectedProps = body.find(InputConnected).last().props();

        expect(lastInputConnectedProps.disabled).toBe(true);
    });

    it("should NOT disable all the inputs in which it's index are below the dataLimit", () => {
        const component = shallowWithState(
            <MultiValuesInput {...defaultProps} data={defaultAboveDataLimitValues} />,
            {}
        ).dive();

        const body = shallowWithState(
            <div>{(component.prop('renderBody') as any)(arrayOfMultilineSingleBoxAboveDataLimitProps)}</div>,
            {}
        );
        const oneInputConnectedBeforelastProps = body
            .find(InputConnected)
            .at(arrayOfMultilineSingleBoxAboveDataLimitProps.length - 2)
            .props();

        expect(oneInputConnectedBeforelastProps.disabled).toBe(false);
    });

    it("should include a Tooltip if set to all data in which it's index are above or equal the dataLimit", () => {
        const component = shallowWithState(
            <MultiValuesInput {...defaultProps} data={defaultAboveDataLimitValues} />,
            {}
        ).dive();

        const body = shallowWithState(
            <div>{(component.prop('renderBody') as any)(arrayOfMultilineSingleBoxAboveDataLimitProps)}</div>,
            {}
        );
        const lastInputConnectedProps = body.find(InputConnected).last().props();

        expect(lastInputConnectedProps.disabledTooltip).toBe(defaultProps.disabledTooltipTitle);
    });

    it("should NOT includes a Tooltip if set to all data in which it's index are below the dataLimit", () => {
        const component = shallowWithState(
            <MultiValuesInput {...defaultProps} data={defaultAboveDataLimitValues} />,
            {}
        ).dive();

        const body = shallowWithState(
            <div>{(component.prop('renderBody') as any)(arrayOfMultilineSingleBoxAboveDataLimitProps)}</div>,
            {}
        );
        const oneInputConnectedBeforelastProps = body
            .find(InputConnected)
            .at(arrayOfMultilineSingleBoxAboveDataLimitProps.length - 2)
            .props();

        expect(oneInputConnectedBeforelastProps.disabledTooltip).toBe('');
    });

    it("should set the placeholder value with the placeholder props to all data in which it's index below the dataLimit", () => {
        const component = shallowWithState(
            <MultiValuesInput {...defaultProps} data={defaultAboveDataLimitValues} />,
            {}
        ).dive();

        const body = shallowWithState(
            <div>{(component.prop('renderBody') as any)(arrayOfMultilineSingleBoxAboveDataLimitProps)}</div>,
            {}
        );
        const oneInputConnectedBeforelastProps = body
            .find(InputConnected)
            .at(arrayOfMultilineSingleBoxAboveDataLimitProps.length - 2)
            .props();

        expect(oneInputConnectedBeforelastProps.placeholder).toBe(testInputProps.placeholder);
    });

    it("should set the placeholder value with the reachedLimitPlaceholder props to all data in which it's index above or equal the dataLimit", () => {
        const component = shallowWithState(
            <MultiValuesInput {...defaultProps} data={defaultAboveDataLimitValues} />,
            {}
        ).dive();

        const body = shallowWithState(
            <div>{(component.prop('renderBody') as any)(arrayOfMultilineSingleBoxAboveDataLimitProps)}</div>,
            {}
        );
        const lastInputConnectedProps = body.find(InputConnected).last().props();

        expect(lastInputConnectedProps.placeholder).toBe(defaultProps.reachedLimitPlaceholder);
    });

    it('should display the labelTitle only on the first input', () => {
        const component = shallowWithState(
            <MultiValuesInput {...defaultProps} data={defaultAboveDataLimitValues} />,
            {}
        ).dive();

        const body = shallowWithState(
            <div>{(component.prop('renderBody') as any)(arrayOfMultilineSingleBoxAboveDataLimitProps)}</div>,
            {}
        );
        const firstInputConnectedProps = body.find(InputConnected).first().props();
        const oneInputConnectedBeforelastProps = body
            .find(InputConnected)
            .at(arrayOfMultilineSingleBoxAboveDataLimitProps.length - 2)
            .props();

        expect(firstInputConnectedProps.labelTitle).toBe(testInputProps.labelTitle);
        expect(oneInputConnectedBeforelastProps.labelTitle).toBe('');
    });

    it("should only validate the first input's content", () => {
        const component = shallowWithState(<MultiValuesInput {...defaultProps} data={defaultValues} />, {}).dive();

        const body = shallowWithState(
            <div>{(component.prop('renderBody') as any)(arrayOfMultilineSingleBoxProps)}</div>,
            {}
        );

        const lastInputConnectedValidation = body.find(InputConnected).last().props().validate('');
        const firstInputConnectedValidation = body.find(InputConnected).first().props().validate('');

        expect(lastInputConnectedValidation).toBe(true);
        expect(firstInputConnectedValidation).toBe(false);
    });
});
