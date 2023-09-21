import userEvent from '@testing-library/user-event';
import * as _ from 'underscore';
import {screen, render} from '@test-utils';

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
        it('should display as many <Option /> as there are options in the options prop', () => {
            const moreOptionsProps: IOptionPickerProps = _.extend({}, OPTION_PICKER_BASIC_PROPS, {
                options: [
                    ...OPTION_PICKER_BASIC_PROPS.options,
                    {
                        label: 'Option 3',
                        value: () => 'aaa',
                    },
                ],
            });

            render(<OptionPicker {...moreOptionsProps} />);
            expect(screen.getAllByRole('button').length).toBe(3);
        });

        it('render a disabled option if disabled is set to true', () => {
            const moreOptionsProps: IOptionPickerProps = _.extend({}, OPTION_PICKER_BASIC_PROPS, {
                options: [
                    ...OPTION_PICKER_BASIC_PROPS.options,
                    {
                        label: 'Option 3',
                        value: () => 'aaa',
                        disabled: true,
                    },
                ],
            });

            render(<OptionPicker {...moreOptionsProps} />);
            expect(screen.getByRole('button', {name: /Option 3/i})).toBeDisabled();
        });

        it('should call prop onRender on mounting if set', () => {
            const renderSpy: jest.Mock<any, any> = jest.fn();
            const withRenderProps: IOptionPickerProps = _.extend({}, OPTION_PICKER_BASIC_PROPS, {onRender: renderSpy});
            render(<OptionPicker {...withRenderProps} />);

            expect(renderSpy).toHaveBeenCalledTimes(1);
        });

        it('should call prop onDestroy on unmounting if set', () => {
            const destroySpy: jest.Mock<any, any> = jest.fn();
            const withDestroyProps: IOptionPickerProps = _.extend({}, OPTION_PICKER_BASIC_PROPS, {
                onDestroy: destroySpy,
            });

            const {unmount} = render(<OptionPicker {...withDestroyProps} />);
            unmount();

            expect(destroySpy).toHaveBeenCalledTimes(1);
        });

        it('should call onClick if defined when clicking an option', async () => {
            const user = userEvent.setup();
            const onClickSpy: jest.SpyInstance = jest.fn();
            const withOnClickProps: IOptionPickerProps = _.extend({}, OPTION_PICKER_BASIC_PROPS, {
                onClick: onClickSpy,
            });

            render(<OptionPicker {...withOnClickProps} />);
            const optionButton = screen.getByRole('button', {name: /Option 1/i});
            await await user.click(optionButton);
            expect(onClickSpy).toHaveBeenCalledWith(
                OPTION_PICKER_BASIC_PROPS.options[0].value(),
                OPTION_PICKER_BASIC_PROPS.options[0].label,
            );
        });
    });
});
