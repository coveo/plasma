import {render, screen, waitFor} from '@testing-library/react';
import {useParentHeight} from '../useParentHeight';

describe('useParentHeight', () => {
    const Fixture = () => {
        const [height, ref] = useParentHeight();
        return (
            <div ref={ref} data-testid="child" data-height={height}>
                {height}
            </div>
        );
    };

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("computes height as 0 when parent dimensions are zero'", () => {
        vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
            height: 0,
            width: 0,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            x: 0,
            y: 0,
            toJSON: () => ({}),
        });

        vi.spyOn(window, 'getComputedStyle').mockReturnValue({
            paddingTop: '0px',
            paddingBottom: '0px',
            borderTopWidth: '0px',
            borderBottomWidth: '0px',
        } as CSSStyleDeclaration);

        render(
            <div>
                <Fixture />
            </div>,
        );

        const child = screen.getByTestId('child');
        expect(child).toBeInTheDocument();
        expect(child).toHaveAttribute('data-height', '0');
    });

    it('computes parent inner height excluding padding and border', async () => {
        vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
            height: 200,
            width: 100,
            top: 0,
            left: 0,
            bottom: 200,
            right: 100,
            x: 0,
            y: 0,
            toJSON: () => ({}),
        });

        vi.spyOn(window, 'getComputedStyle').mockReturnValue({
            paddingTop: '10px',
            paddingBottom: '10px',
            borderTopWidth: '5px',
            borderBottomWidth: '5px',
        } as CSSStyleDeclaration);

        render(
            <div data-testid="parent">
                <Fixture />
            </div>,
        );

        // Expected: 200 - (10 + 10) - (5 + 5) = 170
        await waitFor(() => {
            const child = screen.getByTestId('child');
            expect(child).toHaveAttribute('data-height', '170');
        });
    });

    it('computes full height when no padding or border', async () => {
        vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
            height: 500,
            width: 100,
            top: 0,
            left: 0,
            bottom: 500,
            right: 100,
            x: 0,
            y: 0,
            toJSON: () => ({}),
        });

        vi.spyOn(window, 'getComputedStyle').mockReturnValue({
            paddingTop: '0px',
            paddingBottom: '0px',
            borderTopWidth: '0px',
            borderBottomWidth: '0px',
        } as CSSStyleDeclaration);

        render(
            <div data-testid="parent">
                <Fixture />
            </div>,
        );

        await waitFor(() => {
            const child = screen.getByTestId('child');
            expect(child).toHaveAttribute('data-height', '500');
        });
    });

    it('returns -1 when parent element is null', async () => {
        // Create a component that removes its parent reference
        const OrphanComponent = () => {
            const [height, ref] = useParentHeight();
            return (
                <div ref={ref} data-testid="orphan" data-height={height}>
                    {height}
                </div>
            );
        };

        // Mock parentElement to return null
        const originalParentElement = Object.getOwnPropertyDescriptor(Node.prototype, 'parentElement');
        Object.defineProperty(Node.prototype, 'parentElement', {
            get: function () {
                if (this.dataset?.testid === 'orphan') {
                    return null;
                }
                return originalParentElement?.get?.call(this);
            },
            configurable: true,
        });

        render(<OrphanComponent />);

        await waitFor(() => {
            const orphan = screen.getByTestId('orphan');
            // Height stays -1 when parent is null
            expect(orphan).toHaveAttribute('data-height', '-1');
        });

        // Restore original
        if (originalParentElement) {
            Object.defineProperty(Node.prototype, 'parentElement', originalParentElement);
        }
    });
});
