import {mount, ReactWrapper, shallow} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {PlasmaState} from '../../../PlasmaState';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/tests/TestUtils';
import {ITabProps, TabConnected} from '../../tab/Tab';
import {TabNavigation} from '../../tab/TabNavigation';
import {ITabsHeaderProps, TabsHeader} from '../TabsHeader';

describe('<TabsHeader/>', () => {
    let tabsHeaderComponent: ReactWrapper<ITabsHeaderProps, any>;
    let store: Store<PlasmaState>;

    beforeEach(() => {
        store = TestUtils.buildStore();
    });

    afterEach(() => {
        store.dispatch(clearState());
    });

    it('should render without errors', () => {
        expect(() => {
            shallow(<TabsHeader />);
        }).not.toThrow();
    });

    describe('<Title /> with default props', () => {
        beforeEach(() => {
            tabsHeaderComponent = mount(
                <Provider store={store}>
                    <TabsHeader />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            tabsHeaderComponent?.unmount();
        });

        it('should render nothing if the tabs props is empty', () => {
            expect(tabsHeaderComponent.find(TabNavigation).length).toEqual(0);
        });
    });

    describe('<TabsHeader /> with custom props', () => {
        const tab1: ITabProps = {
            id: 'a',
            title: 'test',
        };

        const tab2: ITabProps = {
            id: 'b',
            title: 'test1',
        };

        const renderTabsHeader = (props: ITabsHeaderProps = {}) => {
            tabsHeaderComponent = mount(
                <Provider store={store}>
                    <TabsHeader {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
        };

        afterEach(() => {
            tabsHeaderComponent?.unmount();
        });

        it('should render 1 tab', () => {
            renderTabsHeader({
                tabs: [tab1],
            });

            expect(tabsHeaderComponent.find(TabConnected).length).toEqual(1);
        });

        it('should render 2 tabs', () => {
            renderTabsHeader({
                tabs: [tab1, tab2],
            });

            expect(tabsHeaderComponent.find(TabConnected).length).toEqual(2);
        });
    });
});
