import {mount} from 'enzyme';
import {Component} from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {Button} from '../../../components/button/Button';
import {Input} from '../../../components/input/Input';
import {StickyFooter} from '../../../components/stickyFooter/StickyFooter';
import {PlasmaState} from '../../../PlasmaState';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/tests/TestUtils';
import {IWithDirtyProps} from '../../withDirty/withDirty';
import {IWithEditing, withEditing} from '../withEditing';

describe('Component with editing', () => {
    let store: Store<PlasmaState>;

    beforeEach(() => {
        store = TestUtils.buildStore();
    });

    afterEach(() => {
        store.dispatch(clearState());
    });

    class SomeInput extends Component<IWithDirtyProps> {
        static ID = 'SomeInput';

        render() {
            return <Input onChange={() => this.props.toggleIsDirty(true)} />;
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
