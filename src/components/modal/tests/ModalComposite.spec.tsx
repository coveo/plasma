import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';
import {Modal} from '../Modal';
import {ModalBackdrop} from '../ModalBackdrop';
import {ModalBody} from '../ModalBody';
import {IModalCompositeProps, ModalComposite} from '../ModalComposite';
import {ModalFooter} from '../ModalFooter';
import {ModalHeader} from '../ModalHeader';

describe('ModalComposite', () => {
    const basicProps: IModalCompositeProps = {
        title: 'Some random title',
    };

    describe('<ModalComposite />', () => {
        it('should render without errors', () => {
            expect(() => shallow(<ModalComposite {...basicProps} />)).not.toThrow();
        });
    });

    describe('<ModalComposite />', () => {
        let modalComposite: ReactWrapper<IModalCompositeProps, any>;

        beforeEach(() => {
            modalComposite = mount(
                <ModalComposite {...basicProps} />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            modalComposite.detach();
        });

        it('should display a <Modal /> component', () => {
            expect(modalComposite.find(Modal).length).toBe(1);
        });

        it('should display a <ModalHeader /> component', () => {
            expect(modalComposite.find(ModalHeader).length).toBe(1);
        });

        it('should not display a <ModalBody /> component by default', () => {
            expect(modalComposite.find(ModalBody).length).toBe(0);
        });

        it('should display a <ModalBody /> component if modalBodyChildren is set as a prop', () => {
            const newProps: IModalCompositeProps = _.extend({}, basicProps, {modalBodyChildren: 'content'});

            modalComposite.setProps(newProps);

            expect(modalComposite.find(ModalBody).length).toBe(1);
        });

        it('should not display a <ModalFooter /> component by default', () => {
            expect(modalComposite.find(ModalFooter).length).toBe(0);
        });

        it('should display a <ModalFooter /> component if modalFooterChildren is set as a prop', () => {
            const newProps: IModalCompositeProps = _.extend({}, basicProps, {modalFooterChildren: 'content'});

            modalComposite.setProps(newProps);

            expect(modalComposite.find(ModalFooter).length).toBe(1);
        });

        it('should display a <ModalBackdrop /> component', () => {
            expect(modalComposite.find(ModalBackdrop).length).toBe(1);
        });

        it('should use the on render prop for the modal on render', () => {
            const newProps: IModalCompositeProps = _.extend({}, basicProps, {onRender: jasmine.createSpy('onRender')});

            modalComposite.setProps(newProps);

            const onRenderProp = modalComposite.find(Modal).props().onRender;

            expect(onRenderProp).toBeDefined();

            onRenderProp();

            expect(newProps.onRender).toHaveBeenCalledTimes(1);
        });

        it('should use the on destroy prop for the modal on render', () => {
            const newProps: IModalCompositeProps = _.extend({}, basicProps, {onDestroy: jasmine.createSpy('onDestroy')});

            modalComposite.setProps(newProps);

            const onDestroyProp = modalComposite.find(Modal).props().onDestroy;

            expect(onDestroyProp).toBeDefined();

            onDestroyProp();

            expect(newProps.onDestroy).toHaveBeenCalledTimes(1);
        });

        it('should use the on close prop for the modal header on when calling onClose', () => {
            const newProps: IModalCompositeProps = _.extend({}, basicProps, {onClose: jasmine.createSpy('onClose')});

            modalComposite.setProps(newProps);

            const onCloseProp = modalComposite.find(ModalHeader).props().onClose;

            expect(onCloseProp).toBeDefined();

            onCloseProp();

            expect(newProps.onClose).toHaveBeenCalledTimes(1);
        });

        it('should use the on close prop for the modal backdrop on when calling onClick', () => {
            const newProps: IModalCompositeProps = _.extend({}, basicProps, {onClose: jasmine.createSpy('onClose')});

            modalComposite.setProps(newProps);

            const onClickProp = modalComposite.find(ModalBackdrop).props().onClick;

            expect(onClickProp).toBeDefined();

            onClickProp();

            expect(newProps.onClose).toHaveBeenCalledTimes(1);
        });

        it('should use the on click prop for the modal backdrop on when calling onClick', () => {
            const newProps: IModalCompositeProps = _.extend({}, basicProps, {onClick: jasmine.createSpy('onClick')});

            modalComposite.setProps(newProps);

            const onClickProp = modalComposite.find(ModalBackdrop).props().onClick;

            expect(onClickProp).toBeDefined();

            onClickProp();

            expect(newProps.onClick).toHaveBeenCalledTimes(1);
        });
    });
});
