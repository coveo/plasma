import {render, screen, userEvent} from '@test-utils';

import {TableCell} from '../table-cell/TableCell.js';

describe('Table.Cell', () => {
    it('renders children in default ellipsis mode', () => {
        render(<TableCell>Hello world</TableCell>);

        expect(screen.getByText('Hello world')).toBeVisible();
    });

    it('renders with EllipsisText by default', () => {
        render(<TableCell>Truncated text</TableCell>);

        const text = screen.getByText('Truncated text');
        expect(text.tagName).toBe('SPAN');
    });

    it('renders in wrap mode without truncation', () => {
        render(<TableCell wrap>Wrapped text content</TableCell>);

        const text = screen.getByText('Wrapped text content');
        expect(text).toBeVisible();
        // In wrap mode, content is rendered in a div, not inside EllipsisText's span
        expect(text.tagName).not.toBe('SPAN');
    });

    it('passes lineClamp to EllipsisText', () => {
        render(<TableCell lineClamp={3}>Multi-line clamped text</TableCell>);

        expect(screen.getByText('Multi-line clamped text')).toBeVisible();
    });

    describe('expandable mode', () => {
        let scrollHeightSpy: ReturnType<typeof vi.spyOn>;
        let clientHeightSpy: ReturnType<typeof vi.spyOn>;

        function simulateOverflow() {
            scrollHeightSpy = vi.spyOn(HTMLElement.prototype, 'scrollHeight', 'get').mockReturnValue(200);
            clientHeightSpy = vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(40);
        }

        afterEach(() => {
            scrollHeightSpy?.mockRestore();
            clientHeightSpy?.mockRestore();
        });

        it('does not show toggle when content does not overflow', () => {
            render(<TableCell expandable>Short text</TableCell>);

            expect(screen.getByText('Short text')).toBeVisible();
            expect(screen.queryByRole('button', {name: /show more/i})).not.toBeInTheDocument();
        });

        it('shows "Show more" button when content overflows', () => {
            simulateOverflow();
            render(<TableCell expandable>Long text that overflows</TableCell>);

            expect(screen.getByRole('button', {name: 'Show more'})).toBeVisible();
        });

        it('expands content when "Show more" is clicked', async () => {
            simulateOverflow();
            const user = userEvent.setup();
            render(<TableCell expandable>Expandable content</TableCell>);

            await user.click(screen.getByRole('button', {name: 'Show more'}));

            expect(screen.getByRole('button', {name: 'Show less'})).toBeVisible();
            const content = screen.getByText('Expandable content');
            expect(content.className).not.toMatch(/clamped/);
        });

        it('collapses content when "Show less" is clicked', async () => {
            simulateOverflow();
            const user = userEvent.setup();
            render(<TableCell expandable>Expandable content</TableCell>);

            await user.click(screen.getByRole('button', {name: 'Show more'}));
            await user.click(screen.getByRole('button', {name: 'Show less'}));

            expect(screen.getByRole('button', {name: 'Show more'})).toBeVisible();
        });

        it('uses custom lineClamp value', () => {
            render(
                <TableCell expandable lineClamp={4}>
                    Content with custom clamp
                </TableCell>,
            );

            const content = screen.getByText('Content with custom clamp');
            expect(content).toHaveStyle({'--cell-line-clamp': '4'});
        });

        it('stops event propagation on toggle click', async () => {
            simulateOverflow();
            const user = userEvent.setup();
            const onClick = vi.fn();
            render(
                <div onClick={onClick}>
                    <TableCell expandable>Content</TableCell>
                </div>,
            );

            await user.click(screen.getByRole('button', {name: 'Show more'}));

            expect(onClick).not.toHaveBeenCalled();
        });
    });
});
