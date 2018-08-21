import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as _ from 'underscore';
import {IOptionPickerProps, OptionPicker} from '../OptionPicker';

describe('Option picker', () => {
    const OPTION_PICKER_BASIC_PROPS: IOptionPickerProps = {
        options: [
            {
                label: 'Option 1',
                value: () => 'optionValue',
            },
            {
                label: 'Option 2',
                value: () => '1238',
            },
        ],
    };

    describe('<OptionPicker />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <OptionPicker {...OPTION_PICKER_BASIC_PROPS} />,
                );
            }).not.toThrow();
        });
    });

    describe('<OptionPicker />', () => {
        let optionPicker: ReactWrapper<IOptionPickerProps, any>;
        let optionPickerInstance: OptionPicker;

        beforeEach(() => {
            optionPicker = mount(
                <OptionPicker {...OPTION_PICKER_BASIC_PROPS} />,
                {attachTo: document.getElementById('App')},
            );
            optionPickerInstance = optionPicker.instance() as OptionPicker;
        });

        afterEach(() => {
            optionPicker.detach();
        });

        it('should get the options as a prop', () => {
            const optionsProp = optionPicker.props().options;

            expect(optionsProp).toBeDefined();
            expect(optionsProp).toEqual(OPTION_PICKER_BASIC_PROPS.options);
        });

        it('should display as many <Option /> as there are options in the options prop', () => {
            const moreOptionsProps: IOptionPickerProps = _.extend({}, OPTION_PICKER_BASIC_PROPS,
                {
                    options: [
                        ...OPTION_PICKER_BASIC_PROPS.options,
                        {
                            label: 'Option 3',
                            value: () => 'aaa',
                        },
                    ],
                },
            );

            expect(optionPicker.find('Option').length).toBe(OPTION_PICKER_BASIC_PROPS.options.length);

            optionPicker.setProps(moreOptionsProps);

            expect(optionPicker.find('Option').length).toBe(moreOptionsProps.options.length);
        });

        it('should call prop onRender on mounting if set', () => {
            const renderSpy: jasmine.Spy = jasmine.createSpy('onRender');
            const withRenderProps: IOptionPickerProps = _.extend({}, OPTION_PICKER_BASIC_PROPS, {onRender: renderSpy});

            expect(() => optionPickerInstance.componentWillMount()).not.toThrow();

            optionPicker.setProps(withRenderProps);
            optionPicker.unmount();
            optionPicker.mount();

            expect(renderSpy).toHaveBeenCalledTimes(1);
        });

        it('should call prop onDestroy on unmounting if set', () => {
            const destroySpy: jasmine.Spy = jasmine.createSpy('onDestroy');
            const withDestroyProps: IOptionPickerProps = _.extend({}, OPTION_PICKER_BASIC_PROPS, {onDestroy: destroySpy});

            expect(() => optionPickerInstance.componentWillUnmount()).not.toThrow();

            optionPicker.setProps(withDestroyProps);
            optionPicker.mount();
            optionPicker.unmount();

            expect(destroySpy).toHaveBeenCalledTimes(1);
        });

        it('should call prop onClick on mounting if set when calling handleClick', () => {
            const onClickSpy: jasmine.Spy = jasmine.createSpy('onClick');
            const expectedValue: string = 'value';
            const expectedLabel: string = 'label';
            const withOnClickProps: IOptionPickerProps = _.extend({}, OPTION_PICKER_BASIC_PROPS, {onClick: onClickSpy});

            expect(() => optionPickerInstance['handleClick'].call(optionPickerInstance, expectedValue, expectedLabel)).not.toThrow();
            expect(onClickSpy).not.toHaveBeenCalled();

            optionPicker.setProps(withOnClickProps);
            optionPickerInstance['handleClick'].call(optionPickerInstance, expectedValue, expectedLabel);

            expect(onClickSpy).toHaveBeenCalledWith(expectedValue, expectedLabel);
        });

        it('should call handleClick when clicking an option', () => {
            const handleClickSpy: jasmine.Spy = spyOn<any>(optionPickerInstance, 'handleClick');

            optionPicker.find('Option').first().find('button').simulate('click');

            expect(handleClickSpy).toHaveBeenCalledWith(
                OPTION_PICKER_BASIC_PROPS.options[0].value(),
                OPTION_PICKER_BASIC_PROPS.options[0].label,
            );
        });
    });
});
