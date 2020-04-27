import {ShallowWrapper} from 'enzyme';
import {shallowWithStore} from 'enzyme-redux';
import * as React from 'react';

import {closeModal} from '../../../components/modal/ModalActions';
import {ModalCompositeConnected} from '../../../components/modal/ModalComposite';
import {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';
import {
    IWithPreventNavigationConfig,
    IWithPreventNavigationInjectedProps,
    modalWithPreventNavigation,
    preventNavigationDefaultConfig,
} from '../modalWithPreventNavigation';
import {PreventNavigationPrompt, PreventNavigationPromptProps} from '../PreventNavigationPrompt';

describe('Modal with Prevent Navigation', () => {
    let store: ReactVaporMockStore;
    let component: ShallowWrapper<any, any>;

    class SomeModal extends React.Component<IWithPreventNavigationInjectedProps> {
        static ID = 'SomeModalId';

        render() {
            return (
                <ModalCompositeConnected
                    {...this.props}
                    id={SomeModal.ID}
                    title="Modal composite"
                    modalBodyChildren="Body"
                />
            );
        }
    }

    const shallowWithProps = (config?: Partial<IWithPreventNavigationConfig>, isDirty = false) => {
        store = getStoreMock({
            dirtyComponents: [isDirty ? SomeModal.ID : ''],
            modals: [{id: SomeModal.ID, isOpened: true}],
        });

        const SomeModalWithPreventNaviationHOC = modalWithPreventNavigation({id: SomeModal.ID, ...config})(SomeModal);
        component = shallowWithStore(<SomeModalWithPreventNaviationHOC />, store)
            .dive()
            .dive()
            .dive();
    };

    afterEach(() => {
        if (component && component.exists()) {
            component.unmount();
        }
    });

    it('should mount and unmount without error', () => {
        expect(() => {
            shallowWithProps();
            component.unmount();
        }).not.toThrow();
    });

    it('should not add the prevent modal if the view is not dirty', () => {
        shallowWithProps();

        expect(component.find({id: `prevent-navigation-${SomeModal.ID}`}).exists()).toBe(false);
    });

    it('should add the prevent modal if the view is dirty', () => {
        shallowWithProps({}, true);

        expect(component.find({id: `prevent-navigation-${SomeModal.ID}`}).exists()).toBe(true);
    });

    it('should set the isDirty prop on the modal', () => {
        shallowWithProps({}, false);

        expect(component.find(SomeModal).prop('isDirty')).toBe(false);
    });

    it('should set the showPrevent state to true if the view is dirty and the user tries to close it', () => {
        shallowWithProps({}, true);

        expect(component.find(SomeModal).prop('isDirty')).toBe(true);
    });

    it('should not have a PreventNavigationPrompt when isDirty is false', () => {
        shallowWithProps({}, false);
        expect(component.find(PreventNavigationPrompt).exists()).toBe(false);
    });

    it('should have a PreventNavigationPrompt when isDirty is true', () => {
        shallowWithProps({}, true);
        expect(component.find(PreventNavigationPrompt).exists()).toBe(true);
    });

    it('should display a PreventNavigationPrompt with the default config', () => {
        shallowWithProps({}, true);

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
        shallowWithProps(customConfig, true);

        const props: PreventNavigationPromptProps = component.find(PreventNavigationPrompt).props();
        expect(props.id).toBe(`prevent-navigation-${SomeModal.ID}`);
        expect(props.title).toBe(customConfig.title);
        expect(props.content).toBe(customConfig.content);
        expect(props.stay).toBe(customConfig.stay);
        expect(props.exit).toBe(customConfig.exit);
    });

    it('should dispatch a close modal when the prevent navigation onClose is called', () => {
        shallowWithProps({}, true);
        component.find(PreventNavigationPrompt).prop('onClose')();

        expect(store.getActions()).toContain(closeModal(SomeModal.ID));
    });

    it('should not dispatch a close modal when the prevent navigation onStay is called', () => {
        shallowWithProps({}, true);
        component.find(PreventNavigationPrompt).prop('onStay')();

        expect(store.getActions()).not.toContain(closeModal(SomeModal.ID));
    });
});
