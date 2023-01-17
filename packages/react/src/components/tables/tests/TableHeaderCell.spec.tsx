import {mount, ReactWrapper, shallow} from 'enzyme';
import * as _ from 'underscore';

import {TableSortingOrder} from '../TableConstants.js';
import {ITableHeaderCellProps, TableHeaderCell} from '../TableHeaderCell.js';

describe('Tables', () => {
    let title: string;
    let className: string;

    it('should render without errors', () => {
        title = 'Header 1';

        expect(() => {
            shallow(<TableHeaderCell title={title} />);
        }).not.toThrow();
    });

    describe('<TableHeaderCell />', () => {
        let tableHeaderCell: ReactWrapper<ITableHeaderCellProps, any>;

        beforeEach(() => {
            const div = document.createElement('div');
            div.setAttribute('id', 'App');
            document.body.appendChild(div);
            document.getElementById('App').innerHTML = '<table><thead><tr id="AppTableHeadRow"></tr></thead></table>';

            title = 'Header 1';
            className = 'special';

            tableHeaderCell = mount(<TableHeaderCell title={title} className={className} />, {
                attachTo: document.getElementById('AppTableHeadRow'),
            });
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
            const onMountSpy = jest.fn();

            tableHeaderCell.unmount();
            tableHeaderCell.setProps({onMount: onMountSpy, attributeToSort: 'i am defined', onUnmount: _.noop});
            tableHeaderCell.mount();

            expect(onMountSpy).toHaveBeenCalledTimes(1);
        });

        it('should not call onMount if it is set as a prop and attributeToSort is undefined', () => {
            const onMountSpy = jest.fn();

            tableHeaderCell.unmount();
            tableHeaderCell.setProps({onMount: onMountSpy, onUnmount: _.noop});
            tableHeaderCell.mount();

            expect(onMountSpy).not.toHaveBeenCalled();
        });

        it('should call onSort on click of the header cell if it is set as a prop and attributeToSort is defined', () => {
            const onSortSpy = jest.fn();

            tableHeaderCell.setProps({onSort: onSortSpy, attributeToSort: 'i am defined'});
            tableHeaderCell.simulate('click');

            expect(onSortSpy).toHaveBeenCalledTimes(1);
        });

        it('should not call onSort on click of the header cell if it is set as a prop and attributeToSort is undefined', () => {
            const onSortSpy = jest.fn();

            tableHeaderCell.setProps({onSort: onSortSpy});
            tableHeaderCell.simulate('click');

            expect(onSortSpy).not.toHaveBeenCalled();
        });

        it('should call onUnmount if it is set as a prop', () => {
            const onUnmountSpy = jest.fn();

            tableHeaderCell.setProps({onUnmount: onUnmountSpy});
            tableHeaderCell.unmount();

            expect(onUnmountSpy).toHaveBeenCalledTimes(1);
        });

        it('should call onClickCallBack if it is set as a prop', () => {
            const onClickCallBackSpy = jest.fn();
            tableHeaderCell.setProps({onClickCallback: onClickCallBackSpy});

            tableHeaderCell.find('th').simulate('click');

            expect(onClickCallBackSpy).toHaveBeenCalledTimes(1);
        });
    });
});
