import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {PlasmaState} from '../../../PlasmaState.js';
import {clearState} from '../../../utils/ReduxUtils.js';
import {TestUtils} from '../../../utils/tests/TestUtils.js';
import {NavigationConnected} from '../../navigation/NavigationConnected.js';
import {ITableProps} from '../Table.js';
import {TableChildNavigation} from '../table-children/TableChildNavigation.js';
import {tablePropsMock} from './TableTestCommon.js';

describe('<TableChildNavigation />', () => {
    let store: Store<PlasmaState>;

    beforeEach(() => {
        store = TestUtils.buildStore();
    });

    afterEach(() => {
        store.dispatch(clearState());
    });

    describe('render', () => {
        const mountComponentWithProps = (props: ITableProps) =>
            mount(
                <Provider store={store}>
                    <TableChildNavigation {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')}
            );

        it('should render without error if basic props are passed', () => {
            expect(() => {
                mountComponentWithProps(tablePropsMock);
            }).not.toThrow();
        });

        it('should render without error if basic props are passed with navigation prop as boolean', () => {
            expect(() => {
                mountComponentWithProps({...tablePropsMock, navigation: true});
            }).not.toThrow();
        });

        it('should render without error if basic props are passed with navigation prop as NavigationChildrenProps', () => {
            expect(() => {
                mountComponentWithProps({...tablePropsMock, navigation: {}});
            }).not.toThrow();
        });

        it('should render null if navigation is not passed as prop', () => {
            expect(mountComponentWithProps(tablePropsMock).html()).toBe('');
        });

        it('should render NavigationConnected if passed as boolean', () => {
            expect(
                mountComponentWithProps({...tablePropsMock, navigation: true}).find(NavigationConnected).length
            ).toBe(1);
        });

        it('should render NavigationConnected is passed as NavigationChildrenProps', () => {
            expect(mountComponentWithProps({...tablePropsMock, navigation: {}}).find(NavigationConnected).length).toBe(
                1
            );
        });
    });
});
