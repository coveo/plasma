import {mount, ReactWrapper, shallow} from 'enzyme';
import React from 'react';

import {keyCode} from '../../../utils/InputUtils';
import {TestUtils} from '../../../utils/tests/TestUtils';
import {IModalBackdropProps, ModalBackdrop} from '../ModalBackdrop';

describe('ModalBackdrop', () => {
    describe('<ModalBackdrop />', () => {
        it('should render without errors', () => {
            expect(() => {
                const wrapper = shallow(<ModalBackdrop />);
                wrapper.unmount();
            }).not.toThrow();
        });
    });

    describe('<ModalBackdrop />', () => {
        let modalBackdrop: ReactWrapper<IModalBackdropProps, any>;

        beforeEach(() => {
            TestUtils.makeDeferSync();

            modalBackdrop = mount(<ModalBackdrop />, {attachTo: document.getElementById('App')});
        });

        afterEach(() => {
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
            expect(container.html()).toContain('closed');

            modalBackdrop.setProps({display: true});
            modalBackdrop.mount();
            expect(container.html()).not.toContain('closed');
        });

        it('should set "prompt-backdrop" class when isPrompt prop is passed', () => {
            const container = modalBackdrop.find('div').first();
            expect(container.html()).not.toContain('prompt-backdrop');

            modalBackdrop.setProps({isPrompt: true});
            modalBackdrop.mount();
            expect(container.html()).toContain('prompt-backdrop');
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

        it('should call handleClick when user hits escape and the modal is the last one opened', () => {
            const handleClickSpy = spyOn<any>(modalBackdrop.instance(), 'handleClick');

            modalBackdrop.setProps({lastOpened: true});

            const event = document.createEvent('Event');
            (event as any).keyCode = keyCode.escape;
            event.initEvent('keydown', true, true);
            document.dispatchEvent(event);

            expect(handleClickSpy).toHaveBeenCalledTimes(1);
        });

        it('should not call handleClick when user hits escape and the modal is not the last one opened', () => {
            const handleClickSpy = spyOn<any>(modalBackdrop.instance(), 'handleClick');

            modalBackdrop.setProps({lastOpened: false});

            const event = document.createEvent('Event');
            (event as any).keyCode = keyCode.escape;
            event.initEvent('keydown', true, true);
            document.dispatchEvent(event);

            expect(handleClickSpy).not.toHaveBeenCalled();
        });

        it('should not call handleClick when user hits another key', () => {
            const handleClickSpy = spyOn<any>(modalBackdrop.instance(), 'handleClick');

            modalBackdrop.setProps({lastOpened: true});

            const event = document.createEvent('Event');
            (event as any).keyCode = keyCode.ctrl;
            event.initEvent('keydown', true, true);
            document.dispatchEvent(event);

            expect(handleClickSpy).not.toHaveBeenCalled();
        });

        it('should not call handleClick when user hits escape but the event was handled somewhere else', () => {
            const handleClickSpy = spyOn<any>(modalBackdrop.instance(), 'handleClick');

            modalBackdrop.setProps({lastOpened: true});

            const event = document.createEvent('Event');
            (event as any).keyCode = keyCode.escape;
            event.initEvent('keydown', true, true);
            event.preventDefault();
            document.dispatchEvent(event);

            expect(handleClickSpy).not.toHaveBeenCalled();
        });
    });
});
