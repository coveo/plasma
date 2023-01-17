import {render, screen} from '@test-utils';
import userEvent from '@testing-library/user-event';

import {Filepicker} from '../Filepicker.js';
import {FilepickerSelectors} from '../FilepickerSelectors.js';

describe('Filepicker', () => {
    const file = new File(['hello'], 'hello.png', {type: 'image/png'});

    it('renders the specified placeholder', () => {
        render(<Filepicker id="🆔" placeholder="choose a file" />);

        expect(screen.getByText(/choose a file/i)).toBeInTheDocument();
    });

    it('displays the name of the uploaded file', async () => {
        render(<Filepicker id="🆔" placeholder="choose a file" />);
        const input = screen.getByLabelText(/choose a file/i);
        await userEvent.upload(input, file);

        expect(screen.getByText(/hello\.png/i)).toBeInTheDocument();
        expect(FilepickerSelectors.getFile('🆔')).toStrictEqual(file);
    });

    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('removes the selected file when clicking on the cross button', async () => {
        render(<Filepicker id="🆔" placeholder="choose a file" />);
        const input = screen.getByLabelText(/choose a file/i);
        await userEvent.upload(input, file);

        const clearButton = await screen.findByRole('button', {name: /cross/i});
        await userEvent.click(clearButton);

        expect(screen.getByText(/choose a file/i)).toBeInTheDocument();
    });
});
