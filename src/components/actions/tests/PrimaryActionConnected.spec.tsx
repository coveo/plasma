import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {IReactVaporState} from '../../../ReactVapor';
import {TestUtils} from '../../../utils/TestUtils';
import {IActionOptions} from '../Action';
import {IPrimaryActionProps, PrimaryAction} from '../PrimaryAction';
import {PrimaryActionConnected} from '../PrimaryActionConnected';
import {TriggerActionConnected} from '../TriggerActionConnected';

describe('Actions', () => {

    describe('TablePrimaryActionView', () => {
        const action: IActionOptions = {
            name: 'action2',
            trigger: jasmine.createSpy('triggerMethod'),
            enabled: true,
        };
        let wrapper: ReactWrapper<any, any>;
        let primaryAction: ReactWrapper<IPrimaryActionProps, any>;
        let store: Store<IReactVaporState>;

        beforeEach(() => {
            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <PrimaryActionConnected action={action} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            primaryAction = wrapper.find(PrimaryAction).first();
        });

        afterEach(() => {
            wrapper.detach();
        });

        it('should get withReduxState as a prop', () => {
            const withReduxStateProp = primaryAction.props().withReduxState;

            expect(withReduxStateProp).toBeDefined();
            expect(withReduxStateProp).toBe(true);
        });

        it('should display a <TriggerActionConnected /> component if the action is a trigger action', () => {
            expect(primaryAction.find(TriggerActionConnected).length).toBe(1);
        });
    });
});
