import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {PlasmaState} from '../../../PlasmaState';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/tests/TestUtils';
import {NavigationConnected} from '../../navigation/NavigationConnected';
import {ITableProps} from '../Table';
import {TableChildNavigation} from '../table-children/TableChildNavigation';
import {tablePropsMock} from './TableTestCommon';

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
                {attachTo: document.getElementById('App')},
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
                mountComponentWithProps({...tablePropsMock, navigation: true}).find(NavigationConnected).length,
            ).toBe(1);
        });

        it('should render NavigationConnected is passed as NavigationChildrenProps', () => {
            expect(mountComponentWithProps({...tablePropsMock, navigation: {}}).find(NavigationConnected).length).toBe(
                1,
            );
        });
    });
});
