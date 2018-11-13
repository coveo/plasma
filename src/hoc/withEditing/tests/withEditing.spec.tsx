import {mount} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {Button} from '../../../components/button/Button';
import {Input} from '../../../components/input/Input';
import {StickyFooter} from '../../../components/stickyFooter/StickyFooter';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {IWithEditing, withEditing} from '../withEditing';
import {toggleDirtyComponent} from '../withEditingActions';

describe('Component with editing', () => {
    let store: Store<IReactVaporState>;

    beforeEach(() => {
        store = TestUtils.buildStore();
    });

    afterEach(() => {
        store.dispatch(clearState());
    });

    class SomeInput extends React.Component {
        static ID = 'SomeInput';

        render() {
            return (
                <Input onChange={() => store.dispatch(toggleDirtyComponent(SomeInput.ID, true))} />
            );
        }
    }

    const mountComponentWithProps = (config: IWithEditing = {id: SomeInput.ID}) => {
        const SomeInputWithEditingHOC = withEditing(config)(SomeInput);
        return mount(
            <Provider store={store}>
                <SomeInputWithEditingHOC />
            </Provider>,
        );
    };

    it('should mount without error', () => {
        expect(() => mountComponentWithProps()).not.toThrow();
    });

    it('should not set the component as dirty if isDirty is not set to true in the config', () => {
        mountComponentWithProps();
        expect(store.getState().dirtyComponents).toEqual([]);
    });

    it('should set the component as dirty if isDirty is set to true in the config', () => {
        mountComponentWithProps({id: SomeInput.ID, isDirty: true});
        expect(store.getState().dirtyComponents).toEqual([SomeInput.ID]);
    });

    it('should remove the component as dirty in the state on unmount', () => {
        const component = mountComponentWithProps({id: SomeInput.ID, isDirty: true});
        expect(store.getState().dirtyComponents).toEqual([SomeInput.ID]);
        component.unmount();
        expect(store.getState().dirtyComponents).toEqual([]);
    });

    it('should not render a sticky footer if no footer children are passed', () => {
        expect(mountComponentWithProps().find(StickyFooter).length).toBe(0);
    });

    it('should render a sticky footer if footerChildren are passed', () => {
        const footerChildren = <Button />;
        expect(mountComponentWithProps({id: SomeInput.ID, footerChildren}).find(StickyFooter).length).toBe(1);
    });
});
