import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';

import {InputConnected} from '../../input/InputConnected';
import {IMultilineSingleBoxProps} from '../../multilineBox/MultilineBox';
import {MultiValuesInput} from '../MultiValuesInput';

describe('MultiValuesInput', () => {
    const defaultValues = ['🚕', '🚌', '🚒'];
    const defaultAboveDataLimitValues = ['🚕', '🚌', '🚒', '⌚', ''];
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
        {id: 'test4', isLast: false, props: ''},
    ];

    const testInputProps = {
        placeholder: 'a placeholder',
        labelTitle: 'a title',
        validate: (value: string) => !!value,
        validateOnMount: true,
        classes: 'class',
        innerInputClasses: 'inner',
    };

    const defaultProps = {
        id: '🚗',
        dataLimit: 3,
        inputProps: testInputProps,
        reachedLimitPlaceholder: 'a reached placeholder',
        disabledTooltipTitle: "this input can't edited",
        disabledInputInnerClasses: 'disabledInner',
        disabledInputClasses: 'disabledClass',
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

        expect(lastInputConnectedProps.isReadOnly).toBe(true);
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

        expect(lastInputConnectedProps.defaultValue).toBe('');
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

        expect(lastInputConnectedProps.isReadOnly).toBe(true);
    });

    it('should include the disabledInputInnerClasses if the inputs indexes are below the dataLimit', () => {
        const component = shallowWithState(
            <MultiValuesInput {...defaultProps} data={defaultAboveDataLimitValues} />,
            {}
        ).dive();

        const body = shallowWithState(
            <div>{(component.prop('renderBody') as any)(arrayOfMultilineSingleBoxAboveDataLimitProps)}</div>,
            {}
        );
        const lastInputConnectedProps = body.find(InputConnected).first().props();

        expect(lastInputConnectedProps.innerInputClasses).not.toContain('disabledInner');
    });

    it('should include the classes set in the classes prop in all inputs', () => {
        const component = shallowWithState(
            <MultiValuesInput {...defaultProps} data={defaultAboveDataLimitValues} />,
            {}
        ).dive();

        const body = shallowWithState(
            <div>{(component.prop('renderBody') as any)(arrayOfMultilineSingleBoxAboveDataLimitProps)}</div>,
            {}
        );
        const firstInputConnectedProps = body.find(InputConnected).first().props();
        const lastInputConnectedProps = body.find(InputConnected).last().props();

        expect(firstInputConnectedProps.classes).toContain('class');
        expect(lastInputConnectedProps.classes).toContain('class');
    });

    it('should include the innerInputClasses set in the innerInputClasses prop in all inputs', () => {
        const component = shallowWithState(
            <MultiValuesInput {...defaultProps} data={defaultAboveDataLimitValues} />,
            {}
        ).dive();

        const body = shallowWithState(
            <div>{(component.prop('renderBody') as any)(arrayOfMultilineSingleBoxAboveDataLimitProps)}</div>,
            {}
        );

        const firstInputConnectedProps = body.find(InputConnected).first().props();
        const lastInputConnectedProps = body.find(InputConnected).last().props();

        expect(firstInputConnectedProps.innerInputClasses).toContain('inner');
        expect(lastInputConnectedProps.innerInputClasses).toContain('inner');
    });

    it('should include the disabledInputInnerClasses if the inputs indexes are above or equal the dataLimit', () => {
        const component = shallowWithState(
            <MultiValuesInput {...defaultProps} data={defaultAboveDataLimitValues} />,
            {}
        ).dive();

        const body = shallowWithState(
            <div>{(component.prop('renderBody') as any)(arrayOfMultilineSingleBoxAboveDataLimitProps)}</div>,
            {}
        );
        const lastInputConnectedProps = body.find(InputConnected).last().props();

        expect(lastInputConnectedProps.innerInputClasses).toContain('disabledInner');
    });

    it('should include the disabledInputClasses if the inputs indexes are below the dataLimit', () => {
        const component = shallowWithState(
            <MultiValuesInput {...defaultProps} data={defaultAboveDataLimitValues} />,
            {}
        ).dive();

        const body = shallowWithState(
            <div>{(component.prop('renderBody') as any)(arrayOfMultilineSingleBoxAboveDataLimitProps)}</div>,
            {}
        );
        const lastInputConnectedProps = body.find(InputConnected).first().props();

        expect(lastInputConnectedProps.classes).not.toContain('disabledClass');
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
        const oneInputConnectedBeforelastProps = body.find(InputConnected).first().props();

        expect(oneInputConnectedBeforelastProps.isReadOnly).toBe(false);
    });

    it("should include a Tooltip if set to all data in which it's index are above the dataLimit", () => {
        const component = shallowWithState(
            <MultiValuesInput {...defaultProps} data={defaultAboveDataLimitValues} />,
            {}
        ).dive();

        const body = shallowWithState(
            <div>{(component.prop('renderBody') as any)(arrayOfMultilineSingleBoxAboveDataLimitProps)}</div>,
            {}
        );
        const lastInputConnectedProps = body
            .find(InputConnected)
            .at(defaultAboveDataLimitValues.length - 2)
            .props();

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
        const oneInputConnectedBeforelastProps = body.find(InputConnected).first().props();

        expect(oneInputConnectedBeforelastProps.disabledTooltip).toBe('');
    });

    it("should NOT includes a Tooltip if the input value is empty even if it's index is above the dataLimit", () => {
        const component = shallowWithState(
            <MultiValuesInput {...defaultProps} data={defaultAboveDataLimitValues} />,
            {}
        ).dive();

        const body = shallowWithState(
            <div>{(component.prop('renderBody') as any)(arrayOfMultilineSingleBoxAboveDataLimitProps)}</div>,
            {}
        );
        const oneInputConnectedBeforelastProps = body.find(InputConnected).last().props();

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
        const oneInputConnectedBeforelastProps = body.find(InputConnected).first().props();

        expect(oneInputConnectedBeforelastProps.placeholder).toBe(testInputProps.placeholder);
    });

    it("should set the placeholder value with the reachedLimitPlaceholder props to all data in which it's index above the dataLimit", () => {
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

    it('should set the reachedLimitPlaceholder to undefined if the number of input reached the limit, but not above', () => {
        const emptyReachedLimitPlaceholderValues = ['🚕', ''];
        const arrayOfMultilineSingleBoxReachedLimitPlaceholderProps: Array<IMultilineSingleBoxProps<string>> = [
            {id: 'test1', isLast: false, props: '🚕'},
            {id: 'test2', isLast: false, props: ''},
        ];
        const emptyReachedLimitPlaceholderProps = {
            id: '🚗',
            dataLimit: 1,
            inputProps: testInputProps,
            disabledTooltipTitle: "this input can't edited",
        };
        const component = shallowWithState(
            <MultiValuesInput {...emptyReachedLimitPlaceholderProps} data={emptyReachedLimitPlaceholderValues} />,
            {}
        ).dive();

        const body = shallowWithState(
            <div>{(component.prop('renderBody') as any)(arrayOfMultilineSingleBoxReachedLimitPlaceholderProps)}</div>,
            {}
        );

        const lastInputConnectedValidation = body.find(InputConnected).last().props();

        expect(lastInputConnectedValidation.placeholder).toBe(undefined);
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
        const oneInputConnectedBeforelastProps = body.find(InputConnected).last().props();

        expect(firstInputConnectedProps.labelTitle).toBe(testInputProps.labelTitle);
        expect(oneInputConnectedBeforelastProps.labelTitle).toBe('');
    });

    it("should validate all the inputs' content", () => {
        const component = shallowWithState(<MultiValuesInput {...defaultProps} data={defaultValues} />, {}).dive();

        const body = shallowWithState(
            <div>{(component.prop('renderBody') as any)(arrayOfMultilineSingleBoxProps)}</div>,
            {}
        );

        const lastInputConnectedValidation = body.find(InputConnected).last().props().validate('');
        const firstInputConnectedValidation = body.find(InputConnected).first().props().validate('');

        expect(lastInputConnectedValidation).toBe(false);
        expect(firstInputConnectedValidation).toBe(false);
    });

    it('should NOT display a tooltip on the last input if the reachedLimitPlaceholder is not set', () => {
        const emptyReachedLimitPlaceholderValues = ['🚕', ''];
        const arrayOfMultilineSingleBoxReachedLimitPlaceholderProps: Array<IMultilineSingleBoxProps<string>> = [
            {id: 'test1', isLast: false, props: '🚕'},
            {id: 'test2', isLast: false, props: ''},
        ];
        const emptyReachedLimitPlaceholderProps = {
            id: '🚗',
            dataLimit: 1,
            inputProps: testInputProps,
            disabledTooltipTitle: "this input can't edited",
        };
        const component = shallowWithState(
            <MultiValuesInput {...emptyReachedLimitPlaceholderProps} data={emptyReachedLimitPlaceholderValues} />,
            {}
        ).dive();

        const body = shallowWithState(
            <div>{(component.prop('renderBody') as any)(arrayOfMultilineSingleBoxReachedLimitPlaceholderProps)}</div>,
            {}
        );

        const lastInputConnectedValidation = body.find(InputConnected).last().props();

        expect(lastInputConnectedValidation.disabledTooltip).toBe('');
    });
});
