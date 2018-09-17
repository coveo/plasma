import {mount, ReactWrapper} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {addTab} from '../TabActions';
import {ITabPaneProps, TabPane} from '../TabPane';
import {TabPaneConnected} from '../TabPaneConnected';

describe('TabPane', () => {
    describe('<TabPaneConnected />', () => {
        let tabPane: ReactWrapper<ITabPaneProps, any>;
        let id: string;
        let wrapper: ReactWrapper<any, any>;
        let store: Store<IReactVaporState>;

        beforeEach(() => {
            id = 'tab';

            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <TabPaneConnected
                        id={id}
                    />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            tabPane = wrapper.find(TabPane).first();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
        });

        it('should get its id as a prop', () => {
            const idProp = tabPane.props().id;

            expect(idProp).toBeDefined();
            expect(idProp).toBe(id);
        });

        it('should get isActive false as a prop', () => {
            const isActive = tabPane.props().isActive;

            expect(isActive).toBeDefined();
            expect(isActive).toBe(false);
        });

        it('should set the tab pane as active when adding a tab with same ID and no other tab is in the store', () => {
            store.dispatch(addTab(id));
            wrapper.update();

            expect(wrapper.find(TabPane).props().isActive).toBe(true);
        });

        it('should not set the tab pane as active when adding a tab with same ID and another tab is in the store', () => {
            store.dispatch(addTab('tab-id-2'));
            store.dispatch(addTab(id));
            wrapper.update();

            expect(wrapper.find(TabPane).props().isActive).toBe(false);
        });
    });
});
