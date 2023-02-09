import {QuestionSize32Px} from '@coveord/plasma-react-icons';
import {Container} from '@mantine/core';
import {fireEvent, render, screen} from '@test-utils';
import {Modal} from '../Modal';

describe('Modal', () => {
    it('renders title, desctiption, close button, and child', () => {
        render(
            <Modal opened onClose={vi.fn()} title="title" description="modal description">
                <Container>Children</Container>
            </Modal>
        );

        expect(screen.getByText(/title/i)).toBeInTheDocument();
        expect(screen.getByText(/modal description/i)).toBeInTheDocument();
        expect(screen.getByText(/Children/i)).toBeInTheDocument();
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('allows ReactNode as title', async () => {
        render(
            <Modal
                opened
                onClose={vi.fn()}
                title={
                    <div>
                        <QuestionSize32Px />
                        ReactNode title
                    </div>
                }
            >
                <Container>Children</Container>
            </Modal>
        );
        expect(await screen.findByRole('img', {name: /question/i})).toBeInTheDocument();
        expect(screen.getByText(/reactnode title/i)).toBeInTheDocument();
    });

    it('trigger onClose function when click on the close button', () => {
        const onClose = vi.fn();
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
