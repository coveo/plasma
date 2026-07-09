import {render, screen} from '@test-utils';

import {TableCell} from '../table-cell/TableCell.js';

describe('Table.Cell', () => {
    it('renders children in default ellipsis mode', () => {
        render(<TableCell>Hello world</TableCell>);

        expect(screen.getByText('Hello world')).toBeVisible();
    });

    it('renders with EllipsisText by default', () => {
        const {container} = render(<TableCell>Truncated text</TableCell>);

        // EllipsisText renders a span with inherit text
        expect(container.querySelector('span')).toHaveTextContent('Truncated text');
    });

    it('renders in wrap mode without truncation', () => {
        const {container} = render(<TableCell wrap>Wrapped text content</TableCell>);

        expect(screen.getByText('Wrapped text content')).toBeVisible();
        // Should not render EllipsisText (no span child)
        expect(container.querySelector('[class*="ellipsis"]')).not.toBeInTheDocument();
    });

    it('passes lineClamp to EllipsisText', () => {
        render(<TableCell lineClamp={3}>Multi-line clamped text</TableCell>);

        expect(screen.getByText('Multi-line clamped text')).toBeVisible();
    });
});
