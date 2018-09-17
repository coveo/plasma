import {mount, ReactWrapper} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {IInputProps} from '../../input/Input';
import {Checkbox} from '../Checkbox';
import {toggleCheckbox} from '../CheckboxActions';
import {CheckboxConnected} from '../CheckboxConnected';

describe('Checkbox', () => {
    describe('<CheckboxConnected />', () => {
        let checkbox: ReactWrapper<IInputProps, any>;
        let id: string;
        let wrapper: ReactWrapper<any, any>;
        let store: Store<IReactVaporState>;

        beforeEach(() => {
            id = 'checkbox';

            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <CheckboxConnected
                        id={id}
                    />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            checkbox = wrapper.find(Checkbox).first();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
        });

        it('should get its id as a prop', () => {
            const idProp = checkbox.props().id;

            expect(idProp).toBeDefined();
            expect(idProp).toBe(id);
        });

        it('should get checked false as a prop', () => {
            expect(store.getState().checkboxes.filter((currentCheckbox) => currentCheckbox.id === id)[0].checked).toBe(false);
        });

        it('should get what to do on render as a prop', () => {
            const onRenderProp = checkbox.props().onRender;

            expect(onRenderProp).toBeDefined();
        });

        it('should get what to do on destroy as a prop', () => {
            const onDestroyProp = checkbox.props().onDestroy;

            expect(onDestroyProp).toBeDefined();
        });

        it('should add the checkbox in the store on render', () => {
            expect(store.getState().checkboxes.filter((currentCheckbox) => currentCheckbox.id === id).length).toBe(1);
        });

        it('should toggle the checkbox in the store when dispatching a "toggleCheckbox" action', () => {
            expect(store.getState().checkboxes.filter((currentCheckbox) => currentCheckbox.id === id).length).toBe(1);
            expect(store.getState().checkboxes.filter((currentCheckbox) => currentCheckbox.id === id)[0].checked).toBe(false);

            store.dispatch(toggleCheckbox(id));
            expect(store.getState().checkboxes.filter((currentCheckbox) => currentCheckbox.id === id)[0].checked).toBe(true);
        });

        it('should toggle the checkbox in the store when clicking on it', () => {
            expect(store.getState().checkboxes.filter((currentCheckbox) => currentCheckbox.id === id).length).toBe(1);
            expect(store.getState().checkboxes.filter((currentCheckbox) => currentCheckbox.id === id)[0].checked).toBe(false);

            checkbox.props().onClick(null);
            expect(store.getState().checkboxes.filter((currentCheckbox) => currentCheckbox.id === id)[0].checked).toBe(true);
        });

        it('should remove the checkbox in the store on destroy', () => {
            wrapper.unmount();
            expect(store.getState().checkboxes.filter((checkboxs) => checkboxs.id === id).length).toBe(0);
        });
    });
});
