import {Container} from '@mantine/core';
import {render, screen, fireEvent} from '@test-utils';
import {Modal} from '../Modal';

describe('Modal', () => {
    it('renders title, desctiption, close button, and child', () => {
        render(
            <Modal opened onClose={jest.fn()} title="title" description="modal description">
                <Container>Children</Container>
            </Modal>
        );

        expect(screen.getByText(/title/i)).toBeInTheDocument();
        expect(screen.getByText(/modal description/i)).toBeInTheDocument();
        expect(screen.getByText(/Children/i)).toBeInTheDocument();
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('trigger onClose function when click on the close button', () => {
        const onClose = jest.fn();
        render(
            <Modal opened onClose={onClose} title="title">
                <Container>Children</Container>
            </Modal>
        );

        fireEvent.click(screen.getByRole('button'));

        expect(onClose).toHaveBeenCalled();
    });
});
1;
