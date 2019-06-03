import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';

import {Input} from '../../input/Input';
import {AddInputAction} from '../AddInputAction';
import {DeleteInputAction} from '../DeleteInputAction';
import {ISplitInput, ISplitMultilineInputProps, ISplitMultilineInputState, ISplitValue, SplitMultilineInput} from '../SplitMultilineInput';

describe('SplitMultilineInput', () => {
    const basicProps: ISplitMultilineInputProps = {
        inputs: [
            {
                id: 'first',
                label: 'First input',
            },
            {
                id: 'second',
                label: 'Second input',
            },
        ],
        defaultValues: [],
    };

    describe('<SplitMultilineInput />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <SplitMultilineInput {...basicProps} />,
                );
            }).not.toThrow();
        });
    });

    describe('<SplitMultilineInput />', () => {
        let splitMultilineInput: ReactWrapper<ISplitMultilineInputProps, ISplitMultilineInputState>;
        let splitMultilineInputInstance: SplitMultilineInput;

        const defaultValue: ISplitValue = {
            'first': 'something',
            'second': 'something else',
        };

        beforeEach(() => {
            splitMultilineInput = mount(
                <SplitMultilineInput {...basicProps} />,
                {attachTo: document.getElementById('App')},
            );
            splitMultilineInputInstance = splitMultilineInput.instance() as any;
        });

        afterEach(() => {
            splitMultilineInput.detach();
        });

        it('should get the inputs as a prop', () => {
            const inputsProp: ISplitInput[] = splitMultilineInput.props().inputs;

            expect(inputsProp).toBeDefined();
            expect(inputsProp).toEqual(basicProps.inputs);
        });

        it('should get the defaultValues as a prop', () => {
            const defaultValuesProps: ISplitValue[] = splitMultilineInput.props().defaultValues;

            expect(defaultValuesProps).toBeDefined();
            expect(defaultValuesProps).toEqual(basicProps.defaultValues);
        });

        it('should render an <AddInputAction /> when no values are specified', () => {
            const innerAddInput = splitMultilineInput.find(AddInputAction);

            expect(innerAddInput.length).toBe(1);
        });

        it('should render no <DeleteInputAction /> when no values are specified', () => {
            const innerDeleteInput = splitMultilineInput.find(DeleteInputAction);

            expect(innerDeleteInput.length).toBe(0);
        });

        it('should render one DeletableInput when one value is specified', () => {
            splitMultilineInput.setProps(_.extend({}, basicProps, {defaultValues: [defaultValue]})).update();
            const innerDeleteInput = splitMultilineInput.find(DeleteInputAction);

            expect(innerDeleteInput.length).toBe(1);
        });

        it('should not throw if the default values do not reference the inputs correctly', () => {
            expect(() => splitMultilineInput.setProps(_.extend({}, basicProps, {
                defaultValues: [{
                    'third': 'where does this value go?',
                }],
            }))).not.toThrow();
        });

        it('should call removeLine with the index of the input when clicking the delete input action', () => {
            const removeLineSpy: jasmine.Spy = spyOn<any>(splitMultilineInputInstance, 'removeLine');
            splitMultilineInput.setProps(_.extend({}, basicProps, {defaultValues: [defaultValue]})).update();

            splitMultilineInput.find(DeleteInputAction).simulate('click');
            splitMultilineInput.update();

            expect(removeLineSpy).toHaveBeenCalledTimes(1);
            expect(removeLineSpy).toHaveBeenCalledWith(0);
        });

        it('should call changeValue when an existing input is changed', () => {
            const changeValueSpy: jasmine.Spy = spyOn<any>(splitMultilineInputInstance, 'changeValue');
            const expectedValue: string = 'a new value';

            splitMultilineInput.setProps(_.extend({}, basicProps, {defaultValues: [defaultValue]})).update();
            splitMultilineInput.find(Input).first().props().onChange(expectedValue, true);

            expect(changeValueSpy).toHaveBeenCalledTimes(1);
            expect(changeValueSpy).toHaveBeenCalledWith(expectedValue, true, 0, _.keys(defaultValue)[0], jasmine.anything());
        });

        it('should call addLine when clicking the <AddInputAction />', () => {
            const addLineSpy: jasmine.Spy = spyOn<any>(splitMultilineInputInstance, 'addLine');

            splitMultilineInput.find(AddInputAction).simulate('click');

            expect(addLineSpy).toHaveBeenCalledTimes(1);
            expect(addLineSpy.calls.mostRecent().args[0].length).toBe(basicProps.inputs.length);
        });

        it('should send the validation to the <Input /> if there is a validation set on an split input', () => {
            const newProps: ISplitMultilineInputProps = _.extend({}, basicProps, {
                inputs: [
                    {
                        id: 'new',
                        label: 'New',
                        validation: (value: any) => true,
                    },
                ],
                defaultValues: [{
                    'new': 'a default value',
                }],
            });
            splitMultilineInput.setProps(newProps);

            expect(splitMultilineInput.find(Input).first().props().validate('anything')).toBe(true);
            expect(splitMultilineInput.find(Input).last().props().validate('anything')).toBe(true);

            newProps.inputs[0].validation = (value: any) => false;
            splitMultilineInput.setProps(newProps);

            expect(splitMultilineInput.find(Input).first().props().validate('anything')).toBe(false);
            expect(splitMultilineInput.find(Input).last().props().validate('anything')).toBe(false);
        });

        it('should remove the split value from the state when calling removeLine with the index of the value', () => {
            splitMultilineInput.setProps(_.extend({}, basicProps, {
                defaultValues: [
                    defaultValue,
                    {
                        'first': 'another one',
                        'second': 'second input of the second value',
                    },
                ],
            }));

            expect(splitMultilineInput.state().values.length).toBe(2);

            (splitMultilineInputInstance as any).removeLine(1);

            expect(splitMultilineInput.state().values.length).toBe(1);
            expect(splitMultilineInput.state().values[0]).toEqual(defaultValue);

            (splitMultilineInputInstance as any).removeLine(0);

            expect(splitMultilineInput.state().values.length).toBe(0);
        });

        it('should add the new value to the state when calling addLine and there is no error', () => {
            const expectedValue: string = 'new value';

            spyOn(Input.prototype, 'getInnerValue').and.returnValue(expectedValue);

            splitMultilineInput.find(AddInputAction).simulate('click');

            expect(splitMultilineInput.state().values.length).toBe(1);
            expect(splitMultilineInput.state().values[0][basicProps.inputs[0].id]).toBe(expectedValue);
            expect(splitMultilineInput.state().values[0][basicProps.inputs[1].id]).toBe(expectedValue);
        });

        it('should reset the inputs of the line to add if the value was successfully added', () => {
            const resetSpy: jasmine.Spy = spyOn(Input.prototype, 'reset');

            splitMultilineInput.find(AddInputAction).simulate('click');

            expect(resetSpy).toHaveBeenCalledTimes(2);
        });

        it('should not add the new value if an input is in error', () => {
            const newProps: ISplitMultilineInputProps = _.extend({}, basicProps, {
                inputs: [
                    {
                        id: 'new',
                        label: 'New',
                        validation: (value: any) => false,
                    },
                ],
            });
            splitMultilineInput.setProps(newProps);

            splitMultilineInput.find(AddInputAction).simulate('click');

            expect(splitMultilineInput.state().values.length).toBe(0);
        });

        it('should not reset the inputs if an input is in error', () => {
            const resetSpy: jasmine.Spy = spyOn(Input.prototype, 'reset');
            const newProps: ISplitMultilineInputProps = _.extend({}, basicProps, {
                inputs: [
                    {
                        id: 'new',
                        label: 'New',
                        validation: (value: any) => false,
                    },
                ],
            });
            splitMultilineInput.setProps(newProps);

            splitMultilineInput.find(AddInputAction).simulate('click');

            expect(resetSpy).not.toHaveBeenCalled();
        });

        it('should change the value of an input in the state when calling changeValue', () => {
            const expectedValue: string = 'the value has been changed';
            const valueId: string = basicProps.inputs[0].id;

            splitMultilineInput.setProps(_.extend({}, basicProps, {defaultValues: [defaultValue]}));

            (splitMultilineInputInstance as any).changeValue(expectedValue, true, 0, valueId, undefined);

            expect(splitMultilineInput.state().values[0][valueId]).toBe(expectedValue);
        });

        it('should not change the value if it is not valid', () => {
            const unexpectedValue: string = 'the value has been changed!';
            const valueId: string = basicProps.inputs[0].id;
            const input: any = {
                validate: jasmine.createSpy('validate'),
            };

            splitMultilineInput.setProps(_.extend({}, basicProps, {defaultValues: [defaultValue]}));

            (splitMultilineInputInstance as any).changeValue(unexpectedValue, false, 0, valueId, input);

            expect(splitMultilineInput.state().values[0][valueId]).not.toBe(unexpectedValue);
            expect(splitMultilineInput.state().values[0][valueId]).toBe(defaultValue[valueId]);
        });

        it('should call onChange if it is set as a prop when calling handleChange', () => {
            const newProps: ISplitMultilineInputProps = _.extend({}, basicProps, {onChange: jasmine.createSpy('onChange')});

            expect(() => (splitMultilineInputInstance as any).handleChange()).not.toThrow();

            splitMultilineInput.setProps(newProps);

            (splitMultilineInputInstance as any).handleChange();

            expect(newProps.onChange).toHaveBeenCalledTimes(1);
        });
    });
});
