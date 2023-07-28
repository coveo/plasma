import {mount, ReactWrapper, shallow} from 'enzyme';
import * as _ from 'underscore';
import {createTestAppContainer, removeTestAppContainer} from '../../../utils/tests/TestUtils';

import {TableCollapsibleRowToggle} from '../TableCollapsibleRowToggle';
import {ITableHeadingRowProps, TableHeadingRow} from '../TableHeadingRow';

describe('Tables', () => {
    let basicTableHeadingRowProps: ITableHeadingRowProps;

    it('should render without errors', () => {
        basicTableHeadingRowProps = {
            isCollapsible: false,
        };

        expect(() => {
            shallow(<TableHeadingRow {...basicTableHeadingRowProps} />);
        }).not.toThrow();
    });

    describe('<TableHeadingRow />', () => {
        let tableHeadingRow: ReactWrapper<ITableHeadingRowProps, any>;
        let tableHeadingRowInstance: TableHeadingRow;

        beforeEach(() => {
            createTestAppContainer();
            document.getElementById('App').innerHTML = '<table><tbody id="AppTableBody"></tbody></table>';

            basicTableHeadingRowProps = {
                isCollapsible: true,
            };

            tableHeadingRow = mount(
                <TableHeadingRow {...basicTableHeadingRowProps}>
                    <td>
                        <div className="dropdown" />
                    </td>
                </TableHeadingRow>,
                {attachTo: document.getElementById('AppTableBody')},
            );
            tableHeadingRowInstance = tableHeadingRow.instance() as TableHeadingRow;
        });

        afterEach(() => {
            removeTestAppContainer();
        });

        it('should get if it is collapsible as a prop', () => {
            const isCollapsibleProp = tableHeadingRow.props().isCollapsible;

            expect(isCollapsibleProp).toBeDefined();
            expect(isCollapsibleProp).toBe(basicTableHeadingRowProps.isCollapsible);
        });

        it('should have heading-row as a class if collapsible', () => {
            const rowClass = 'heading-row';

            expect(tableHeadingRow.find('tr').hasClass(rowClass)).toBe(true);

            tableHeadingRow.setProps({isCollapsible: false});

            expect(tableHeadingRow.find('tr').hasClass(rowClass)).toBe(false);
        });

        it('should render a <TableCollapsibleRowToggle /> if collapsible', () => {
            expect(tableHeadingRow.find(TableCollapsibleRowToggle).length).toBe(1);

            tableHeadingRow.setProps({isCollapsible: false});

            expect(tableHeadingRow.find(TableCollapsibleRowToggle).length).toBe(0);
        });

        it('should have class opened if opened prop is set to true', () => {
            const expectedClass = 'opened';
            const newTabledHeadingRowProps = _.extend({}, basicTableHeadingRowProps, {opened: true});

            expect(tableHeadingRow.find('tr').hasClass(expectedClass)).toBe(false);

            tableHeadingRow.setProps(newTabledHeadingRowProps as any);

            expect(tableHeadingRow.find('tr').hasClass(expectedClass)).toBe(true);
        });

        it('should call onRender prop if set on mount', () => {
            const onRenderSpy = jest.fn();
            const newTabledHeadingRowProps = _.extend({}, basicTableHeadingRowProps, {onRender: onRenderSpy});

            tableHeadingRow.unmount();
            tableHeadingRow.setProps(newTabledHeadingRowProps as any);
            tableHeadingRow.mount();

            expect(onRenderSpy).toHaveBeenCalled();
        });

        it('should call onDestroy prop if set when unmounting', () => {
            const onDestroySpy = jest.fn();
            const newTabledHeadingRowProps = _.extend({}, basicTableHeadingRowProps, {onDestroy: onDestroySpy});

            expect(() => tableHeadingRowInstance.componentWillUnmount()).not.toThrow();

            tableHeadingRow.unmount();
            tableHeadingRow.setProps(newTabledHeadingRowProps as any);
            tableHeadingRow.mount();
            tableHeadingRow.unmount();

            expect(onDestroySpy).toHaveBeenCalled();
        });

        it('should call onClick prop if set when clicking on row', () => {
            const onClickSpy = jest.fn();
            const newTabledHeadingRowProps = _.extend({}, basicTableHeadingRowProps, {onClick: onClickSpy});

            tableHeadingRow.setProps(newTabledHeadingRowProps as any);
            tableHeadingRow.find('tr').simulate('click');

            expect(onClickSpy).toHaveBeenCalled();
        });

        it('should call onDoubleClick prop if set when double clicking on row', () => {
            const onDoubleClickSpy = jest.fn();
            const newTabledHeadingRowProps = _.extend({}, basicTableHeadingRowProps, {onDoubleClick: onDoubleClickSpy});

            tableHeadingRow.setProps(newTabledHeadingRowProps as any);
            tableHeadingRow.find('tr').simulate('dblclick');

            expect(onDoubleClickSpy).toHaveBeenCalledTimes(1);
        });

        it('should call onClickCallBack prop if set when clicking on row', () => {
            const onClickCallback = jest.fn();
            const newTabledHeadingRowProps = _.extend({}, basicTableHeadingRowProps, {onClickCallback});
            tableHeadingRow.setProps(newTabledHeadingRowProps as any);

            tableHeadingRow.find('tr').simulate('click');

            expect(onClickCallback).toHaveBeenCalledTimes(1);
        });

        it('should not call onClick prop if set when clicking inside an underlying dropdown', () => {
            const onClickSpy = jest.fn();
            const newTabledHeadingRowProps = _.extend({}, basicTableHeadingRowProps, {onClick: onClickSpy});

            tableHeadingRow.setProps(newTabledHeadingRowProps as any);
            tableHeadingRow.find('.dropdown').simulate('click');

            expect(onClickSpy).not.toHaveBeenCalled();
        });
    });
});
