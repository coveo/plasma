import {mount, ReactWrapper} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {PlasmaState} from '../../../PlasmaState.js';
import {clearState} from '../../../utils/ReduxUtils.js';
import {TestUtils} from '../../../utils/tests/TestUtils.js';
import {ITableCollapsibleRowProps, TableCollapsibleRow} from '../TableCollapsibleRow.js';
import {TableCollapsibleRowConnected} from '../TableCollapsibleRowConnected.js';
import {addRow} from '../TableRowActions.js';

describe('Tables', () => {
    describe('<TableCollapsibleRowConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let tableCollapsibleRow: ReactWrapper<ITableCollapsibleRowProps, any>;
        let basicTableCollapsibleRowProps: ITableCollapsibleRowProps;
        let store: Store<PlasmaState>;

        beforeEach(() => {
            basicTableCollapsibleRowProps = {
                id: 'collapsible-row',
                nbColumns: 6,
                isInError: true,
                error: {
                    errorDescription: 'error',
                    errorPrecision: 'the row is in error',
                    errorTroubleshoot: 'you should do something',
                    errorStatus: 'urgent',
                    errorCode: 'error_1',
                },
            };

            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <table>
                        <tbody>
                            <TableCollapsibleRowConnected {...basicTableCollapsibleRowProps} />
                        </tbody>
                    </table>
                </Provider>,
                {attachTo: document.getElementById('App')}
            );
            store.dispatch(addRow(basicTableCollapsibleRowProps.id));

            wrapper.update();
            tableCollapsibleRow = wrapper.find(TableCollapsibleRow).first();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper?.unmount();
        });

        it('should get if it is opened as a prop', () => {
            const openedProp = tableCollapsibleRow.props().opened;

            expect(openedProp).toBeDefined();
            expect(openedProp).toBe(false);
        });
    });
});
