import {shallow} from 'enzyme';
import * as React from 'react';
import * as ReactModal from 'react-modal';

import {ModalBody} from '../ModalBody';
import {ModalComposite} from '../ModalComposite';
import {ModalFooter} from '../ModalFooter';
import {ModalHeader} from '../ModalHeader';

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

    it('should render a ModalHeader inside the modal content', () => {
        const modalComposite = shallow(<ModalComposite isOpened />).dive();
        const modalContent = modalComposite.find('.modal-content');

        expect(modalContent.exists()).toBe(true);
        expect(modalContent.find(ModalHeader).exists()).toBe(true);
    });

    it('should render modal header children inside the modal header', () => {
        const modalHeaderChildren = <span>A bird in the hand is worth two in the bush.</span>;
        const modalComposite = shallow(<ModalComposite isOpened modalHeaderChildren={modalHeaderChildren} />).dive();

        expect(modalComposite.find(ModalHeader).contains(modalHeaderChildren)).toBe(true);
    });

    it('should render modal body children inside the modal body', () => {
        const modalBodyChildren = <span>All that glitters is not gold.</span>;
        const modalComposite = shallow(<ModalComposite isOpened modalBodyChildren={modalBodyChildren} />).dive();

        expect(modalComposite.find(ModalBody).contains(modalBodyChildren)).toBe(true);
    });

    it('should render modal footer children inside the modal footer', () => {
        const modalFooterChildren = <span>A drowning man will clutch at a straw.</span>;
        const modalComposite = shallow(<ModalComposite isOpened modalFooterChildren={modalFooterChildren} />).dive();

        expect(modalComposite.find(ModalFooter).contains(modalFooterChildren)).toBe(true);
    });

    it('should call the closeCallback prop when the modal has closed', () => {
        const closeCallbackSpy = jasmine.createSpy('closeCallback');
        const modalComposite = shallow(<ModalComposite closeCallback={closeCallbackSpy} />);

        modalComposite.find(ReactModal).props().onAfterClose();

        expect(closeCallbackSpy).toHaveBeenCalledTimes(1);
    });
});
