import {render, screen} from '@test-utils';
import {Modal} from '../Modal';

describe('Modal', () => {
    it('title, body and close button is displayed', () => {
        render(
            <Modal opened onClose={jest.fn()} title="title modal">
                content modal
                <Modal.Footer>footer content</Modal.Footer>
            </Modal>
        );
        expect(screen.getByText(/content modal/i)).toBeInTheDocument();
        expect(screen.getByText(/footer content/i)).toBeInTheDocument();
        expect(screen.getByText(/title modal/i)).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('Call onClose when click on the close button', () => {
        const onClose = jest.fn();
        render(
            <Modal opened onClose={onClose} title="title modal">
                content modal
            </Modal>
        );

        screen.getByRole('button').click();
        expect(onClose).toHaveBeenCalledTimes(1);
    });
});
