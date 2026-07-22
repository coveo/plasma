import {act, render, screen, userEvent} from '@test-utils';

import {TableCell} from '../table-cell/TableCell.js';

describe('Table.Cell', () => {
    it('renders children', () => {
        render(<TableCell>Hello world</TableCell>);

        expect(screen.getByText('Hello world')).toBeVisible();
    });

    describe('expandable mode', () => {
        let resizeObserverCallback: ResizeObserverCallback;
        let observedElements: Set<Element>;

        beforeEach(() => {
            observedElements = new Set();

            vi.stubGlobal(
                'ResizeObserver',
                class ResizeObserverMock {
                    constructor(callback: ResizeObserverCallback) {
                        resizeObserverCallback = callback;
                    }
                    observe(el: Element) {
                        observedElements.add(el);
                    }
                    unobserve(el: Element) {
                        observedElements.delete(el);
                    }
                    disconnect() {
                        observedElements.clear();
                    }
                },
            );

            const originalGetComputedStyle = window.getComputedStyle;
            vi.spyOn(window, 'getComputedStyle').mockImplementation((el) => {
                const style = originalGetComputedStyle(el);
                return new Proxy(style, {
                    get(target, prop) {
                        if (prop === 'lineHeight') return '20px';
                        const value = Reflect.get(target, prop);
                        return typeof value === 'function' ? value.bind(target) : value;
                    },
                });
            });
            vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
                cb(0);
                return 0;
            });
        });

        afterEach(() => {
            vi.restoreAllMocks();
        });

        function triggerResize(height: number) {
            act(() => {
                for (const el of observedElements) {
                    resizeObserverCallback(
                        [
                            {
                                target: el,
                                contentRect: {
                                    x: 0,
                                    y: 0,
                                    width: 200,
                                    height,
                                    top: 0,
                                    left: 0,
                                    bottom: height,
                                    right: 200,
                                },
                                borderBoxSize: [{inlineSize: 200, blockSize: height}],
                                contentBoxSize: [{inlineSize: 200, blockSize: height}],
                                devicePixelContentBoxSize: [{inlineSize: 200, blockSize: height}],
                            } as unknown as ResizeObserverEntry,
                        ],
                        {} as ResizeObserver,
                    );
                }
            });
        }

        it('does not show toggle when content does not overflow', () => {
            render(<TableCell expandable>Short text</TableCell>);

            // Content height (30px) is less than maxHeight (lineClamp 2 × 20px = 40px)
            triggerResize(30);

            expect(screen.getByText('Short text')).toBeVisible();
            expect(screen.queryByRole('button', {name: /show more/i})).not.toBeInTheDocument();
        });

        it('shows "Show more" button when content overflows', () => {
            render(<TableCell expandable>Long text that overflows</TableCell>);

            // Content height (200px) exceeds maxHeight (lineClamp 2 × 20px = 40px)
            triggerResize(200);

            expect(screen.getByRole('button', {name: 'Show more'})).toBeVisible();
        });

        it('expands content when "Show more" is clicked', async () => {
            const user = userEvent.setup();
            render(<TableCell expandable>Expandable content</TableCell>);

            triggerResize(200);

            await user.click(screen.getByRole('button', {name: 'Show more'}));

            expect(screen.getByRole('button', {name: 'Show less'})).toBeVisible();
        });

        it('collapses content when "Show less" is clicked', async () => {
            const user = userEvent.setup();
            render(<TableCell expandable>Expandable content</TableCell>);

            triggerResize(200);

            await user.click(screen.getByRole('button', {name: 'Show more'}));
            await user.click(screen.getByRole('button', {name: 'Show less'}));

            expect(screen.getByRole('button', {name: 'Show more'})).toBeVisible();
        });

        it('uses custom lineClamp to compute maxHeight', () => {
            render(
                <TableCell expandable lineClamp={4}>
                    Content with custom clamp
                </TableCell>,
            );

            // lineClamp 4 × 20px lineHeight = 80px maxHeight
            // Content height 60px < 80px → no overflow
            triggerResize(60);
            expect(screen.queryByRole('button', {name: /show more/i})).not.toBeInTheDocument();

            // Content height 100px > 80px → overflow
            triggerResize(100);
            expect(screen.getByRole('button', {name: 'Show more'})).toBeVisible();
        });

        it('stops event propagation on toggle click', async () => {
            const user = userEvent.setup();
            const onClick = vi.fn();

            render(
                <div onClick={onClick}>
                    <TableCell expandable>Content</TableCell>
                </div>,
            );

            triggerResize(200);

            await user.click(screen.getByRole('button', {name: 'Show more'}));

            expect(onClick).not.toHaveBeenCalled();
        });
    });
});
