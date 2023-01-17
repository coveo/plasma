import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {PlasmaState} from '../../../PlasmaState.js';
import {clearState} from '../../../utils/ReduxUtils.js';
import {TestUtils} from '../../../utils/tests/TestUtils.js';
import {ITableProps} from '../Table.js';
import {TableChildLastUpdated} from '../table-children/TableChildLastUpdated.js';
import {tablePropsMock} from './TableTestCommon.js';

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
                {attachTo: document.getElementById('App')}
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
