import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {IReactVaporState} from '../../../ReactVapor';
import {TestUtils} from '../../../utils/TestUtils';
import {IActionOptions} from '../Action';
import {ActionsDropdownConnected} from '../ActionsDropdownConnected';
import {PrimaryActionConnected} from '../PrimaryActionConnected';
import {ISecondaryActionsProps, SecondaryActions} from '../SecondaryActions';
import {SecondaryActionsConnected} from '../SecondaryActionsConnected';

describe('Actions', () => {
    const id: string = 'secondary-actions';
    const actions: IActionOptions[] = [{
        name: 'action',
        link: 'http://coveo.com',
        target: '_blank',
        enabled: true,
    }, {
        separator: true,
        enabled: true,
    }, {
        name: 'action2',
        trigger: jasmine.createSpy('triggerMethod'),
        enabled: true,
    }];

    describe('<SecondaryActionsConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let secondaryActions: ReactWrapper<ISecondaryActionsProps, any>;
        let store: Store<IReactVaporState>;

        beforeEach(() => {
            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <SecondaryActionsConnected
                        actions={actions}
                        id={id}
                    />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            secondaryActions = wrapper.find(SecondaryActions).first();
        });

        afterEach(() => {
            wrapper.detach();
        });

        it('should get an id as a prop', () => {
            const idProp = secondaryActions.props().id;

            expect(idProp).toBeDefined();
            expect(idProp).toBe(id);
        });

        it('should get withReduxState as a prop', () => {
            const withReduxStateProp = secondaryActions.props().withReduxState;

            expect(withReduxStateProp).toBeDefined();
            expect(withReduxStateProp).toBe(true);
        });

        it('should display a <ActionsDropdownConnected /> if there is more than one action', () => {
            expect(secondaryActions.find(ActionsDropdownConnected).length).toBe(1);
        });

        it('should display a <PrimaryActionConnected /> if there is only one action', () => {
            wrapper = mount(
                <Provider store={store}>
                    <SecondaryActionsConnected
                        actions={[actions[0]]}
                        id={id}
                    />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            secondaryActions = wrapper.find(SecondaryActions).first();

            expect(secondaryActions.find(PrimaryActionConnected).length).toBe(1);
        });
    });
});
