import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {PlasmaState} from '../../../PlasmaState';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/tests/TestUtils';
import {ITableProps} from '../Table';
import {TableChildLastUpdated} from '../table-children/TableChildLastUpdated';
import {tablePropsMock} from './TableTestCommon';

describe('<TableChildLastUpdated />', () => {
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
                    <TableChildLastUpdated {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );

        describe('render without error', () => {
            it('should render without error if basic props are passed', () => {
                expect(() => {
                    mountComponentWithProps(tablePropsMock);
                }).not.toThrow();
            });
        });
    });
});
