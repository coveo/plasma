import {render, screen} from '@test-utils';
import {shallow} from 'enzyme';
import ReactModal from 'react-modal';

import {ModalBody} from '../ModalBody.js';
import {ModalComposite} from '../ModalComposite.js';
import {ModalFooter} from '../ModalFooter.js';
import {ModalHeader} from '../ModalHeader.js';

describe('ModalComposite', () => {
    it('should not throw when rendering and unmounting', () => {
        expect(() => {
            const modalComposite = shallow(<ModalComposite />);
            modalComposite.unmount();
        }).not.toThrow();
    });

    it('should render a ReactModal component', () => {
        const modalComposite = shallow(<ModalComposite />);

        expect(modalComposite.exists()).toBe(true);
    });

    it('should pass down any ReactModal.Props to the ReactModal component', () => {
        const modalComposite = shallow(<ModalComposite shouldCloseOnEsc={false} shouldCloseOnOverlayClick={false} />);

        expect(modalComposite.props().shouldCloseOnEsc).toBe(false);
        expect(modalComposite.props().shouldCloseOnOverlayClick).toBe(false);
    });

    it('should call the onRender prop if defined on mount', () => {
        const onRenderSpy = jest.fn();

        shallow(<ModalComposite onRender={onRenderSpy} />);

        expect(onRenderSpy).toHaveBeenCalledTimes(1);
    });

    it('should call the onDestroy prop if defined on unmount', () => {
        const onDestroySpy = jest.fn();

        const modalComposite = shallow(<ModalComposite onDestroy={onDestroySpy} />);
        modalComposite.unmount();

        expect(onDestroySpy).toHaveBeenCalledTimes(1);
    });

    it('should render a ModalHeader inside the modal content', () => {
        const modalComposite = shallow(<ModalComposite isOpened title={'my title'} />);
        const modalContent = modalComposite.find('.modal-content');

        expect(modalContent.exists()).toBe(true);
        expect(modalContent.find(ModalHeader).exists()).toBe(true);
    });

    it('renders an accessible heading', () => {
        render(<ModalComposite isOpened title="my title" />);

        expect(screen.getByRole('dialog', {name: 'my title'})).toBeVisible();
    });

    it('is possible to access modals by their title', () => {
        render(
            <>
                <ModalComposite id="first" isOpened title="first modal title" />
                <ModalComposite id="second" isOpened title="second modal title" />
            </>
        );

        expect(screen.getByRole('dialog', {name: 'first modal title'})).toBeVisible();
        expect(screen.getByRole('dialog', {name: 'second modal title'})).toBeVisible();
    });

    it('should render modal header children inside the modal header', () => {
        const modalHeaderChildren = <span>A bird in the hand is worth two in the bush.</span>;
        const modalComposite = shallow(
            <ModalComposite isOpened modalHeaderChildren={modalHeaderChildren} title={'patate'} />
        );

        expect(modalComposite.find(ModalHeader).contains(modalHeaderChildren)).toBe(true);
    });

    it('should render modal body children inside the modal body', () => {
        const modalBodyChildren = <span>All that glitters is not gold.</span>;
        const modalComposite = shallow(<ModalComposite isOpened modalBodyChildren={modalBodyChildren} />);

        expect(modalComposite.find(ModalBody).contains(modalBodyChildren)).toBe(true);
    });

    it('should render modal footer children inside the modal footer', () => {
        const modalFooterChildren = <span>A drowning man will clutch at a straw.</span>;
        const modalComposite = shallow(<ModalComposite isOpened modalFooterChildren={modalFooterChildren} />);

        expect(modalComposite.find(ModalFooter).contains(modalFooterChildren)).toBe(true);
    });

    it('should call the closeCallback prop after the modal has closed', () => {
        const closeCallbackSpy = jest.fn();
        const modalComposite = shallow(<ModalComposite closeCallback={closeCallbackSpy} />);

        modalComposite.prop('onAfterClose')();

        expect(closeCallbackSpy).toHaveBeenCalledTimes(1);
    });

    it('should add a "layer-x" class to the modal overlay where x equals the layer prop value', () => {
        const modalComposite = shallow(<ModalComposite isOpened layer={3} />);
        const overlayClasses = modalComposite.props().overlayClassName as ReactModal.Classes;

        expect(overlayClasses.base).toContain('layer-3');
    });

    it('should not add any "layer-x" class to the modal overlay when the layer is smaller than 1', () => {
        const modalComposite = shallow(<ModalComposite isOpened layer={0} />);
        const overlayClasses = modalComposite.props().overlayClassName as ReactModal.Classes;

        expect(overlayClasses.base).not.toContain('layer-0');
    });

    it('should add the mod-prompt class to the modal if the isPrompt prop is true', () => {
        const modalComposite = shallow(<ModalComposite isOpened isPrompt />);

        expect((modalComposite.prop('className') as ReactModal.Classes).base).toContain('mod-prompt');
    });

    it('passes the contentClasses prop to the modal classNames', () => {
        const modalComposite = shallow(<ModalComposite isOpened isPrompt contentClasses="content-class" />);
        expect(modalComposite.find('.content-class').exists()).toBe(true);
    });
});
