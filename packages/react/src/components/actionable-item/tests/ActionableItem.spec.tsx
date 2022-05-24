import {render, screen} from '@test-utils';
import userEvent from '@testing-library/user-event';

import {ActionableItem} from '../ActionableItem';

describe('ActionableItem', () => {
    it('renders the content passed down the children', () => {
        render(<ActionableItem id="🆔">the content</ActionableItem>);

        expect(screen.getByText(/the content/i)).toBeInTheDocument();
    });

    it('renders a button if the onItemClick prop was provided', () => {
        const onClickSpy = jest.fn();
        render(
            <ActionableItem id="🆔" onItemClick={onClickSpy}>
                the content
            </ActionableItem>
        );
        userEvent.click(screen.getByRole('button', {name: /the content/i}));
        expect(onClickSpy).toHaveBeenCalledTimes(1);
    });

    it('renders the specified actions as a menu that can be opened by clicking on the dots', async () => {
        const onClickSpy = jest.fn();
        render(
            <ActionableItem
                id="🆔"
                actions={[
                    {value: 'action 1', onOptionClick: () => onClickSpy('action 1')},
                    {value: 'action 2', onOptionClick: () => onClickSpy('action 2')},
                ]}
            >
                the content
            </ActionableItem>
        );
        userEvent.click(await screen.findByRole('button', {name: /dots/i}));
        userEvent.click(screen.getByText(/action 2/i));
        expect(onClickSpy).toHaveBeenCalledTimes(1);
        expect(onClickSpy).toHaveBeenCalledWith('action 2');
    });

    it('indicates the dots button as opened when the actions menu is opened', async () => {
        render(
            <ActionableItem id="🆔" actions={[{value: 'action 1'}, {value: 'action 2'}]}>
                the content
            </ActionableItem>
        );
        const dotsButton = await screen.findByRole('button', {name: /dots/i});
        userEvent.click(dotsButton);
        expect(dotsButton).toHaveClass('open');
    });
});
