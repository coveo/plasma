import {mount, ReactWrapper, shallow} from 'enzyme';
import {Provider} from 'react-redux';
import * as _ from 'underscore';

import {createTestAppContainer, TestUtils} from '../../../utils/tests/TestUtils.js';
import {ITableHeaderProps, TableHeader} from '../TableHeader.js';
import {ITableHeaderCellOwnProps, ITableHeaderCellProps, TableHeaderCell} from '../TableHeaderCell.js';
import {TableHeaderCellConnected} from '../TableHeaderCellConnected.js';

describe('Tables', () => {
    let columns: ITableHeaderCellProps[];
    let headerClass: string;

    it('should render without errors', () => {
        columns = [];

        expect(() => {
            shallow(<TableHeader columns={columns} />);
        }).not.toThrow();
    });

    describe('<TableHeader />', () => {
        let tableHeader: ReactWrapper<ITableHeaderProps, any>;

        beforeEach(() => {
            createTestAppContainer();
            document.getElementById('App').innerHTML = '<table id="AppTable"></table>';

            columns = [
                {
                    title: 'Header 1',
                    className: 'special',
                },
                {
                    title: 'Header 2',
                },
                {
                    title: 'Header 3',
                },
            ];

            headerClass = 'header-class';

            tableHeader = mount(<TableHeader columns={columns} headerClass={headerClass} />);
        });

        it('should get the columns as a prop', () => {
            const columnsProp = tableHeader.props().columns;

            expect(columnsProp).toBeDefined();
            expect(columnsProp).toBe(columns);
        });

        it('should get the header class name as a prop', () => {
            const headerClassProp = tableHeader.props().headerClass;

            expect(headerClassProp).toBeDefined();
            expect(headerClassProp).toBe(headerClass);
        });

        it('should render as many <TableHeaderCell /> as there are columns', () => {
            expect(tableHeader.find(TableHeaderCell).length).toBe(columns.length);
        });

        it('should have the class sent as a prop', () => {
            expect(tableHeader.find('thead').hasClass(headerClass)).toBe(true);
        });

        describe('table connected cells vs unconnected table cells', () => {
            const currentColumns: {[key: string]: ITableHeaderCellOwnProps} = {
                cellWithAttributeToSort: {
                    title: 'I will be connected',
                    attributeToSort: 'attributeJustForTesting',
                },
                cellWithoutAttributeToSort: {
                    title: 'I will not be connected because it is not necessary',
                },
            };

            const store = TestUtils.buildStore();

            it('should have connected cells if withReduxState is passed as prop and some cells have an attribute to sort', () => {
                tableHeader = mount(
                    <Provider store={store}>
                        <TableHeader columns={_.values(currentColumns)} withReduxState />
                    </Provider>
                );

                expect(tableHeader.find(TableHeaderCellConnected).length).toBe(1);

                expect(tableHeader.find(TableHeaderCellConnected).first().text()).toBe(
                    currentColumns.cellWithAttributeToSort.title as string
                );

                expect(tableHeader.find(TableHeaderCell).last().text()).toBe(
                    currentColumns.cellWithoutAttributeToSort.title as string
                );
            });

            it('should not have connected cells if withReduxState is not passed as prop even if some cells have an attribute to sort', () => {
                tableHeader = mount(
                    <Provider store={store}>
                        <TableHeader columns={_.values(currentColumns)} />
                    </Provider>
                );

                expect(tableHeader.find(TableHeaderCellConnected).length).toBe(0);

                expect(tableHeader.find(TableHeaderCell).first().text()).toBe(
                    currentColumns.cellWithAttributeToSort.title as string
                );

                expect(tableHeader.find(TableHeaderCell).last().text()).toBe(
                    currentColumns.cellWithoutAttributeToSort.title as string
                );
            });
        });
    });
});
