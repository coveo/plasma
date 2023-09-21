import {render, screen, within} from '@test-utils';
import userEvent from '@testing-library/user-event';

import {SetToNowButton} from '../SetToNowButton';

describe('SetToNowButton', () => {
    it('renders a button that has a calendar icon in it', async () => {
        render(<SetToNowButton onClick={jest.fn()} />);

        const setToNowButton = screen.getByRole('button');
        expect(setToNowButton).toBeInTheDocument();
        expect(await within(setToNowButton).findByRole('img', {name: 'calendar'})).toBeInTheDocument();
    });

    it('calls the onClick prop when clicking on the button', async () => {
        const user = userEvent.setup();
        const onClickSpy = jest.fn();
        render(<SetToNowButton onClick={onClickSpy} />);

        await user.click(screen.getByRole('button'));
        expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
});
