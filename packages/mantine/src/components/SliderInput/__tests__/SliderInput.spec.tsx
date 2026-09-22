import {render, screen} from '@test-utils';

import {SliderInput} from '../SliderInput.js';

describe('SliderInput', () => {
    it('renders the slider and its input content', () => {
        render(
            <SliderInput
                inputLabel="Percentage"
                inputDescription="Select a percentage."
                inputError="Select a valid percentage."
            />,
        );

        expect(screen.getByRole('slider')).toBeInTheDocument();
        expect(screen.getByText('Percentage')).toBeInTheDocument();
        expect(screen.getByText('Select a percentage.')).toBeInTheDocument();
        expect(screen.getByText('Select a valid percentage.')).toBeInTheDocument();
    });
});
