import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {Provider} from 'react-redux';
import * as _ from 'underscore';
import {TestUtils} from '../../../utils/TestUtils';
import {ITableHeaderProps, TableHeader} from '../TableHeader';
import {ITableHeaderCellProps, TableHeaderCell} from '../TableHeaderCell';
import {ITableHeaderCellOwnProps} from '../TableHeaderCell';
import {TableHeaderCellConnected} from '../TableHeaderCellConnected';

describe('Tables', () => {
    let columns: ITableHeaderCellProps[];
    let headerClass: string;

    describe('<TableHeader />', () => {
        it('should render without errors', () => {
            columns = [];

            expect(() => {
                shallow(
                    <TableHeader
                        columns={columns}
                    />,
                );
            }).not.toThrow();
        });
    });

    describe('<TableHeader />', () => {
        let tableHeader: ReactWrapper<ITableHeaderProps, any>;

        beforeEach(() => {
            document.getElementById('App').innerHTML = '<table id="AppTable"></table>';

            columns = [{
                title: 'Header 1',
                className: 'special',
            }, {
                title: 'Header 2',
            }, {
                title: 'Header 3',
            }];

            headerClass = 'header-class';

            tableHeader = mount(
                <TableHeader
                    columns={columns}
                    headerClass={headerClass}
                />,
                {attachTo: document.getElementById('AppTable')},
            );
        });

        afterEach(() => {
            tableHeader.detach();
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
                        <TableHeader
                            columns={_.values(currentColumns)}
                            withReduxState
                        />
                    </Provider>,
                    {attachTo: document.getElementById('AppTable')},
                );

                expect(tableHeader.find(TableHeaderCellConnected).length).toBe(1);

                expect(tableHeader.find(TableHeaderCellConnected).first().text()).toBe(currentColumns.cellWithAttributeToSort.title as string);
                expect(tableHeader.find(TableHeaderCell).last().text()).toBe(currentColumns.cellWithoutAttributeToSort.title as string);
            });

            it('should not have connected cells if withReduxState is not passed as prop even if some cells have an attribute to sort', () => {
                tableHeader = mount(
                    <Provider store={store}>
                        <TableHeader
                            columns={_.values(currentColumns)}
                        />
                    </Provider>,
                    {attachTo: document.getElementById('AppTable')},
                );

                expect(tableHeader.find(TableHeaderCellConnected).length).toBe(0);

                expect(tableHeader.find(TableHeaderCell).first().text()).toBe(currentColumns.cellWithAttributeToSort.title as string);
                expect(tableHeader.find(TableHeaderCell).last().text()).toBe(currentColumns.cellWithoutAttributeToSort.title as string);
            });
        });
    });
});
