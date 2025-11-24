import {render, screen} from '@test-utils';

import {Modal} from '../Modal.js';

// Since most part of the modal component directly inherits @mantine/core, many tests are likely covered by Mantine, so we only add tests about our customizations
describe('Modal', () => {
    it('renders footer', () => {
        render(
            <Modal opened={true} onClose={vi.fn()}>
                <Modal.Footer>im the footer</Modal.Footer>
            </Modal>,
        );

        expect(screen.getByText('im the footer')).toBeInTheDocument();
    });
    it('renders footer in root', () => {
        render(
            <Modal.Root opened={true} onClose={vi.fn()}>
                <Modal.Footer>im the footer</Modal.Footer>
            </Modal.Root>,
        );

        expect(screen.getByText('im the footer')).toBeInTheDocument();
    });
});
