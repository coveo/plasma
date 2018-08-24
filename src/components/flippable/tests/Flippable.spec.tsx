import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';

import {Flippable, IFlippableProps} from '../Flippable';

describe('Flippable', () => {

    it('should render without errors', () => {
        expect(() => {
            shallow(<Flippable />);
        }).not.toThrow();
    });

    describe('<Flippable />', () => {
        let flippable: ReactWrapper<IFlippableProps>;

        beforeEach(() => {
            flippable = mount(
                <Flippable />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            flippable.detach();
        });

        it('should call onRender prop if set when mounting', () => {
            const onRenderSpy = jasmine.createSpy('onRender');

            expect(() => flippable.instance().componentWillMount()).not.toThrow();

            flippable.unmount();
            flippable.setProps({onRender: onRenderSpy});
            flippable.mount();

            expect(onRenderSpy).toHaveBeenCalled();
        });

        it('should call onDestroy prop if set when will unmount', () => {
            const onDestroySpy = jasmine.createSpy('onDestroy');

            expect(() => flippable.instance().componentWillUnmount()).not.toThrow();

            flippable.setProps({onDestroy: onDestroySpy});
            flippable.unmount();

            expect(onDestroySpy).toHaveBeenCalled();
        });

        it('should have the default flippable class', () => {
            expect(flippable.find(`.${Flippable.CONTAINER_CLASSNAME}`).length).toBe(1);
        });

        it('should render a flipper div', () => {
            expect(flippable.find(`.${Flippable.FLIPPER_CLASSNAME}`).length).toBeGreaterThan(0);
        });

        it('should show the front face by default', () => {
            expect(flippable.find(`.${Flippable.triggers.FRONT}`).length).toBe(1);
        });

        it('should render additional classes if any on the flippable container', () => {
            flippable.setProps({
                className: 'some-class',
            });

            expect(flippable.find('.some-class').length).toBeGreaterThanOrEqual(1);
        });

        it('should render the front side content on the front', () => {
            flippable.setProps({
                front: <div id='MyFrontContent'></div>,
            });

            const renderedFrontSide = flippable.find(`.${Flippable.sides.FRONT}`);

            expect(renderedFrontSide.length).toBeGreaterThan(0);
            expect(renderedFrontSide.find('#MyFrontContent').length).toBeGreaterThan(0);
        });

        it('should render the back side content on the back', () => {
            flippable.setProps({
                back: <div id='MyBackContent'></div>,
            });

            const renderedBackSide = flippable.find(`.${Flippable.sides.BACK}`);

            expect(renderedBackSide.length).toBeGreaterThan(0);
            expect(renderedBackSide.find('#MyBackContent').length).toBeGreaterThan(0);
        });

        it('should render a "show-on-top" class on the flippable when it is flipped', () => {
            flippable.setProps({
                isFlipped: true,
            });

            expect(flippable.find('.show-on-top').length).toBe(1);
        });

        it('should call onFlip prop if any when clicking on the front side and flippable is not flipped', () => {
            const onFlipSpy = jasmine.createSpy('onFlip');

            flippable.setProps({
                onFlip: onFlipSpy,
                isFlipped: true,
            });

            flippable.find(`.${Flippable.sides.FRONT}`).simulate('click');
            expect(onFlipSpy).not.toHaveBeenCalled();

            flippable.setProps({
                isFlipped: false,
            });

            flippable.find(`.${Flippable.sides.FRONT}`).simulate('click');
            expect(onFlipSpy).toHaveBeenCalledTimes(1);
        });

        it('should set the side trigger classes accordingly when flipping the component', () => {
            expect(flippable.find(`.${Flippable.FLIPPER_CLASSNAME}`).hasClass(Flippable.triggers.FRONT)).toBe(true);

            flippable.setProps({
                isFlipped: true,
            });

            expect(flippable.find(`.${Flippable.FLIPPER_CLASSNAME}`).hasClass(Flippable.triggers.BACK)).toBe(true);

            flippable.setProps({
                isFlipped: false,
            });

            expect(flippable.find(`.${Flippable.FLIPPER_CLASSNAME}`).hasClass(Flippable.triggers.FRONT)).toBe(true);
        });

        it('should call onUnflip prop if any when clicking outside the back side of the flippable ' +
            'only when it is flipped', () => {
                const onUnflipSpy = jasmine.createSpy('onUnflip');

                flippable.setProps({
                    onUnflip: onUnflipSpy,
                });

                document.getElementById('App').click();
                expect(onUnflipSpy).not.toHaveBeenCalled();

                flippable.setProps({
                    isFlipped: true,
                });

                flippable.find(`.${Flippable.sides.FRONT}`).simulate('click');
                expect(onUnflipSpy).not.toHaveBeenCalled();

                document.getElementById('App').click();
                expect(onUnflipSpy).toHaveBeenCalledTimes(1);
            });

        it('should not unflip the flippable when trying to unflip while allowUnflip prop is set and returns false', () => {
            const onUnflipSpy = jasmine.createSpy('onUnflip');

            flippable.setProps({
                onUnflip: onUnflipSpy,
                isFlipped: true,
                allowUnflip: (args) => false,
            });

            document.getElementById('App').click();
            expect(onUnflipSpy).not.toHaveBeenCalled();
        });

        it('should not unflip the flippable when trying to unflip while allowUnflip prop is set and returns false', () => {
            const onUnflipSpy = jasmine.createSpy('onUnflip');

            flippable.setProps({
                onUnflip: onUnflipSpy,
                isFlipped: true,
                allowUnflip: (args) => true,
            });

            document.getElementById('App').click();
            expect(onUnflipSpy).toHaveBeenCalledTimes(1);
        });
    });
});
