import { shallow, mount, ReactWrapper } from 'enzyme';
import { ITableHeaderCellProps, TableHeaderCell } from '../TableHeaderCell';
import { TableHeader, ITableHeaderProps } from '../TableHeader';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

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
  });
});
