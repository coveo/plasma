import { shallow, mount, ReactWrapper } from 'enzyme';
import { TableHeaderCell, ITableHeaderCellProps } from '../TableHeaderCell';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Tables', () => {
  let title: string;
  let className: string;

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
    let wrapper: ReactWrapper<any, any>;
    let tableHeaderCell: ReactWrapper<ITableHeaderCellProps, any>;

    beforeEach(() => {
      title = 'Header 1';
      className = 'special';

      wrapper = mount(
        <table>
          <thead>
            <tr>
              <TableHeaderCell
                title={title}
                className={className}
                />
            </tr>
          </thead>
        </table>,
        { attachTo: document.getElementById('App') }
      );
      tableHeaderCell = wrapper.find(TableHeaderCell);
    });

    afterEach(() => {
      wrapper.unmount();
      wrapper.detach();
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

    it('should have the class sent as a prop', () => {
      expect(tableHeaderCell.find('th').hasClass(className)).toBe(true);
    });

    it('should display the title sent as a prop', () => {
      expect(tableHeaderCell.html()).toContain(title);
    });
  });
});
