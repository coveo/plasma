import {render, screen} from '@test-utils';
import {SlideY} from '../SlideY';

describe('SlideY', () => {
    const dummyTimeout = 400;
    const testElementId = 'testId';

    let testElement: JSX.Element;

    beforeEach(() => {
        testElement = <div id={testElementId}>testing</div>;
    });

    it('should not throw when rendered with in prop to true', () => {
        expect(() =>
            render(
                <SlideY in timeout={dummyTimeout}>
                    {testElement}
                </SlideY>,
            ),
        ).not.toThrow();
    });

    it('should not throw when rendered with in prop to false', () => {
        expect(() =>
            render(
                <SlideY in={false} timeout={dummyTimeout}>
                    {testElement}
                </SlideY>,
            ),
        ).not.toThrow();
    });

    it('should not throw when updating props', () => {
        const {rerender} = render(
            <SlideY in={false} timeout={dummyTimeout}>
                {testElement}
            </SlideY>,
        );

        expect(() =>
            rerender(
                <SlideY in={true} timeout={dummyTimeout}>
                    {testElement}
                </SlideY>,
            ),
        ).not.toThrow();
    });

    it('should stay opened when updating props but still in', () => {
        const {rerender} = render(
            <SlideY in={true} timeout={dummyTimeout}>
                {testElement}
            </SlideY>,
        );

        expect(() =>
            rerender(
                <SlideY in={true} timeout={dummyTimeout + 1}>
                    {testElement}
                </SlideY>,
            ),
        ).not.toThrow();

        expect(screen.getByTestId('slide-y')).not.toHaveClass('slide-y-closed');
    });

    it('should stay closed when updating props but still not in', () => {
        const {rerender} = render(
            <SlideY in={false} timeout={dummyTimeout}>
                {testElement}
            </SlideY>,
        );

        expect(() =>
            rerender(
                <SlideY in={false} timeout={dummyTimeout + 1}>
                    {testElement}
                </SlideY>,
            ),
        ).not.toThrow();

        expect(screen.getByTestId('slide-y')).toHaveClass('slide-y-closed');
    });

    describe('when transition ends', () => {
        const timeout = 5;

        beforeEach(() => {
            jest.useFakeTimers();
        });

        afterEach(() => {
            jest.clearAllTimers();
        });

        const transitionToEnd = (el: HTMLElement) => {
            jest.advanceTimersByTime(timeout + 1);
            el.dispatchEvent(
                new Event('transitionend', {
                    bubbles: true,
                    cancelable: true,
                }),
            );
        };

        it('should set the height to auto when the SlideY opens', () => {
            const {rerender} = render(
                <SlideY in={false} timeout={timeout}>
                    {testElement}
                </SlideY>,
            );

            rerender(
                <SlideY in={true} timeout={timeout}>
                    {testElement}
                </SlideY>,
            );

            expect(screen.getByTestId('slide-y')).toHaveStyle({height: 'auto'});
        });

        it('should set the height to 0px when the SlideY is closes', () => {
            const {rerender} = render(
                <SlideY in={true} timeout={timeout}>
                    {testElement}
                </SlideY>,
            );

            rerender(
                <SlideY in={false} timeout={timeout}>
                    {testElement}
                </SlideY>,
            );

            expect(screen.getByTestId('slide-y')).toHaveStyle({height: '0px'});
        });

        it('should remove the class slide-y-transition', () => {
            const {rerender} = render(
                <SlideY in={false} timeout={timeout}>
                    {testElement}
                </SlideY>,
            );

            rerender(
                <SlideY in={true} timeout={timeout}>
                    {testElement}
                </SlideY>,
            );

            const el = screen.getByTestId('slide-y');
            transitionToEnd(el);

            expect(el).not.toHaveClass('slide-y-transition');
        });

        it('should remove the class slide-y-closed when the SlideY opens', () => {
            const {rerender} = render(
                <SlideY in={false} timeout={timeout}>
                    {testElement}
                </SlideY>,
            );

            expect(screen.getByTestId('slide-y')).toHaveClass('slide-y-closed');

            rerender(
                <SlideY in={true} timeout={timeout}>
                    {testElement}
                </SlideY>,
            );

            const el = screen.getByTestId('slide-y');
            transitionToEnd(el);

            expect(el).not.toHaveClass('slide-y-closed');
        });

        it('should add the class slide-y-closed when the SlideY closes', () => {
            const {rerender} = render(
                <SlideY in={true} timeout={timeout}>
                    {testElement}
                </SlideY>,
            );

            expect(screen.getByTestId('slide-y')).not.toHaveClass('slide-y-closed');

            rerender(
                <SlideY in={false} timeout={timeout}>
                    {testElement}
                </SlideY>,
            );

            const el = screen.getByTestId('slide-y');
            transitionToEnd(el);

            expect(el).toHaveClass('slide-y-closed');
        });

        it('should had the duration if one is added as a prop', () => {
            const expectedDuration = 1000;
            render(
                <SlideY in={false} timeout={timeout} duration={expectedDuration}>
                    {testElement}
                </SlideY>,
            );

            const el = screen.getByTestId('slide-y');
            expect(el).toHaveStyle({transitionDuration: `${expectedDuration}ms`});
        });

        it('hides the content when closed', () => {
            render(
                <SlideY in={false}>
                    <button>my children</button>
                </SlideY>,
            );
            // The element is not accessible since aria-hidden is true
            expect(screen.queryByRole('button', {name: 'my children'})).not.toBeInTheDocument();

            // You can still access it by passing hidden: true
            expect(screen.getByRole('button', {hidden: true, name: 'my children'})).toBeVisible();
        });

        it('shows the content when opened', () => {
            render(
                <SlideY in>
                    <button>my children</button>
                </SlideY>,
            );
            expect(screen.getByRole('button', {name: 'my children'})).toBeVisible();
        });
    });
});
