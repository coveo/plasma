import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {IModalBackdropProps, ModalBackdrop} from '../ModalBackdrop';

describe('ModalBackdrop', () => {

    describe('<ModalBackdrop />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <ModalBackdrop />,
                );
            }).not.toThrow();
        });
    });

    describe('<ModalBackdrop />', () => {
        let modalBackdrop: ReactWrapper<IModalBackdropProps, any>;

        beforeEach(() => {
            modalBackdrop = mount(
                <ModalBackdrop />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            modalBackdrop.unmount();
            modalBackdrop.detach();
        });

        it('should set "closed" class when display prop is false or not specified', () => {
            const container = modalBackdrop.find('div').first();
            expect(container.hasClass('closed')).toBe(true);

            modalBackdrop.setProps({display: false});
            modalBackdrop.mount();
            expect(container.hasClass('closed')).toBe(true);
        });

        it('should not set "closed" class when display prop is true', () => {
            const container = modalBackdrop.find('div').first();
            expect(container.hasClass('closed')).toBe(true);

            modalBackdrop.setProps({display: true});
            modalBackdrop.mount();
            expect(container.hasClass('closed')).toBe(false);
        });

        it('should set "prompt-backdrop" class when isPrompt prop is passed', () => {
            const container = modalBackdrop.find('div').first();
            expect(container.hasClass('prompt-backdrop')).toBe(false);

            modalBackdrop.setProps({isPrompt: true});
            modalBackdrop.mount();
            expect(container.hasClass('prompt-backdrop')).toBe(true);
        });

        it('should call onClick on click when onClick prop is set', () => {
            const clickSpy = jasmine.createSpy('onClick');

            modalBackdrop.simulate('click');
            expect(clickSpy).not.toHaveBeenCalled();

            modalBackdrop.setProps({onClick: clickSpy});
            modalBackdrop.mount();
            modalBackdrop.simulate('click');
            expect(clickSpy).toHaveBeenCalledTimes(1);
        });
    });
});
