import {mount, ReactWrapper} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as s from 'underscore.string';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {ILastUpdatedProps, LastUpdated} from '../LastUpdated';
import {changeLastUpdated} from '../LastUpdatedActions';
import {LastUpdatedConnected} from '../LastUpdatedConnected';

describe('LastUpdated', () => {
    describe('<LastUpdatedConnected />', () => {
        let lastUpdated: ReactWrapper<ILastUpdatedProps, any>;
        let id: string;
        let wrapper: ReactWrapper<any, any>;
        let store: Store<IReactVaporState>;

        beforeEach(() => {
            id = 'last-update';

            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <LastUpdatedConnected
                        id={id}
                    />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            lastUpdated = wrapper.find(LastUpdated).first();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
        });

        it('should get its id as a prop', () => {
            const idProp = lastUpdated.props().id;

            expect(idProp).toBeDefined();
            expect(idProp).toBe(id);
        });

        it('should get last update time as a prop', () => {
            const timeProp = lastUpdated.props().time;

            expect(timeProp).toBeDefined();
        });

        it('should get what to do on render as a prop', () => {
            const onRenderProp = lastUpdated.props().onRender;

            expect(onRenderProp).toBeDefined();
        });

        it('should get what to do on destroy as a prop', () => {
            const onDestroyProp = lastUpdated.props().onDestroy;

            expect(onDestroyProp).toBeDefined();
        });

        it('should display the last update time', () => {
            expect(s.contains(lastUpdated.html(), 'AM') || s.contains(lastUpdated.html(), 'PM')).toBe(true);
        });

        it('should add the last update time in the store on render', () => {
            expect(store.getState().lastUpdatedComposite.filter((timer) => timer.id === id).length).toBe(1);
        });

        it('should update the last update time in the store when dispatching a "changeLastUpdated" action', () => {
            expect(store.getState().lastUpdatedComposite.filter((timer) => timer.id === id).length).toBe(1);

            const storedTime = store.getState().lastUpdatedComposite.filter((timer) => timer.id === id)[0].time;
            store.dispatch(changeLastUpdated(id));
            expect(store.getState().lastUpdatedComposite.filter((timer) => timer.id === id)[0].time).not.toBe(storedTime);
        });

        it('should remove the last update time in the store on destroy', () => {
            wrapper.unmount();
            expect(store.getState().lastUpdatedComposite.filter((timer) => timer.id === id).length).toBe(0);
        });
    });
});
