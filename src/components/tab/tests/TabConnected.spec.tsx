import {mount, ReactWrapper} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {ITabProps, Tab} from '../Tab';
import {addTab, selectTab} from '../TabActions';
import {TabConnected} from '../TabConnected';
import {DEFAULT_GROUP_ID, ITabGroupState, ITabState} from '../TabReducers';

describe('Tab', () => {
    describe('<TabConnected />', () => {
        let tab: ReactWrapper<ITabProps, any>;
        let id: string;
        let title: string;
        let wrapper: ReactWrapper<any, any>;
        let store: Store<IReactVaporState>;

        beforeEach(() => {
            id = 'tab';
            title = 'Title';

            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <TabConnected
                        id={id}
                        title={title}
                    />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            tab = wrapper.find(Tab).first();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
        });

        it('should get its id as a prop', () => {
            const idProp = tab.props().id;

            expect(idProp).toBeDefined();
            expect(idProp).toBe(id);
        });

        it('should get its title as a prop', () => {
            const titleProp = tab.props().title;

            expect(titleProp).toBeDefined();
            expect(titleProp).toBe(title);
        });

        it('should get isActive true as a prop', () => {
            const isActive = tab.props().isActive;

            expect(isActive).toBeDefined();
            expect(isActive).toBe(true);
        });

        it('should get what to do on render as a prop', () => {
            const onRenderProp = tab.props().onRender;

            expect(onRenderProp).toBeDefined();
        });

        it('should get what to do on destroy as a prop', () => {
            const onDestroyProp = tab.props().onDestroy;

            expect(onDestroyProp).toBeDefined();
        });

        it('should get what to do on select as a prop', () => {
            const onSelectProp = tab.props().onSelect;

            expect(onSelectProp).toBeDefined();
        });

        it('should add the tab in the store on render', () => {
            const tabGroup = _.find(store.getState().tabs, ((currentTabGroup: ITabGroupState) => currentTabGroup.id === DEFAULT_GROUP_ID));
            expect(tabGroup.tabs.filter((currentTab: ITabState) => currentTab.id === id).length).toBe(1);
        });

        it('should select the tab in the store when dispatching a "selectTab" action', () => {
            const tab2Id = 'tab2Id';
            store.dispatch(addTab(tab2Id));
            let tabGroup = _.find(store.getState().tabs, ((currentTabGroup: ITabGroupState) => currentTabGroup.id === DEFAULT_GROUP_ID));
            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === id).length).toBe(1);
            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === id)[0].isSelected).toBe(true);
            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === tab2Id).length).toBe(1);
            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === tab2Id)[0].isSelected).toBe(false);

            store.dispatch(selectTab(tab2Id));
            tabGroup = _.find(store.getState().tabs, ((currentTabGroup: ITabGroupState) => currentTabGroup.id === DEFAULT_GROUP_ID));
            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === id)[0].isSelected).toBe(false);
            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === tab2Id)[0].isSelected).toBe(true);
        });

        it('should select the tab when clicking on it', () => {
            const tab2Id = 'tab2Id';
            store.dispatch(addTab(tab2Id));
            let tabGroup = _.find(store.getState().tabs, ((currentTabGroup: ITabGroupState) => currentTabGroup.id === DEFAULT_GROUP_ID));
            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === id).length).toBe(1);
            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === id)[0].isSelected).toBe(true);
            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === tab2Id).length).toBe(1);
            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === tab2Id)[0].isSelected).toBe(false);

            store.dispatch(selectTab(tab2Id));
            tab.simulate('click');
            tabGroup = _.find(store.getState().tabs, ((currentTabGroup: ITabGroupState) => currentTabGroup.id === DEFAULT_GROUP_ID));
            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === id)[0].isSelected).toBe(true);
            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === tab2Id)[0].isSelected).toBe(false);
        });

        it('should remove the tab in the store on destroy', () => {
            wrapper.unmount();
            expect(store.getState().tabs.filter((currentTabGroup) => currentTabGroup.id === DEFAULT_GROUP_ID).length).toBe(0);
        });
    });
});
