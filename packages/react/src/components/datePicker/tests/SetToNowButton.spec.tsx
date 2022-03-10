import {render, screen, within} from '@test-utils';
import userEvent from '@testing-library/user-event';
import * as React from 'react';

import {SetToNowButton} from '../SetToNowButton';

describe('SetToNowButton', () => {
    it('renders a button that has a calendar icon in it', () => {
        render(<SetToNowButton onClick={jest.fn()} />);

        const setToNowButton = screen.getByRole('button');
        expect(setToNowButton).toBeInTheDocument();
        expect(within(setToNowButton).getByRole('img', {name: 'setToNow icon'})).toBeInTheDocument();
    });

    it('calls the onClick prop when clicking on the button', () => {
        const onClickSpy = jest.fn();
        render(<SetToNowButton onClick={onClickSpy} />);

        userEvent.click(screen.getByRole('button'));
        expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
});
