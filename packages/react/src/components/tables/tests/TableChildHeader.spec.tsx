import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {PlasmaState} from '../../../PlasmaState.js';
import {clearState} from '../../../utils/ReduxUtils.js';
import {TestUtils} from '../../../utils/tests/TestUtils.js';
import {ITableProps} from '../Table.js';
import {TableChildHeader} from '../table-children/TableChildHeader.js';
import {TableHeader} from '../TableHeader.js';
import {TableHeaderCell} from '../TableHeaderCell.js';
import {TableHeaderCellConnected} from '../TableHeaderCellConnected.js';
import {tablePropsMock} from './TableTestCommon.js';

describe('<TableChildHeader />', () => {
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
                    <TableChildHeader {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')}
            );

        it('should render without error if basic props are passed', () => {
            expect(() => {
                mountComponentWithProps(tablePropsMock);
            }).not.toThrow();
        });

        it('should have as many non-connected header cells as there are headerAttribute', () => {
            const tableHeader = mountComponentWithProps(tablePropsMock).find(TableHeader);

            expect(tableHeader.find(TableHeaderCell).length).toBe(tablePropsMock.headingAttributes.length);
        });

        it('should render with a mod-no-border-top and no mod-deactivate-pointer class by default', () => {
            const tableHeader = mountComponentWithProps(tablePropsMock).find(TableHeader);

            expect(tableHeader.props().headerClass).toContain('mod-no-border-top');
            expect(tableHeader.props().headerClass).not.toContain('mod-deactivate-pointer');
        });

        it('should render with a mod-no-border-top and a mod-deactivate-pointer class if table is loading', () => {
            const tableHeader = mountComponentWithProps({
                ...tablePropsMock,
                tableCompositeState: {isLoading: true},
            } as any).find(TableHeader);

            expect(tableHeader.props().headerClass).toContain('mod-no-border-top');
            expect(tableHeader.props().headerClass).toContain('mod-deactivate-pointer');
        });

        it('should render with class name if defined', () => {
            const newClassToAdd = 'wow';
            const tableHeader = mountComponentWithProps({...tablePropsMock, tableHeaderClasses: [newClassToAdd]}).find(
                TableHeader
            );

            expect(tableHeader.props().headerClass).toContain(newClassToAdd);
        });

        it('should have class on header when defined in the attributes', () => {
            const newClassToAdd = 'wow';
            const headerAttributesWithHeaderClasses = tablePropsMock.headingAttributes.map((attribute) => ({
                ...attribute,
                headerClasses: [newClassToAdd],
            }));
            const tableHeader = mountComponentWithProps({
                ...tablePropsMock,
                headingAttributes: headerAttributesWithHeaderClasses,
            }).find(TableHeader);

            tableHeader.find(TableHeaderCell).forEach((headerCell) => {
                expect(headerCell.props().className).toContain(newClassToAdd);
            });
        });

        it('should have no connected header cells if no headerAttribute has sort', () => {
            const tableHeader = mountComponentWithProps(tablePropsMock).find(TableHeader);

            expect(tableHeader.find(TableHeaderCellConnected).length).toBe(0);
            expect(tableHeader.find(TableHeaderCell).length).not.toBe(0);
        });

        it('should have as many connected header cells as there are headerAttribute with sort', () => {
            const headerAttributesWithSort = tablePropsMock.headingAttributes.map((attribute) => ({
                ...attribute,
                sort: true,
            }));
            const tableHeader = mountComponentWithProps({
                ...tablePropsMock,
                headingAttributes: headerAttributesWithSort,
            }).find(TableHeader);

            expect(tableHeader.find(TableHeaderCellConnected).length).toBe(headerAttributesWithSort.length);
        });

        it('should have proper sort information for each connected header cell', () => {
            const headerAttributesWithSort = tablePropsMock.headingAttributes.map((attribute) => ({
                ...attribute,
                sort: true,
            }));
            const tableHeader = mountComponentWithProps({
                ...tablePropsMock,
                headingAttributes: headerAttributesWithSort,
            }).find(TableHeader);

            tableHeader.find(TableHeaderCellConnected).forEach((headerCell, index) => {
                expect(headerCell.props().tableId).toBe(tablePropsMock.id);
                expect(headerCell.props().attributeToSort).toBe(headerAttributesWithSort[index].attributeName);
            });
        });
    });
});
