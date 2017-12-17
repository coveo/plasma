import * as React from 'react';
import { tablePropsMock, tablePossibleProps } from './TableTestCommon';
import { Table } from '../Table';
import { ITableProps } from '../Table';
import { mount } from 'enzyme';
import { clearState } from '../../../utils/ReduxUtils';
import { IReactVaporState } from '../../../ReactVapor';
import { TestUtils } from '../../../utils/TestUtils';
import { Store, Provider } from 'react-redux';
import { DEFAULT_TABLE_DATA, TableSortingOrder } from '../TableConstants';

describe('<Table />', () => {
  let store: Store<IReactVaporState>;

  beforeEach(() => {
    store = TestUtils.buildStore();
  });

  afterEach(() => {
    store.dispatch(clearState());
  });

  const mountComponentWithProps = (props: ITableProps) => {
    return mount(
      <Provider store={store}>
        <Table {...props} />
      </Provider>,
      { attachTo: document.getElementById('App') },
    );
  };

  describe('on instantiation', () => {
    it('should set isInitialLoad to true if initialTableData equals DEFAULT_TABLE_DATA', () => {
      expect((new Table(tablePropsMock) as any).isInitialLoad).toBe(true);
    });

    it('should set isInitialLoad to false if initialTableData does not equal DEFAULT_TABLE_DATA', () => {
      const tablePropsWithoutDefaultInitialData = {
        ...tablePropsMock,
        initialTableData: { ...DEFAULT_TABLE_DATA, totalPages: 10, totalEntries: 1000 },
      };
      expect((new Table(tablePropsWithoutDefaultInitialData) as any).isInitialLoad).toBe(false);
    });

    it('should set updateCountForLoadingBehavior to 0', () => {
      expect((new Table(tablePropsMock) as any).updateCountForLoadingBehavior).toBe(0);
    });
  });

  describe('render', () => {
    it('should render without error in different scenarios', () => {
      tablePossibleProps.forEach((props: ITableProps) => {
        expect(() => mountComponentWithProps(props)).not.toThrow();
      });
    });
  });

  describe('after render', () => {
    it('should call onDidMount on componentDidMount if it is defined', () => {
      const onDidMountSpy = jasmine.createSpy('onDidMountSpy');

      mountComponentWithProps({ ...tablePropsMock, onDidMount: onDidMountSpy });

      expect(onDidMountSpy).toHaveBeenCalledTimes(1);
    });

    it('should call onUnmount on componentWillUnmount if it is defined', () => {
      const onUnmountSpy = jasmine.createSpy('onUnmountSpy');

      mountComponentWithProps({ ...tablePropsMock, onUnmount: onUnmountSpy }).unmount();

      expect(onUnmountSpy).toHaveBeenCalledTimes(1);
    });

    it('should set isInitialLoad to false after three component updates', () => {
      const tableAsAny = new Table(tablePropsMock) as any;
      tableAsAny.componentDidUpdate();
      expect(tableAsAny.isInitialLoad).toBe(true);

      tableAsAny.componentDidUpdate();
      expect(tableAsAny.isInitialLoad).toBe(true);

      tableAsAny.componentDidUpdate();
      expect(tableAsAny.isInitialLoad).toBe(false);
    });

    describe('componentWillReceiveProps', () => {
      let tableAsAny: any;
      let onModifyDataSpy: jasmine.Spy;
      let tableProps: any;

      beforeEach(() => {
        onModifyDataSpy = jasmine.createSpy('onModifyDataSpy');
        tableProps = { ...tablePropsMock, onModifyData: onModifyDataSpy };
        tableAsAny = new Table(tableProps);
      });

      it('should not call onMofidyData if next tableCompositeState is identical to the previous', () => {
        tableAsAny.componentWillReceiveProps(tableProps);
        expect(onModifyDataSpy).not.toHaveBeenCalled();
      });

      it('should call onMofidyData with shouldResetPage true if next tableCompositeState is not identical to the previous and change is not in per page or pagination', () => {
        const nextProps = {
          ...tableProps,
          tableCompositeState: {
            ...tableProps.tableCompositeState,
            filter: 'someone just searched for something in the table',
          },
        };
        tableAsAny.componentWillReceiveProps(nextProps);

        expect(onModifyDataSpy).toHaveBeenCalledTimes(1);
        const shouldResetPage = true;
        expect(onModifyDataSpy).toHaveBeenCalledWith(shouldResetPage, nextProps.tableCompositeState, tableProps.tableCompositeState);
      });

      it('should call onMofidyData with shouldResetPage false if next tableCompositeState is not identical to the previous and change is in pagination', () => {
        const nextProps = {
          ...tableProps,
          tableCompositeState: {
            ...tableProps.tableCompositeState,
            page: 3,
          },
        };
        tableAsAny.componentWillReceiveProps(nextProps);

        expect(onModifyDataSpy).toHaveBeenCalledTimes(1);
        const shouldResetPage = false;
        expect(onModifyDataSpy).toHaveBeenCalledWith(shouldResetPage, nextProps.tableCompositeState, tableProps.tableCompositeState);
      });

      it('should call onMofidyData with shouldResetPage false if next tableCompositeState is not identical to the previous and change is in perPage', () => {
        const nextProps = {
          ...tableProps,
          tableCompositeState: {
            ...tableProps.tableCompositeState,
            perPage: 20,
          },
        };
        tableAsAny.componentWillReceiveProps(nextProps);

        expect(onModifyDataSpy).toHaveBeenCalledTimes(1);
        const shouldResetPage = false;
        expect(onModifyDataSpy).toHaveBeenCalledWith(shouldResetPage, nextProps.tableCompositeState, tableProps.tableCompositeState);
      });

      describe('hasTableCompositeStateChanged', () => {
        let tableAsAny: any;
        let tableProps: any;

        beforeEach(() => {
          tableProps = { ...tablePropsMock, onModifyData: onModifyDataSpy };
          tableAsAny = new Table(tableProps);
        });

        it('should return false if nothing changed in the tableCompositeState', () => {
          expect(tableAsAny.hasTableCompositeStateChanged(tableProps.tableCompositeState, tableProps.tableCompositeState))
            .toBe(false);
        });

        it('should return true if the filter has changed and nothing else has', () => {
          const nextTableCompositeState = {
            ...tableProps.tableCompositeState,
            filter: 'someone just searched for something in the table',
          };
          expect(tableAsAny.hasTableCompositeStateChanged(tableProps.tableCompositeState, nextTableCompositeState))
            .toBe(true);
        });

        it('should return true if the perPage has changed and nothing else has', () => {
          const nextTableCompositeState = {
            ...tableProps.tableCompositeState,
            perPage: 50,
          };
          expect(tableAsAny.hasTableCompositeStateChanged(tableProps.tableCompositeState, nextTableCompositeState))
            .toBe(true);
        });

        it('should return true if the page has changed and nothing else has', () => {
          const nextTableCompositeState = {
            ...tableProps.tableCompositeState,
            page: 3,
          };
          expect(tableAsAny.hasTableCompositeStateChanged(tableProps.tableCompositeState, nextTableCompositeState))
            .toBe(true);
        });

        it('should return true if the sort attribute has changed and nothing else has', () => {
          const nextTableCompositeState = {
            ...tableProps.tableCompositeState,
            sortState: {
              ...tableProps.tableCompositeState.sortState,
              attribute: 'userName',
            },
          };
          expect(tableAsAny.hasTableCompositeStateChanged(tableProps.tableCompositeState, nextTableCompositeState))
            .toBe(true);
        });

        it('should return true if the sort order has changed and nothing else has', () => {
          const nextTableCompositeState = {
            ...tableProps.tableCompositeState,
            sortState: {
              ...tableProps.tableCompositeState.sortState,
              order: TableSortingOrder.ASCENDING,
            },
          };
          expect(tableAsAny.hasTableCompositeStateChanged(tableProps.tableCompositeState, nextTableCompositeState))
            .toBe(true);
        });

        it('should return true if the predicates were empty and next state has one', () => {
          const nextTableCompositeState = {
            ...tableProps.tableCompositeState,
            predicates: {
              anyWouldDo: 'anyWouldDo'
            },
          };
          expect(tableAsAny.hasTableCompositeStateChanged(tableProps.tableCompositeState, nextTableCompositeState))
            .toBe(true);
        });

        it('should return true if predicates were not empty but one of the value of the predicates changed', () => {
          const tableCompositeState = {
            ...tableProps.tableCompositeState,
            predicates: {
              anyWouldDo: 'anyWouldDo'
            },
          };

          const nextTableCompositeState = {
            ...tableProps.tableCompositeState,
            predicates: {
              anyWouldDo: 'predicate value changed'
            },
          };

          expect(tableAsAny.hasTableCompositeStateChanged(tableCompositeState, nextTableCompositeState))
            .toBe(true);
        });
      });
    });
  });
});
