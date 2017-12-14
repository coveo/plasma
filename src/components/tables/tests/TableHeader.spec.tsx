import { shallow, mount, ReactWrapper } from 'enzyme';
import { ITableHeaderCellProps, TableHeaderCell } from '../TableHeaderCell';
import { TableHeader, ITableHeaderProps } from '../TableHeader';
import { ITableHeaderCellOwnProps } from '../TableHeaderCell';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as _ from 'underscore';
import { Provider } from 'react-redux';
import { TestUtils } from '../../../utils/TestUtils';
import { TableHeaderCellConnected } from '../TableHeaderCellConnected';

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
          />
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
        className: 'special'
      }, {
        title: 'Header 2'
      }, {
        title: 'Header 3'
      }];

      headerClass = 'header-class';

      tableHeader = mount(
        <TableHeader
          columns={columns}
          headerClass={headerClass}
        />,
        { attachTo: document.getElementById('AppTable') }
      );
    });

    afterEach(() => {
      tableHeader.unmount();
      tableHeader.detach();
    });

    it('should get the columns as a prop', () => {
      let columnsProp = tableHeader.props().columns;

      expect(columnsProp).toBeDefined();
      expect(columnsProp).toBe(columns);
    });

    it('should get the header class name as a prop', () => {
      let headerClassProp = tableHeader.props().headerClass;

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
      const columns: { [key: string]: ITableHeaderCellOwnProps } = {
        cellWithAttributeToSort: {
          title: 'I will be connected',
          attributeToSort: 'attributeJustForTesting'
        },
        cellWithoutAttributeToSort: {
          title: 'I will not be connected because it is not necessary',
        }
      };

      const store = TestUtils.buildStore();

      it('should have connected cells if connectCell is passed as prop and some cells have an attribute to sort', () => {
        tableHeader = mount(
          <Provider store={store}>
            <TableHeader
              columns={_.values(columns)}
              connectCell
            />
          </Provider>,
          { attachTo: document.getElementById('AppTable') }
        );

        expect(tableHeader.find(TableHeaderCellConnected).length).toBe(1);

        expect(tableHeader.find(TableHeaderCellConnected).first().text()).toBe(columns.cellWithAttributeToSort.title);
        expect(tableHeader.find(TableHeaderCell).last().text()).toBe(columns.cellWithoutAttributeToSort.title);
      });

      it('should not have connected cells if connectCell is not passed as prop even if some cells have an attribute to sort', () => {
        tableHeader = mount(
          <Provider store={store}>
            <TableHeader
              columns={_.values(columns)}
            />
          </Provider>,
          { attachTo: document.getElementById('AppTable') }
        );

        expect(tableHeader.find(TableHeaderCellConnected).length).toBe(0);

        expect(tableHeader.find(TableHeaderCell).first().text()).toBe(columns.cellWithAttributeToSort.title);
        expect(tableHeader.find(TableHeaderCell).last().text()).toBe(columns.cellWithoutAttributeToSort.title);
      });
    });
  });
});
