import {mount, ReactWrapper} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import s from 'underscore.string';

import {PlasmaState} from '../../../PlasmaState.js';
import {clearState} from '../../../utils/ReduxUtils.js';
import {TestUtils} from '../../../utils/tests/TestUtils.js';
import {ILastUpdatedProps, LastUpdated} from '../LastUpdated.js';
import {changeLastUpdated} from '../LastUpdatedActions.js';
import {LastUpdatedConnected} from '../LastUpdatedConnected.js';

describe('LastUpdated', () => {
    describe('<LastUpdatedConnected />', () => {
        let lastUpdated: ReactWrapper<ILastUpdatedProps, any>;
        let id: string;
        let wrapper: ReactWrapper<any, any>;
        let store: Store<PlasmaState>;

        beforeEach(() => {
            id = 'last-update';

            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <LastUpdatedConnected id={id} />
                </Provider>,
                {attachTo: document.getElementById('App')}
            );
            lastUpdated = wrapper.find(LastUpdated).first();
        });

        afterEach(() => {
            store.dispatch(clearState());
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
            const view = lastUpdated.props().onRender;

            expect(view).toBeDefined();
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

            expect(store.getState().lastUpdatedComposite.filter((timer) => timer.id === id)[0].time).not.toBe(
                storedTime
            );
        });

        it('should remove the last update time in the store on destroy', () => {
            wrapper.unmount();

            expect(store.getState().lastUpdatedComposite.filter((timer) => timer.id === id).length).toBe(0);
        });
    });
});
