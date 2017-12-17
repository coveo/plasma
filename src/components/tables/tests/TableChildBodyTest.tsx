import * as React from 'react';
import { tablePropsMock, tablePropsMockWithData } from './TableTestCommon';
import { TableChildBody } from '../table-children/TableChildBody';
import { TableRowWrapper } from '../TableRowWrapper';
import { ITableProps } from '../Table';
import { mount } from 'enzyme';
import { clearState } from '../../../utils/ReduxUtils';
import { IReactVaporState } from '../../../ReactVapor';
import { TestUtils } from '../../../utils/TestUtils';
import { Store, Provider } from 'react-redux';
import { TableHeadingRowConnected } from '../TableHeadingRowConnected';
import { TableCollapsibleRowConnected } from '../TableCollapsibleRowConnected';
import * as _ from 'underscore';
import { IActionOptions } from '../../actions/Action';

describe('<TableChildHeader />', () => {
  let store: Store<IReactVaporState>;

  beforeEach(() => {
    store = TestUtils.buildStore();
  });

  afterEach(() => {
    store.dispatch(clearState());
  });

  describe('render', () => {
    const mountComponentWithProps = (props: ITableProps) => {
      return mount(
        <Provider store={store}>
          <table>
            {TableChildBody(props)}
          </table>
        </Provider>,
        { attachTo: document.getElementById('App') },
      );
    };

    it('should render without error without data to be displayed', () => {
      expect(() => {
        mountComponentWithProps(tablePropsMock);
      }).not.toThrow();
    });

    it('should render without error with data to be displayed', () => {
      expect(() => {
        mountComponentWithProps(tablePropsMockWithData);
      }).not.toThrow();
    });

    it('should render no table wrapper if there are no displayed rows', () => {
      expect(mountComponentWithProps(tablePropsMock).find(TableRowWrapper).length).toBe(0);
    });

    it('should render as many table row wrappers as there are displayed ids', () => {
      expect(mountComponentWithProps(tablePropsMockWithData).find(TableRowWrapper).length)
        .toBe(tablePropsMockWithData.tableCompositeState.data.displayedIds.length);
    });

    it('should render as many table heading row connected as there are displayed ids', () => {
      expect(mountComponentWithProps(tablePropsMockWithData).find(TableHeadingRowConnected).length)
        .toBe(tablePropsMockWithData.tableCompositeState.data.displayedIds.length);
    });

    it('should render as many table collapsible row connected as there are displayed ids with defined collapsibleFormatter ouput', () => {
      const numberOfDefinedCollapsibleFormatterOuputs = tablePropsMockWithData.tableCompositeState.data.displayedIds.filter((id: string) =>
        !_.isUndefined(tablePropsMockWithData.collapsibleFormatter(tablePropsMockWithData.tableCompositeState.data.byId[id]))
      ).length;
      expect(mountComponentWithProps(tablePropsMockWithData).find(TableCollapsibleRowConnected).length)
        .toBe(numberOfDefinedCollapsibleFormatterOuputs);
    });

    it('should call onRowClick with getActions result if it is defined on click of a heading row (while passing table row data and table props to getActions result)', () => {
      const onRowClickSpy = jasmine.createSpy('onRowClickSpy');

      const someActions: IActionOptions[] = [];
      const getActionsSpy = jasmine.createSpy('getActionsSpy').and.returnValue(someActions);
      const tableProps = {
        ...tablePropsMockWithData,
        onRowClick: onRowClickSpy,
        getActions: getActionsSpy,
      };

      mountComponentWithProps(tableProps).find(TableHeadingRowConnected).first().simulate('click');

      expect(onRowClickSpy).toHaveBeenCalledTimes(1);
      expect(getActionsSpy).toHaveBeenCalledTimes(1);

      expect(onRowClickSpy).toHaveBeenCalledWith(someActions);
      expect(getActionsSpy).toHaveBeenCalledWith(_.values(tableProps.tableCompositeState.data.byId)[0], tableProps);
    });
  });
});
