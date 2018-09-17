import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {IActionOptions} from '../Action';
import {ActionsDropdown, IActionsDropdownProps} from '../ActionsDropdown';
import {ActionsDropdownConnected} from '../ActionsDropdownConnected';
import {TriggerActionConnected} from '../TriggerActionConnected';

describe('Actions', () => {
    const actionTrigger: jasmine.Spy = jasmine.createSpy('triggerMethod');

    const id: string = 'dropdown-actions';
    const actions: IActionOptions[] = [{
        name: 'action2',
        trigger: actionTrigger,
        enabled: true,
    }];

    describe('<ActionsDropdownConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let actionsDropdown: ReactWrapper<IActionsDropdownProps, any>;
        let store: Store<IReactVaporState>;

        beforeEach(() => {
            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <ActionsDropdownConnected
                        actions={actions}
                        id={id}
                    />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            actionsDropdown = wrapper.find(ActionsDropdown).first();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
        });

        it('should get an id as a prop', () => {
            const idProp = actionsDropdown.props().id;

            expect(idProp).toBeDefined();
            expect(idProp).toBe(id);
        });

        it('should get an withReduxState as a prop', () => {
            const withReduxStateProp = actionsDropdown.props().withReduxState;

            expect(withReduxStateProp).toBeDefined();
            expect(withReduxStateProp).toBe(true);
        });

        it('should display a TriggerActionConnected if there is a trigger action', () => {
            expect(actionsDropdown.find(TriggerActionConnected).length).toBe(1);
        });
    });
});
