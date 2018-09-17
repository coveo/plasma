import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as _ from 'underscore';
import {Svg} from '../../svg/Svg';
import {TableSortingOrder} from '../TableConstants';
import {ITableHeaderCellProps, TableHeaderCell} from '../TableHeaderCell';

describe('Tables', () => {
    let title: string;
    let className: string;

    describe('<TableHeaderCell />', () => {
        it('should render without errors', () => {
            title = 'Header 1';

            expect(() => {
                shallow(
                    <TableHeaderCell title={title} />,
                );
            }).not.toThrow();
        });
    });

    describe('<TableHeaderCell />', () => {
        let tableHeaderCell: ReactWrapper<ITableHeaderCellProps, any>;

        beforeEach(() => {
            document.getElementById('App').innerHTML = '<table><thead><tr id="AppTableHeadRow"></tr></thead></table>';

            title = 'Header 1';
            className = 'special';

            tableHeaderCell = mount(
                <TableHeaderCell
                    title={title}
                    className={className}
                />,
                {attachTo: document.getElementById('AppTableHeadRow')},
            );
        });

        afterEach(() => {
            tableHeaderCell.detach();
        });

        it('should have the sorted attribute UNSORTED as a default prop', () => {
            expect(tableHeaderCell.props().sorted).toBe(TableSortingOrder.UNSORTED);
        });

        it('should get its title as a prop', () => {
            const titleProp = tableHeaderCell.props().title;

            expect(titleProp).toBeDefined();
            expect(titleProp).toBe(title);
        });

        it('should get its class name as a prop', () => {
            const classNameProp = tableHeaderCell.props().className;

            expect(classNameProp).toBeDefined();
            expect(classNameProp).toBe(className);
        });

        it('should have the class sent as a prop', () => {
            expect(tableHeaderCell.find('th').hasClass(className)).toBe(true);
        });

        it('should display the title sent as a prop', () => {
            expect(tableHeaderCell.html()).toContain(title);
        });

        it('should call onMount if it is set as a prop and attributeToSort is defined', () => {
            const onMountSpy = jasmine.createSpy('onMount');

            tableHeaderCell.unmount();
            tableHeaderCell.setProps({onMount: onMountSpy, attributeToSort: 'i am defined', onUnmount: _.noop});
            tableHeaderCell.mount();

            expect(onMountSpy).toHaveBeenCalledTimes(1);
        });

        it('should not call onMount if it is set as a prop and attributeToSort is undefined', () => {
            const onMountSpy = jasmine.createSpy('onMount');

            tableHeaderCell.unmount();
            tableHeaderCell.setProps({onMount: onMountSpy, onUnmount: _.noop});
            tableHeaderCell.mount();

            expect(onMountSpy).not.toHaveBeenCalled();
        });

        it('should call onSort on click of the header cell if it is set as a prop and attributeToSort is defined', () => {
            const onSortSpy = jasmine.createSpy('onSortSpy');

            tableHeaderCell.setProps({onSort: onSortSpy, attributeToSort: 'i am defined'});
            tableHeaderCell.simulate('click');

            expect(onSortSpy).toHaveBeenCalledTimes(1);
        });

        it('should not call onSort on click of the header cell if it is set as a prop and attributeToSort is undefined', () => {
            const onSortSpy = jasmine.createSpy('onSortSpy');

            tableHeaderCell.setProps({onSort: onSortSpy});
            tableHeaderCell.simulate('click');

            expect(onSortSpy).not.toHaveBeenCalled();
        });

        it('should call onUnmount if it is set as a prop', () => {
            const onUnmountSpy = jasmine.createSpy('onUnmount');

            tableHeaderCell.setProps({onUnmount: onUnmountSpy});
            tableHeaderCell.unmount();

            expect(onUnmountSpy).toHaveBeenCalledTimes(1);
        });

        it('should call onClickCallBack if it is set as a prop', () => {
            const onClickCallBackSpy = jasmine.createSpy('onClickCallBackSpy');
            tableHeaderCell.setProps({onClickCallback: onClickCallBackSpy});

            tableHeaderCell.find('th').simulate('click');

            expect(onClickCallBackSpy).toHaveBeenCalledTimes(1);
        });

        describe('sort icon', () => {
            const svgProps = {svgName: 'asc-desc', className: 'tables-sort icon'};
            const sortDefaultClass = 'admin-sort';
            const sortAscendingClass = 'admin-sort-ascending';
            const sortDescendingClass = 'admin-sort-descending';
            const throwIfSvgNotPresent = () => {
                expect(tableHeaderCell.find(Svg).length).toBe(1);
                expect(tableHeaderCell.find(Svg).props()).toEqual(jasmine.objectContaining(svgProps));
            };

            it('should not be present if the cell has no sort', () => {
                expect(tableHeaderCell.find(Svg).length).toBe(0);
            });

            it('should have a sort icon in an unsorted state if it has sort in state UNSORTED', () => {
                tableHeaderCell.setProps({sorted: TableSortingOrder.UNSORTED, attributeToSort: 'anyWouldDo'}).update();

                throwIfSvgNotPresent();
                expect(tableHeaderCell.find(`.${sortDefaultClass}`).length).toBe(1);
                expect(tableHeaderCell.find(`.${sortAscendingClass}`).length).toBe(0);
                expect(tableHeaderCell.find(`.${sortDescendingClass}`).length).toBe(0);
            });

            it('should have a sort icon in a sorted ascending state if it has sort in state ASCENDING', () => {
                tableHeaderCell.setProps({sorted: TableSortingOrder.ASCENDING, attributeToSort: 'anyWouldDo'}).update();

                throwIfSvgNotPresent();
                expect(tableHeaderCell.find(`.${sortDefaultClass}`).length).toBe(1);
                expect(tableHeaderCell.find(`.${sortAscendingClass}`).length).toBe(1);
                expect(tableHeaderCell.find(`.${sortDescendingClass}`).length).toBe(0);
            });

            it('should have a sort icon in a sorted descending state if it has sort in state DESCENDING', () => {
                tableHeaderCell.setProps({sorted: TableSortingOrder.DESCENDING, attributeToSort: 'anyWouldDo'}).update();

                throwIfSvgNotPresent();
                expect(tableHeaderCell.find(`.${sortDefaultClass}`).length).toBe(1);
                expect(tableHeaderCell.find(`.${sortAscendingClass}`).length).toBe(0);
                expect(tableHeaderCell.find(`.${sortDescendingClass}`).length).toBe(1);
            });
        });
    });
});
