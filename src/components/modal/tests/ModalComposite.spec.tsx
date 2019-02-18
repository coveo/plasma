import {mount, shallow} from 'enzyme';
import * as React from 'react';
import * as ReactModal from 'react-modal';

import {ModalComposite} from '../ModalComposite';

describe('ModalComposite', () => {
    it('should not throw when rendering and unmounting', () => {
        expect(() => {
            const modalComposite = shallow(<ModalComposite />);
            modalComposite.unmount();
        }).not.toThrow();
    });

    it('should render a ReactModal component', () => {
        const modalComposite = shallow(<ModalComposite />);

        expect(modalComposite.find(ReactModal).exists()).toBe(true);
    });

    it('should call the onRender prop if defined on mount', () => {
        const onRenderSpy = jasmine.createSpy('onRender');

        shallow(<ModalComposite onRender={onRenderSpy} />);

        expect(onRenderSpy).toHaveBeenCalledTimes(1);
    });

    it('should call the onDestroy prop if defined on unmount', () => {
        const onDestroySpy = jasmine.createSpy('onDestroy');

        const modalComposite = shallow(<ModalComposite onDestroy={onDestroySpy} />);
        modalComposite.unmount();

        expect(onDestroySpy).toHaveBeenCalledTimes(1);
    });

    it('should render the modal container, modal backdrop, modal header and modal content when isOpened prop is true', () => {
        const modalComposite = mount(<ModalComposite isOpened />);

        expect(modalComposite.find('.modal-backdrop').exists()).toBe(true);
        expect(modalComposite.find('.modal-container').exists()).toBe(true);
        expect(modalComposite.find('.modal-header').exists()).toBe(true);
        expect(modalComposite.find('.modal-content').exists()).toBe(true);
    });

    it('should render modal header children inside the modal header', () => {
        const modalHeaderChildren = <span>A bird in the hand is worth two in the bush.</span>;
        const modalComposite = mount(<ModalComposite isOpened modalHeaderChildren={modalHeaderChildren} />);

        expect(modalComposite.find('.modal-header').contains(modalHeaderChildren)).toBe(true);
    });

    it('should render modal body children inside the modal body', () => {
        const modalBodyChildren = <span>All that glitters is not gold.</span>;
        const modalComposite = mount(<ModalComposite isOpened modalBodyChildren={modalBodyChildren} />);

        expect(modalComposite.find('.modal-body').contains(modalBodyChildren)).toBe(true);
    });

    it('should render modal footer children inside the modal footer', () => {
        const modalFooterChildren = <span>A drowning man will clutch at a straw.</span>;
        const modalComposite = mount(<ModalComposite isOpened modalFooterChildren={modalFooterChildren} />);

        expect(modalComposite.find('.modal-footer').contains(modalFooterChildren)).toBe(true);
    });

    it('should call the closeCallback prop when the modal has closed', () => {
        const closeCallbackSpy = jasmine.createSpy('closeCallback');
        const modalComposite = shallow(<ModalComposite closeCallback={closeCallbackSpy} />);

        modalComposite.find(ReactModal).props().onAfterClose();

        expect(closeCallbackSpy).toHaveBeenCalledTimes(1);
    });
});
