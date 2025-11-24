import {render, screen} from '@test-utils';

import {Modal} from '../Modal.js';

describe('ModalFooter', () => {
    it('renders children', () => {
        render(
            <Modal.Footer>
                <div>im the children</div>
            </Modal.Footer>,
        );

        expect(screen.getByText('im the children')).toBeInTheDocument();
    });
    it('has an even height value to ensure the footer sticks completely to the bottom as a workaround to the footer positioning issue when height value is odd', () => {
        render(
            <Modal.Footer h={99}>
                <div>im the children</div>
            </Modal.Footer>,
        );

        const footer = screen.getByText('im the children').parentElement;
        expect(footer.offsetHeight % 2).lessThanOrEqual(Number.EPSILON);
    });
});
