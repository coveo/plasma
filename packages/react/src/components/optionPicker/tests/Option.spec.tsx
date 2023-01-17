import * as _ from 'underscore';
import userEvent from '@testing-library/user-event';

import {render, screen} from '@test-utils';

import {IOptionProps, Option} from '../Option.js';

describe('Option picker', () => {
    let OPTION_BASIC_PROPS: IOptionProps;

    beforeAll(() => {
        OPTION_BASIC_PROPS = {
            option: {
                label: 'Option 1',
                value: () => 'optionValue',
            },
            isActive: false,
            onClick: jest.fn(),
        };
    });

    describe('<Option />', () => {
        it('should display the option label', () => {
            render(<Option {...OPTION_BASIC_PROPS} />);
            expect(screen.getByText(/Option 1/i)).toBeInTheDocument();
        });

        it('should have the active class if isActive prop is set to true', () => {
            const activeOptionProps = _.extend({}, OPTION_BASIC_PROPS, {isActive: true});

            render(<Option {...activeOptionProps} />);

            expect(screen.getByRole('button')).toHaveClass('active');
        });

        it('should call the onClick prop with the result of the option value when clicking the button', async () => {
            render(<Option {...OPTION_BASIC_PROPS} />);
            const optionButton = screen.getByRole('button', {name: /Option 1/i});
            await userEvent.click(optionButton);

            expect(OPTION_BASIC_PROPS.onClick).toHaveBeenCalledWith(
                OPTION_BASIC_PROPS.option.value(),
                OPTION_BASIC_PROPS.option.label
            );
        });

        it('is disabled if disabled prop is set to true', () => {
            render(
                <Option
                    option={{label: 'Option 1', value: () => 'optionValue', disabled: true}}
                    isActive={false}
                    onClick={() => jest.fn()}
                />
            );
            expect(screen.getByRole('button')).toBeDisabled();
        });
    });
});
