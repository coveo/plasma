import {render, screen} from '@test-utils';

import {Modal} from '../Modal';

describe('ModalFooter', () => {
    it('renders children', () => {
        render(
            <Modal.Footer>
                <div>im the children</div>
            </Modal.Footer>,
        );

        expect(screen.getByText('im the children')).toBeInTheDocument();
    });
    it('includes the .modalFooterSticky class styling if set to sticky', () => {
        render(
            <Modal.Footer sticky>
                <div>im the children</div>
            </Modal.Footer>,
        );

        const footer = screen.getByText('im the children').parentElement;
        expect(footer.className).contains('modalFooterSticky');
    });
    // ADUI-10401: when the footer's height is an odd number, the footer would align towards the top and not fill the bottom completely
    // this tests an workaround we've implemented to solve the issue
    it('has an even height value', () => {
        render(
            <Modal.Footer h={99}>
                <div>im the children</div>
            </Modal.Footer>,
        );

        const footer = screen.getByText('im the children').parentElement;
        expect(footer.offsetHeight % 2).lessThanOrEqual(Number.EPSILON);
    });
});
