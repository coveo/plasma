import * as React from 'react';
import { tablePropsMock } from './TableTestCommon';
import { TableChildLastUpdated } from '../table-children/TableChildLastUpdated';
import { mount } from 'enzyme';
import { clearState } from '../../../utils/ReduxUtils';
import { IReactVaporState } from '../../../ReactVapor';
import { TestUtils } from '../../../utils/TestUtils';
import { Store, Provider } from 'react-redux';
import { ITableProps } from '../Table';

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
                { attachTo: document.getElementById('App') },
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
