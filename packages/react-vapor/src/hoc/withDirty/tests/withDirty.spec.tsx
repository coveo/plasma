import {mountWithStore} from 'enzyme-redux';
import * as React from 'react';
import {createMockStore, mockStore} from 'redux-test-utils';

import {Input} from '../../../components/input/Input';
import {IReactVaporState} from '../../../ReactVapor';
import {IWithDirty, IWithDirtyProps, withDirty} from '../withDirty';
import {WithDirtyActions} from '../withDirtyActions';

describe('Component with dirty', () => {
    let store: mockStore<IReactVaporState>;

    beforeEach(() => {
        store = createMockStore({
            dirtyComponents: [],
        });
    });

    class SomeInput extends React.Component<IWithDirtyProps> {
        static ID = 'SomeInput';

        render() {
            return (
                <Input onChange={() => this.props.toggleIsDirty(true)} />
            );
        }
    }

    const mountComponentWithProps = (config?: Partial<IWithDirty>) => {
        const SomeInputWithEditingHOC = withDirty({id: SomeInput.ID, showDirty: () => 'Hello', ...config})(SomeInput);
        return mountWithStore(<SomeInputWithEditingHOC />, store);
    };

    it('should mount without error', () => {
        expect(() => mountComponentWithProps()).not.toThrow();
    });

    it('should set the component as not dirty on mount', () => {
        mountComponentWithProps();
        expect(store.isActionDispatched(WithDirtyActions.toggle(SomeInput.ID, undefined))).toBe(true);
    });

    it('should not set the component as dirty if isDirty is not set to true in the config', () => {
        mountComponentWithProps();
        expect(store.isActionDispatched(WithDirtyActions.toggle(SomeInput.ID, true))).toBe(false);
    });

    it('should set the component as dirty if isDirty is set to true in the config', () => {
        mountComponentWithProps({isDirty: true});
        expect(store.isActionDispatched(WithDirtyActions.toggle(SomeInput.ID, true))).toBe(true);
    });

    it('should remove the component as dirty in the state on unmount', () => {
        const component = mountComponentWithProps({isDirty: true});
        expect(store.isActionDispatched(WithDirtyActions.toggle(SomeInput.ID, false))).toBe(false);

        component.unmount();

        expect(store.isActionDispatched(WithDirtyActions.toggle(SomeInput.ID, false))).toBe(true);
    });

    it('should contains the showDirty element', () => {
        const el = <span className='this-is-it' />;
        const component = mountComponentWithProps({showDirty: () => el});

        expect(component.find('.this-is-it').exists()).toBe(true);
    });

    it('should get the toggleIsDirty as a prop', () => {
        const el = <span className='this-is-it' />;
        const component = mountComponentWithProps({showDirty: () => el});

        expect(component.find('.this-is-it').exists()).toBe(true);
    });
});
