import {shallowWithState, shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import {getStoreMock} from '../../../utils/tests/TestUtils';
import {Button} from '../../button/Button';
import {RefreshCallBackActions} from '../RefeshCallbackActions';
import {RefreshCallbackWithButton} from '../RefreshCallbackHOC';
import {RefreshStatus} from '../RefreshCallbackReducer';

describe('RefreshCallbackWithButton tests', () => {
    describe('<RefreshCallbackWithButton />', () => {
        it('should mount and unmount without error', () => {
            const component = shallowWithState(<RefreshCallbackWithButton id={'id'} callback={() => ''} />, {}).dive();
            component.unmount();
        });

        describe('once mounted', () => {
            it('should call the callback on click button', () => {
                const spy = jasmine.createSpy('callback');

                const component = shallowWithState(<RefreshCallbackWithButton id={'id'} callback={spy} />, {
                    refreshCallback: {id: RefreshStatus.inProgress},
                }).dive();
                component
                    .find(Button)
                    .props()
                    .onClick();

                expect(spy).toHaveBeenCalledTimes(1);
            });

            it('should dispatch a stop on click button', () => {
                const store = getStoreMock({
                    refreshCallback: {id: RefreshStatus.inProgress},
                });

                const component = shallowWithStore(
                    <RefreshCallbackWithButton id={'id'} callback={() => ''} />,
                    store
                ).dive();
                component
                    .find(Button)
                    .props()
                    .onClick();

                expect(store.getActions()).toContain(RefreshCallBackActions.stop('id'));
            });

            it('should disable the button if the status is "stop"', () => {
                const component = shallowWithState(<RefreshCallbackWithButton id={'id'} callback={() => ''} />, {
                    refreshCallback: {id: RefreshStatus.stop},
                }).dive();

                expect(component.find(Button).props().enabled).toBe(false);
            });
        });
    });
});
