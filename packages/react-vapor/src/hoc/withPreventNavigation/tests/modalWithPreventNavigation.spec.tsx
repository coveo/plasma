import {ReactWrapper} from 'enzyme';
import {mountWithStore} from 'enzyme-redux';
import * as React from 'react';
import * as ReactModal from 'react-modal';
import {createMockStore, mockStore} from 'redux-test-utils';
import {closeModal} from '../../../components/modal/ModalActions';

import {ModalCompositeConnected} from '../../../components/modal/ModalCompositeConnected';
import {IReactVaporState} from '../../../ReactVapor';
import {
    IWithPreventNavigationConfig,
    IWithPreventNavigationInjectedProps,
    modalWithPreventNavigation,
    preventNavigationDefaultConfig,
} from '../modalWithPreventNavigation';
import {PreventNavigationPrompt, PreventNavigationPromptProps} from '../PreventNavigationPrompt';

describe('Modal with Prevent Navigation', () => {
    let store: mockStore<IReactVaporState>;
    let component: ReactWrapper<any, any>;

    class SomeModal extends React.Component<IWithPreventNavigationInjectedProps> {
        static ID = 'SomeModalId';

        render() {
            return (
                <ModalCompositeConnected{...this.props} id={SomeModal.ID} title='Modal composite' modalBodyChildren='Body' />
            );
        }
    }

    const mountComponentWithProps = (config?: Partial<IWithPreventNavigationConfig>, isDirty = false) => {
        store = createMockStore({
            dirtyComponents: [isDirty ? SomeModal.ID : ''],
            modals: [{id: SomeModal.ID, isOpen: true}],
        });

        const SomeModalWithPreventNaviationHOC = modalWithPreventNavigation({id: SomeModal.ID, ...config})(SomeModal);
        component = mountWithStore(<SomeModalWithPreventNaviationHOC />, store);
    };

    const fakeEvent = jasmine.createSpyObj('event', ['preventDefault', 'stopPropagation']);

    afterEach(() => {
        if (component && component.exists()) {
            component.unmount();
        }
    });

    it('should mount and unmount without error', () => {
        expect(() => {
            mountComponentWithProps();
            component.unmount();
        }).not.toThrow();
    });

    it('should not add the prevent modal if the view is not dirty', () => {
        mountComponentWithProps();

        expect(component.find({id: `prevent-navigation-${SomeModal.ID}`}).exists()).toBe(false);
    });

    it('should add the prevent modal if the view is dirty', () => {
        mountComponentWithProps({}, true);

        expect(component.find({id: `prevent-navigation-${SomeModal.ID}`}).exists()).toBe(true);
    });

    it('should not open set the showPrevent state to true if the view is not dirty and the user tries to close the modal', () => {
        mountComponentWithProps({}, false);

        // First because the prevent navigate modal is added after in the DOM
        component.find(ReactModal).first().props().onRequestClose(fakeEvent);
        expect(component.find('ModalWithPreventNavigation').state().showPrevent).toBe(false);
    });

    it('should set the showPrevent state to true if the view is dirty and the user tries to close it', () => {
        mountComponentWithProps({}, true);

        // First because the prevent navigate modal is added after in the DOM
        component.find(ReactModal).first().props().onRequestClose(fakeEvent);
        expect(component.find('ModalWithPreventNavigation').state().showPrevent).toBe(true);
    });

    it('should not have a PreventNavigationPrompt when isDirty is false', () => {
        mountComponentWithProps({}, false);
        expect(component.find(PreventNavigationPrompt).exists()).toBe(false);
    });

    it('should have a PreventNavigationPrompt when isDirty is true', () => {
        mountComponentWithProps({}, true);
        expect(component.find(PreventNavigationPrompt).exists()).toBe(true);
    });

    it('should display a PreventNavigationPrompt with the default config', () => {
        mountComponentWithProps({}, true);

        const props: PreventNavigationPromptProps = component.find(PreventNavigationPrompt).props();
        expect(props.id).toBe(`prevent-navigation-${SomeModal.ID}`);
        expect(props.title).toBe(preventNavigationDefaultConfig.title);
        expect(props.content).toBe(preventNavigationDefaultConfig.content);
        expect(props.stay).toBe(preventNavigationDefaultConfig.stay);
        expect(props.exit).toBe(preventNavigationDefaultConfig.exit);

        expect(props.isOpen).toBe(false);
        expect(props.onStay).toBeDefined();
        expect(props.onClose).toBeDefined();
    });

    it('should display a PreventNavigationPrompt with a custom config', () => {
        const customConfig = {
            title: 'Yo! Are you crazy?!',
            content: 'You will lose all your changes',
            exit: 'Yeah',
            stay: 'No',
        };
        mountComponentWithProps(customConfig, true);

        const props: PreventNavigationPromptProps = component.find(PreventNavigationPrompt).props();
        expect(props.id).toBe(`prevent-navigation-${SomeModal.ID}`);
        expect(props.title).toBe(customConfig.title);
        expect(props.content).toBe(customConfig.content);
        expect(props.stay).toBe(customConfig.stay);
        expect(props.exit).toBe(customConfig.exit);
    });

    it('should dispatch a close modal when the prevent navigation onClose is called', () => {
        mountComponentWithProps({}, true);
        component.find(PreventNavigationPrompt).prop('onClose')();

        expect(store.isActionDispatched(closeModal(SomeModal.ID))).toBe(true);
    });

    it('should not dispatch a close modal when the prevent navigation onStay is called', () => {
        mountComponentWithProps({}, true);
        component.find(PreventNavigationPrompt).prop('onStay')();

        expect(store.isActionDispatched(closeModal(SomeModal.ID))).toBe(false);
    });
});
