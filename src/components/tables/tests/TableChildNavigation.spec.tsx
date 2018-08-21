import {mount} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {NavigationConnected} from '../../navigation/NavigationConnected';
import {ITableProps} from '../Table';
import {TableChildNavigation} from '../table-children/TableChildNavigation';
import {tablePropsMock} from './TableTestCommon';

describe('<TableChildNavigation />', () => {
    let store: Store<IReactVaporState>;

    beforeEach(() => {
        store = TestUtils.buildStore();
    });

    afterEach(() => {
        store.dispatch(clearState());
    });

    describe('render', () => {
        const mountComponentWithProps = (props: ITableProps) => {
            return mount(
                <Provider store={store}>
                    <TableChildNavigation {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
        };

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
            expect(mountComponentWithProps(tablePropsMock).html()).toBeNull();
        });

        it('should render NavigationConnected if passed as boolean', () => {
            expect(mountComponentWithProps({...tablePropsMock, navigation: true}).find(NavigationConnected).length).toBe(1);
        });

        it('should render NavigationConnected is passed as NavigationChildrenProps', () => {
            expect(mountComponentWithProps({...tablePropsMock, navigation: {}}).find(NavigationConnected).length).toBe(1);
        });
    });
});
