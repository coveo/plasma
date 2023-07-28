import {render, screen} from '@test-utils';
import userEvent from '@testing-library/user-event';

import {MultiValuesInput} from '../MultiValuesInput';

describe('MultiValuesInput', () => {
    const defaultProps = {
        id: '🚗',
        dataLimit: 3,
    };

    it('should render and unmount without throwing errors', () => {
        expect(() => {
            const {unmount} = render(<MultiValuesInput {...defaultProps} data={['🚕', '🚌', '🚒']} />);
            unmount();
        }).not.toThrow();
    });

    it('should create an input for every value in data, plus one to add a value', () => {
        render(<MultiValuesInput {...defaultProps} data={['🚕', '🚌', '🚒']} />, {});

        expect(screen.getAllByRole('textbox').length).toBe(3 + 1);
    });

    it('disable the add input if a dataLimit is set and reached', () => {
        render(<MultiValuesInput {...defaultProps} dataLimit={3} data={['🚕', '🚌', '🚒']} />, {});

        expect(screen.getAllByRole('textbox')[3]).toBeDisabled();
    });

    it('should display all data, even if the data length are above the dataLimit', () => {
        render(<MultiValuesInput {...defaultProps} dataLimit={3} data={['🚕', '🚌', '🚒', '⌚', '⏰']} />, {});

        expect(screen.getAllByRole('textbox').length).toBe(5 + 1);
    });

    it('keeps enabled all the inputs with an index under the dataLimit', () => {
        const LIMIT = 3;
        render(<MultiValuesInput {...defaultProps} dataLimit={LIMIT} data={['🚕', '🚌', '🚒', '⌚', '⏰']} />, {});

        for (let i = 0; i < LIMIT; i++) {
            expect(screen.getAllByRole('textbox')[i]).toBeEnabled();
        }
    });

    it('disable all the inputs with an index above or equal to the dataLimit', () => {
        const LIMIT = 3;
        render(<MultiValuesInput {...defaultProps} dataLimit={3} data={['🚕', '🚌', '🚒', '⌚', '⏰']} />, {});

        for (let i = LIMIT; i < 6; i++) {
            expect(screen.getAllByRole('textbox')[i]).toBeDisabled();
        }
    });

    it('should include the classes set in the classes prop in all inputs', () => {
        render(
            <MultiValuesInput
                {...defaultProps}
                inputProps={{classes: 'potato', innerInputClasses: 'potatoes'}}
                dataLimit={12}
                data={['🚕', '🚌', '🚒']}
            />,
        );

        expect(document.querySelectorAll('.potato').length).toBe(3 + 1);
        expect(document.querySelectorAll('.potatoes').length).toBe(3 + 1);
    });

    it('adds the disabledInputInnerClasses and disabledInputClasses if the inputs indexes are above or equal the dataLimit', () => {
        render(
            <MultiValuesInput
                {...defaultProps}
                disabledInputInnerClasses={'disabled-inner-selector'}
                disabledInputClasses={'disabled-selector'}
                dataLimit={2}
                data={['🚕', '🚌', '🚒', '⌚', '⏰']}
            />,
        );

        expect(document.querySelectorAll('.disabled-inner-selector').length).toBe(4);
        expect(document.querySelectorAll('.disabled-selector').length).toBe(4);
    });

    it('includes a tooltip for inputs with an index equal or above the dataLimit', async () => {
        render(
            <MultiValuesInput
                {...defaultProps}
                disabledTooltipTitle={'You have no power here'}
                dataLimit={3}
                data={['🚕', '🚌', '🚒', '⌚', '⏰']}
            />,
        );

        expect(screen.getAllByRole('textbox')[3].parentElement).toHaveAttribute('aria-labelledby');
        await userEvent.hover(screen.getAllByRole('textbox')[3].parentElement);

        expect(await screen.findByText('You have no power here')).toBeVisible();
    });

    it('does not include a Tooltip for elements below the dataLimit', () => {
        render(
            <MultiValuesInput
                {...defaultProps}
                disabledTooltipTitle={'You have no power here'}
                dataLimit={3}
                data={['🚕', '🚌', '🚒', '⌚', '⏰']}
            />,
        );
        expect(screen.getAllByRole('textbox')[2].parentElement).not.toHaveAttribute('aria-labelledby');
    });

    it("does not includes a Tooltip if the input value is empty even if it's index is above the dataLimit", () => {
        render(
            <MultiValuesInput
                {...defaultProps}
                disabledTooltipTitle={'You have no power here'}
                dataLimit={1}
                data={['🚕', '']}
            />,
        );

        expect(screen.getAllByRole('textbox')[1].parentElement).not.toHaveAttribute('aria-labelledby');
    });

    it('sets the placeholder to all input under the dataLimit', () => {
        render(
            <MultiValuesInput
                {...defaultProps}
                inputProps={{placeholder: 'This is my seat'}}
                dataLimit={3}
                data={['🚕', '🚌', '🚒', '⌚', '⏰']}
            />,
        );

        expect(screen.getAllByPlaceholderText('This is my seat').length).toBe(3);
    });

    it('overrides the placeholder with the reachedLimitPlaceholder props for inputs above the dataLimit', () => {
        render(
            <MultiValuesInput
                {...defaultProps}
                inputProps={{placeholder: 'This is my seat'}}
                reachedLimitPlaceholder="No it is mine"
                dataLimit={2}
                data={['🚕', '🚌', '🚒', '⌚', '⏰']}
            />,
        );

        expect(screen.getAllByPlaceholderText('No it is mine').length).toBe(3);
    });

    it('should set the reachedLimitPlaceholder to undefined if the number of input reached the limit, but not above', () => {
        render(
            <MultiValuesInput
                {...defaultProps}
                inputProps={{placeholder: 'This is my seat'}}
                reachedLimitPlaceholder="No it is mine"
                dataLimit={2}
                data={['🚕', '🚌']}
            />,
        );

        expect(screen.getAllByRole('textbox')[2].parentElement).not.toHaveAttribute('placeholder');
    });

    it('displays a label on the first input', () => {
        render(<MultiValuesInput {...defaultProps} inputProps={{labelTitle: 'hello world'}} data={['🚕', '🚌']} />);

        expect(screen.getByText('hello world')).toBeVisible();
        expect(screen.getAllByText('hello world').length).toBe(1);
    });

    it("validates all the inputs' content", async () => {
        render(
            <MultiValuesInput
                {...defaultProps}
                inputProps={{
                    validate: (value: string) => value.length < 5,
                    validateOnChange: true,
                    labelProps: {invalidMessage: 'too much food'},
                }}
                data={['🍍', '🍓']}
            />,
        );
        await userEvent.type(screen.getAllByRole('textbox')[1], '🍎🍐🍒🍉🍍');
        expect(screen.getAllByRole('textbox')[1]).toHaveClass('invalid');
    });

    it('does not add a tooltip on the last input if the reachedLimitPlaceholder is not set', () => {
        render(
            <MultiValuesInput
                {...defaultProps}
                disabledTooltipTitle={'You have no power here'}
                reachedLimitPlaceholder={undefined}
                dataLimit={1}
                data={['🚕']}
            />,
        );
        expect(screen.getAllByRole('textbox')[1].parentElement).not.toHaveAttribute('aria-labelledby');
    });
});
