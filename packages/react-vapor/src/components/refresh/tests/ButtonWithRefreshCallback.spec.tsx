import {shallowWithState, shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import {getStoreMock} from '../../../utils/tests/TestUtils';
import {Button} from '../../button/Button';
import {ButtonWithRefreshCallback, IButtonWithRefreshCallbackProps} from '../ButtonWithRefreshCallback';
import {RefreshCallBackActions} from '../RefeshCallbackActions';
import {RefreshStatus} from '../RefreshCallbackReducer';

describe('ButtonWithRefreshCallback tests', () => {
    describe('<ButtonWithRefreshCallback />', () => {
        const defaultProps: IButtonWithRefreshCallbackProps = {
            id: '🛶',
            callback: () => '🏎',
            button: {
                name: '🥐',
                enabled: true,
            },
        };

        it('should mount and unmount without error', () => {
            const component = shallowWithState(<ButtonWithRefreshCallback {...defaultProps} />, {}).dive();
            component.unmount();
        });

        describe('once mounted', () => {
            it('should call the callback on click button', () => {
                const spy = jasmine.createSpy('callback');

                const component = shallowWithState(<ButtonWithRefreshCallback {...defaultProps} callback={spy} />, {
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

                const component = shallowWithStore(<ButtonWithRefreshCallback {...defaultProps} />, store).dive();
                component
                    .find(Button)
                    .props()
                    .onClick();

                expect(store.getActions()).toContain(RefreshCallBackActions.stop(defaultProps.id));
            });

            it('should disable the button if the status is "stop"', () => {
                const component = shallowWithState(
                    <ButtonWithRefreshCallback {...defaultProps} callback={() => ''} />,
                    {
                        refreshCallback: {[defaultProps.id]: RefreshStatus.stopped},
                    }
                ).dive();

                expect(component.find(Button).props().enabled).toBe(false);
            });
        });
    });
});
