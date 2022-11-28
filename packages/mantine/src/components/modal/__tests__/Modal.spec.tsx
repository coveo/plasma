import {Container} from '@mantine/core';
import {render, screen, fireEvent} from '@test-utils';
import {Modal} from '../Modal';

describe('Modal', () => {
    it('renders title, close button, and child', () => {
        render(
            <Modal opened onClose={jest.fn()} header={{title: 'title'}}>
                <Container>Children</Container>
            </Modal>
        );

        expect(screen.getByText(/title/i)).toBeInTheDocument();
        expect(screen.getByText(/Children/i)).toBeInTheDocument();
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('trigger onClose function when click on the close button', () => {
        const onClose = jest.fn();
        render(
            <Modal opened onClose={onClose} header={{title: 'title'}}>
                <Container>Children</Container>
            </Modal>
        );

        fireEvent.click(screen.getByRole('button'));

        expect(onClose).toBeCalled();
    });
});
1;
