import { shallow, mount, ReactWrapper } from 'enzyme';
import { TableHeaderCell, ITableHeaderCellProps } from '../TableHeaderCell';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Tables', () => {
  let title: string;
  let className: string;
  let cellContent: JSX.Element;
  let onClickFunction: () => void = jasmine.createSpy('onClick');

  describe('<TableHeaderCell />', () => {
    it('should render without errors', () => {
      title = 'Header 1';

      expect(() => {
        shallow(
          <TableHeaderCell title={title} />
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
      cellContent = <div></div>;

      tableHeaderCell = mount(
        <TableHeaderCell
          title={title}
          className={className}
          cellContent={cellContent}
          onClick={onClickFunction}
          />,
        { attachTo: document.getElementById('AppTableHeadRow') }
      );
    });

    afterEach(() => {
      tableHeaderCell.unmount();
      tableHeaderCell.detach();
    });

    it('should get its title as a prop', () => {
      let titleProp = tableHeaderCell.props().title;

      expect(titleProp).toBeDefined();
      expect(titleProp).toBe(title);
    });

    it('should get its class name as a prop', () => {
      let classNameProp = tableHeaderCell.props().className;

      expect(classNameProp).toBeDefined();
      expect(classNameProp).toBe(className);
    });

    it('should get its cell content as a prop', () => {
      let cellContentProp = tableHeaderCell.props().cellContent;

      expect(cellContentProp).toBeDefined();
      expect(cellContentProp).toBe(cellContent);
    });

    it('should get its onClick as a prop', () => {
      let onClickProp = tableHeaderCell.props().onClick;

      expect(onClickProp).toBeDefined();
    });

    it('should have the class sent as a prop', () => {
      expect(tableHeaderCell.find('th').hasClass(className)).toBe(true);
    });

    it('should display the title sent as a prop', () => {
      expect(tableHeaderCell.html()).toContain(title);
    });

    it('should should call onClick on click', () => {
      expect(onClickFunction).not.toHaveBeenCalled();

      tableHeaderCell.simulate('click');

      expect(onClickFunction).toHaveBeenCalled();
    });
  });
});
