import {mountWithStore} from 'enzyme-redux';
import * as React from 'react';

import {Input} from '../../../components/input/Input';
import {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';
import {IWithDirty, IWithDirtyProps, withDirty} from '../withDirty';
import {WithDirtyActions} from '../withDirtyActions';

describe('Component with dirty', () => {
    let store: ReactVaporMockStore;

    beforeEach(() => {
        store = getStoreMock({
            dirtyComponents: [],
        });
    });

    class SomeInput extends React.Component<IWithDirtyProps> {
        static ID = 'SomeInput';

        render() {
            return <Input onChange={() => this.props.toggleIsDirty(true)} />;
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
        expect(store.getActions()).toContain(WithDirtyActions.toggle(SomeInput.ID, undefined));
    });

    it('should not set the component as dirty if isDirty is not set to true in the config', () => {
        mountComponentWithProps();
        expect(store.getActions()).not.toContain(WithDirtyActions.toggle(SomeInput.ID, true));
    });

    it('should set the component as dirty if isDirty is set to true in the config', () => {
        mountComponentWithProps({isDirty: true});
        expect(store.getActions()).toContain(WithDirtyActions.toggle(SomeInput.ID, true));
    });

    it('should remove the component as dirty in the state on unmount', () => {
        const component = mountComponentWithProps({isDirty: true});
        expect(store.getActions()).not.toContain(WithDirtyActions.toggle(SomeInput.ID, false));

        component.unmount();

        expect(store.getActions()).toContain(WithDirtyActions.toggle(SomeInput.ID, false));
    });

    it('should contains the showDirty element', () => {
        const el = <span className="this-is-it" />;
        const component = mountComponentWithProps({showDirty: () => el});

        expect(component.find('.this-is-it').exists()).toBe(true);
    });

    it('should get the toggleIsDirty as a prop', () => {
        const el = <span className="this-is-it" />;
        const component = mountComponentWithProps({showDirty: () => el});

        expect(component.find('.this-is-it').exists()).toBe(true);
    });
});
