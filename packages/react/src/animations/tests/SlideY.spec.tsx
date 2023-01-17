import {mount, ReactWrapper} from 'enzyme';
import {render, screen} from '@test-utils';
import {SlideY, SlideYProps} from '../SlideY.js';

describe('SlideY', () => {
    const dummyTimeout = 400;
    const testElementId = 'testId';

    let testElement: JSX.Element;

    beforeEach(() => {
        testElement = <div id={testElementId}>testing</div>;
    });

    it('should not throw when rendered with in prop to true', () => {
        expect(() =>
            mount(
                <SlideY in timeout={dummyTimeout}>
                    {testElement}
                </SlideY>
            )
        ).not.toThrow();
    });

    it('should not throw when rendered with in prop to false', () => {
        expect(() =>
            mount(
                <SlideY in={false} timeout={dummyTimeout}>
                    {testElement}
                </SlideY>
            )
        ).not.toThrow();
    });

    it('should not throw when updating props', () => {
        const wrapper = mount(
            <SlideY in={false} timeout={dummyTimeout}>
                {testElement}
            </SlideY>,
            {attachTo: document.getElementById('App')}
        );

        expect(() => wrapper.setProps({in: true}).update()).not.toThrow();
        expect(wrapper.find(SlideY).first().props().in).toBe(true);
    });

    it('should stay opened when updating props but still in', () => {
        const wrapper = mount(
            <SlideY in={true} timeout={dummyTimeout}>
                {testElement}
            </SlideY>,
            {attachTo: document.getElementById('App')}
        );
        const component = wrapper.find(SlideY).first();

        expect(() => wrapper.setProps({timeout: dummyTimeout + 1})).not.toThrow();
        expect(component.props().in).toBe(true);
    });

    it('should stay closed when updating props but still not in', () => {
        const wrapper = mount(
            <SlideY in={false} timeout={dummyTimeout}>
                {testElement}
            </SlideY>,
            {attachTo: document.getElementById('App')}
        );
        const component = wrapper.find(SlideY).first();

        expect(() => wrapper.setProps({timeout: dummyTimeout + 1})).not.toThrow();
        expect(component.props().in).toBe(false);
    });

    describe('when transition ends', () => {
        const timeout = 5;
        let wrapper: ReactWrapper<any, any>;
        let component: ReactWrapper<SlideYProps, any>;

        beforeEach(() => {
            jest.useFakeTimers();
        });

        afterEach(() => {
            jest.clearAllTimers();
        });

        const mountAndWrap = (isIn: boolean, duration?: number) => {
            wrapper = mount(
                <SlideY in={isIn} timeout={timeout} duration={duration}>
                    {testElement}
                </SlideY>,
                {attachTo: document.getElementById('App')}
            );
            component = wrapper.find(SlideY).first();
        };

        const transitionToEnd = (el: HTMLElement) => {
            jest.advanceTimersByTime(timeout + 1);
            el.dispatchEvent(
                new Event('transitionend', {
                    bubbles: true,
                    cancelable: true,
                })
            );
        };

        it('should set the height to auto when the SlideY opens', () => {
            mountAndWrap(false);

            expect(() => wrapper.setProps({in: true})).not.toThrow();

            const el = component.find('.slide-y').first().getDOMNode() as HTMLElement;

            expect(el).toHaveStyle({height: 'auto'});
        });

        it('should set the height to 0px when the SlideY is closes', () => {
            mountAndWrap(true);

            expect(() => wrapper.setProps({in: false})).not.toThrow();

            const el = wrapper.find('.slide-y').first().getDOMNode() as HTMLElement;

            expect(el).toHaveStyle({height: '0px'});
        });

        it('should remove the class slide-y-transition', () => {
            mountAndWrap(false);

            expect(() => wrapper.setProps({in: true}).update()).not.toThrow();

            const slideY = wrapper.find('.slide-y').first();
            transitionToEnd(slideY.getDOMNode() as HTMLElement);

            expect(slideY.hasClass('slide-y-transition')).toBe(false);
        });

        it('should remove the class slide-y-closed when the SlideY opens', () => {
            mountAndWrap(false);

            expect(wrapper.html()).toContain('slide-y-closed');

            expect(() => wrapper.setProps({in: true}).update()).not.toThrow();
            transitionToEnd(wrapper.find('.slide-y').first().getDOMNode() as HTMLElement);

            expect(wrapper.html()).not.toContain('slide-y-closed');
        });

        it('should add the class slide-y-closed when the SlideY closes', () => {
            mountAndWrap(true);

            expect(wrapper.html()).not.toContain('slide-y-closed');

            expect(() => wrapper.setProps({in: false})).not.toThrow();
            transitionToEnd(wrapper.find('.slide-y').first().getDOMNode() as HTMLElement);

            expect(wrapper.find('.slide-y-closed').length).toBe(1);
        });

        it('should had the duration if one is added as a prop', () => {
            const expectedDuration = 1000;
            mountAndWrap(false, expectedDuration);

            expect(wrapper.find('.slide-y').first().prop('style').transitionDuration).toContain(
                expectedDuration.toString()
            );
        });

        it('hides the content when closed', () => {
            render(
                <SlideY in={false}>
                    <button>my children</button>
                </SlideY>
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
                </SlideY>
            );
            expect(screen.getByRole('button', {name: 'my children'})).toBeVisible();
        });
    });
});
