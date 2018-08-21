import {mount} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {ITableProps} from '../Table';
import {TableChildLastUpdated} from '../table-children/TableChildLastUpdated';
import {tablePropsMock} from './TableTestCommon';

describe('<TableChildLastUpdated />', () => {
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
                    <TableChildLastUpdated {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
        };

        describe('render without error', () => {
            it('should render without error if basic props are passed', () => {
                expect(() => {
                    mountComponentWithProps(tablePropsMock);
                }).not.toThrow();
            });
        });
    });
});
